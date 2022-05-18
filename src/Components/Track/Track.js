import React from 'react';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.renderAction = this.renderAction.bind(this)
    }
    track() {
      
    }
    renderAction () {
      <button className='Track-action'>{ this.props.isRemoval ? '-' : '+'}</button>
    }
    render() {
        return <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <button className="Track-action">{this.renderAction}</button>
      </div>
    }
}