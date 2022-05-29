
export default function TextBox({text, dataKey, remove}) {

    function removeParent(event) {
        event.target.parentElement.remove();
        remove(text, dataKey);
    }
    
    function drag(event) {
      event.dataTransfer.setData('text', event.target.id);
    }

  return (
    <div id={`text-${dataKey}`} className='text-box' draggable='true' onDragStart={drag}>
        {text}
        <button className='remove-button' onClick={(event) => removeParent(event)}> - </button>
    </div>
  )
}
