import { useSelector, useDispatch } from "react-redux";
import { addSong } from "../../redux/slices/librarySlice";
import Song from "../Song/Song";

function SearchResults() {
  const dispatch = useDispatch();
  const {
    results,
    loading,
    error
  } = useSelector(
    (state) => state.search
  );
  if (loading) {
    return <p>Cargando...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      {results.map((album) => (
        <Song
          key={album.idAlbum}
          album={album}
          onAdd={() =>
            dispatch(addSong(album))
          }
        />
      ))}
    </div>
  );
}

export default SearchResults;