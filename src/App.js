import React, { Component } from "react";
import { NavigationDrawer } from "react-md";
import logo from "./logo.svg";
import "./App.css";
import ItemList from "./components/ItemList";

class App extends Component {
  render() {
    return (
      <NavigationDrawer
        drawerTitle="react-md with CRA"
        toolbarTitle="Welcome to Readable!"
      >
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro" />
          <ItemList />
        </div>
      </NavigationDrawer>
    );
  }
}

export default App;
