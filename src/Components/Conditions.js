import React from "react";
import ReactDOM from "react-dom";
import './Conditions.css'

function AddToCart({open,onClose}) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div>
      <div className="outermostDiv">
        <div style={{display:"flex"}}>
          <p style={{fontSize:"12px",fontWeight:"500", }}>Disclaimer: Pricing and Delivery Date on any product as is reflected on the Platform may due to Covid-19.</p>
          <button style={{ marginLeft: "25px",height:"10px",width:"10px",backgroundColor:"white",border:"1px solid rgb(235 235 235)",borderRadius:"10px"}} onClick={onClose}>
            <p style={{marginLeft:"-4px",marginTop:"-2px"}}>X</p>
          </button>
        </div>
      </div>


    </div>,
    document.getElementById("condition")
  );
}

export default AddToCart;