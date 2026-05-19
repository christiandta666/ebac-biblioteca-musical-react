import "./styles.css";

function Song({ song, onAdd }) {
  return (
    <div className="song-card">
      <h3>{song.title}</h3>
      <p>Artista: {song.artist}</p>
      <p>Album: {song.album}</p>
      <button onClick={() => onAdd(song)}>
        Agregar a mi biblioteca
      </button>
    </div>
  );
}

export default Song;