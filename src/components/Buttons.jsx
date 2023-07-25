import React from 'react'

const Buttons = ({ selected, onFontSizeIncrease, onFontSizeDecrease }) => {
    return (

        <div className={`d-flex flex-column ${selected ? 'd-block' : 'd-none'}`}>
            <div>
                <h4 className="text-center mt-2">{selected.toUpperCase()} FONT SIZE</h4>
            </div>
            <div className='d-flex gap-2 justify-content-center' >
                <button className='rounded p-1 px-2 border-0 bg-dark text-white' onClick={onFontSizeIncrease} type="button">
                    <i className="fa-solid fa-arrow-up"></i>
                </button>
                <button className='rounded p-1 px-2 border-0 bg-white' onClick={onFontSizeDecrease} type="button">
                    <i className="fa-solid fa-arrow-down"></i>
                </button>
            </div>
        </div>

    )
}

export default Buttons