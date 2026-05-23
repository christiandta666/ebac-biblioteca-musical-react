import { Link } from "react-router-dom";
import {
  SongCard,
  AlbumTitle
} from "./styles";

function Song({ album }) {
  return (
    <SongCard>
      <AlbumTitle featured={album.intYearReleased < 2000}>
        {album.strAlbum}
      </AlbumTitle>
      <p>{album.strArtist}</p>
      <p>{album.intYearReleased}</p>
      <Link to={`/song/${album.idAlbum}`}>
        Ver detalles
      </Link>
    </SongCard>
  );
}

export default Song;