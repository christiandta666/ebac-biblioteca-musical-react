import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSongs } from "../../redux/slices/searchSlice";

function SearchBar() {
  const [artist, setArtist] = useState("");
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchSongs(artist));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar artista..."
        value={artist}
        onChange={(e) =>
          setArtist(e.target.value)
        }
      />
      <button type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;