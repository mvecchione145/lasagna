import React from 'react';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';
import AddButton from './../components/Button';
import { RJSFSchema } from '@rjsf/utils';
import schema from './../schema/schema.json'
import ReactDOM from "react-dom/client";


const log = (type: string) => console.log.bind(console, type);
const uiSchema = {
  "ui:submitButtonOptions": {
    "submitText": "Save",
    "norender": false,
    "props": {
      "disabled": false,
      "className": "btn btn-dark"
    }
  }
};


function FormComponent() {
  // const [formData, setFormData] = React.useState(null);
  const rootElement = document.getElementById('form');
  if (!rootElement) throw new Error('Failed to find the root element');
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <Form
      schema={schema as RJSFSchema}
      // formData={formData}
      uiSchema={uiSchema}
      validator={validator}
      onChange={log('changed')}
      onSubmit={log('submitted')}
      onError={log('errors')}
      templates={{ ButtonTemplates: { AddButton } }}
    />
  );
};

export default FormComponent;