import React from 'react';

const Text = ({ id, text, fontSize, onClick, textPosition }) => {

    return (
        <div >
            <p id={id} onClick={onClick} style={{ fontSize: `${fontSize}px`, position: 'absolute', top: `${textPosition[0]}%`, left: `${textPosition[1]}%` }} className={`text text${id}`}>
                {text}
            </p>
        </div>

    );
};

export default Text;