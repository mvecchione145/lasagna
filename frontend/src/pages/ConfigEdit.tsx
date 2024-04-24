import React, { useState } from 'react';
import validator from '@rjsf/validator-ajv8';
import { withTheme } from '@rjsf/core';
import schema from './../schema/schema.json';
import { RJSFSchema } from '@rjsf/utils';
import AddButton from '../components/Button';
import { Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4';

import './ConfigEdit.css';

const Form = withTheme(Bootstrap4Theme);

const log = (type: any) => console.log.bind(console, type);

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

const ConfigEdit = () => {
  const [formData, setFormData] = useState(null);

  return (
    <div className='container'>
      <Form
        schema={schema as RJSFSchema}
        formData={formData}
        uiSchema={uiSchema}
        validator={validator}
        onChange={log('changed')}
        onSubmit={log('submitted')}
        onError={log('errors')}
        // templates={AddButton}
      />
    </div>
  );
};

export default ConfigEdit;
