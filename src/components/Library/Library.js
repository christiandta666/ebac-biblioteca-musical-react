import "./styles.css";

function Library({ librarySongs }) {

  return (
    <div className="library">
      <h2>Biblioteca</h2>
      {librarySongs.length === 0 ? (
        <p>No hay canciones agregadas.</p>
      ) : (
        librarySongs.map((song) => (
          <div key={song.id} className="library-song">
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Library;