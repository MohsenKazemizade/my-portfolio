import linkedinIcon from '../assets/linkedin.svg';
import { useState } from 'react';
import instagram from '../assets/instagram.svg';
import github from '../assets/github-mark-white.svg';

export default function Header() {
  let menuItems = [
    { name: 'Home', link: '/' },
    { name: 'Projects', link: '/' },
    { name: 'About', link: '/' },
    { name: 'Contacts', link: '/' },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='flex justify-between py-10 px-14 sm:flex-col sm:y-8'>
      <div className='flex items-center justify-between m-4 sm:m-0 sm:mb-6'>
        <div className="ml-4 sm:text-[20px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[24px] lg:text-[20px] md:text-[18px] tracking-[0] leading-[normal]">
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
      {/* <ul
        className={`${
          isOpen ? 'sm:flex-col transition' : 'sm:hidden'
        } sm:w-5/6 sm:rounded-xl flex sm:py-4 sm:gap-4 md:basis-3/5 lg:basis-3/5 xl:basis-1/2 2xl:basis-1/2 3xl:basis-1/2 sm:mx-auto sm:bg-gray-600 sm:bg-opacity-30 3xl:pr-10 2xl:pr-10 xl:gap-1 lg:gap-1 place-items-center`}
      > */}
      <ul
        className={`${
          isOpen ? 'opacity-100 ' : 'sm:opacity-0 '
        }  sm:absolute static m-4 mr-6 sm:mx-auto sm:mt-12 sm:left-0 sm:right-0 items-center md:flex lg:flex xl:flex 2xl:flex 3xl:flex gap-12  sm:w-3/4 sm:rounded-xl sm:py-4 sm:gap-4  sm:bg-gray-600 sm:bg-opacity-30 transition-all duration-500 ease-in`}
      >
        {/* <div
        className={`${
          isOpen
            ? 'sm:flex-col sm:scale-100 opacity-100'
            : 'sm:hidden sm:scale-95 opacity-0'
        } transform transition-all duration-300 sm:w-5/6 sm:rounded-xl flex sm:py-4 sm:gap-4 md:basis-3/5 lg:basis-3/5 xl:basis-1/2 2xl:basis-1/2 3xl:basis-1/2 sm:mx-auto sm:bg-gray-600 sm:bg-opacity-30 3xl:pr-10 2xl:pr-10 xl:gap-1 lg:gap-1 place-items-center`}
      > */}
        {/* {menuItems.map(items => {
          <li key={items.name} className="basis-1/6 relative text-center w-fit lg:mx-auto [font-family:'Poppins-Regular',Helvetica] font-normal text-color-2 lg:text-[16px] md:text-[16px] text-[18px] tracking-[0] leading-[normal] hover:text-yellow-300 active:text-yellow-500 transition cursor-pointer">
            <a href={items.link}>{items.name}</a>
          </li>;
        })} */}
        <li className="text-center my-4 duration-400 [font-family:'Poppins-Regular',Helvetica] font-normal lg:text-[16px] md:text-[16px] text-[18px] tracking-[0] leading-[normal] text-yellow-400 hover:text-yellow-100 cursor-pointer">
          Home
        </li>
        <li className="text-center my-4 duration-400 [font-family:'Poppins-Regular',Helvetica] font-normal lg:text-[16px] md:text-[16px] text-[18px] tracking-[0] leading-[normal] text-yellow-400 hover:text-yellow-100 cursor-pointer">
          Projects
        </li>
        <li className="text-center my-4 duration-400 [font-family:'Poppins-Regular',Helvetica] font-normal lg:text-[16px] md:text-[16px] text-[18px] tracking-[0] leading-[normal] text-yellow-400 hover:text-yellow-100 cursor-pointer">
          About
        </li>
        <li className="text-center my-4 duration-400 [font-family:'Poppins-Regular',Helvetica] font-normal lg:text-[16px] md:text-[14px] text-[18px] tracking-[0] leading-[normal] text-yellow-400 hover:text-yellow-100 cursor-pointer">
          Contacts
        </li>
        <ul className='gap-5 flex justify-center items-center sm:mt-6'>
          <img
            className='w-6 h-6 cursor-pointer'
            alt='linkedin'
            src={linkedinIcon}
          />
          <img className='w-6 h-6 cursor-pointer' alt='github' src={github} />
          <img
            className='w-6 h-6 cursor-pointer'
            alt='Instagram'
            src={instagram}
          />
        </ul>
      </ul>
    </nav>
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
