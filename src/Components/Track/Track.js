import React from 'react';

export class Track extends React.Component {
    renderAction () {
      <button className='Track-action'>{ isRemoval ? '-' : '+'}</button>
    }
    render() {
        return <div className="Track">
        <div className="Track-information">
          <h3></h3>
          <p> | </p>
        </div>
        <button className="Track-action">{this.renderAction}</button>
      </div>
    }
}