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
    <nav className='flex justify-between py-10 px-14 lg:px-10 sm:flex-col sm:y-8'>
      <div className='flex items-center justify-between m-4 sm:m-0 sm:mb-6'>
        <div className="ml-4 sm:text-[20px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-2xl xl:text-lg lg:text-base md:text-base tracking-[0] leading-[normal]">
          Mohsen Kazemi
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
      <ul
        className={`${
          isOpen ? 'opacity-100 ' : 'sm:opacity-0 '
        }  sm:absolute static m-4 lg:m-3 2xl:mr-6 3xl:mr-6 sm:mx-auto sm:mt-12 sm:left-0 sm:right-0 items-center md:flex lg:flex xl:flex 2xl:flex 3xl:flex gap-10 sm:w-3/4 sm:rounded-xl sm:py-4 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8  sm:bg-gray-600 sm:bg-opacity-95 transition-all duration-500 ease-in`}
      >
        <li className="text-center my-4 duration-400 [font-family:'Poppins-Regular',Helvetica] font-normal text-base 2xl:text-lg 3xl:text-lg tracking-[0] leading-[normal] text-yellow-400 hover:text-yellow-100 cursor-pointer">
          Home
        </li>
        <li className="text-center my-4 duration-400 [font-family:'Poppins-Regular',Helvetica] font-normal text-base 2xl:text-lg 3xl:text-lg tracking-[0] leading-[normal] text-yellow-400 hover:text-yellow-100 cursor-pointer">
          Projects
        </li>
        <li className="text-center my-4 duration-400 [font-family:'Poppins-Regular',Helvetica] font-normal text-base 2xl:text-lg 3xl:text-lg tracking-[0] leading-[normal] text-yellow-400 hover:text-yellow-100 cursor-pointer">
          About
        </li>
        <li className="text-center my-4 duration-400 [font-family:'Poppins-Regular',Helvetica] font-normal text-base 2xl:text-lg 3xl:text-lg tracking-[0] leading-[normal] text-yellow-400 hover:text-yellow-100 cursor-pointer">
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
