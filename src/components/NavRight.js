import React, { useState } from "react";
import MenuTop from "./navRightComponent/MenuTop";
export default function NavRight(props) {
   const [focusList,setFocusList]=useState(1);
    return (
        <div className="nav-right w-64">
        <div className="nav-right__item">
           <MenuTop ArrFocusList={[focusList,setFocusList]}/> 
        </div>
        </div>
    );
}