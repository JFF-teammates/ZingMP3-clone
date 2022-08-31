import {useState,createContext} from "react";
import ListIteamTop from "./navLeftComponent/listItem/ListIteamTop";
import ListIteamBottom from "./navLeftComponent/listItem/ListIteamBottom";
import UiCreatePlayList from "./navLeftComponent/createPlayList/UiCreatePlayList";
export const SetPath=createContext();
export default function NavLeft(props) {
    const [seperate,setSeperate]=useState(0);
    const [navLeftModifile,setNavLeftModifile]=useState(1);
  const [currentPath,setCurrentPath]=useState(window.location.pathname);

  return (<SetPath.Provider value={[currentPath,setCurrentPath]}>
  <div  className={"nav-left w-56"+(
  navLeftModifile?" nav-left--close":'')}>
        
        <div className="nav-left__item">
           <a href="#"className='logoWeb'></a>
       <ListIteamTop  />
       <div className={'listBottomRoute--seperate '+(seperate?'':'unBox')}></div>

       <ListIteamBottom  setSeperate={setSeperate}/>
       <UiCreatePlayList setNavLeftModifile={setNavLeftModifile}/>
        </div>
        </div>
        </SetPath.Provider>);
}