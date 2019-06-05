import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrders } from '../../store/actions/orderActions';
import { formatPrice } from '../../helpers/helpers';

class OrdersPage extends Component {
    componentDidMount() {
        const id = this.props.user.id;

        this.props.getOrders(id);
    }

    render() {
        const { orders } = this.props;

        return (
            <div className="orders-page">
                <h1>Orders History</h1>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Order #</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col">Tax</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map(order => {
                            return (
                                <tr>
                                    <td>
                                        {new Date(
                                            order.created_at
                                        ).toLocaleDateString()}
                                    </td>
                                    <td>{order.id}</td>
                                    <td>{formatPrice(order.subtotal)}</td>
                                    <td>{formatPrice(order.tax)}</td>
                                    <td>{formatPrice(order.total)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        orders: state.orders.orders,
    };
};

export default connect(
    mapStateToProps,
    { getOrders }
)(OrdersPage);
