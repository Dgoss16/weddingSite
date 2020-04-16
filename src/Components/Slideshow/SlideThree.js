import React, { Component } from 'react';
import Background from '../../Images/IMG_6361-min.jpg';

const SlideOne= (props) => {
    let background = {
        backgroundImage: 'url(' + Background + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        width: '100%'
    }

  return <div style={ background } className="slide"></div>
}

export default SlideOne;