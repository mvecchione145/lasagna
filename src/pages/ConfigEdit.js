// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './ConfigEdit.css';

import Config from '../modules/Config';


function ConfigEdit(props) {
  return (
    <div className='container'>
      <Config schema={props.schema}/>
    </div>
  );
}

export default ConfigEdit;
