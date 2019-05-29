import React from 'react';
import { Card } from './style/productCard';

const ProductCard = props => {
    const { product } = props;

    return (
        <Card>
            <div className="image">
                <img src={product.image} alt={product.name} />
            </div>
            <h4>{product.name}</h4>

            {product.specs.map(spec => {
                return (
                    <div className="spec-container" key={spec.id}>
                        <h6>{spec.size}</h6>
                        <h6>{spec.price}</h6>
                    </div>
                );
            })}
        </Card>
    );
};

export default ProductCard;
