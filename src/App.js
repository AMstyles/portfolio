import './App.scss';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Web from './components/web';
import Flutter from './components/flutter';
import Footer from './components/footer';
import TechStack from './components/techStack';
import Games from './components/games/games';

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
        <TechStack />
        <Services />
        <Games />
        <Footer />
      </body>
    </div>
  );
}

export default App;
