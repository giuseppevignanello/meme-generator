import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Text from './Text';
import Buttons from './Buttons';

const Meme = () => {
    const [memes, setMemes] = useState([]);
    const [imagePath, setImagePath] = useState('');
    const [textData, setTextData] = useState({ topText: '', bottomText: '' });
    const [fontSizeTop, setFontSizeTop] = useState(20);
    const [fontSizeBottom, setFontSizeBottom] = useState(20);
    const [selectedText, setSelectedText] = useState('')

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
                <form className="meme_form row mt-5 gap-3 justify-content-center" action="">
                    <input
                        onChange={handleTextChange}
                        value={textData.topText}
                        name="topText"
                        type="text"
                        id="top_text"
                        className="meme_input col-5 rounded py-2"
                        placeholder="Top Text"
                    />
                    <input
                        onChange={handleTextChange}
                        value={textData.bottomText}
                        name="bottomText"
                        type="text"
                        id="bottom_text"
                        className="meme_input col-5 rounded py-2"
                        placeholder="Bottom Text"
                    />

                    <button onClick={getRandomMeme} type="button" name="" id="" className="bg_main form_btn col-5 p-2 rounded border-1">
                        Get a new image
                    </button>
                </form>

                <div className="image_meme text-center mt-5 position-relative">
                    <img src={imagePath} alt="" />
                    <div>
                        <div className='text_container'>
                            <Text
                                id={'top'}
                                text={textData.topText.toUpperCase()}
                                fontSize={fontSizeTop}
                                selected={selectedText}
                                onClick={selectTop}

                            />
                            <Text
                                id={'bottom'}
                                text={textData.bottomText.toUpperCase()}
                                fontSize={fontSizeBottom}
                                selected={selectedText}
                                onClick={selectBottom}
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
        </div>
    );
};

export default Meme;