import './App.css';
import React from 'react';

import NavLeft from './components/NavLeft';
import NavRight from './components/NavRight';
import PlayingBar from './components/PlayingBar';
import Content from './components/content/Content';


function App() {
  return (
    <div className="App">
     <NavLeft />
      <Content/>
      <NavRight />
      <PlayingBar />
    </div>
  );
}

export default App;
