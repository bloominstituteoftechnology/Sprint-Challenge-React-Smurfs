import React from 'react';
import { TableBody, TableRow, TableCell } from '@material-ui/core';

const Smurf = props => {
  return (
    <TableBody>
      <TableRow>
        <TableCell>{props.name}</TableCell>
        <TableCell>{props.age}</TableCell>
        <TableCell>{props.height}</TableCell>
      </TableRow>
    </TableBody>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

