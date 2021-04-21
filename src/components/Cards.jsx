import React, { Component } from 'react';
import Card from './CardsUI';
import img1 from '../assets/Roasted Chicken.jpeg';
import img2 from '../assets/Kwetiau.jpg';
import img3 from '../assets/Bento.jpg';
import img4 from '../assets/Bento 2.jpg';

//Cards View
class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="column">
          <div className="row-md-4" style={{ width: '375px' }}>
            <Card imgsrc={img1} title="Roasted Chicken with Scrambled Egg" />
          </div>
          <div className="row-md-4" style={{ width: '375px' }}>
            <Card imgsrc={img2} title="Fried Broad Noodles" />
          </div>
          <div className="row-md-4" style={{ width: '375px' }}>
            <Card imgsrc={img3} title="Japanese Style Bento" />
          </div>
          <div className="row-md-4 " style={{ width: '375px' }}>
            <Card imgsrc={img4} title="Japanese Style Bento 2" />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
