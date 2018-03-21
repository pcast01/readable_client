import React, { Component } from "react";
import { Link } from "react-router";
//import "../styles/App.css";

class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            <Link to="/">Readable</Link>
          </h1>
        </header>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
