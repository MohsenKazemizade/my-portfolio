import { useState } from 'react';
import './App.css';
import char from './assets/charector.png';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='bg-black flex flex-row justify-center w-full'>
        <div className='bg-black w-[1440px] h-[1024px]'>
          <div className='relative h-[1024px] bg-[url(./assets/charrrr.png)] bg-cover bg-[50%_50%]'>
            <Header />

            <div className='absolute w-[1350px] h-[898px] top-[100px] left-[90px]'>
              <p className="absolute top-[229px] left-[12px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
                Hi , my name is Maison,
              </p>
              <div className='absolute w-[285px] h-[82px] top-[707px] left-[10px]'>
                <div className="absolute underline underline-offset-[8px] [font-family:'Poppins-ExtraBold',Helvetica] font-extrabold text-white text-[26px]">
                  View My Projects
                </div>
              </div>
              <div className='absolute w-[1350px] h-[898px] top-0 left-0'>
                <div className='inline-flex items-start gap-[10px] p-[10px] absolute top-[272px] left-0'>
                  <div className="relative w-[523px] h-[298px] mt-[-1.00px] [font-family:'Poppins-Bold',Helvetica] font-bold text-color-2 text-[96px] tracking-[0] leading-">
                    I’M A WEB Developer
                  </div>
                </div>
                <div className='flex w-[479px] items-start absolute top-[494px] left-[10px]'>
                  <p className="relative w-[469px] mt-[-1.00px] mr-[-10.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#f8f7f980] text-[24px] tracking-[0] leading-[normal]">
                    Skilled React Developer, focused on user-centric, responsive
                    web solutions. Adept in JavaScript and React, passionate
                    about innovation and collaborative growth.
                  </p>
                </div>
                <img
                  className='absolute w-[861px] h-[898px] top-0 left-[450px] object-cover'
                  alt='Untitled design'
                  src={char}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
