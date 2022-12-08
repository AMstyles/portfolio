import React from "react";
import "./flutter.scss";


import Rive from 'rive-react'

function Flutter() {
    return (
        <div className="flutter">

            <div className="content">
                <h1 className="tittle">
                    <span className="gradient-text">Flutter</span> Development.
                </h1>

                <p className="flutterText">
                    I am a full stack excellent <span className="gradient-text">Flutter</span>  developer with 2 years experience in Dart, Flutter, and Firebase.  I am super strong with flutter 💪, I'm talking Dragon Ball Z super saiyan strong.😄
                </p>
                <p className='apps' > I recently redesigned these <a className="appLink" href=""> android </a> and <a className="appLink" href=""> iOS</a>  I also have a lot more cool Flutter Projects on my <a className="appLink" href="'https://github.com/AMstyles'">Github</a></p>

                <div className="platforms">
                    <img className="android" src="android-logo.svg" alt="android" />
                    <img className="apple" src="apple-logo.svg" alt="apple" />
                    <img className="windows" src="windows-logo.svg" alt="android" />
                    <img className="linux" src="linux-logo.svg" alt="android" />
                </div>

            </div>

            <div className="animation">
                <Rive src="flutter-animation.riv" stateMachines="birb" />
            </div>


        </div>
    );
}

export default Flutter;