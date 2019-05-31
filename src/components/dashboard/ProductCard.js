import React from 'react';
import { Card } from './style/productCard';

const ProductCard = props => {
    const { product } = props;

    return (
        <Card className="product-card">
            <div className="image">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="card-details">
                <h5 className="product">{product.name}</h5>

                {product.specs.map(spec => {
                    return (
                        <div key={spec.id}>
                            <div className="spec-container">
                                <h6>{spec.size}</h6>
                                <h6>{spec.price}</h6>
                            </div>

                            <div className="add-to-cart">
                                <i className="fas fa-minus-circle" />
                                <h6>0</h6>
                                <i className="fas fa-plus-circle" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
};

export default ProductCard;
