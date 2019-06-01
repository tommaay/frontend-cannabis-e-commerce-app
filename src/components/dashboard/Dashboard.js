import React from 'react';
import { connect } from 'react-redux';
import { getAllByCategory } from '../../store/actions/productActions';
import Carousel from './Carousel';

const Dashboard = props => {
    if (props.products.length === 0) {
        return <h1>Loading...</h1>;
    } else {
        const { products, categories, getAllByCategory } = props;

        return (
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
    }
};

const mapStateToProps = state => {
    return {
        products: state.products.products,
        categories: state.products.categories,
    };
};

export default connect(
    mapStateToProps,
    { getAllByCategory }
)(Dashboard);
