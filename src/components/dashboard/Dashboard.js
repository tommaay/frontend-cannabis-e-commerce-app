import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/productActions';
import Carousel from './Carousel';

class Dashboard extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    filterProducts = name => {
        return this.props.products.filter(product => product.category === name);
    };

    render() {
        return this.props.loading ? (
            <h1>Loading...</h1>
        ) : (
            <div>
                {this.props.categories.map(category => {
                    const name = category.name;
                    const filteredProducts = this.filterProducts(name);

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
