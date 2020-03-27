import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className='footer'>
                    <div className='copyright'>
                        <div>
                            <p>Images by <a className='photosLink' href='http://bit.ly/30NZcmV' target='_blank'><u>Crystal Roberts Photography</u></a></p>
                        <div className='copyrightText'><p>&copy; 2020 by Dylan Goss</p></div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Footer;