import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from './components/Title/Title';
import Text from './components/Text/Text';
function App() {
  const nome = 'João Marcos';
  return(
    <>
   <Title nome="João Marcos" />
    <Text />
    </>
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
