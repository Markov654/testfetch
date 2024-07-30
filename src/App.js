import React, { Component } from "react";
import './App.css';
import FetchData from "./FetchData";

class App extends Component{
  render(){
    return(
      <div className="App">
          <h1> Fetch Data result</h1>
          <FetchData></FetchData>
      </div>
    );
  }
}

export default App;
