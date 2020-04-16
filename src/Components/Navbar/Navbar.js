import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className='navbar'>
                <nav>
                    <a href='/#/RSVP'>RSVP</a>
                    <a href=''>|</a>
                    <a href='/#/'>                    DYLAN & HANNAH                    </a>
                </nav>
            </div>
        )
    }
}

export default Navbar;