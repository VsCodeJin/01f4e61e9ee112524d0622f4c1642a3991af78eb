import React, { Component } from 'react';

export default Placelist;

function Placelist() {
  const places = [
    { name: 'Kulina', address: 'Jalan Tulodong Atas 26' },
    {
      name: 'Pancoran Riverside Apartment',
      address: 'RT.6/RW.1, Pengadengan, Pancoran',
    },
    { name: 'Jalan Tulodong Atas 28', address: 'Jalan Tulodong Atas 28' },
  ];

  const placeList = places.map((place) => (
    <div>
      <h4 style={{ fontSize: '16px' }}> {place.name}</h4>
      <h4 style={{ fontSize: '16px', color: '#6e7679' }}> {place.address}</h4>
    </div>
  ));

  return <div>{placeList}</div>;
}
