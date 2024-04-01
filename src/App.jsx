import { Routes, Route, useLocation } from 'react-router-dom';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { AnimatePresence } from 'framer-motion';
function App() {
  const location = useLocation();
  return (
    <div className='bg-black bg-[url(./assets/charrrr.png)] bg-cover h-screen w-screen'>
      <AnimatePresence mode='wait' initial={false}>
        <Routes location={location} key={location.key}>
          <Route exact path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
