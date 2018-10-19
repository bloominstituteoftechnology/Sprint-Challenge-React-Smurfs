import styled, { css } from 'styled-components';

export const StyledInput = styled.input`
    outline: none;
    border: none;
    margin: 10px 10px;
    height: 40px;
    width: 180px;
    padding: 0 10px;
    font-size: 14px;
    line-height: 40px;
    border: solid 1px #dbdbdb;
    border-radius: 6px;
    color: #262626;
`;

export const StyledButton = styled.button`
    outline: none;
    height: 45px;
    width: 140px;
    border: none;
    border: 1px solid #e6e6e6;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    color: #3897f0;
    ${props => !props.enabled && css`color: rgba(56,151,240, 0.4); cursor: not-allowed`};
`;