import char from '../assets/charector.png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='notSm:h-5/6 notSm:content-center'>
      <div className='flex flex-col-reverse gap-10 mt-8 notSm:grid notSm:grid-cols-2 notSm:grid-rows-2 notSm:gap-0'>
        <div className='flex flex-col justify-center gap-3 px-6 notSm:row-span-2 notSm:ml-6 xl:ml-12 2xl:ml-14 3xl:ml-16'>
          <motion.p
            initial={{ x: 2000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              bounce: 0,
              delay: 0.7,
              duration: 0.8,
            }}
            exit={{
              x: -2000,
              opacity: 0,
              transition: {
                type: 'spring',
                bounce: 0,
                delay: 0.7,
                duration: 0.8,
              },
            }}
            className='animate-typing overflow-hidden whitespace-nowrap font-medium text-gray-100 text-base md:font-semibold md:text-lg lg:font-bold lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl'
          >
            Hi , my name is Mohsen
          </motion.p>
          <motion.h1
            initial={{ x: 2000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              bounce: 0,
              delay: 0.8,
              duration: 0.8,
            }}
            exit={{
              x: -2000,
              opacity: 0,
              transition: {
                type: 'spring',
                bounce: 0,
                delay: 0.8,
                duration: 0.8,
              },
            }}
            className='font-extrabold text-gray-100 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl'
          >
            I’M A WEB Developer
          </motion.h1>
          <motion.p
            initial={{ x: 2000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              bounce: 0,
              delay: 0.9,
              duration: 0.8,
            }}
            exit={{
              x: -2000,
              opacity: 0,
              transition: {
                type: 'spring',
                bounce: 0,
                delay: 0.9,
                duration: 0.8,
              },
            }}
            className='font-normal text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl'
          >
            Skilled React Developer, focused on user-centric, responsive web
            solutions. Adept in JavaScript and React, passionate about
            innovation and collaborative growth.
          </motion.p>
          <motion.p
            initial={{ x: 2000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              bounce: 0,
              delay: 1,
              duration: 0.8,
            }}
            exit={{
              x: -2000,
              opacity: 0,
              transition: {
                type: 'spring',
                bounce: 0,
                delay: 1,
                duration: 0.8,
              },
            }}
            className='cursor-pointer underline underline-offset-8 font-bold text-gray-100 text-base md:text-lg lg:font-bold lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl'
          >
            View My Resume
          </motion.p>
        </div>
        <motion.div
          initial={{ x: 2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            bounce: 0,
            delay: 0.6,
            duration: 0.8,
          }}
          exit={{
            x: -2000,
            opacity: 0,
            transition: {
              type: 'spring',
              bounce: 0,
              delay: 0.6,
              duration: 0.8,
            },
          }}
          className='w-2/4 mx-auto max-w-60 notSm:row-span-2 notSm:w-3/4 notSm:max-w-xl notSm:max-h-max notSm:mt-4'
        >
          <img className='w-full' alt='Untitled design' src={char} />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
