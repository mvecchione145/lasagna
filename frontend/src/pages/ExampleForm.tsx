import React from 'react';
import Config from '../components/Config.tsx';
import exampleSchema from "../schemas/songs.json";

import './ConfigEdit.css';


function ConfigEdit() {
  return (
    <div className='container'>
      <Config schema={exampleSchema} />
    </div>
  );
}

export default ConfigEdit;
