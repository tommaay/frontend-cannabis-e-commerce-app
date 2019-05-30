import React from 'react';
import { Card } from './style/productCard';

const ProductCard = props => {
    const { product } = props;

    return (
        <Card>
            <div className="image">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="card-details">
                <h5 className="product">{product.name}</h5>

                {product.specs.map(spec => {
                    return (
                        <>
                            <div className="spec-container" key={spec.id}>
                                <h6>{spec.size}</h6>
                                <h6>{spec.price}</h6>
                            </div>

                            <div className="add-to-cart">
                                <i class="fas fa-minus-circle" />
                                <h6>0</h6>
                                <i class="fas fa-plus-circle" />
                            </div>
                        </>
                    );
                })}
            </div>
        </Card>
    );
};

export default ProductCard;
