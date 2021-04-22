import React, { Component } from 'react';
import './card-style.css';
import Star from '../assets/star2.png';

//Inside of Card
const Card = (props) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="pic" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <div className="flex">
          <h4 className="card-rating text-left">4.5</h4>
          <img src={Star} alt="star" className="star" />
        </div>
        <h4 className="card-title text-left">{props.title}</h4>
        <h4 className="card-desc text-left">by Kulina ·Uptown Lunch</h4>
        <div className="flex text">
          <p className="card-text text-secondary float-down">Rp 35.0000</p>
          <a href="#" className="btn" onClick={() => console.log('test')}>
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
