import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ErrorModal = props => {
    return (
        <Modal {...props} centered>
            <Modal.Header closeButton>
                <Modal.Title
                    size="lg"
                    style={{ padding: '30px 10px', fontSize: '26px' }}
                >
                    Unable to process your request.
                </Modal.Title>
            </Modal.Header>
        </Modal>
    );
};

export default ErrorModal;
