import './techStack.scss';
import Rive from 'rive-react';

function TechStack() {


    return (
        <section id="socialmedia" >
            <div className="tools">

                <div className="riveAnime">

                    <Rive src="hero_bot.riv" stateMachines="State Machine 1" />
                </div>

                <div className='techStack'>
                    <h1 className='header-text' >

                        TECH STACK
                        &&

                        <span className='gradient-text1'> TOOLS</span>
                    </h1>

                    <div className='logos' >
                        <img className="react-logo" src="react-logo.svg" alt="react" />
                        <img className="flutter-logo" src="flutter-logo.svg" alt="flutter" />
                    </div>

                    <div className="texts">
                        <p className="text">
                            I chose
                            <span className='gradient-text-react'> React </span> and
                            <span className='gradient-text-flutter'> Flutter </span>
                            because they have cool names and blue logos 😎.
                            Just kidding, I chose them because they are the most popular and widely used frameworks in the industry. I also like the fact that they are both open source and have a huge community.
                        </p>
                    </div>


                </div>

            </div>




        </section>
    )

}

export default TechStack;