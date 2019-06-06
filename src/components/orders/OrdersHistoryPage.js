import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrders, setOrder } from '../../store/actions/orderActions';
import { formatPrice } from '../../helpers/helpers';
import OrderDetailsModal from './OrderDetailsModal';
import { OrderHistoryContainer } from './style/ordersHistory';

class OrdersPage extends Component {
    state = {
        modalShow: false,
    };

    componentDidMount() {
        const id = this.props.user.id;

        this.props.getOrders(id);
    }

    modalClose = () => this.setState({ modalShow: false });

    render() {
        const { orders, setOrder } = this.props;

        return (
            <OrderHistoryContainer>
                <table className="table">
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
                                <tr
                                    key={order.id}
                                    onClick={() => {
                                        setOrder(order.id);
                                        this.setState({ modalShow: true });
                                    }}
                                    className="order-row"
                                >
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

                <OrderDetailsModal
                    show={this.state.modalShow}
                    onHide={this.modalClose}
                />
            </OrderHistoryContainer>
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
    { getOrders, setOrder }
)(OrdersPage);
