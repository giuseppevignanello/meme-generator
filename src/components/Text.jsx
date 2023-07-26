import React from 'react';

const Text = ({ id, text, fontSize, onClick }) => {

    return (
        <div >
            <p id={id} onClick={onClick} style={{ fontSize: `${fontSize}px` }} className="text">
                {text}
            </p>
        </div>

    );
};

export default Text;