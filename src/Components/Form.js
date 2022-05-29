import { useEffect, useState } from 'react';
import SelectMeme from './SelectMeme';
import TextBox from './TextBox';

export default function Form() {

    const [allMemes, setAllMemes] = useState([]);
    const [meme, setMeme] = useState('');
    const [textBox, setTextBox] = useState([]);

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
        const selection = document.querySelector('dialog');
        selection.showModal();
    }

    function addTextBox( event ) {
        event.preventDefault();
        const currentInput = document.querySelector('.form--input');
        if (currentInput.value === '') return;
        const newTextBox = [...textBox, currentInput.value];
        currentInput.value = '';
        setTextBox(newTextBox);
    }

    function removeTextBox( value, i ) {
        const newTextBox = textBox.map( (text, index) => {
            // eslint-disable-next-line
            if (text === value && index === i) return;
            return text;
        })
        setTextBox(newTextBox);
    }

    const textBoxList = textBox.map( (text, i) => (
        <TextBox key={i} text={text} remove={removeTextBox}/>
    ))

    return(
        <main>
            <form className="form">

                <input type="text"
                placeholder="Create Text Box"
                className="form--input" />
                <button className='form--add--button' onClick={addTextBox}>
                    +
                </button>

                <button className="form--button"
                onClick={showSelection} > 
                    Get new meme template 
                </button>
            </form>
            <div className="meme-wrapper">
                {textBoxList}
                <img className="meme" src={meme.url} alt="Meme Template" />
            </div>
            <SelectMeme allMemes={allMemes} selectImage={selectImage}/>
        </main>
    )
}