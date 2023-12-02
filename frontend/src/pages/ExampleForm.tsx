import React from 'react';
import Config from '../components/Config';
import exampleSchema from "../schemas/songs.json";

import { Schema } from "../global";

import './ConfigEdit.css';


function ConfigEdit() {

  return (
    <div className='container'>
      <Config schema={exampleSchema as unknown as Schema} />
    </div>
  );
}

export default ConfigEdit;
