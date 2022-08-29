import {useEffect, useState} from 'react';
function UiCreatePlayList({setNavLeftModifile}){ 
    const[buttonModifile,setButtonModifile]=useState(1);
    //1:right 0:left
   useEffect( ()=>{
    window.onresize=()=>{
    if(buttonModifile==0){
setNavLeftModifile(1);
       setButtonModifile(1);
    }
      
  }
})
    var handelClickRight=(e)=>{
        const windowWidth=window.innerWidth;
            if(windowWidth<=1123){
                setNavLeftModifile(prev=>!prev);
                setButtonModifile(prev=>!prev);
            }
            else{
        
            }
           
        }

    return <div onClick={handelClickRight} className="createPlayList">
        <div>
        <i className="fa-solid fa-plus"></i>
        Tạo playlist mới
        </div>
        <i  className={"createPlayList_right fa-solid fa-chevron-"+(buttonModifile?'right':'left')}></i>
    </div>;
}
export default UiCreatePlayList;
