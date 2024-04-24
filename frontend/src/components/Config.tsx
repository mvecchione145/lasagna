import React from 'react';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';
import AddButton from './../components/Button';
import { RJSFSchema } from '@rjsf/utils';
import schema from './../schema/schema.json'


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
  let [formData, setFormData] = React.useState({});
  const handleSubmit = () => {
    if (formData) {
      log(formData.toString());
    } else {
      log('nothing');
    };
  };
  const handleChange = () => {
    log('change');
  };

  return (
    <Form
      schema={schema as RJSFSchema}
      // formData={formData}
      uiSchema={uiSchema}
      validator={validator}
      onChange={handleChange}
      onSubmit={handleSubmit}
      onError={log('errors')}
      templates={{ ButtonTemplates: { AddButton } }}
    />
  );
};

export default FormComponent;