import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Meme = () => {

    const [memes, setMemes] = useState([]);
    const [imagePath, setImagePath] = useState('')

    useEffect(() => {
        axios.get('https://api.imgflip.com/get_memes')
            .then(response => {
                setMemes(response.data.data.memes)
                const randomNumber = Math.floor(Math.random() * memes.length)
                setImagePath(memes[randomNumber].url)
            })
            .catch(error =>
                console.log(error))
    }, []);

    function getRandomMeme() {
        const randomNumber = Math.floor(Math.random() * memes.length)
        setImagePath(memes[randomNumber].url)
    }
    return (
        <div>
            <div className="container">
                <form className="meme_form row mt-5 gap-3 justify-content-center" action="">

                    <input type="text" id='top_text' className='meme_input col-5 rounded py-2' placeholder='Top Text' />
                    <input type="text" id='bottom_text' className='meme_input col-5 rounded py-2' placeholder='Bottom Text' />

                    <button onClick={getRandomMeme} type="button" name="" id="" className="btn btn-success form_btn col-5">Get a new image</button>

                </form>
                <div className="image_meme text-center mt-5">
                    <img src={imagePath} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Meme