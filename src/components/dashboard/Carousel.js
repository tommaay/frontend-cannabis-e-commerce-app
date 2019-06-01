import React, { Component } from 'react';
import ProductCard from '../product/ProductCard';

import { CarouselContainer } from './style/carousel';

class Carousel extends Component {
    render() {
        return (
            <CarouselContainer>
                <h2 className="category-name">{this.props.category.name}</h2>
                <p className="category-desc">
                    {this.props.category.description}
                </p>

                <div className="carousel">
                    {this.props.products.map(product => {
                        return (
                            <ProductCard product={product} key={product.id} />
                        );
                    })}
                </div>
            </CarouselContainer>
        );
    }
}

export default Carousel;
