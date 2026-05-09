import React, { Component } from "react";

class Song extends Component {
  render() {
    return (
      <div className="song-card">
        <h2>{this.props.title}</h2>
        <p>Artista: {this.props.artist}</p>
        <p>Album: {this.props.album}</p>
        <p>Duración: {this.props.duration}</p>
      </div>
    );
  }
}

export default Song;