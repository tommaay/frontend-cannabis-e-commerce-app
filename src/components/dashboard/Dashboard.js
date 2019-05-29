import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/productActions';
import Carousel from './Carousel';

class Dashboard extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    filterProducts = id => {
        return this.props.products.filter(
            product => parseInt(product.category) === parseInt(id)
        );
    };

    render() {
        return this.props.loading ? (
            <h1>Loading...</h1>
        ) : (
            <div>
                {this.props.categories.map(category => {
                    const id = category.id;
                    const filteredProducts = this.filterProducts(id);

                    return (
                        <Carousel
                            products={filteredProducts}
                            key={category.id}
                        />
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products,
        categories: state.products.categories,
        loading: state.products.loading,
    };
};

export default connect(
    mapStateToProps,
    { getProducts }
)(Dashboard);
