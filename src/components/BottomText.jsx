import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const BottomText = ({ id, text, fontSize, onClick }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: 'draggable',
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <p id={id} onClick={onClick} style={{ fontSize: `${fontSize}px` }} className="text">
                {text}
            </p>
            <div className='board'>

            </div>
        </div>

    );
};

export default BottomText;