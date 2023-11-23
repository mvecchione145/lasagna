// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './Config.css';

import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/bootstrap-4';

const log = (type) => console.log.bind(console, type);

function Config(props) {
  return (
    <div className="container config">
      <div className='container'>
      <Form
        schema={props.schema}
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
