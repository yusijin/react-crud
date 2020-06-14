import React, { Component } from 'react';
import TOC from "./components/TOC";
import logo from './logo.svg';
import './App.css';

class Subject extends Component {
  render() {
    return(
      <header>
        <h1>WEB</h1>
      </header>
    )
  }
}


class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
class App extends Component {
  render() {
    return(
      <div>
       <Subject />
       <TOC name="CSS"/>
       <Welcome name="World" />
       </div>
    ); 
 }
}

export default App;
