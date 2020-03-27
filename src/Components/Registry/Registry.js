import React, { Component } from 'react';
import './Registry.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import AmazonLogo from '../../Images/amazon-logo-png-5.png';
import KholsLogo from '../../Images/kholsLogo.png';




export default class Home extends Component {
    render() {
        return (
            <div className='registryComponent'>
                <Navbar/>
                <div className='registryComponentTitleConatiner'>
                    <h1 className='title'>These are places we have registered with:</h1>
                </div>

                <div className='registryComponentIconsContainer'>
                    <a href='https://amzn.to/36reijh' target='_blank'><img className='amazonLogo' src={AmazonLogo}></img></a>
                    <a href='#' target='_blank'><img className='kholsLogo' src={KholsLogo}></img></a>
                </div>

                <div className='footerContainer'>
                    <Footer></Footer>       
                </div>         
            </div>

        )
    }
}