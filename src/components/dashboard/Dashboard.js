import React from 'react';
import { connect } from 'react-redux';
import { getAllByCategory } from '../../store/actions/productActions';
import Carousel from './Carousel';

const Dashboard = props => {
    const { products, categories, loading, getAllByCategory } = props;

    return loading ? (
        <h1>Loading...</h1>
    ) : (
        <div>
            {categories.map(category => {
                const name = category.name;
                const filteredProducts = getAllByCategory(products, name);

                return (
                    <Carousel
                        products={filteredProducts}
                        category={category}
                        key={category.id}
                    />
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products.products,
        categories: state.products.categories,
        loading: state.products.loading,
    };
};

export default connect(
    mapStateToProps,
    { getAllByCategory }
)(Dashboard);
