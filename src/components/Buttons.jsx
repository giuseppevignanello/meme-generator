import React from 'react'

const Buttons = ({ selected, onFontSizeIncrease, onFontSizeDecrease }) => {
    return (
        <div className={`d-flex flex-column justify-content-between h-100 ${selected ? 'd-block' : 'd-none'}`}>
            <div>
                <h6 className="text-center mt-2">Font-size Text</h6>
            </div>
            <div >
                <button onClick={onFontSizeIncrease} type="button" className="btn btn-secondary">
                    ⬆️
                </button>
                <button onClick={onFontSizeDecrease} type="button" className="btn btn-secondary">
                    ⬇️
                </button>
            </div>
        </div>
    )
}

export default Buttons