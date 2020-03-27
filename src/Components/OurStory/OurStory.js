import React, { Component } from 'react';
import './OurStory.css';
import StoryPic from '../../Images/IMG_6338.jpg'






export default class Home extends Component {
    render() {
        return (
            <div className='ourStoryComponent'>
                <div className='ourStoryContainer'>
                    <img className='ourStoryPic' src={StoryPic}/>
                    <div className='ourStoryTitle'>
                        <h2 id='ourStory'>Our Story</h2>
                    </div>
                    <div className='ourStoryTextContainer'>
                            <p className='ourStoryText'>Hannah and Dylan first met when they began working at McDonald's together. They started off with the simple flirting 
                            which eventually led to a first date to see the movie Dirty Grandpa. Afterwards, their first kiss occurred in the parking lot. Nothing really 
                            came out of their first date to which they went their separate ways. Fast forward four years. The two are both out of high school and Hannah has 
                            moved away to Green Bay for college. It was Hannah's 20th birthday and Dylan messaged her to catch up. They spoke for the rest of the night and 
                            then didn't speak again for another three weeks. Dylan had then decided he wanted to see where things could go. The two kept in contact for 
                            another two weeks until Dylan built up the courage to finally ask her out to dinner. Hannah was skeptical of intentions at first but soon agreed. 
                            Dylan then drove from Chippewa Falls to Green Bay to spend the day with Hannah, showing up with flowers. They went out to Lambeau Field and out 
                            to dinner at Olive Garden. The rest was then history, the two became hooked on each other falling in love more and more day by day. Go forward 
                            another ten months and Dylan decides to pack up and move to Green Bay to be with Hannah. The following month, Hannah, Dylan, and Hannah's family 
                            take a trip to Las Vegas, NV, to celebrate Hannah's 21'st birthday. Unknown to Hannah, Dylan has brought along a ring, planning on asking her to 
                            be with him for the rest of their lives'. On August 9th, 2019, in front of the Bellagio Hotel fountains, Dylan asked Hannah to marry him. They are 
                            now planning on tying the knot on June 12th, 2021, at the Hickory Hills Golf Course.</p>
                    </div>

                </div>
                    
            </div>

        )
    }
}