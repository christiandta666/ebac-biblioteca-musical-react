import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import Library from "./components/Library/Library";
import {
  Routes,
  Route
} from "react-router-dom";
import SongDetail from "./pages/SongDetail";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <SearchResults />
              <Library />
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

