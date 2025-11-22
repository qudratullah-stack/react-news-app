import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const [txtMode, settxtMode] = useState("Dark Mode");
  const [three_dot ,setthree_dot] = useState(false)
  const toggle_btn = ()=>{
    setthree_dot(!three_dot)
  }
  useEffect(() => {
    if (props.mode === false) {
      settxtMode("Dark Mode");
    } else {
      settxtMode("Light Mode");
    }
  }, [props.mode]);
  return (
    <>
      <div className='navbar' style={props.style}>
       <p>Welcome  News</p>
        <nav className= {`nav ${three_dot?'active':''}`}>
        <ul>
          
      <li> <Link to="/sports">Sports</Link></li>
       
       <li><Link to="/technology">Technology</Link></li>
       <li><Link to="/business">Business</Link></li>
       <li><Link to="/health">Health</Link></li>
       <li><Link to="/general">General</Link></li>
       <li><Link to="/entertainment">Entertainment</Link></li>
       <li><Link to="/science">Science</Link></li>

         
        </ul>
        </nav>
        {<button id="navbar_btn" onClick={props.toggleMode}>{txtMode}</button> }
        <button id="link_toggle_btn" onClick={toggle_btn}>&#9776;</button>

      </div>
    </>
  );
}
