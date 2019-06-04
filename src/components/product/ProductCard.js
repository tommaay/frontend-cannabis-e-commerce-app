import React from 'react';
import { Card, ImgLink } from './style/productCard';
import { formatPrice } from '../../helpers/helpers';
import AddItemsModule from '../cart/AddItemsModule';

const ProductCard = props => {
    const { product } = props;
    const id = product.id;

    return (
        <Card className="product-card">
            <ImgLink to={`/products/${id}`} className="image">
                <img src={product.image} alt={product.name} />
            </ImgLink>

            <div className="card-details">
                <h5 className="product">{product.name}</h5>

                {product.specs.map(spec => {
                    return (
                        <div key={spec.id}>
                            <div className="spec-container">
                                <h6>{spec.size}</h6>
                                <h6>{formatPrice(spec.price)}</h6>
                            </div>

                            <AddItemsModule product={product} spec={spec} />
                        </div>
                    );
                })}
            </div>
        </Card>
    );
};

export default ProductCard;
