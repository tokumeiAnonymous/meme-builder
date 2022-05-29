import MemeCard from "./MemeCard";

export default function SelectMeme({allMemes, selectImage}) {

    const memeList = allMemes.map (meme => (
    <MemeCard key={meme.id} id={meme.id} meme={meme} select={selectAndCloseModal}/>
    ))

    function selectAndCloseModal(id) {
        const selection = document.querySelector('dialog');
        selection.close();
        selectImage(id);
    }

  return (
    <dialog>
        <div className="select">
            {memeList}
        </div>
    </dialog>
  )
}
