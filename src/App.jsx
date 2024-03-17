import './App.css';
import Header from './components/Header';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import MyServices from './pages/MyServices';
import Contacts from './pages/Contacts';

function App() {
  const location = useLocation();
  return (
    <>
      <div className='bg-black w-2/3  sm:w-full md:w-full lg:w-4/5 mx-auto'>
        <div className='bg-[url(./assets/charrrr.png)] bg-cover sm:h-screen'>
          <Header />
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/myservices' element={<MyServices />} />
            <Route path='/myservices' element={<MyServices />} />
            <Route path='/contactme' element={<Contacts />} />
          </Routes>
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
