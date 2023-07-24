import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Meme = () => {

    const [memes, setMemes] = useState([]);

    useEffect(() => {
        axios.get('https://api.imgflip.com/get_memes')
            .then(response => {
                setMemes(response.data.memes)
                console.log(response.data.data.memes);
            })
            .catch(error =>
                console.log(error))
    })
    return (
        <div>
            <div className="container">
                <form className="meme_form row mt-5 gap-3 justify-content-center" action="">

                    <input type="text" id='top_text' className='meme_input col-5 rounded py-2' placeholder='Top Text' />
                    <input type="text" id='bottom_text' className='meme_input col-5 rounded py-2' placeholder='Bottom Text' />

                    <button type="button" name="" id="" className="btn btn-success form_btn col-5">Get a new image</button>

                </form>
            </div>
        </div>
    )
}

export default Meme