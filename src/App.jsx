import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Home from './pages/Home';
function App() {
  const location = useLocation();
  return (
    <>
      <div className='bg-black w-2/3 sm:w-full md:w-full lg:w-4/5 mx-auto rounded-lg'>
        <div className='bg-[url(./assets/charrrr.png)] bg-cover sm:h-screen rounded-sm'>
          <NavBar />
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
