import React, { Component } from 'react';
import SlideOne from './SlideOne';
import SlideTwo from './SlideTwo';
import SlideThree from './SlideThree';


export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1,
      intervalId: ''
    }
      this.moveSlide = this.moveSlide.bind(this);
  }

  moveSlide() {
    if(this.state.slideCount + 1 > 3) {
      this.setState({
        slideCount: 1
      }) 
    } else {
      this.setState({
        slideCount: this.state.slideCount + 1
      })
    }
  }

  componentDidMount() {
    let intervalId = setInterval(this.moveSlide, 5000);
    this.setState({
      intervalId: intervalId
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div className="slider">
        { this.state.slideCount === 1 ? <SlideOne/> : null }
        { this.state.slideCount === 2 ? <SlideTwo/> : null }
        { this.state.slideCount === 3 ? <SlideThree/> : null }
      </div>
    );
  }
}