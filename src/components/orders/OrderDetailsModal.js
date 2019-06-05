import React from 'react';
import { connect } from 'react-redux';
import { formatPrice } from '../../helpers/helpers';
import Modal from 'react-bootstrap/Modal';

const OrderDetails = props => {
    const { order } = props;

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
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
                            return (
                                <tr key={product.product_order_id}>
                                    <td>
                                        <span className="modal-image">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                            />
                                        </span>
                                        <span className="modal-name">
                                            {product.name}
                                        </span>
                                    </td>

                                    <td>{product.size}</td>

                                    <td>{formatPrice(product.price)}</td>

                                    <td>{product.quantity}</td>

                                    <td>
                                        {formatPrice(
                                            product.price * product.quantity
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <div className="row">
                    <div className="col-sm-6 offset-sm-6 col-lg-4 offset-lg-8">
                        <h5>Tax(30%) {order.tax}</h5>
                        <h3>Total {order.total}</h3>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

const mapStateToProps = state => {
    return {
        order: state.orders.order,
    };
};

export default connect(mapStateToProps)(OrderDetails);
