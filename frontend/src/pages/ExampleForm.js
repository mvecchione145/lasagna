import './ConfigEdit.css';

import Config from '../components/Config';

const schema = require('../schemas/songs.json')


function ConfigEdit() {
  return (
    <div className='container'>
      <Config schema={schema}/>
    </div>
  );
}

export default ConfigEdit;
