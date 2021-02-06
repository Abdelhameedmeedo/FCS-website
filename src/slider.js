import React from 'react';
import './slider.css';
import joker1 from './joker1.jpg';    //joker image
const   Slider = (props)=>{
  return(
    <div className="slide">
      <div className="container">
          <img src={joker1}/> 
      </div>
    </div>
  )
}
export default Slider