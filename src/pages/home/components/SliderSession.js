import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import { Link } from "react-router-dom";

export const SliderSession = () => {

    let settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      }

  return (
    <Container>
      <Carousel {...settings}>
     
        <div className="slider-one">
            <p style={{fontSize: '48px'}}>Innovative ways <br />
                <span style={{fontWeight: 'bold'}}>
                  Perfect Results!
                </span>
            </p>
           <div>
              <Link to="#">About Us</Link>
           </div>
        </div>
        <div className="slider-two">
            <p style={{fontSize: '48px'}}>Everything starts with a <br />
                    <span style={{fontWeight: 'bold'}}>
                      Great Solution
            </span>
            </p>
            <div>
              <Link to="#">About Us</Link>
           </div>
        </div>
        <div className="slider-three">
            <p style={{fontSize: '48px'}}> The best IT Company for<br />
                      <span style={{fontWeight: 'bold'}}>
                        Your Business
                      </span>
              </p>
              <div>
              <Link to="#">About Us</Link>
           </div>
        </div>
     
    </Carousel> 
  </Container>
  )
}




export const Container = styled.div`
  /* border: 3px solid orange; */
  overflow-x: hidden;

  @media screen and (max-width: 579px) {
      display: none;
    }
`

export const Carousel = styled(Slider)`
font-family: 'Montserrat', sans-serif;
  
  button {
    border: 3px solid red;
    z-index: 1;
  }

  color: white;
   .slider-one {
     
      height: 100%;
      width: 100%;
      /* border: 10px solid transparent; */
      /* height: 50vh; */
      background-image:linear-gradient(90deg, #0077B5 12.91%, rgba(0, 119, 181, 0) 62.75%), url(./assets/slider.png);
      background-repeat: no-repeat;
      background-size: cover;
      color: white;
      padding-bottom: 140px;
   }

   .slider-two {
      /* height: 50vh; */
      background-image: linear-gradient(90deg, #0077B5 12.91%, rgba(0, 119, 181, 0) 62.75%), url(./assets/slider2.png);
      background-repeat: no-repeat;
      padding-bottom: 140px;
      background-size: cover;
   }
   .slider-three {
      /* height: 50vh; */
      background-image:linear-gradient(90deg, #0077B5 12.91%, rgba(0, 119, 181, 0) 62.75%), url(./assets/slider3.png);
      background-repeat: no-repeat;
      background-size: cover;
      padding-bottom: 140px;
   }

   .slider-one p, .slider-two p, .slider-three p {
    margin-top: 139px;
    padding: 0 4.5rem;
   }  

   .slider-one div, .slider-two div, .slider-three div   {
     margin: 0 4.5rem;
     display: inline-block;
     padding: 16px 28px;
     background-color: #fff;
     box-shadow: 4px 24px 45px -12px rgba(0, 119, 181, 0.25);
     border-radius: 10px;
   }

   .slider-one a, .slider-two a, .slider-three a{
     text-decoration: none;
     color: #0077B5;
     font-weight: 600;
   }


`