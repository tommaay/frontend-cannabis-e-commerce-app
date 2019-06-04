import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/actions/cartActions';

import styled from 'styled-components';
import { colors, text } from '../../styles/colors';

const AddItemContainer = styled.div`
    display: flex;
    justify-content: center;

    h6 {
        margin: 0 15px;
    }

    i {
        cursor: pointer;
    }

    .fa-minus-circle {
        color: ${text.light};
    }

    .fa-plus-circle {
        color: ${colors.main};
    }
`;

const AddItemsModule = props => {
    const { addToCart, removeFromCart, itemsInCart, product, spec } = props;

    return (
        <AddItemContainer>
            <i
                className="fas fa-minus-circle"
                onClick={() => removeFromCart(spec)}
            />

            <h6>{itemsInCart[`${spec.id}`] ? itemsInCart[`${spec.id}`] : 0}</h6>

            <i
                className="fas fa-plus-circle"
                onClick={() => addToCart(product, spec)}
            />
        </AddItemContainer>
    );
};

const mapStateToProps = state => {
    return {
        itemsInCart: state.cart.itemsInCart,
        subtotal: state.cart.subtotal,
    };
};

export default connect(
    mapStateToProps,
    { addToCart, removeFromCart }
)(AddItemsModule);
