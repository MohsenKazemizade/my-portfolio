import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <div className='bg-black 3xl:w-2/3  sm:w-full mx-auto'>
        <div className='bg-[url(./assets/charrrr.png)] bg-cover'>
          <Header />
          <HeroSection />
        </div>
      </div>
    </>
  );
}

export default App;
