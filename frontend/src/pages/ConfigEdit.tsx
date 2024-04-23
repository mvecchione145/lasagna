import React from 'react';

import renderForm from './../components/Config';

import './ConfigEdit.css';


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


const ConfigEdit = () => {
  const [formData, setFormData] = React.useState(null);
  
  renderForm(formData, uiSchema, log('change'), log('submit'), log('error'));
  return (
    <div className='container'>
      <div id='form'>
      </div>
    </div>
  );
};

export default ConfigEdit;
