import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../store/actions/productActions';

class Dashboard extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return (
            <div>
                <h1>This is the dashboard</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products.products,
    };
};

export default connect(
    mapStateToProps,
    { getProducts }
)(Dashboard);
