import React from 'react';
import { connect } from 'react-redux';
import { getProductById } from '../../store/actions/productActions';

const ProductPage = props => {
    const { loading, getProductById } = props;
    if (loading) {
        return <h1>Loading...</h1>;
    } else {
        const id = parseInt(props.match.params.productId);
        const product = getProductById(id);
        console.log(typeof id);
        console.log('page', product);
        return (
            <div>
                <h1>Product Page</h1>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        loading: state.products.loading,
    };
};

export default connect(
    null,
    { getProductById }
)(ProductPage);
