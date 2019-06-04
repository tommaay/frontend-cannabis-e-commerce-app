import React from 'react';

import { formatPrice } from '../../helpers/helpers';
import styled from 'styled-components';

const TotalContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    .total-box {
        width: 50%;
        border: 1px solid red;
    }
`;

const CartTotal = props => {
    const { cartItems, itemsInCart, subTotal } = props;

    return (
        <TotalContainer>
            <div className="total-box">
                <h2>Cart Total</h2>
                <h3>
                    Subtotal:{' '}
                    {subTotal > 0 ? formatPrice(subTotal) : formatPrice(0)}
                </h3>
            </div>
        </TotalContainer>
    );
};

export default CartTotal;
