import React from 'react';
import { connect } from 'react-redux';
import { getAllByCategoryParams } from '../../store/actions/productActions';
import ProductCard from './ProductCard';
import { ProductsContainer } from './style/products';

const ProductsByCategory = props => {
    if (props.products.length === 0) {
        return <h1>Loading...</h1>;
    } else {
        const { products, getAllByCategoryParams } = props;
        const category = props.match.params.category;
        const filteredProducts = getAllByCategoryParams(products, category);

        return (
            <ProductsContainer>
                <h1 className="title">{filteredProducts[0].category.name}</h1>
                <h6 className="description">
                    {filteredProducts[0].category.description}
                </h6>

                <div className="products-container">
                    {filteredProducts.map(product => (
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
    { getAllByCategoryParams }
)(ProductsByCategory);
