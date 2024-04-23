import 'bootstrap/dist/css/bootstrap.min.css';
import './Config.css';

import React from 'react';
import ReactDOM from 'react-dom';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/core';
import { RJSFSchema, IconButtonProps } from '@rjsf/utils';
import schema from "./../schema/schema.json";


function AddButton(props: IconButtonProps) {
  const { icon, iconType, ...btnProps } = props;
  return (
    <button {...btnProps}>
      {icon} <p>Add</p>
    </button>
  );
}


function renderForm(formData: any, uiSchema: any, onChange: any, onSubmit: any, onError: any) {
  ReactDOM.render(
    <Form
      schema={schema as RJSFSchema}
      formData={formData}
      uiSchema={uiSchema}
      validator={validator}
      onChange={onChange}
      onSubmit={onSubmit}
      onError={onError}
      templates={{ ButtonTemplates: { AddButton } }}
    />,
    document.getElementById('form')
  );
};

export default renderForm;

//   return (
//     <Form
//       schema={schema as RJSFSchema}
//       formData={formData}
//       uiSchema={uiSchema}
//       validator={validator}
//       onChange={log('changed')}
//       onSubmit={log('submitted')}
//       onError={log('errors')}
//       templates={{ ButtonTemplates: { AddButton } }}
//     />
//   );
// }

// export default Config;
