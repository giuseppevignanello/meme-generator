// Create to different components for top, bottom (and eventually other) text. Find another way to show the button


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Text from './Text';
import Buttons from './Buttons';

const Meme = () => {
    const [memes, setMemes] = useState([]);
    const [imagePath, setImagePath] = useState('');
    const [textData, setTextData] = useState({ topText: '', bottomText: '', leftText: '', rightText: '' });
    const [fontSizeTop, setFontSizeTop] = useState(24);
    const [fontSizeBottom, setFontSizeBottom] = useState(24);
    const [fontSizeLeft, setFontSizeLeft] = useState(24);
    const [fontSizeRight, setFontSizeRight] = useState(24);
    const [textTopPosition, setTextTopPosition] = useState([0, 50]);
    const [textBottomPosition, setTextBottomPosition] = useState([85, 50]);
    const [textLeftPosition, setTextLeftPosition] = useState([50, 30]);
    const [textRightPosition, setTextRightPosition] = useState([50, 60]);
    const [inputs, setInputs] = useState([
        { name: 'topText', select: selectTop },
        { name: 'bottomText', select: selectBottom },
        { name: 'leftText', select: selectLeft },
        { name: 'rightText', select: selectRight },
    ]);
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

    function selectLeft() {
        setSelectedText('left')
    }
    function selectRight() {
        setSelectedText('right')
    }

    function handleFontSizeChange(change) {
        if (selectedText === 'top') {
            setFontSizeTop(prevSize => prevSize + change);
        } else if (selectedText === 'bottom') {
            setFontSizeBottom(prevSize => prevSize + change);
        } else if (selectedText === 'left') {
            setFontSizeLeft(prevSize => prevSize + change);
        } else if (selectedText === 'right') {
            setFontSizeRight(prevSize => prevSize + change);
        }
    }

    function handleTextPositionChangeUpAndDown(change) {
        if (selectedText === 'top') {
            setTextTopPosition([textTopPosition[0] + change, textTopPosition[1]]);
        } else if (selectedText === 'bottom') {
            setTextBottomPosition([textBottomPosition[0] + change, textBottomPosition[1]]);
        } else if (selectedText === 'left') {
            setTextLeftPosition([textLeftPosition[0] + change, textLeftPosition[1]]);
        } else if (selectedText === 'right') {
            setTextRightPosition([textRightPosition[0] + change, textRightPosition[1]]);
        }
    }

    function handleTextPositionChangeLeftAndRight(change) {
        if (selectedText === 'top') {
            setTextTopPosition([textTopPosition[0], textTopPosition[1] + change]);
        } else if (selectedText === 'bottom') {
            setTextBottomPosition([textBottomPosition[0], textBottomPosition[1] + change]);
        } else if (selectedText === 'left') {
            setTextLeftPosition([textLeftPosition[0], textLeftPosition[1] + change]);
        } else if (selectedText === 'right') {
            setTextRightPosition([textRightPosition[0], textRightPosition[1] + change]);
        }
    }

    return (
        <div>
            {/* /meme form */}
            <div className="container">
                <form className="meme_form" action="">
                    <div className='d-flex row justify-content-center'>
                        {inputs.map(input => (
                            <div key={input.name} className='d-flex align-items-center gap-2 col-12 col-sm-5 justify-content-center my-2'>
                                <div onClick={input.select}>
                                    <i className="fa-solid fa-gear"></i>
                                </div>
                                <input
                                    onChange={handleTextChange}
                                    value={textData[input.name]}
                                    type="text"
                                    name={input.name}
                                    id={input.name}
                                    className="meme_input rounded"
                                    placeholder='Add Text'
                                />
                            </div>
                        ))}
                    </div>
                    <div className='d-flex justify-content-center pt-3'>
                        <button onClick={getRandomMeme} type="button" name="" id="" className="bg_main form_btn  p-2 rounded border-1 text-white">
                            Get a new image
                        </button>
                    </div>
                </form>
            </div>

            {/* /end meme form */}

            {/* /meme content */}
            <div className='main_content' >
                <div className="image_meme text-center position-relative">
                    <img src={imagePath} />
                    <Text
                        id={'top'}
                        text={textData.topText.toUpperCase()}
                        fontSize={fontSizeTop}
                        selected={selectedText}
                        textPosition={textTopPosition}


                    />
                    <Text
                        id={'bottom'}
                        text={textData.bottomText.toUpperCase()}
                        fontSize={fontSizeBottom}
                        selected={selectedText}
                        textPosition={textBottomPosition}

                    />
                    <Text
                        id={'left'}
                        text={textData.leftText.toUpperCase()}
                        fontSize={fontSizeLeft}
                        selected={selectedText}
                        textPosition={textLeftPosition}

                    />
                    <Text
                        id={'right'}
                        text={textData.rightText.toUpperCase()}
                        fontSize={fontSizeRight}
                        selected={selectedText}
                        textPosition={textRightPosition}

                    />
                </div>
                <Buttons
                    selected={selectedText}
                    onFontSizeIncrease={() => handleFontSizeChange(2)}
                    onFontSizeDecrease={() => handleFontSizeChange(-2)}
                    OnPositionChangeUp={() => handleTextPositionChangeUpAndDown(-2)}
                    OnPositionChangeDown={() => handleTextPositionChangeUpAndDown(2)}
                    OnPositionChangeLeft={() => handleTextPositionChangeLeftAndRight(-2)}
                    OnPositionChangeRight={() => handleTextPositionChangeLeftAndRight(2)}

                />
            </div>

            {/* end meme content */}

        </div>
    );
};

export default Meme;