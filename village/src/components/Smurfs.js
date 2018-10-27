import React, { Component } from 'react';
import { Paper, Table, TableRow, TableHead, TableCell } from '@material-ui/core';
import styled from 'styled-components';

import Smurf from './Smurf';

const StyledPaper = styled(Paper)`
  width: 75%;
  padding: 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledTableHead = styled(TableHead)`
  background-color: dodgerblue;
`;

const StyledTableCell = styled(TableCell)`
  text-transform: uppercase;
  color: white !important;
`;

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <StyledDiv>
          <StyledPaper>
            <Table>
              <StyledTableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Age</StyledTableCell>
                  <StyledTableCell>Height</StyledTableCell>
                </TableRow>
              </StyledTableHead>    
                {this.props.smurfs.map(smurf => {
                  return (
                    <Smurf
                      name={smurf.name}
                      id={smurf.id}
                      age={smurf.age}
                      height={smurf.height}
                      key={smurf.id}
                  />
                  );
                })}
            </Table>
          </StyledPaper>
        </StyledDiv>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
