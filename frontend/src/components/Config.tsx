import 'bootstrap/dist/css/bootstrap.min.css';
import './Config.css';

import React from 'react';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/bootstrap-4';
import { RJSFSchema, IconButtonProps } from '@rjsf/utils';

import { Schema } from "../global";


interface ConfigProps {
  schema: Schema;
}

function AddButton(props: IconButtonProps) {
  const { icon, iconType, ...btnProps } = props;
  return (
    <button {...btnProps}>
      {icon} <p>Add</p>
    </button>
  );
}

const log = (type: string) => console.log.bind(console, type);

const Config: React.FC<ConfigProps> = (props) => {
  const [formData, setFormData] = React.useState(null);
  const uiSchema = {
    "ui:submitButtonOptions": {
      "submitText": "save",
      "norender": false,
      "props": {
        "disabled": false,
        "className": "btn btn-dark"
      }
    }
  };

  return (
    <div className="container config">
      <div className='container'>
        <Form
          schema={props.schema as RJSFSchema}
          formData={formData}
          uiSchema={uiSchema}
          validator={validator}
          onChange={log('changed')}
          onSubmit={log('submitted')}
          onError={log('errors')}
          templates={{ ButtonTemplates: { AddButton } }}
        />
      </div>
    </div>
  );
}

export default Config;
