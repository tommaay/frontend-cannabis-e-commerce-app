import React, { Component } from 'react';
import ProductCard from './ProductCard';

import { CarouselContainer } from './style/carousel';

class Carousel extends Component {
    render() {
        return (
            <CarouselContainer>
                {this.props.products.map(product => {
                    return <ProductCard product={product} key={product.id} />;
                })}
            </CarouselContainer>
        );
    }
}

export default Carousel;
