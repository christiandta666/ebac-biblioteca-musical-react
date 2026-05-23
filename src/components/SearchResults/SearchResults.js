import Song from "../Song/Song";

function SearchResults({ albums }) {
  if (!albums) {
    return <p>No se encontraron álbumes</p>;
  }
  return (
    <div>
      <h2>Resultados</h2>
      {albums.map((album) => (
        <Song
          key={album.idAlbum}
          album={album}
        />
      ))}
    </div>
  );
}

export default SearchResults;