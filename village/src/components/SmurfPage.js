import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

const Main = styled.main`
background: lightcoral;
`

const SmurfPage = (props) => {
    return (
        <Main>
        
        </Main>
    )

}
export default SmurfPage

SmurfPage.propTypes = {
    smurfs: Proptypes.array
}