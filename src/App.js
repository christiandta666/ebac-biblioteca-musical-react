import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SearchResults from "./components/SearchResults/SearchResults";
import Library from "./components/Library/Library";
import "./App.css";

function App() {

  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      title: "Full Nelson",
      artist: "Limp Bizkit",
      album: "Chocolate Starfish and the Hotdog Flavored Water"
    },
    {
      id: 2,
      title:"Nutshell",
      artist:"Alice in Chains",
      album:"Jar of Flies"
    },
    {
      id: 3,
      title:"Points of Authority",
      artist:"Linkin Park",
      album:"Hybrid Theory"
    },
    {
      id: 4,      
      title:"Nosetalgia",
      artist:"Pusha T ft Kendrick Lamar",
      album:"My Name Is My Name"
    },
    {
      id: 5,
      title:"Linger",
      artist:"The Cranberries",
      album:"Everybody Else Is Doing It, So Why Can't We?"
    },
    {
      id:6,
      title:"Gimme the Loot",
      artis:"The Notorius B.I.G",
      album:"Ready to Die"
    }
  ]);
  const [library, setLibrary] = useState([]);
  function addToLibrary(song) {
    setLibrary([...library, song]);
  }
  useEffect(() => {
    console.log("La biblioteca se actualizó");
  }, [library]);
  return (
    <div className="App">
      <Header />
      <SearchResults
        songs={searchResults}
        onAdd={addToLibrary}
      />
      <Library
        librarySongs={library}
      />
    </div>
  );
}

export default App;

