import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home'
import Navbar from './components/Navbar/ReactNavbar';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import GalxyPage from './pages/galaxy/galaxy';
import HistoryPage from './pages/history/history'

const App = () => {
  const particlesInit = useCallback(async (engine) => { await loadFull(engine);}, []);
  const particlesLoaded = useCallback(async (container) => { console.log(container); }, []);

  return (
    <div>
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#05050b",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 70,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
      <Navbar/>
      <Router>
        <Fragment>
        <Routes>
            <Route exact path='/galaxywebsite/' element={<Home/>} />
            <Route exact path='/galaxywebsite/galaxy' element={<GalxyPage/>}/>
            <Route exact path='/galaxywebsite/history' element={<HistoryPage/>}/>
        </Routes>
      </Fragment>
      </Router>
    </div>
  );
}

export default App;
