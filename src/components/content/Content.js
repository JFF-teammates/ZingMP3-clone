import React from "react";
import {Routes,Route} from 'react-router-dom'
import SearchBar from "./SearchBar";
import {Individual,Explore,Zingchart,Radio,Follow,
          NewMusic,Type,Top100,Mv} from './index'
export default function Content() {
  return (
    <div className="content w-9/12">
      <div className="bg-green-300">
      <SearchBar />
  <Routes>
  <Route path='/ca-nhan' element={<Individual/>}/>
  <Route path='/' element={<Explore/>}/>
  <Route path='/zingchart' element={<Zingchart/>}/>
  <Route path='/radio' element={<Radio/>}/>
  <Route path='/theo-doi' element={<Follow/>}/>
  <Route path='/moi-phat-hanh' element={<NewMusic/>} />
  <Route path='/hub' element={<Type/>} />
  <Route path='/top100' element={<Top100/>}/>
  <Route path='/the-loai-video/Viet-Nam/IWZ9Z08I.html'
  element={<Mv/>} />
  </Routes>
      </div>
    </div>
  );
}