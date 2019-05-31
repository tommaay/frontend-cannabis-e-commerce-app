import React from 'react';
import { connect } from 'react-redux';
import { getAllByCategory } from '../../store/actions/productActions';
import ProductCard from '../dashboard/ProductCard';
import { ProductsContainer } from './style/products';

const ProductsByCategory = props => {
    if (props.products.length === 0) {
        return <h1>Loading...</h1>;
    } else {
        const { products, getAllByCategory } = props;
        const category = props.match.params.product;
        const productsByCategory = getAllByCategory(products, category);

        return (
            <ProductsContainer>
                <h1 className="title">{productsByCategory[0].category.name}</h1>
                <h6 className="description">
                    {productsByCategory[0].category.description}
                </h6>

                <div className="products-container">
                    {productsByCategory.map(product => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            </ProductsContainer>
        );
    }
};

const mapStateToProps = state => {
    return {
        products: state.products.products,
    };
};

export default connect(
    mapStateToProps,
    { getAllByCategory }
)(ProductsByCategory);
