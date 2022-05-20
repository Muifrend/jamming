import React from 'react';
import {TrackList} from '../TrackList/TrackList.js'
import './PlayList.css'

export class PlayList extends React.Component {
    render() {
        return <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <TrackList tracks={this.props.playlistTracks} onRemoval={this.props.onRemoval}  isRemoval={true}/>
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    }
}