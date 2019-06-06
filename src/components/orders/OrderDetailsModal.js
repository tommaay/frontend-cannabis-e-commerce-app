import React from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../../helpers/helpers';

// React Bootstrap
import Modal from 'react-bootstrap/Modal';

// Style
import { OrderContainer } from './style/orderDetails';

const OrderDetails = props => {
    const { order } = props;
    let subtotal = 0;

    if (!order.id) {
        return (
            <Modal>
                <Modal.Header closeButton>
                    <Modal.Body id="contained-modal-title-vcenter">
                        No order
                    </Modal.Body>
                </Modal.Header>
            </Modal>
        );
    } else {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <OrderContainer>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Order #{order.id}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Size</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>

                            <tbody>
                                {order.products.map(product => {
                                    subtotal +=
                                        product.price * product.quantity;

                                    return (
                                        <tr key={product.product_order_id}>
                                            <td>{product.name}</td>

                                            <td>{product.size}</td>

                                            <td>
                                                {formatPrice(product.price)}
                                            </td>

                                            <td>{product.quantity}</td>

                                            <td>
                                                {formatPrice(
                                                    product.price *
                                                        product.quantity
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                        <div className="row">
                            <div className="col-sm-6 offset-sm-6 col-lg-4 offset-lg-8 total-box">
                                <div className="sub">
                                    <h6>Subtotal:</h6>
                                    <h6>{formatPrice(subtotal)}</h6>
                                </div>
                                <div className="sub">
                                    <h6>Delivery:</h6>
                                    <h6>{formatPrice(order.delivery)}</h6>
                                </div>
                                <div className="sub">
                                    <h6>Tax(30%):</h6>
                                    <h6>{formatPrice(order.tax)}</h6>
                                </div>
                                <div className="total">
                                    <h5>Total: {formatPrice(order.total)}</h5>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </OrderContainer>
            </Modal>
        );
    }
};

const mapStateToProps = state => {
    return {
        order: state.orders.order,
    };
};

export default connect(mapStateToProps)(OrderDetails);
