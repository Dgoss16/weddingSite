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
                        <h1 id='ourStory'>Their Story</h1>
                    </div>
                    <div className='ourStoryTextContainer'>
                            <p className='ourStoryText'>Dylan and Hannah first met working at McDonalds in Chippewa Falls, WI. Simple flirting progressed 
                            into their first date at Oakwood Mall to see Dirty Grandpa. After the movie, they shared their first kiss. They then went their 
                            separate ways. Fast forward three years, Hannah has moved to Green Bay for college. On Hannah’s 20th birthday, Dylan messaged 
                            her to catch up. He then decided he wanted to see where things could go. The two kept in contact for two weeks before Dylan 
                            built up the courage to finally ask her to dinner. Hannah was skeptical at first due to the distance but agreed. They went out 
                            to Lambeau Field and then Olive Garden. The rest was then history. The two became hooked on each other, falling more in love 
                            every day. Ten months later, Dylan packed up and moved to Green Bay. The following month Hannah, Dylan, and her family take a 
                            trip to Las Vegas, NV to celebrate Hannah’s 21st birthday.  Unknown to Hannah, Dylan had brought along a ring and a plan to ask 
                            her to marry him. On August 9th, 2019, in front of the Bellagio Hotel fountains, Dylan asked Hannah to marry him. They are now 
                            tying the knot on June 12th, 2021 at Hickory Hills Golf Course.</p>
                    </div>

                </div>
                    
            </div>

        )
    }
}