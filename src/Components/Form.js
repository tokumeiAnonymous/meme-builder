import { useEffect, useState } from 'react';
import SelectMeme from './SelectMeme';

export default function Form() {

    const [allMemes, setAllMemes] = useState([]);
    const [meme, setMeme] = useState('');

    useEffect( () => {
        async function getAllMemes () {
            try {
                const data = await fetch('https://api.imgflip.com/get_memes');
                const res = await data.json();
                setAllMemes(res.data.memes);
            }
            catch (error) {
                console.log(error);
            }

        }
        getAllMemes();
    }, [allMemes])

    function selectImage(id) {
        allMemes.forEach( meme => {
            if (meme.id === id) setMeme(meme);
        })
    }

    function showSelection( event ) {
        event.preventDefault();
        const selection = document.querySelector('.select');
        selection.showModal();
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
                onClick={showSelection} > 
                    Get new meme template 
                </button>
            </form>
            <img className="meme" src={meme.url} alt="Meme Template"></img>
            <SelectMeme allMemes={allMemes} selectImage={selectImage}/>
        </main>
    )
}