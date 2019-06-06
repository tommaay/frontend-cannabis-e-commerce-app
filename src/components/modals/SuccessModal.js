import React from 'react';
import Modal from 'react-bootstrap/Modal';

const SuccessModal = props => {
    return (
        <Modal {...props} centered>
            <Modal.Header closeButton>
                <Modal.Title size="lg">Success!</Modal.Title>
            </Modal.Header>
        </Modal>
    );
};

export default SuccessModal;
