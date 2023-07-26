// Create to different components for top, bottom (and eventually other) text. Find another way to show the button


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Text from './Text';
import Buttons from './Buttons';

const Meme = () => {
    const [memes, setMemes] = useState([]);
    const [imagePath, setImagePath] = useState('');
    const [textData, setTextData] = useState({ topText: '', bottomText: '' });
    const [fontSizeTop, setFontSizeTop] = useState(24);
    const [fontSizeBottom, setFontSizeBottom] = useState(24);
    const [selectedText, setSelectedText] = useState('');



    useEffect(() => {
        axios
            .get('https://api.imgflip.com/get_memes')
            .then(response => {
                setMemes(response.data.data.memes);
                const randomNumber = Math.floor(Math.random() * response.data.data.memes.length);
                setImagePath(response.data.data.memes[randomNumber].url);
            })
            .catch(error => console.log(error));
    }, []);

    function getRandomMeme() {
        const randomNumber = Math.floor(Math.random() * memes.length);
        setImagePath(memes[randomNumber].url);
    }

    function handleTextChange(event) {
        setTextData(prevTextData => {
            return {
                ...prevTextData,
                [event.target.name]: event.target.value
            };
        });
    }

    function selectTop() {
        setSelectedText('top')
    }

    function selectBottom() {
        setSelectedText('bottom')
    }

    function handleFontSizeChange(change) {
        if (selectedText === 'top') {
            setFontSizeTop(prevSize => prevSize + change);
        } else if (selectedText === 'bottom') {
            setFontSizeBottom(prevSize => prevSize + change);
        }
    }


    return (
        <div>
            <div className="container">
                <form className="meme_form" action="">
                    <div className='d-flex row justify-content-center'>
                        <div className='d-flex align-items-center gap-2 col-12 col-sm-5 justify-content-center'>
                            <div onClick={selectTop}>
                                <i className="fa-solid fa-gear"></i>
                            </div>
                            <input
                                onChange={handleTextChange}
                                value={textData.topText}
                                name="topText"
                                type="text"
                                id="top_text"
                                className="meme_input rounded"
                                placeholder="Top Text"
                            />
                        </div>
                        <div className='d-flex align-items-center gap-2 col-12 col-sm-5 justify-content-center'>

                            <div onClick={selectBottom}>
                                <i className="fa-solid fa-gear"></i>
                            </div>
                            <input
                                onChange={handleTextChange}
                                value={textData.bottomText}
                                name="bottomText"
                                type="text"
                                id="bottom_text"
                                className="meme_input rounded"
                                placeholder="Bottom Text"
                            />
                        </div>
                    </div>
                    <div className='d-flex justify-content-center pt-3'>
                        <button onClick={getRandomMeme} type="button" name="" id="" className="bg_main form_btn  p-2 rounded border-1 text-white">
                            Get a new image
                        </button>
                    </div>
                </form>
            </div>
            <div className='main_content' >
                <div className="image_meme text-center position-relative">
                    <img src={imagePath} alt="" />

                    <div className='text_container'>
                        <Text
                            id={'top'}
                            text={textData.topText.toUpperCase()}
                            fontSize={fontSizeTop}
                            selected={selectedText}


                        />
                        <Text
                            id={'bottom'}
                            text={textData.bottomText.toUpperCase()}
                            fontSize={fontSizeBottom}
                            selected={selectedText}

                        />
                    </div>
                    <Buttons
                        selected={selectedText}
                        onFontSizeIncrease={() => handleFontSizeChange(2)}
                        onFontSizeDecrease={() => handleFontSizeChange(-2)}
                    />
                </div>

            </div>

        </div>
    );
};

export default Meme;