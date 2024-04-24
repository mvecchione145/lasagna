import 'bootstrap/dist/css/bootstrap.min.css';
import './Config.css';

import { IconButtonProps } from '@rjsf/utils';


function AddButton(props: IconButtonProps) {
  const { icon, iconType, ...btnProps } = props;
  return (
    <button {...btnProps}>
      {icon} <p>Add</p>
    </button>
  );
}

export default AddButton;