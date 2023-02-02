
import './App.css';
import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar.js'
import {SearchResults} from '../SearchResults/SearchResults.js'
import {PlayList} from'../PlayList/PlayList.js'
import {Spotify} from '../../util/Spotify'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [
    ],
    playlistName: 'KOKO',
    playlistTracks: [
    ]
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }
  async search(term) {
    let tracks = await Spotify.search(term)
    this.setState({searchResults: tracks})
  }
  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(trap=>{
      return trap.uri
    })
    Spotify.savePlaylist(this.state.playlistName, trackURIs)
    this.setState({playlistName: 'New Playlist'})
    this.setState({playlistTracks: []})
  }
  addTrack(track) {
    const isFound = this.state.playlistTracks.some(element => {
      if (element.id === track.id) {
        return true;
      }
      return false;
    });
    if(!isFound) {
      this.setState({playlistTracks: this.state.playlistTracks.concat(track)})
    }
  }
  removeTrack(track) {
      this.setState({playlistTracks: this.state.playlistTracks.filter(trak=>{
         return trak.id !== track.id
      })})
  }
  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }
  render() {
    return <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              <SearchBar 
              onSearch={this.search}
              />
              <div className="App-playlist">
                <SearchResults 
                searchResults={this.state.searchResults} 
                onAdd={this.addTrack}
                />
                <PlayList 
                playlistName={this.state.playlistName} 
                playlistTracks={this.state.playlistTracks} 
                onRemoval={this.removeTrack} 
                onNameChange={this.updatePlaylistName}
                onSave={this.savePlaylist}
                />
              </div>
            </div>
          </div>
  }
}

export default App;
