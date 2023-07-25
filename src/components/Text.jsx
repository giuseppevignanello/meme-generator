import React from 'react';

const Text = ({ id, text, fontSize, selected, onClick, onFontSizeIncrease, onFontSizeDecrease }) => {
    return (
        <div>
            <p onClick={onClick} style={{ fontSize: `${fontSize}px` }} className="text">
                {text}
            </p>
        </div>
    );
};

export default Text;