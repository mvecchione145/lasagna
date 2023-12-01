// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './Config.css';

import React from 'react';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/bootstrap-4';

// Define the shape of the expected schema prop
interface Schema {
  // Add the expected properties of the schema here
}

// Define the props expected by Config
interface ConfigProps {
  schema: Schema;
}

const log = (type: string) => console.log.bind(console, type);

const Config: React.FC<ConfigProps> = (props) => {
  // Define uiSchema with custom class for the submit button
  const uiSchema = {
    submit: {
      "classNames": "btn-dark"
    }
  };

  return (
    <div className="container config">
      <div className='container'>
        <Form
          schema={props.schema}
          uiSchema={uiSchema} // Pass the uiSchema to the Form
          validator={validator}
          onChange={log('changed')}
          onSubmit={log('submitted')}
          onError={log('errors')}
        />
      </div>
    </div>
  );
}

export default Config;
