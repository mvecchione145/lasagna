import React from 'react';
import Config from '../components/Config';

import { Schema } from '../global';

import './ConfigEdit.css';


interface ConfigEditProps {
  schema: Schema;
}

const ConfigEdit: React.FC<ConfigEditProps> = (props) => {
  return (
    <div className='container'>
      <Config schema={props.schema} />
    </div>
  );
};

export default ConfigEdit;
