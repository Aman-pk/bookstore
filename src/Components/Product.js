import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Product.css";
import Novel1 from "../Images/Novel1.jpg";
import Novel2 from "../Images/Novel2.jpg";
import novel3 from "../Images/novel3.jpg";
import novel4 from "../Images/novel4.jpg";
import novel5 from "../Images/novel5.jpg";
import novel6 from "../Images/novel6.jpg";

import UpdatedComp from "./Hoc/withCounter";
import AddToCart from "./AddToCart";

function Product(props) {
  const { id } = useParams();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {id && id == "1" ? (
          <>
            <div style={{ display: "flex", height:230, marginTop:68 }}>
              <img src={Novel1} />
            </div>
            <div style={{ width: "400px", paddingTop: "54px", marginLeft:20 }}>
              <h2>The Secret Garden</h2>
              <p className="mt-10">
                This item is returnable. Item can be return within 5 days after delivery.
              </p>
              <div>
                <h3 className="mt-10"> ₹399</h3>
              </div>

              <button className="addButton" onClick={() => setIsOpen(true)}>
                Add To Cart
              </button>
              <div className="dialogBox">
              <AddToCart open={isOpen} onClose={() => setIsOpen(false)} />
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
            </div>
          </>
        ) : (
          ""
        )}
        {id && id == "2" ? (
          <>
            <div style={{ display: "flex", height:230, marginTop:83 }}>
              <img src={Novel2} />
            </div>
            <div style={{ width: "400px", paddingTop: "54px", marginLeft:20 }}>
              <h2>The Patriots Legacy: Forbidden Treasure</h2>
              <p className="mt-10">
              This item is returnable. Item can be return within 5 days after delivery.
              </p>
              <div>
                <h3 className="mt-10"> ₹499</h3>
              </div>

              <button className="addButton" onClick={() => setIsOpen(true)}>
                Add To Cart
              </button>
              <AddToCart open={isOpen} onClose={() => setIsOpen(false)} />

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {id && id == "3" ? (
          <>
            <div style={{ display: "flex", height:250, marginTop:82 }}>
              <img src={novel3} />
            </div>
            <div style={{ width: "400px", paddingTop: "54px", marginLeft:20 }}>
              <h2>You Only Live Once: One for Passion Two for Love Three for Friendship</h2>
              <p className="mt-10">
              This item is returnable. Item can be return within 5 days after delivery.
              </p>
              <div>
                <h3 className="mt-10"> ₹299</h3>
              </div>

              <button className="addButton" onClick={() => setIsOpen(true)}>
                Add To Cart
              </button>
              <AddToCart open={isOpen} onClose={() => setIsOpen(false)} />

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {id && id == "4" ? (
          <>
            <div style={{ display: "flex", height:240, marginTop:80 }}>
              <img src={novel4} />
            </div>
            <div style={{ width: "400px", paddingTop: "54px", marginLeft:20 }}>
              <h2>Ikigai: The Japanese secret to a long and happy life</h2>
              <p className="mt-10">
              This item is returnable. Item can be return within 5 days after delivery. 
              </p>
              <div>
                <h3 className="mt-10"> ₹699</h3>
              </div>

              <button className="addButton" onClick={() => setIsOpen(true)}>
                Add To Cart
              </button>
              <AddToCart open={isOpen} onClose={() => setIsOpen(false)} />

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {id && id == "5" ? (
          <>
            <div style={{ display: "flex", height:230, marginTop:82 }}>
              <img src={novel5} />
            </div>
            <div style={{ width: "400px", paddingTop: "54px", marginLeft:20 }}>
              <h2>
              Into the Water
              </h2>
              <p className="mt-10">
              This item is returnable. Item can be return within 5 days after delivery.
              </p>
              <div>
                <h3 className="mt-10"> ₹499</h3>
              </div>

              <button className="addButton" onClick={() => setIsOpen(true)}>
                Add To Cart
              </button>
              <AddToCart open={isOpen} onClose={() => setIsOpen(false)} />

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {id && id == "6" ? (
          <>
            <div style={{ display: "flex", height:230, marginTop:68 }}>
              <img src={novel6} />
            </div>
            <div style={{ width: "400px", paddingTop: "54px", marginLeft:20 }}>
              <h2>Treasure Island</h2>
              <p className="mt-10">
              This item is returnable. Item can be return within 5 days after delivery.
              </p>
              <div>
                <h3 className="mt-10"> ₹299</h3>
              </div>

              <button className="addButton" onClick={() => setIsOpen(true)}>
                Add To Cart
              </button>
              <AddToCart open={isOpen} onClose={() => setIsOpen(false)} />

              <div className="buttonsDiv">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {/* {id && id == "7" ? (
          <>
            <div style={{ display: "flex" }}>
              <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/11/24/6defa6b9-4b5b-440d-90a5-053ddc7f39371543028521322-1.jpg" />
            </div>
            <div style={{ width: "400px", paddingTop: "54px" }}>
              <h2>Calvin Klein One Unisex EDT, 200ml</h2>
              <p className="mt-10">
                This item is not returnable. Items like outer-wear, personal
                care, make-up, socks and certain accessories do not come under
                our return policy.
              </p>
              <div>
                <h3 className="mt-10"> ₹2999</h3>
              </div>

              <button className="addButton" onClick={() => setIsOpen(true)}>
                Add To Cart
              </button>
              <AddToCart open={isOpen} onClose={() => setIsOpen(false)} />

              <div className="buttonsDiv ">
                <button onClick={props.decrementCount} className="cartButtons">
                  -
                </button>
                <p className="counter">{props.count}</p>
                <button onClick={props.incrementCount} className="cartButtons">
                  +
                </button>
              </div>
            </div>
          </>
        ) : (
          ""
        )} */}
      </div>
    </>
  );
}

export default UpdatedComp(Product);