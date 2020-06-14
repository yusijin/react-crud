import React, { Component } from 'react';

class TOC extends Component {
    render() {
      return(
        <ol>
          <li><a href="1.html">{this.props.name}</a></li>
          <li><a href="2.html">{this.props.name}</a></li>
          <li><a href="3.html">{this.props.name}</a></li>
        </ol>
      )
    }
  }

  export default TOC;