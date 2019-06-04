import React from 'react';
import AddItemModule from './AddItemsModule';
import { formatPrice } from '../../helpers/helpers';
import { connect } from 'react-redux';
import { removeProduct } from '../../store/actions/cartActions';

const CartItem = props => {
    const { item, itemsInCart, removeProduct } = props;

    return (
        <div className="cart-item">
            <div className="item-desc">
                <img src={item.image} alt={item.name} />

                <div className="item-spec">
                    <h5>{item.name}</h5>
                    <p>- {item.specs.size}</p>
                </div>
            </div>

            <div className="price">
                <h6>{formatPrice(item.specs.price)}</h6>

                <AddItemModule product={item} spec={item.specs} />
            </div>

            <div className="subtotal">
                <h5>
                    {formatPrice(item.specs.price * itemsInCart[item.specs.id])}
                </h5>
            </div>

            <i
                className="fas fa-times"
                onClick={() => removeProduct(item.specs.id)}
            />
        </div>
    );
};

export default connect(
    null,
    { removeProduct }
)(CartItem);
