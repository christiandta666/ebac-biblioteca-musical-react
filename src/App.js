import React, { Component } from "react";
import './App.css';
import Header from "./components/Header";
import Song from "./components/Song";

class App extends Component {
  componentDidMount() {
    console.log("La aplicación se cargó correctamente");
  }
  render() {
    return (
      <div className="App">

        <Header />

        <div className="songs-container">

          <Song
            title="Full Nelson"
            artist="Limp Bizkit"
            album="Chocolate Starfish and the Hotdog Flavored Water"
            duration="4:07"
          />
          <Song
            title="Nutshell"
            artist="Alice in Chains"
            album="Jar of Flies"
            duration="4:20"
          />
          <Song
            title="Points of Authority"
            artist="Linkin Park"
            album="Hybrid Theory"
            duration="3:20"
          />
          <Song
            title="Nosetalgia"
            artist="Pusha T ft Kendrick Lamar"
            album="My Name Is My Name"
            duration="3:49"
          />
          <Song
            title="Linger"
            artist="The Cranberries"
            album="Everybody Else Is Doing It, So Why Can't We?"
            duration="4:38"
          />
        </div>
      </div>
    );
  }
}

export default App;
