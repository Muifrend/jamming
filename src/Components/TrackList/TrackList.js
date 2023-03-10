import React from 'react';
import {Track} from '../Track/Track.js'
import './TrackList.css'

export class TrackList extends React.Component {
    render() {
        return <div className="TrackList">
        {this.props.tracks.map((track) => {
             return <Track track={track} key={track.id} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} onRemoval={this.props.onRemoval}/>
        })}
    </div>
    }
}