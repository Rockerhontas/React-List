import React, { Component } from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar/Navbar";
import ArtList from "./components/ArtList";
import Header from "./components/header"

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <ArtList />
        </>
    );
  }
}

export default App;
