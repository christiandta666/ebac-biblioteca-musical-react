import Song from "../Song/Song";
import "./styles.css";

function SearchResults({ songs, onAdd }) {
  return (
    <div className="search-results">
      <h2>Resultados de busqueda</h2>
      <div className="songs-list">
        {songs.map((song) => (
          <Song
            key={song.id}
            song={song}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;