import styled from 'styled-components';
import { colors } from './colors';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

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

export const ClearBtn = styled(Button)`
    padding: 6px 10px;
    background: crimson;
    font-size: 14px;
`;

export const LogintBtn = styled(Link)`
    padding: 15px 30px;
    background: ${colors.main};
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 50px;
    letter-spacing: 2px;
    cursor: pointer;
`;

export const CheckoutBtn = styled(StripeCheckout)`
    background: ${colors.third};
`;

export const SaveBtn = styled(Button)`
    padding: 10px 20px;
    background: ${colors.third};
`;
