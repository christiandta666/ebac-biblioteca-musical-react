import { Link } from "react-router-dom";

function Song({ album }) {
  return (
    <div className="song-card">
      <h3>{album.strAlbum}</h3>
      <p>Artista: {album.strArtist}</p>
      <p>Año: {album.intYearReleased}</p>
      <Link to={`/song/${album.idAlbum}`}>
        Ver detalles
      </Link>
    </div>
  );
}

export default Song;