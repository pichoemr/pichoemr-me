import React, { useState, useEffect } from 'react';
import './assets/styles/App.css';
import Menu from './components/menu';
import BurgerMenu from './components/burger_menu';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Presentation from './pages/Presentation';
import Skills from './pages/Skills';



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
    <div className="App">
      {windowWidth > 800 ? (<Menu></Menu>
      ) : (
        <BurgerMenu></BurgerMenu>)}
      <Home></Home>
      <Presentation></Presentation>
      <Experiences></Experiences>
      <Skills></Skills>
    </div>
  );
}

export default App;
