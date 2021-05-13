import React, { useState } from "react";
import "./Home.css";
import banner from "../Images/banner.jpg";
import banner2 from "../Images/banner2.jpg";
import banner3 from "../Images/banner3.jpg";
import banner4 from "../Images/banner4.png";
import Novel1 from "../Images/Novel1.jpg";
import Novel2 from "../Images/Novel2.jpg";
import novel3 from "../Images/novel3.jpg";
import novel4 from "../Images/novel4.jpg";
import novel5 from "../Images/novel5.jpg";
import novel6 from "../Images/novel6.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Conditions from './Conditions'

function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  };

  const [isOpen, setIsOpen] = useState(true);

  {/* IIFE example */}

  (()=>{
    console.log("IIFE workingg");
  })();

  return (
    <>
      <div className="sliderDiv">
        <Slider {...settings}>
        
          <div>
            <img
              src={banner}
              style={{  width: "100%",height:'300px'  }}
              alt="no img"
            />
          </div>
          <div>
            <img
              src={banner3}
              style={{  width: "100%", height:'300px' }}
              alt="no img"
            />
          </div>
          <div>
            <img
              src={banner4}
              style={{  width: "100%", height:'300px' }}
              alt="no img"
            />
          </div>
          <div>
            <img
              src={banner2}
              style={{  width: "100%", height: '300px' }}
              alt="no img"
            />
          </div>
        </Slider>
      </div>

      <div className="productDiv">
        <div className="outerDiv" >
        <Link className="homeImage" to="/product/1">
          <img className="homeImage" src={Novel1} style={{marginLeft:'-2px', height:'140px'}} />
        </Link>
        <h4 className="titlePro" style={{fontSize:'16px', marginLeft: '43px'}}>The Secret Garden </h4>
        </div>

        <div className="outerDiv" >
        <Link className="homeImage" to="/product/2">
          <img className="homeImage" src={Novel2} style={{marginLeft:'-5px', height:'130px', marginTop:'8px'}} />
        </Link>
        <h4 className="titlePro" style={{fontSize:'16px', marginLeft: '29px'}}>Forbidden Treasure</h4>
        </div>

        <div className="outerDiv" >
        <Link className="homeImage" to="/product/3">
          <img className="homeImage" src={novel3} style={{marginLeft:'-5px', height:'130px', marginTop:'8px'}} />
        </Link>
        <h4  className="titlePro" style={{fontSize:'16px', marginLeft: '29px'}}>You Only Live Once</h4>
        </div>

        <div className="outerDiv" >
        <Link to="/product/4">
          <img className="homeImage" src={novel4} style={{marginLeft:'13px', height:'130px', marginTop:'8px'}}/>
        </Link>
        <h4 className="titlePro" style={{fontSize:'16px', marginLeft: '29px', marginTop:'0px'}}>Ikigai</h4>
        </div>

        <div className="outerDiv">
        <Link to="/product/5">
          <img className="homeImage" src={novel5} style={{marginLeft:'18px', height:'130px', marginTop:'8px'}}/>
        </Link>
        <h4 className="titlePro" style={{fontSize:'16px', marginLeft: '29px', marginTop:'0px'}}>Into the Water</h4>
        </div>

        <div className="outerDiv" >
        <Link to="/product/6">
          <img className="homeImage" src={novel6} style={{marginLeft:'-10px', height:'130px', marginTop:'8px', marginRight:'20px'}} />
        </Link>
        <h4 className="titlePro" style={{fontSize:'16px', marginLeft: '24px', marginTop:'0px'}}>Treasure Island</h4>
        </div>

      </div>

      <Conditions open={isOpen} onClose={() => setIsOpen(false)}/>

      

      <Footer />
    </>
  );
}

export default Home;