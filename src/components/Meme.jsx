import React from 'react'

const Meme = () => {
    return (
        <div>
            <div className="container">
                <form className="meme_form row mt-4 gap-3 justify-content-center" action="">

                    <input type="text" id='top_text' className='meme_input col-5 rounded py-2' placeholder='Top Text' />
                    <input type="text" id='bottom_text' className='meme_input col-5 rounded py-2' placeholder='Bottom Text' />

                    <button type="button" name="" id="" className="btn btn-success form_btn col-5">Get a new image</button>

                </form>
            </div>
        </div>
    )
}

export default Meme