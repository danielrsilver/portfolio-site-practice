import React, { Component } from 'react';

export default class Project extends Component {
  render() {

    let classes = this.props.imgName + " portfolio-img" ;

    return(
      <div id="portfolio">
        <h2>{ this.props.title }</h2>
        <div className={ classes } ></div>
        <p>{ this.props.description }</p>
      </div>
    )
  }
}
