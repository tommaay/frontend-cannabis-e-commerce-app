import styled from 'styled-components';
import { colors, text } from './colors';

export const Button = styled.button`
    padding: 15px 30px;
    background: ${colors.main};
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 50px;
    letter-spacing: 2px;
    cursor: pointer;
`;
