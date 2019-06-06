import React from 'react';
import Modal from 'react-bootstrap/Modal';

const SuccessModal = props => {
    return (
        <Modal {...props} centered>
            <Modal.Header closeButton>
                <Modal.Title
                    size="lg"
                    style={{ padding: '30px 10px', fontSize: '26px' }}
                >
                    Success!
                </Modal.Title>
            </Modal.Header>
        </Modal>
    );
};

export default SuccessModal;
