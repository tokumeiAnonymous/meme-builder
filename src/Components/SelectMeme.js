import MemeCard from "./MemeCard";

export default function SelectMeme({allMemes, selectImage}) {

    const memeList = allMemes.map (meme => (
    <MemeCard key={meme.id} id={meme.id} meme={meme} select={selectAndCloseModal}/>
    ))

    function selectAndCloseModal(id) {
        const selection = document.querySelector('.select');
        selection.close();
        selectImage(id);
    }

  return (
    <dialog className='select'>
        {memeList}
    </dialog>
  )
}
