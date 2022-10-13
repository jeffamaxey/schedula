import {Form as BaseForm} from "@rjsf/mui";
import ReactDOM from 'react-dom/client'
import validator from "@rjsf/validator-ajv6";
import React, {useState, useEffect} from 'react';
import {
    ArrayField,
    ObjectField
} from "./components/layout";
import ErrorList from "./components/error"
import {JSONUpload, JSONExport} from "./components/io";
import {
    Backdrop,
    CircularProgress,
    Alert,
    AlertTitle,
    Modal
} from '@mui/material';
import hash from 'object-hash'


const templates = {ErrorListTemplate: ErrorList};
const fields = {
    ArrayField,
    ObjectField,
    upload: JSONUpload,
    export: JSONExport
};


async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        crossDomain: true,
        //mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            //'Access-Control-Allow-Origin': '*'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


function Form({schema, uiSchema = {}, url = '/', name = "form", ...props}) {
    const [spinner, setSpinner] = useState(true);
    const [formData, setFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const formatData = (data) => {
        data = Object.assign({}, data);
        delete data.hash;
        data.hash = hash(data)
        return data
    }
    const onSubmit = ({formData}, e) => {
        e.preventDefault();
        setSpinner(true)
        postData(url, formData.input).then((data) => {
            setFormData(Object.assign({input: formData.input}, data))
        }).catch(error => {
            setFormData(Object.assign({input: formData.input}, {error: error.message}))
        }).finally((data) => {
            setSpinner(false)
        });
    }
    const onChange = ({formData, errors}) => {
        if (!formData.hash) {
            formData = formatData(formData)
        }
        if (formData.hasOwnProperty('return')) {
            let hasReturn = !(typeof (formData.return) === 'object' ? Object.keys(formData.return).length === 0 : undefined === formData.return);
            if (hasReturn && formData.hash !== formatData(formData).hash) {
                delete formData.return;
                delete formData.hash;
            }
        }

        if (formData.hasOwnProperty('error') && typeof (formData.error) === 'string') {
            let error = formData.error;
            delete formData.error;
            setErrorMessage(error)
        }
        setFormData(formData)
    }
    useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
    }, []);
    return (
        <div id={name} className="App">
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
                open={spinner}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
            <BaseForm key={name + '-Form'}
                      id={name + '-Form'}
                      schema={schema}
                      uiSchema={uiSchema}
                      formData={formData}
                      fields={fields}
                      validator={validator}
                      templates={templates}
                      showErrorList={true}
                      omitExtraData={true}
                      liveValidate={true}
                      onChange={onChange}
                      onSubmit={onSubmit}
                      {...props}
            />
            <Modal
                key={name + "-error-modal"}
                open={errorMessage !== ""}
                onClose={() => {
                    setErrorMessage("")
                }}
                aria-labelledby="error-modal-title"
                aria-describedby="error-modal-description"
            >
                <Alert variant="outlined" severity="error" sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    minWidth: 400,
                    p: 4, bgcolor: 'background.paper',
                }} onClose={() => {
                    setErrorMessage("")
                }}>
                    <AlertTitle>Error</AlertTitle>
                    {errorMessage}
                </Alert>

            </Modal>
        </div>
    );
}

async function renderForm({
                              element,
                              schema,
                              uiSchema,
                              url = '/',
                              name = "form", ...props
                          }) {
    const root = ReactDOM.createRoot(element);
    root.render(
        <React.StrictMode>
            <Form schema={schema} uiSchema={uiSchema}
                  name={name}
                  url={url} {...props}/>
        </React.StrictMode>
    );
}

export {renderForm, Form as default};

