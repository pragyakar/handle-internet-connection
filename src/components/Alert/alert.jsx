import * as React from 'react';
import './alert.css';

const Alert = props => {
  return(
    <div className={props.type === 'success' ? 'alert-box success' : 'alert-box error'}>
      <span>{props.message}</span>
    </div>
  )
}

export default Alert;