import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../../redux/libraryActions";

function Library() {
  const librarySongs = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  function handleRemove(songId) {
    dispatch(removeSong(songId));
  }

  return (
    <div>
      <h2>Mi Biblioteca</h2>
      {librarySongs.length === 0 ? (
        <p>No hay canciones agregadas</p>
      ) : (
        librarySongs.map((song) => (
          <div key={song.idAlbum}>
            <h3>{song.strAlbum}</h3>
            <p>{song.strArtist}</p>
            <button
              onClick={() =>
                handleRemove(song.idAlbum)
              }
            >
              Eliminar
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Library;