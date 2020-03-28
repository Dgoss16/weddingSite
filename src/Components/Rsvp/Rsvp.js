import React, { Component } from 'react';
import './Rsvp.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import CommingSoon from '../../Images/comingSoon.png';




export default class Home extends Component {
    render() {
        return (
            <div className='rsvpComponent'>
                <Navbar></Navbar>
                <img className='comingSoonPic' src={CommingSoon}/>
                <div className='rsvpContainer'>
                    <p>RSVP will open once invites have been sent.</p>
                </div>

            <div className='footerContainer'>
                <Footer></Footer>   
            </div>  

            </div>

        )
    }
}