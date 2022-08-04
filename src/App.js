import './App.css';
import React from 'react';
import './assets/main.css';

import NavLeft from './components/NavLeft';
import NavRight from './components/NavRight';
import PlayingBar from './components/PlayingBar';
import Content from './components/content/Content';


function App() {
  return (
    <div className="App h-full">
      <div className='flex w-full h-5/6 '>
      <NavLeft/>
      <Content  />
      <NavRight/>
      </div>
      <PlayingBar />
    </div>
  );
}

export default App;
