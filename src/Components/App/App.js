
import './App.css';
import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar.js'
import {SearchResults} from '../SearchResults/SearchResults.js'
import {PlayList} from'../PlayList/PlayList.js'




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults : [
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
        id: 1
      },
      { name: 'Karma police',
        artist: 'Radiohead',
        album: 'OK Computer',
        id: 2
      },
      { name: 'N Side',
        artist: 'Steve Lacey',
        album: 'Apollo XXI',
        id: 3
      }
    ]
    }
    this.addTrack = this.addTrack.bind(this)
  }
  addTrack(track) {
    const isFound = this.playlistTracks.some(element => {
      if (element.id === track.id) {
        return true;
      }
      return false;
    });
    if(isFound) {
      this.setState({playlistTracks: this.state.playlistTracks.push(track)})
    }
  }
  render() {
    return <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              <SearchBar />
              <div className="App-playlist">
                <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
                <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
              </div>
            </div>
          </div>
  }
}

export default App;
