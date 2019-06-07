import React from 'react';
import ProductCard from '../product/ProductCard';

// Style
import { CarouselContainer } from './style/carousel';
import { SeeAllBtn } from '../../styles/buttons';

const Carousel = props => {
    return (
        <CarouselContainer>
            <div className="justify">
                <h2 className="category-name">{props.category.name}</h2>
                <SeeAllBtn to={`/products/category/${props.url}`}>
                    See All
                </SeeAllBtn>
            </div>

            <p className="category-desc">{props.category.description}</p>

            <div className="carousel">
                {props.products.map(product => {
                    return <ProductCard product={product} key={product.id} />;
                })}
            </div>
        </CarouselContainer>
    );
};

export default Carousel;
