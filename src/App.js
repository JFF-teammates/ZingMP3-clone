import './App.css';
import React from 'react';
import './assets/main.css';

import NavLeft from './components/NavLeft';
import NavRight from './components/NavRight';
import PlayingBar from './components/PlayingBar';
import Content from './components/content/Content';
import {BrowserRouter ,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App h-full">
     
      <div className='flex w-full AppBackground '>
        <BrowserRouter>
      <NavLeft/>
      <Content  />
      <NavRight/>
      </BrowserRouter>
      </div>
      <PlayingBar />
    </div>
  );
}

export default App;
