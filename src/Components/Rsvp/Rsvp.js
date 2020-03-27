import React, { Component } from 'react';
import './Rsvp.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'




export default class Home extends Component {
    render() {
        return (
            <div className='rsvpComponent'>
                <Navbar/>
                <div className='rsvpContainer'>
                    <p>RSVP will open once</p>
                    <p>&emsp;invites have been sent.</p>
                </div>

            <div className='footerContainer'>
                <Footer></Footer>   
            </div>  

            </div>

        )
    }
}