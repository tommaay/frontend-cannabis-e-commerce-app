import React from 'react';

const Carousel = props => {
    return (
        <div>
            {props.products.map(product => {
                <h1>{product.name}</h1>;
            })}
        </div>
    );
};

export default Carousel;
