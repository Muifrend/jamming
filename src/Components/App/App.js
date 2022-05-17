
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar.js'
import {SearchResults} from '../SearchResults/SearchResults.js'
import {PlayList} from'../PlayList/PlayList.js'




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {searchResults : [
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
    ]}
  }
  render() {
    return <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
              <SearchBar />
              <div className="App-playlist">
                <SearchResults searchResults={this.state.searchResults}/>
                <PlayList />
              </div>
            </div>
          </div>
  }
}

export default App;
