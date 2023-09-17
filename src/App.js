import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/styles/App.css';
import Menu from './components/menu';
import BurgerMenu from './components/burger_menu';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Presentation from './pages/Presentation';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

import { Outlet } from "react-router-dom";
import Services from './pages/Services';




function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="App">
          {windowWidth > 820 ? (<Menu></Menu>
          ) : (
            <BurgerMenu></BurgerMenu>)}
          <Outlet />
        </div>
        }>
          <Route index element={<Home />} />
          <Route path="about-me" element={<Presentation />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="skills" element={<Skills />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
