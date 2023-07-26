import React from 'react'

const Buttons = ({ selected, onFontSizeIncrease, onFontSizeDecrease, OnPositionChangeUp, OnPositionChangeDown, OnPositionChangeLeft, OnPositionChangeRight }) => {
    return (
        <div className='d-flex justify-content-center gap-4 align-items-center'>
            <div className={`d-flex flex-column ${selected ? 'd-block' : 'd-none'}`}>
                <div>
                    <h5 className="text-center mt-2"><strong> {selected.toUpperCase()} FONT SIZE </strong></h5>
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
            <div className={`flex-column justify-content-center ${selected ? 'd-flex' : 'd-none'}`}>
                <div>
                    <h5 className="text-center mt-2"> <strong> MOVE {selected.toUpperCase()} TEXT </strong></h5>
                </div>
                <div className='position-relative move_buttons d-flex' >
                    <button className='rounded p-1 px-2 border-0 bg-white up_button' onClick={OnPositionChangeUp} type="button">
                        <i className="fa-solid fa-arrow-up"></i>
                    </button>
                    <button className='rounded p-1 px-2 border-0 bg-white down_button' onClick={OnPositionChangeDown} type="button">
                        <i className="fa-solid fa-arrow-down"></i>
                    </button>
                    <button className='rounded p-1 px-2 border-0 bg-white left_button' onClick={OnPositionChangeLeft} type="button">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className='rounded p-1 px-2 border-0 bg-white right_button' onClick={OnPositionChangeRight} type="button">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Buttons