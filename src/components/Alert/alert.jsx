import * as React from 'react';
import './alert.css';

const Alert = props => {
  return(
    <div className={`alert-box ${props.type}`}>
      <span>{props.message}</span>
    </div>
  )
}

export default Alert;