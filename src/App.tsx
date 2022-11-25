import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import { Home } from './paginas/home/Home';
import { About } from './components/about/About';

function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>


export default App;
