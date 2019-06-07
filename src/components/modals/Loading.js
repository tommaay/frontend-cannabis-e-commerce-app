import React from 'react';
import ReactLoading from 'react-loading';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const Loading = () => {
    return (
        <div style={style}>
            <ReactLoading
                type="spinningBubbles"
                color="black"
                height="300px"
                width="300px"
            />
        </div>
    );
};

export default Loading;
