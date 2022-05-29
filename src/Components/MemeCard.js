export default function MemeCard({meme, select, id}) {
  return (
    <div className="meme-card" onClick={() => select(id)}>
        <img src={meme.url} alt={meme.name} />
        <div className="name">{meme.name}</div>
        <div>{meme.box_count}</div>
    </div>
  )
}
