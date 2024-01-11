import linkedinIcon from '../assets/linkedin.svg';
import { useState } from 'react';
import instagram from '../assets/instagram.svg';
import github from '../assets/github.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className='flex flex-row sm:pb-4 sm:flex-col py-10 sm:p-0 md:py-8 md:px-8 px-14 lg:px-10 '>
      <div className='sm:flex sm:items-center sm:flex-row sm:justify-between lg:basis-2/5 sm:p-6 xl:basis-1/2 2xl:basis-1/2 3xl:basis-1/2 md:basis-2/5'>
        <div className="ml-6 sm:text-[20px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[24px] lg:text-[20px] md:text-[18px] tracking-[0] leading-[normal]">
          Maison Cuz
        </div>
        <button
          onClick={handleClick}
          className='hidden sm:flex flex-col justify-center items-center border-none bg-transparent focus:outline-none'
        >
          <span
            className={`bg-white block transition-all duration-400 ease-out 
                    h-1 w-6 rounded-sm ${
                      isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'
                    }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-400 ease-out 
                    h-1 w-6 rounded-sm my-0.5 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
          ></span>
          <span
            className={`bg-white block transition-all duration-400 ease-out 
                    h-1 w-6 rounded-sm ${
                      isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
                    }`}
          ></span>
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'sm:flex-col transition' : 'sm:hidden'
        } sm:w-5/6 sm:rounded-xl flex sm:py-4 sm:gap-4 md:basis-3/5 lg:basis-3/5 xl:basis-1/2 2xl:basis-1/2 3xl:basis-1/2 sm:mx-auto sm:bg-gray-600 sm:bg-opacity-30 3xl:pr-10 2xl:pr-10 xl:gap-1 lg:gap-1 place-items-center`}
      >
        {/* <div
        className={`${
          isOpen
            ? 'sm:flex-col sm:scale-100 opacity-100'
            : 'sm:hidden sm:scale-95 opacity-0'
        } transform transition-all duration-300 sm:w-5/6 sm:rounded-xl flex sm:py-4 sm:gap-4 md:basis-3/5 lg:basis-3/5 xl:basis-1/2 2xl:basis-1/2 3xl:basis-1/2 sm:mx-auto sm:bg-gray-600 sm:bg-opacity-30 3xl:pr-10 2xl:pr-10 xl:gap-1 lg:gap-1 place-items-center`}
      > */}
        <div className="basis-1/6 relative text-center w-fit lg:mx-auto [font-family:'Poppins-Regular',Helvetica] font-normal text-color-2 lg:text-[16px] md:text-[16px]  text-[18px] tracking-[0] leading-[normal] hover:text-yellow-300 active:text-yellow-500 transition cursor-pointer">
          Home
        </div>
        <div className="basis-1/6 relative text-center w-fit lg:mx-auto [font-family:'Poppins-Regular',Helvetica] font-normal text-color-2 lg:text-[16px] md:text-[16px] text-[18px] tracking-[0] leading-[normal] hover:text-yellow-300 active:text-yellow-500 transition cursor-pointer">
          Projects
        </div>
        <div className="basis-1/6 relative text-center w-fit lg:mx-auto [font-family:'Poppins-Regular',Helvetica] font-normal text-color-2 lg:text-[16px] md:text-[16px] text-[18px] tracking-[0] leading-[normal] hover:text-yellow-300 active:text-yellow-500 transition cursor-pointer">
          About
        </div>
        <div className="basis-1/6 relative text-center w-fit lg:mx-auto [font-family:'Poppins-Regular',Helvetica] font-normal text-color-2 lg:text-[16px] md:text-[14px] text-[18px] tracking-[0] leading-[normal] hover:text-yellow-300 active:text-yellow-500 transition cursor-pointer">
          Contacts
        </div>
        <div className='sm:gap-2 basis-2/6 justify-center flex flex-row-reverse lg:gap-2 xl:mx-1 xl:gap-1 md:gap-3 2xl:gap-4 3xl:gap-4  lg:mr-4 items-center'>
          <img
            className='w-6 h-6 lg:w-5 lg:h-5 md:w-5 md:h-5 xl:m-1 left-[1283px]'
            alt='Akar icons linkedin'
            src={linkedinIcon}
          />
          <img
            className='w-7 h-7 lg:w-6 lg:h-6 md:w-6 md:h-6 xl:m-1 left-[1234px]'
            alt='Prime github'
            src={github}
          />
          <img
            className='w-6 h-6 lg:w-5 lg:h-5 md:w-5 md:h-5 xl:m-1 left-[1191px]'
            alt='Instagram'
            src={instagram}
          />
        </div>
      </div>
    </header>
  );
}

{
  /* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg> */
}
