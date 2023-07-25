import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Meme = () => {

    const [memes, setMemes] = useState([]);
    const [imagePath, setImagePath] = useState('')
    const [textData, setTextData] = useState({ topText: "", bottomText: "" })
    const [fontSizeTop, setFontSizeTop] = useState(20)
    const [topSelected, setTopSelected] = useState(false)
    const [bottomSelected, setBottomSelected] = useState(false)
    const [fontSizeBottom, setFontSizeBottom] = useState(20)


    useEffect(() => {
        axios.get('https://api.imgflip.com/get_memes')
            .then(response => {
                setMemes(response.data.data.memes)
                const randomNumber = Math.floor(Math.random() * response.data.data.memes.length);
                setImagePath(response.data.data.memes[randomNumber].url);
            })
            .catch(error =>
                console.log(error))
    }, []);

    function getRandomMeme() {
        const randomNumber = Math.floor(Math.random() * memes.length)
        setImagePath(memes[randomNumber].url)
    }

    function handleTextChange(event) {
        setTextData(prevTextData => {
            return {
                ...prevTextData,
                [event.target.name]: event.target.value
            }
        })
    }

    function selectTop() {
        setTopSelected(prevData => !prevData)
    }

    function selectBottom() {
        setBottomSelected(prevData => !prevData)
    }

    function increaseFontSizeTop() {
        setFontSizeTop(prevData => prevData + 2)
    }

    function decreaseFontSizeTop() {
        setFontSizeTop(prevData => prevData - 2)
    }

    function increaseFontSizeBottom() {
        setFontSizeBottom(prevData => prevData + 2)
    }

    function decreaseFontSizeBottom() {
        setFontSizeBottom(prevData => prevData - 2)
    }




    return (
        <div>
            <div className="container">
                <form className="meme_form row mt-5 gap-3 justify-content-center" action="">

                    <input onChange={handleTextChange} value={textData.topText} name='topText' type="text" id='top_text' className='meme_input col-5 rounded py-2' placeholder='Top Text' />
                    <input onChange={handleTextChange} value={textData.bottomText} name='bottomText' type="text" id='bottom_text' className='meme_input col-5 rounded py-2' placeholder='Bottom Text' />

                    <button onClick={getRandomMeme} type="button" name="" id="" className="bg_main form_btn col-5 p-2 rounded border-1">Get a new image</button>

                </form>
                <div className="image_meme text-center mt-5 position-relative">
                    <img src={imagePath} alt="" />


                    {/* text */}
                    <div className='text_container d-flex flex-column justify-content-between h-100'>
                        <p onClick={selectTop} style={{ fontSize: `${fontSizeTop}px` }} className='text' >{textData.topText.toUpperCase()}</p>
                        <p onClick={selectBottom} style={{ fontSize: `${fontSizeBottom}px` }} className='text'>{textData.bottomText.toUpperCase()}</p>
                    </div>
                </div>


                {/* buttons top */}
                <div className={topSelected ? "d-block" : "d-none"}>
                    <div>
                        <h6 className='text-center mt-2'>Font-size Top Text</h6>
                    </div>
                    <div className='d-flex justify-content-center mt-3 gap-3'>
                        <button onClick={increaseFontSizeTop} type="button" className="btn btn-secondary">⬆️</button>
                        <button onClick={decreaseFontSizeTop} type="button" className="btn btn-secondary">⬇️</button>
                    </div>
                </div>


                {/* buttons bottom */}
                <div className={bottomSelected ? "d-block" : "d-none"}>
                    <div>
                        <h6 className='text-center mt-2'>Font-size Bottom Text</h6>
                    </div>
                    <div className=' d-flex justify-content-center mt-3 gap-3'>
                        <button onClick={increaseFontSizeBottom} type="button" className="btn btn-secondary">⬆️</button>
                        <button onClick={decreaseFontSizeBottom} type="button" className="btn btn-secondary">⬇️</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Meme