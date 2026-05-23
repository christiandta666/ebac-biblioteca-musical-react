import { useState } from "react";
import {
  Form,
  Input,
  Button
} from "./styles";

function SearchBar({ onSearch }) {
  const [artist, setArtist] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(artist);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Buscar artista..."
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <Button type="submit">
        Buscar
      </Button>
    </Form>
  );
}

export default SearchBar;