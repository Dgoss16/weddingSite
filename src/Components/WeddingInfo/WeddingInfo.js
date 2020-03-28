import React, { Component } from 'react';
import './WeddingInfo.css';
import InfoPic from '../../Images/IMG_6108.jpg';





export default class Home extends Component {
    render() {
        return (
            <div className='weddingInfoComponent'>
                <div className='weddingInfoTextContainer'>
                    <div className='weddingInfoText'>
                        <img className='weddingInfoPic'src={InfoPic}/>
                        <p className='weddingInfoTitle'>Ceremony & Reception</p>
                            <h4>1:00 PM</h4>
                            <h4>Hickory Hills Golf Course</h4>
                            <h4>E4080 Hickory Rd</h4>
                            <h4>Eau Claire, WI, 54701</h4>
                            <a className='mapLink' href='http://bit.ly/2uu8JTW' target='_blank'><h5><u>View Map</u></h5></a>

                    </div>
                </div>
                    
            </div>

        )
    }
}