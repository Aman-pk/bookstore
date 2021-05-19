import React from "react";
import { useParams } from "react-router-dom";
import "./Cart.css";
import UpdatedComp from "./Hoc/withCounter";
import Novel1 from "../Images/Novel1.jpg";
import Novel2 from "../Images/Novel2.jpg";
import novel3 from "../Images/novel3.jpg";
import novel4 from "../Images/novel4.jpg";
import novel5 from "../Images/novel5.jpg";
import novel6 from "../Images/novel6.jpg";

function Cart(props) {
  const { path } = useParams();

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {path && path == "1" ? (
          <>
            <div style={{ display: "flex" }}>
              <img className="imgSize" src={Novel1} />
            </div>
            <div style={{ width: "400px",fontSize:"0.8rem",paddingTop:"20px" }}>
              <h2 className="title">The Secret Garden</h2>
              
              <div>
                <h3 className="mt-10"> ₹499</h3>
              </div>

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
              <h2>Total: ₹{props.count*499}</h2>

              
            </div>
          </>
        ) : (
          ""
        )}
        {path && path == "2" ? (
          <>
            <div style={{ display: "flex" }}>
              <img className="imgSize" src={Novel2} />
            </div>
            <div style={{ width: "400px",paddingTop:"20px",fontSize:"0.8em"}}>
              <h2 >Calvin Klein Eternity Now For Women Eau De Parfum</h2>
              
              <div>
                <h3 className="mt-10"> ₹1299</h3>
              </div>

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
              <h2>Total: ₹{props.count*1299}</h2>
            </div>
          </>
        ) : (
          ""
        )}
        {path && path == "3" ? (
          <>
            <div style={{ display: "flex" }}>
              <img className="imgSize" src={novel3} />
            </div>
            <div style={{ width: "400px",paddingTop:"20px",fontSize:"0.8rem"}}>
              <h2>Tommy Hilfiger Deodorants</h2>
              
              <div>
                <h3 className="mt-10"> ₹2999</h3>
              </div>

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
              <h2>Total: ₹{props.count*2999}</h2>
            </div>
          </>
        ) : (
          ""
        )}
        {path && path == "4" ? (
          <>
            <div style={{ display: "flex" }}>
              <img className="imgSize" src={novel4} />
            </div>
            <div style={{ width: "400px",paddingTop:"20px",fontSize:"0.8rem"}}>
              <h2>Jaguar Classic Black Eau De Toilette, 100 ml</h2>
              
              <div>
                <h3 className="mt-10"> ₹1499</h3>
              </div>

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
              <h2>Total: ₹{props.count*1499}</h2>
            </div>
          </>
        ) : (
          ""
        )}
        {path && path == "5" ? (
          <>
            <div style={{ display: "flex" }}>
              <img className="imgSize" src={novel5} />
            </div>
            <div style={{ width: "400px",paddingTop:"20px",fontSize:"0.8rem"}}>
              <h2>
                THE MAN COMPANY Body Perfume Trio (Blanc, Rouge and Bleu )
              </h2>
              
              <div>
                <h3 className="mt-10"> ₹4999</h3>
              </div>

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
              <h2>Total: ₹{props.count*4999}</h2>
            </div>
          </>
        ) : (
          ""
        )}
        {path && path == "6" ? (
          <>
            <div style={{ display: "flex" }}>
              <img className="imgSize" src={novel6} />
            </div>
            <div style={{ width: "400px",paddingTop:"20px",fontSize:"0.8rem"}}>
              <h2>DAVIDOFF Cool Water Eau de Toilette Man 125ml</h2>
              
              <div>
                <h3 className="mt-10"> ₹2699</h3>
              </div>

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
              <h2>Total: ₹{props.count*2699}</h2>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default UpdatedComp(Cart);