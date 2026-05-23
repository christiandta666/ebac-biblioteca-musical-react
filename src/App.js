import { useState } from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import SongDetail from "./pages/SongDetail";
import useFetch from "./hooks/useFetch";

function App() {
  const [artist, setArtist] = useState("Linkin Park");
  const url = `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${artist}`;
  const {
    data,
    loading,
    error
  } = useFetch(url);
  function handleSearch(searchTerm) {
    setArtist(searchTerm);
  }
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar onSearch={handleSearch} />
              {loading && <p>Cargando...</p>}
              {error && (
                <p>
                  Hubo un problema al cargar los datos
                </p>
              )}
              {data && (<SearchResults albums={data.album}/>)}
            </>
          }
        />
        <Route
          path="/song/:id"
          element={<SongDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;

