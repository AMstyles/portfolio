import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Rive from 'rive-react';
import Web from './components/web';
import Flutter from './components/flutter';
import Footer from './components/footer';



function Rive1() {


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
              And also because I need money to pay for my bills and food🥲.By bills and food I mean my wife's G-Wagon. 🚙

            </p>
          </div>


        </div>

      </div>




    </section>
  )
}

function Services() {
  return (
    <section id="services">
      <>
        <Web />
        <Flutter />
      </>

    </section>
  )
}


function App() {
  return (


    <div className="App">
      <body className='body'>
        <NavBar />
        <Home />
        <Rive1 />
        <Services />
        <Footer />
      </body>
    </div>
  );
}

export default App;
