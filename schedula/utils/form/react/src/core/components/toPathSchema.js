import get from 'lodash/get';
import set from 'lodash/set';
import find from 'lodash/find';
import has from "lodash/has"
import isEqual from "lodash/isEqual"
import {
    ALL_OF_KEY,
    ANY_OF_KEY,
    ADDITIONAL_PROPERTIES_KEY,
    DEPENDENCIES_KEY,
    ITEMS_KEY,
    NAME_KEY,
    ONE_OF_KEY,
    PROPERTIES_KEY,
    REF_KEY,
    RJSF_ADDITONAL_PROPERTIES_FLAG,
    getDiscriminatorFieldFromSchema,
    retrieveSchema
} from "@rjsf/utils"

function getFirstMatchingOption(
    validator,
    rootSchema,
    formData,
    options,
    selectedOption = -1,
    discriminatorField
) {
    // For performance, skip validating subschemas if formData is undefined. We just
    // want to get the first option in that case.
    if (formData === undefined) {
        return 0
    }
    for (let i = 0; i < options.length; i++) {
        const option = options[i]

        // If we have a discriminator field, then we will use this to make the determination
        if (
            discriminatorField &&
            has(option, [PROPERTIES_KEY, discriminatorField])
        ) {
            const value = get(formData, discriminatorField)
            const discriminator = get(
                option,
                [PROPERTIES_KEY, discriminatorField],
                {}
            )
            if (validator.isValid(discriminator, value, rootSchema)) {
                return i
            }
        } else if (option[PROPERTIES_KEY]) {
            // If the schema describes an object then we need to add slightly more
            // strict matching to the schema, because unless the schema uses the
            // "requires" keyword, an object will match the schema as long as it
            // doesn't have matching keys with a conflicting type. To do this we use an
            // "anyOf" with an array of requires. This augmentation expresses that the
            // schema should match if any of the keys in the schema are present on the
            // object and pass validation.
            //
            // Create an "anyOf" schema that requires at least one of the keys in the
            // "properties" object
            const requiresAnyOf = {
                anyOf: Object.keys(option[PROPERTIES_KEY]).map(key => ({
                    required: [key]
                }))
            }

            let augmentedSchema

            // If the "anyOf" keyword already exists, wrap the augmentation in an "allOf"
            if (option.anyOf) {
                // Create a shallow clone of the option
                const {...shallowClone} = option

                if (!shallowClone.allOf) {
                    shallowClone.allOf = []
                } else {
                    // If "allOf" already exists, shallow clone the array
                    shallowClone.allOf = shallowClone.allOf.slice()
                }

                shallowClone.allOf.push(requiresAnyOf)

                augmentedSchema = shallowClone
            } else {
                augmentedSchema = Object.assign({}, option, requiresAnyOf)
            }

            // Remove the "required" field as it's likely that not all fields have
            // been filled in yet, which will mean that the schema is not valid
            delete augmentedSchema.required

            if (validator.isValid(augmentedSchema, formData, rootSchema)) {
                return i
            }
        } else if (option.hasOwnProperty('const')) {
            if (option.const === formData) {
                return i
            }
        } else if (validator.isValid(option, formData, rootSchema)) {
            return i
        }
    }
    return 0
}


/** An internal helper that generates an `PathSchema` object for the `schema`, recursively with protection against
 * infinite recursion
 *
 * @param validator - An implementation of the `ValidatorType` interface that will be used when necessary
 * @param schema - The schema for which the `PathSchema` is desired
 * @param [name=''] - The base name for the schema
 * @param [rootSchema] - The root schema, used to primarily to look up `$ref`s
 * @param [formData] - The current formData, if any, to assist retrieving a schema
 * @param [_recurseList=[]] - The list of retrieved schemas currently being recursed, used to prevent infinite recursion
 * @returns - The `PathSchema` object for the `schema`
 */
function toPathSchemaInternal(
    validator,
    schema,
    name,
    rootSchema,
    formData,
    _recurseList = []
) {
    if (REF_KEY in schema || DEPENDENCIES_KEY in schema || ALL_OF_KEY in schema) {
        const _schema = retrieveSchema(validator, schema, rootSchema, formData)
        const sameSchemaIndex = _recurseList.findIndex(item =>
            isEqual(item, _schema)
        )
        if (sameSchemaIndex === -1) {
            return toPathSchemaInternal(
                validator,
                _schema,
                name,
                rootSchema,
                formData,
                _recurseList.concat(_schema)
            )
        }
    }

    let pathSchema = {
        [NAME_KEY]: name.replace(/^\./, "")
    }
    if (schema.cascader) {
        const _schema = formData !== undefined ? schema.cascader.reduce((s, k) => {
            let v = {properties: {}}
            v.properties[k] = {const: formData[k]}
            return find(s.oneOf, v)
        }, schema) : {properties: schema.properties};
        pathSchema = {
            ...pathSchema,
            ...toPathSchemaInternal(
                validator,
                _schema,
                name,
                rootSchema,
                formData,
                _recurseList
            )
        }
    } else if (ONE_OF_KEY in schema || ANY_OF_KEY in schema) {
        const xxxOf = ONE_OF_KEY in schema ? schema.oneOf : schema.anyOf
        const discriminator = getDiscriminatorFieldFromSchema(schema)
        const index = getFirstMatchingOption(
            validator,
            rootSchema,
            formData,
            xxxOf,
            0,
            discriminator
        )
        const _schema = xxxOf[index]
        pathSchema = {
            ...pathSchema,
            ...toPathSchemaInternal(
                validator,
                _schema,
                name,
                rootSchema,
                formData,
                _recurseList
            )
        }
    } else {
        if (
            ADDITIONAL_PROPERTIES_KEY in schema &&
            schema[ADDITIONAL_PROPERTIES_KEY] !== false
        ) {
            set(pathSchema, RJSF_ADDITONAL_PROPERTIES_FLAG, true)
        }

        if (ITEMS_KEY in schema && Array.isArray(formData)) {
            formData.forEach((element, i) => {
                pathSchema[i] = toPathSchemaInternal(
                    validator,
                    schema.items,
                    `${name}.${i}`,
                    rootSchema,
                    element,
                    _recurseList
                )
            })
        } else if (PROPERTIES_KEY in schema) {
            for (const property in schema.properties) {
                const field = get(schema, [PROPERTIES_KEY, property])
                pathSchema[property] = toPathSchemaInternal(
                    validator,
                    field,
                    `${name}.${property}`,
                    rootSchema,
                    // It's possible that formData is not an object -- this can happen if an
                    // array item has just been added, but not populated with data yet
                    get(formData, [property]),
                    _recurseList
                )
            }
        }
    }

    return pathSchema
}

/** Generates an `PathSchema` object for the `schema`, recursively
 *
 * @param validator - An implementation of the `ValidatorType` interface that will be used when necessary
 * @param schema - The schema for which the `PathSchema` is desired
 * @param [name=''] - The base name for the schema
 * @param [rootSchema] - The root schema, used to primarily to look up `$ref`s
 * @param [formData] - The current formData, if any, to assist retrieving a schema
 * @returns - The `PathSchema` object for the `schema`
 */
export default function toPathSchema(
    validator,
    schema,
    name = "",
    rootSchema,
    formData
) {
    return toPathSchemaInternal(validator, schema, name, rootSchema, formData)
}