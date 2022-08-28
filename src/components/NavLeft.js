import {useState} from "react";
import ListIteamTop from "./navLeftComponent/listItem/ListIteamTop";
import ListIteamBottom from "./navLeftComponent/listItem/ListIteamBottom";
import UiCreatePlayList from "./navLeftComponent/createPlayList/UiCreatePlayList";
export default function NavLeft(props) {
    const [seperate,setSeperate]=useState(0);
  
  return (<div  className="nav-left w-56">
        <div className="nav-left__item">
           <a href="#"className='logoWeb'></a>
       <ListIteamTop />
       <div className={'listBottomRoute--seperate '+(seperate?'':'unBox')}></div>

       <ListIteamBottom setSeperate={setSeperate}/>
       <UiCreatePlayList/>
        </div>
        </div>
    );
}