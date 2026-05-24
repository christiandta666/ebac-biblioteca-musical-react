import Song from "../Song/Song";
import { useDispatch } from "react-redux";
import { addSong } from "../../redux/libraryActions";

function SearchResults({ albums }) {
  const dispatch = useDispatch();
  function handleAdd(song) {
    dispatch(addSong(song));
  }
  if (!albums) {
    return <p>No se encontraron resultados</p>;
  }
  return (
    <div>
      <h2>Resultados</h2>
      {albums.map((album) => (
        <Song
          key={album.idAlbum}
          album={album}
          onAdd={handleAdd}
        />
      ))}
    </div>
  );
}

export default SearchResults;