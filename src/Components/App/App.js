
import './App.css';
import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar.js'
import {SearchResults} from '../SearchResults/SearchResults.js'
import {PlayList} from'../PlayList/PlayList.js'




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [
      {
        name: 'Savior',
        aritst: 'Kendrick Lamar',
        album: 'Mr. Moral and The Big Steppers',
        id: 234
      },
      {
        name: 'Funny Thing',
        aritst: 'Thundercat',
        album: 'Drunk',
        id: 235
      },
      {
        name: 'Lost',
        aritst: 'Frank Ocean',
        album: 'Blonde',
        id: 236
      }
    ],
    playlistName: 'KOKO',
    playlistTracks: [
      { name: 'HUMBLE.',
        artist: 'Kendrick Lamar',
        album: 'DAMN.',
        id: 1,
        uri: 'spotify:track:7KXjTSCq5nL1LoYtL7XAwS'
      },
      { name: 'Karma police',
        artist: 'Radiohead',
        album: 'OK Computer',
        id: 2,
        uri: 'spotify:track:63OQupATfueTdZMWTxW03A'
      },
      { name: 'N Side',
        artist: 'Steve Lacey',
        album: 'Apollo XXI',
        id: 3,
        uri: 'spotify:track:24G1PXBWoRgV0wDXZKwxzz'
      }
    ]
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }
  search(term) {
    console.log(term)
  }
  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(trap=>{
      return trap.uri
    })
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
