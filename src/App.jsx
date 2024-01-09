import { useState } from 'react';
import './App.css';
import char from './assets/charector.png';
import linkedinIcon from './assets/linkedin.svg';
import instagram from './assets/instagram.svg';
import github from './assets/github.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='bg-black flex flex-row justify-center w-full'>
        <div className='bg-black w-[1440px] h-[1024px]'>
          <div className='relative h-[1024px] bg-[url(./assets/charrrr.png)] bg-cover bg-[50%_50%]'>
            <div className="absolute w-[188px] top-[43px] left-[54px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[normal]">
              Maison Cuz
            </div>
            <div className='flex w-[407px] items-center gap-[64px] absolute top-[44px] left-[752px]'>
              <div className='inline-flex items-start gap-[48px] relative flex-[0_0_auto]'>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-color-2 text-[18px] tracking-[0] leading-[normal]">
                  Home
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-color-2 text-[18px] tracking-[0] leading-[normal]">
                  Projects
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-color-2 text-[18px] tracking-[0] leading-[normal]">
                  About
                </div>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-color-2 text-[18px] tracking-[0] leading-[normal]">
                  Contacts
                </div>
              </div>
              <div className='relative flex-[0_0_auto] mr-[-88.00px]' />
            </div>
            <img
              className='absolute w-[30px] h-[29px] top-[43px] left-[1234px]'
              alt='Prime github'
              src={github}
            />
            <img
              className='absolute w-[24px] h-[24px] top-[45px] left-[1283px]'
              alt='Akar icons linkedin'
              src={linkedinIcon}
            />
            <img
              className='absolute w-[24px] h-[24px] top-[46px] left-[1191px]'
              alt='Instagram'
              src={instagram}
            />
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
                  className='absolute w-[861px] h-[898px] top-0 left-[489px] object-cover'
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
