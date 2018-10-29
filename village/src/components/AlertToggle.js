import React from 'react';
import { SmurfAlert } from './SmurfAlert'


function AlertToggle(props)  {
  if(props.smurfAlert) {
    return <SmurfAlert classname='smurfAlert'/>
  } else {
    return null
  }
}

export default AlertToggle;