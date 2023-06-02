
import "../css/toogle.css"
import { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "./DarkModeProvider";


export default function Toggle() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    
    const [toggle, movetoggle] = useState(() => {
      const savedToggle = localStorage.getItem('toggle');
      return savedToggle ? JSON.parse(savedToggle) : true;
    });
  
    useEffect(() => {
      localStorage.setItem('toggle', JSON.stringify(toggle));
    }, [toggle]);

  
    console.log(darkMode);
    return (
        <div className="container" onClick={() => movetoggle(!toggle)}>
        <div className="btn1_container" onClick={() => toggleDarkMode()}>
          <div className="flipBtn">
            <div className={`${toggle ? 'btn' : 'btn move'}`}></div>
          </div>
          <span className={`${toggle ? 'circle' : 'circle expand'}`}></span>
        </div>
      </div>
    );
  }
