import {
  useSelector,
  useDispatch
} from "react-redux";
import {
  removeSong
} from "../../redux/slices/librarySlice";

function Library() {
  const dispatch = useDispatch();
  const librarySongs = useSelector(
    (state) => state.library
  );
  return (
    <div>
      <h2>Mi Biblioteca</h2>
      {librarySongs.map((song) => (
        <div key={song.idAlbum}>
          <h3>{song.strAlbum}</h3>
          <p>{song.strArtist}</p>
          <button
            onClick={() =>
              dispatch(
                removeSong(song.idAlbum)
              )
            }
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default Library;