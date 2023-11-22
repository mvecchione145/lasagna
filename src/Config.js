// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './Config.css';

import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/bootstrap-4';


const formSchema = require("./form/schema.json");
const log = (type) => console.log.bind(console, type);

function Config() {
  return (
    <div className="container Config">
      <div className='container'>
      <Form
        schema={formSchema}
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
