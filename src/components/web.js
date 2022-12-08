import React from "react";
import "./web.scss";
import Rive from 'rive-react'

function Web() {
    return (
        <div className="web">

            <div className="animation">
                <Rive src="flutter-animation.riv" stateMachines="birb" />
            </div>

            <div className='content'>

                <h1 className="tittle"> <span className="gradient-text-web"> Web</span> Development</h1>
                <p className="webText">
                    I am a web developer with experience in HTML, CSS, JavaScript, React,
                    I am a fast learner and I am always looking to
                    improve my skills.
                </p>

            </div>


        </div>
    );
}

export default Web;