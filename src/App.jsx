import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Languages from './components/Languages';
import JewelleryStoreDetails from './components/JewelleryStoreDetails';
import SendItDetails from './components/SendItDetails';
import { WelcomeAnimation } from './components/TextAnimation';
import './index.css';

const App = () => {
  const [showWelcomeAnimation, setShowWelcomeAnimation] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setShowWelcomeAnimation(false);
        document.body.style.overflow = 'auto';
      }, 1250);
    }, 6500);

    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);


  return (
    <Router>
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
        {showWelcomeAnimation && (
          <div>
            <div className='fixed top-0 -z-10 h-full w-full'>
            <div className="relative h-full w-full bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
            
          </div>
            <div className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-1250 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
              <span className='WelcomeTitle bg-gradient-to-r pt-4 from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl lg:text-7xl text-transparent'>
                <WelcomeAnimation />
              </span>
            </div>
          </div>
        )}
        {!showWelcomeAnimation && (
          <div className='fixed top-0 -z-10 h-full w-full'>
              <div className="relative h-full w-full bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>
          </div>
        )}
        <div className='container mx-auto px-8'>
          <Navbar />
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <Experience />
              <Education />
              <Technologies />
              <Projects />
              <Languages />
              <About />
              <Contact />
            </>} />
            <Route path='/' element={<Navbar />} />
            <Route path='/projects/jewellery-store' element={<JewelleryStoreDetails />} />
            <Route path='/projects/send-it' element={<SendItDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
