import memesData from '../Data/memesData';
import { useState } from 'react';

export default function Form() {

    const { memes } = memesData.data;
    const [image, setImage] = useState('');

    function getMemeImage(event) {
        event.preventDefault();
        const random = getRandomInt(memes.length);
        setImage(memes[random].url);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return(
        <main>
            <form className="form">

                <input type="text"
                placeholder="Top text"
                className="form--input" />

                <input type="text"
                placeholder="Bottom text"
                className="form--input" />

                <button className="form--button"
                onClick={(event) => getMemeImage(event)} > 
                    Get new meme template 
                </button>
            </form>
            <img className="meme" src={image}></img>
        </main>
    )
}