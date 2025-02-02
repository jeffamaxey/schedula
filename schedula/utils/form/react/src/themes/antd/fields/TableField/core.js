import React from 'react';
import {Table, Popconfirm, Tooltip, Button, Space, Upload, theme} from 'antd';
import {getUiOptions, getTemplate} from "@rjsf/utils";
import {ConfigConsumer} from "antd/lib/config-provider/context";
import classNames from "classnames";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import './TableField.css'
import {CSVLink} from "react-csv"
import {
    UploadOutlined,
    DownloadOutlined,
    PlusOutlined,
    EditOutlined,
    UpOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import Papa from "papaparse";
import isObject from "lodash/isObject";
import get from "lodash/get";
import has from "lodash/has";
import {useLocaleStore} from "../../models/locale";
import ArrayField from "../../../../core/fields/ArrayField";

const {useToken} = theme;

function keyedToPlainFormData(keyedFormData) {
    if (Array.isArray(keyedFormData)) {
        return keyedFormData.map((keyedItem) => keyedItem.item);
    }
    return [];
}

export function Store({children}) {
    const {getLocale} = useLocaleStore()
    return children({getLocale})
}

export default class TableField extends ArrayField {
    constructor(props) {
        super(props);
        this.state.pagination = {
            current: 1,
            pageSize: 10,
            showQuickJumper: true,
            hideOnSinglePage: true
        }
    }

    renderNormalArray() {
        return <Store>{({getLocale}) => {
            const locale = getLocale('TableField')
            const {
                schema,
                uiSchema = {},
                errorSchema,
                idSchema,
                name,
                disabled = false,
                readonly = false,
                autofocus = false,
                required = false,
                registry: registry_,
                onBlur,
                onFocus,
                idPrefix,
                idSeparator = "_",
                rawErrors,
                hideError
            } = this.props;
            const {fields, formContext: formContext_, schemaUtils} = registry_;
            const formContext = {...formContext_, parent: this}
            const registry = {...registry_, formContext}
            const {form} = formContext
            const {SchemaField} = fields
            const uiOptions = getUiOptions(uiSchema);
            const {
                columns,
                rows = {},
                description,
                title = schema.title === undefined ? name : schema.title,
                removable = true,
                filename = name,
                expandable = false,
                uploadable = true,
                downloadable = true,
                removeEmpty = false,
                summary: rowSummary = null,
                ...props
            } = uiOptions;
            const _schemaItems = schema.items;
            const formData = keyedToPlainFormData(this.state.keyedFormData);
            const canAdd = this.canAddItem(formData);
            const availableKeys = new Set(formData.reduce((a, v) => [...a, ...Object.keys(v)], []))
            const tableColumns = columns.filter((column) => (
                !removeEmpty || column.render || availableKeys.has(column.dataIndex) || formData.some(d => has(d, column.dataIndex.replace('/', '.')))
            )).map((column) => ({
                key: column.dataIndex,
                title: get(_schemaItems, ['properties', column.dataIndex, 'title']),
                ...column,
                render: (text, record, index) => {
                    const {pagination, keyedFormData} = this.state
                    index = index + (pagination.current - 1) * pagination.pageSize
                    if (keyedFormData[index] === undefined)
                        return null
                    const {item} = keyedFormData[index];
                    const itemCast = item;
                    const itemSchema = schemaUtils.retrieveSchema(_schemaItems, itemCast);
                    const itemErrorSchema = errorSchema ? (errorSchema[index]) : undefined;
                    const itemIdPrefix = idSchema.$id + idSeparator + index;
                    const itemIdSchema = schemaUtils.toIdSchema(
                        itemSchema,
                        itemIdPrefix,
                        itemCast,
                        `${index}-${idPrefix}`,
                        idSeparator
                    );
                    const itemFormContext = {
                        ...formContext,
                        arrayItemIndex: index
                    }
                    const itemRegistry = {
                        ...registry,
                        formContext: itemFormContext
                    }
                    const {rows: colRows = {}} = column
                    const field = {...column, ...rows[String(index)], ...colRows[String(index)]}
                    return <SchemaField
                        key={`${name}-${index}`}
                        name={name && `${name}-${field.dataIndex}-${index}`}
                        index={index}
                        schema={itemSchema}
                        uiSchema={{
                            ...uiSchema.items,
                            "ui:layout": {
                                "path": field.dataIndex,
                                "uiSchema": {
                                    "ui:label": '',
                                    "ui:onlyChildren": true,
                                    "ui:disabled": disabled || !!expandable,
                                    "ui:readonly": readonly || !!expandable,
                                    ...field.uiSchema
                                }
                            },
                            "ui:onlyChildren": true
                        }}
                        formData={itemCast}
                        formContext={itemFormContext}
                        errorSchema={itemErrorSchema}
                        idPrefix={`${index}-${idPrefix}`}
                        idSeparator={idSeparator}
                        idSchema={itemIdSchema}
                        required={this.isItemRequired(itemSchema)}
                        onChange={this.onChangeForIndex(index)}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        registry={itemRegistry}
                        disabled={disabled}
                        readonly={readonly}
                        hideError={hideError}
                        autofocus={autofocus && index === 0}
                        rawErrors={rawErrors}
                    />
                }
            }));
            const {token} = useToken();
            if (removable && !(readonly || disabled)) {
                tableColumns.push({
                    title: () => {
                        return formData.length >= 1 ? (
                            <Popconfirm
                                title={locale.deleteAllConfirm}
                                placement="left"
                                onConfirm={(event) => {
                                    if (event) {
                                        event.preventDefault();
                                    }
                                    const {pagination} = this.state;
                                    const {onChange} = this.props;
                                    const newKeyedFormData = this.state.keyedFormData.filter((v, index) => {
                                        const {removable: removableRow = true} = rows[String(index)] || {}
                                        return !removableRow
                                    })

                                    this.setState({
                                            ...this.state,
                                            keyedFormData: newKeyedFormData,
                                            updatedKeyedFormData: true,
                                            pagination: {
                                                ...pagination,
                                                current: 1
                                            }
                                        }, () => onChange(keyedToPlainFormData(newKeyedFormData), [])
                                    )
                                }}>
                                <Button danger shape="circle" ghost
                                        size={'small'}
                                        icon={<DeleteOutlined/>}/>
                            </Popconfirm>
                        ) : null
                    },
                    width: 33,
                    render: (_, record, index) => {
                        const {removable: removableRow = true} = rows[String(index)] || {}
                        return formData.length >= 1 && removableRow ? (
                            <Popconfirm
                                title={locale.deleteItemConfirm}
                                placement="left"
                                onConfirm={(event) => {
                                    const {
                                            pagination,
                                            keyedFormData
                                        } = this.state,
                                        nextLastPage = 1 + Math.floor((keyedFormData.length - 2) / pagination.pageSize)
                                    this.onDropIndexClick(
                                        index + (pagination.current - 1) * pagination.pageSize
                                    )(event)
                                    if (pagination.current > nextLastPage) {
                                        this.setState({
                                            ...this.state,
                                            pagination: {
                                                ...pagination,
                                                current: nextLastPage
                                            }
                                        })
                                    }
                                }}>
                                <Button danger shape="circle" ghost
                                        size={'small'}
                                        icon={<DeleteOutlined/>}/>
                            </Popconfirm>
                        ) : null
                    }
                })
            }
            const {labelAlign = "right", rowGutter = 24} = formContext;
            const ArrayFieldDescriptionTemplate = getTemplate("ArrayFieldDescriptionTemplate", registry, uiOptions);
            const ArrayFieldTitleTemplate = getTemplate("ArrayFieldTitleTemplate", registry, uiOptions);
            const handleTableChange = (pagination, filters, sorter) => {
                this.setState({...this.state, pagination})
            };
            const expandedRowRender = (record, index) => {
                const {pagination, keyedFormData} = this.state
                index = index + (pagination.current - 1) * pagination.pageSize
                if (keyedFormData[index] === undefined)
                    return null
                const {item} = keyedFormData[index];
                const itemCast = item;
                const itemSchema = schemaUtils.retrieveSchema(_schemaItems, itemCast);
                const itemErrorSchema = errorSchema ? (errorSchema[index]) : undefined;
                const itemIdPrefix = idSchema.$id + idSeparator + index;
                const itemIdSchema = schemaUtils.toIdSchema(
                    itemSchema,
                    itemIdPrefix,
                    itemCast,
                    `${index}-${idPrefix}`,
                    idSeparator
                );
                const itemFormContext = {...formContext, arrayItemIndex: index}
                const itemRegistry = {...registry, formContext: itemFormContext}
                return <SchemaField
                    key={`${name}-expand-${index}`}
                    name={name && `${name}-expand-${index}`}
                    index={index}
                    schema={itemSchema}
                    uiSchema={{...uiSchema.items, ...(isObject(expandable) ? expandable : {})}}
                    formData={itemCast}
                    formContext={itemFormContext}
                    errorSchema={itemErrorSchema}
                    idPrefix={idPrefix}
                    idSeparator={idSeparator}
                    idSchema={itemIdSchema}
                    required={this.isItemRequired(itemSchema)}
                    onChange={this.onChangeForIndex(index)}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    registry={itemRegistry}
                    disabled={disabled}
                    readonly={readonly}
                    hideError={hideError}
                    autofocus={autofocus && index === 0}
                    rawErrors={rawErrors}
                />
            }
            const expandIcon = ({expanded, onExpand, record}) => (
                <Button key="expand-icon" type="primary" shape="circle" ghost
                        size={'small'}
                        icon={expanded ? <UpOutlined/> : <EditOutlined/>}
                        onClick={e => onExpand(record, e)}/>
            )
            let summary;
            if (rowSummary !== null) {
                let summaryItems = form.compileFunc(rowSummary)(this)
                summary = () => (
                    <Table.Summary.Row style={{
                        backgroundColor: get(token, 'Table.colorFillQuaternary', token.colorFillQuaternary),
                        fontWeight: get(token, 'Table.fontWeightStrong', token.fontWeightStrong)
                    }}>
                        {expandable ?
                            <Table.Summary.Cell key={-1} index={-1}/> : null}
                        {tableColumns.map(({dataIndex}, index) => {
                            return <Table.Summary.Cell
                                key={index}
                                index={index}>
                                {get(summaryItems, dataIndex, null)}
                            </Table.Summary.Cell>
                        })}
                    </Table.Summary.Row>)
            }
            return <ConfigConsumer key={idSchema.$id}>
                {(configProps) => {
                    const {getPrefixCls} = configProps;
                    const prefixCls = getPrefixCls("form");
                    const labelClsBasic = `${prefixCls}-item-label`;
                    const labelColClassName = classNames(
                        labelClsBasic,
                        labelAlign === "left" && `${labelClsBasic}-left`,
                        'ant-table-label-custom'
                        //labelCol.className,
                    );
                    return (
                        <Table
                            locale={getLocale('Table')}
                            caption={
                                <Row justify="space-between"
                                     align="middle">
                                    <Col>
                                        <Row gutter={rowGutter}>
                                            {title && (
                                                <Col
                                                    className={labelColClassName}
                                                    span={24}>
                                                    <ArrayFieldTitleTemplate
                                                        idSchema={idSchema}
                                                        required={required}
                                                        title={title}
                                                        schema={schema}
                                                        uiSchema={uiSchema}
                                                        registry={registry}
                                                    />
                                                </Col>
                                            )}
                                            {(description || schema.description) && (
                                                <Col span={24}
                                                     style={{paddingBottom: "8px",}}>
                                                    <ArrayFieldDescriptionTemplate
                                                        description={description || schema.description || ""}
                                                        idSchema={idSchema}
                                                        schema={schema}
                                                        uiSchema={uiSchema}
                                                        registry={registry}
                                                    />
                                                </Col>
                                            )}
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Space.Compact
                                            block size={'small'}
                                            style={{padding: 8}}>
                                            {readonly || disabled || !uploadable ? null :
                                                <Upload
                                                    locale={getLocale('Upload')}
                                                    accept=".csv"
                                                    disabled={!!(disabled || readonly)}
                                                    beforeUpload={(file) => {
                                                        const reader = new FileReader()
                                                        reader.onload = ({target}) => {
                                                            let parsedData = Papa.parse(target.result, {header: false}).data,
                                                                header,
                                                                columnsFields = columns.map(v => v.dataIndex),
                                                                columnsHeaderNames = columns.map(v => v.title);
                                                            if (parsedData[0].every(v => columnsFields.includes(v))) {
                                                                header = parsedData[0]
                                                                parsedData = parsedData.slice(1)
                                                            } else if (parsedData[0].every(v => columnsHeaderNames.includes(v))) {
                                                                header = parsedData[0].map(v => (columns.find(e => (e.headerName === v)).field))
                                                                parsedData = parsedData.slice(1)
                                                            } else {
                                                                header = columns.map(v => (v.field))
                                                            }
                                                            this.props.onChange(parsedData.map(r => (r.reduce((res, v, i) => {
                                                                let key = header[i]
                                                                res[key] = v
                                                                return res
                                                            }, {}))))
                                                        }
                                                        reader.readAsText(file);
                                                        return Upload.LIST_IGNORE
                                                    }}>
                                                    <Tooltip
                                                        title={locale.importTooltip}
                                                        placement="bottom">
                                                        <Button
                                                            type="primary"
                                                            shape="circle"
                                                            ghost
                                                            disabled={!!(disabled || readonly)}
                                                            icon={
                                                                <UploadOutlined/>}/>
                                                    </Tooltip>
                                                </Upload>}
                                            {downloadable ? <CSVLink
                                                filename={`${filename}.csv`}
                                                data={formData}>
                                                <Tooltip
                                                    title={locale.exportTooltip}
                                                    placement="bottom">
                                                    <Button
                                                        type="primary"
                                                        shape="circle"
                                                        ghost
                                                        icon={
                                                            <DownloadOutlined/>}/>
                                                </Tooltip>
                                            </CSVLink> : null}
                                            {canAdd && !(disabled || readonly) && (
                                                <Tooltip
                                                    title={locale.addItemTooltip}
                                                    placement="bottom">
                                                    <Button
                                                        type="primary"
                                                        shape="circle"
                                                        ghost
                                                        icon={<PlusOutlined/>}
                                                        onClick={(e) => {
                                                            this.onAddClick(e)
                                                            const {
                                                                pagination,
                                                                keyedFormData
                                                            } = this.state
                                                            this.setState({
                                                                ...this.state,
                                                                pagination: {
                                                                    ...pagination,
                                                                    current: 1 + Math.floor(keyedFormData.length / pagination.pageSize)
                                                                }
                                                            })
                                                        }}/>
                                                </Tooltip>
                                            )}
                                        </Space.Compact>
                                    </Col>
                                </Row>}
                            key={idSchema.$id}
                            size="small"
                            expandable={expandable ? {
                                expandedRowRender, expandIcon
                            } : {}}
                            summary={formData.length ? summary : undefined}
                            columns={formData.length ? tableColumns : []}
                            dataSource={formData.map((data, index) => ({key: index, ...data}))}
                            pagination={this.state.pagination}
                            onChange={handleTableChange}
                            {...props}/>
                    );
                }}
            </ConfigConsumer>
        }}</Store>
    }
}
