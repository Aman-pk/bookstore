import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import shopiffy from '../Images/shopiffy.png'

function Header(props) {
  return (
    <div style={{ display: "flex", backgroundColor: props.bg, height: "50px",width:"100%"}}>
      <h2 className="logoTitle">LIBRARY</h2>
      <img src={shopiffy} style={{height:"32px",width:"32px",marginTop:"7px"}}/>
      <ul style={{display:"flex",justifyContent:"space-around",width:"85vw"}}>
        <li>
          <Link to="/" className="listItems">
            Home
          </Link>
        </li>

        <li>
          <Link to="/explore" className="listItems">
            Explore
          </Link>
        </li>

        <li>
          <Link to="/about" className="listItems">
            About
          </Link>
        </li>

        <li>
          <Link to="/cart" className="listItems">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;