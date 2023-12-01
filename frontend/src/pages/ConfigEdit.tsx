import React from 'react';
import Config from '../components/Config.tsx';

import './ConfigEdit.css';


interface Schema { }

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
