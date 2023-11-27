import './ConfigEdit.css';

import Config from '../components/Config';


function ConfigEdit(props) {
  return (
    <div className='container'>
      <Config schema={props.schema}/>
    </div>
  );
}

export default ConfigEdit;
