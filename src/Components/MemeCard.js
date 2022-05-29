export default function MemeCard({meme, select, id}) {
  return (
    <button className='meme-card' onClick={() => select(id)}>
        <div className='name'>{meme.name}</div>
    </button>
  )
}
