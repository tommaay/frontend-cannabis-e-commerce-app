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
    transition: 0.2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 10px -5px black;
    }

    &:active {
        transform: translateY(0);
    }
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
    transition: 0.2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 10px -5px black;
        text-decoration: none;
    }

    &:active {
        transform: translateY(0);
    }
`;

export const CheckoutBtn = styled(StripeCheckout)`
    background: ${colors.third};
`;

export const SaveBtn = styled(Button)`
    padding: 10px 20px;
    background: ${colors.third};
`;

export const SeeAllBtn = styled(Link)`
    padding: 8px 15px;
    background: ${colors.main};
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 50px;
    letter-spacing: 2px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 0 10px -5px black;
        text-decoration: none;
        color: white;
    }

    &:active {
        transform: translateY(0);
    }
`;
