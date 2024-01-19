import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <div className='bg-black w-2/3  sm:w-full md:w-full lg:w-4/5 mx-auto'>
        <div className='bg-[url(./assets/charrrr.png)] bg-cover sm:h-screen'>
          <Header />
          <HeroSection />
        </div>
      </div>
    </>
  );
}

export default App;
