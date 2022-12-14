import React from "react";
import './Home.scss';
import { useRive } from "rive-react";

export default function Home() {

    const { rive, RiveComponent } = useRive({
        src: 'sign_up_now.riv',
        autoplay: true,
        stateMachines: 'State Machine 1'

    })


    return (
        <div className="home">
            <section id="home">
                <div className="main">
                    <h1 className="headings"> I  AM</h1>
                    <h1 className="headings"> <span className="gradient-text-home1" >ARINAHO MULEBA </span></h1>
                    <p> Like my work, wanna hire me?</p>

                    {/* <button className="btn">
                        Hire me
                    </button> */}
                    <div className="animation" onClick={() => { console.log('You\'re hired') }}>
                        <a href="mailto:arinaomuleluz@gmail.com">
                            <RiveComponent />
                        </a>

                    </div>
                </div>
            </section>
        </div>
    )
}