import React from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {
  return (
    <div className="App">
      <Header/>
      <Meme/>
    </div>
  );
}

export default App;
