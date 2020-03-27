import React, { Component } from 'react';
import './Home.css';
import Slider from '../Slideshow/Slider';
import Navbar from '../Navbar/Navbar';
import WeddingInfo from '../WeddingInfo/WeddingInfo';
import OurStory from '../OurStory/OurStory';
import Footer from '../Footer/Footer';




export default class Home extends Component {
    render() {
        return (
            <div className='homeComponent'>
                <Navbar/>
                <div>
                <div>
                    <div className='slideShowContainer'>
                        <Slider/>
                        <div className='slideShowTextContainer'>
                            <div className='homeText' id='home'>
                                We're Engaged!
                            </div>

                            <div className='homeText2'>
                                Tying the knot June 12th, 2021
                            </div>
                        </div>
                    </div>
                        <WeddingInfo></WeddingInfo>
                        <OurStory></OurStory>
                        <Footer></Footer>
                    </div>
                    </div>
                    
            </div>

        )
    }
}