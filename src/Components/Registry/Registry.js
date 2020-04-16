import React, { Component } from 'react';
import './Registry.css';
import Navbar from '../Navbar/Navbar';
import AmazonLogo from '../../Images/amazon-logo-png-5.png';
import BedBathLogo from '../../Images/bedbathandbeyondLogo.png';
import TargetLogo from '../../Images/targetLogo.png';




export default class Registry extends Component {
    render() {
        return (
            <div className='registryComponent'>
                <Navbar/>
                <div className='registryComponentTitleConatiner'>
                    <p className='title'>Click an image below for places we've registered with:</p>
                </div>

                <div className='registryComponentIconsContainer'>
                    <a href='https://amzn.to/36reijh' target='_blank'><img className='amazonLogo' src={AmazonLogo}></img></a>
                    <a href='https://bit.ly/2WMEFza' target='_blank'><img className='bedbathbeyondLogo' src={BedBathLogo}></img></a>
                    <a href='https://bit.ly/2wI5GJs' target='_blank'><img className='targetLogo' src={TargetLogo}></img></a>
                </div>        
            </div>

        )
    }
}
