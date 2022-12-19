import './App.scss';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Web from './components/web';
import Flutter from './components/flutter';
import Footer from './components/footer';
import TechStack from './components/techStack';
import Games from './components/games/games';
import { Parallax, ParallaxLayer, parallaxLayer } from '@react-spring/parallax';

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


      <NavBar />
      <Home />
      <TechStack />
      <Services />
      <Games />
      <Footer />

    </div>
  );
}

export default App;
