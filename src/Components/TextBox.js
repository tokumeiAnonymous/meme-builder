
export default function TextBox({text, dataKey, remove}) {

    function removeParent(event) {
        event.target.parentElement.remove();
        remove(text, dataKey);
    }

  return (
    <div className='text-box' draggable='true'>
        {text}
        <button className='remove-button' onClick={(event) => removeParent(event)}> - </button>
    </div>
  )
}
