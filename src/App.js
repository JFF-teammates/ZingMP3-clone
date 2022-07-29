import './App.css';
import React from 'react';

import NavLeft from './components/NavLeft';
import NavRight from './components/NavRight';
import SearchBar from './components/SearchBar';
import PlayingBar from './components/PlayingBar';
import Content from './components/content/Content';


function App() {
  return (
    <div className="App">
     <NavLeft />
      <SearchBar/>
      <Content/>
      <NavRight />
      <PlayingBar />
    </div>
  );
}

export default App;
