import { useState } from "react";

function SearchBar({ onSearch }) {
  const [artist, setArtist] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(artist);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar artista..."
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <button type="submit">
        Buscar
      </button>
    </form>
  );
}
export default SearchBar;