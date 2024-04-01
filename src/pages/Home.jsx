import char from '../assets/charector.png';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <div className='flex flex-col gap-10 mt-8'>
      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          bounce: 0,
          duration: 0.8,
          delay: 0.1,
        }}
        exit={{
          x: -1000,
          opacity: 0,
          transition: {
            type: 'spring',
            bounce: 0,
            delay: 0.1,
            duration: 0.8,
          },
        }}
        className='w-2/4 mx-auto max-w-60'
      >
        <img className='' alt='Untitled design' src={char} />
      </motion.div>
      <div className='flex flex-col justify-end gap-3 px-6'>
        <motion.p
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.8,
            delay: 0.2,
          }}
          exit={{
            x: -1000,
            opacity: 0,
            transition: {
              type: 'spring',
              delay: 0.2,
              bounce: 0,
              duration: 0.8,
            },
          }}
          className=' animate-typing overflow-hidden whitespace-nowrap font-medium text-gray-100 text-base'
        >
          Hi , my name is Mohsen
        </motion.p>
        <motion.h1
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.8,
            delay: 0.3,
          }}
          exit={{
            x: -1000,
            opacity: 0,
            transition: {
              type: 'spring',
              bounce: 0,
              delay: 0.3,
              duration: 0.8,
            },
          }}
          className=' font-extrabold text-color-2 text-2xl'
        >
          I’M A WEB Developer
        </motion.h1>
        <motion.p
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.8,
            delay: 0.4,
          }}
          exit={{
            x: -1000,
            opacity: 0,
            transition: {
              type: 'spring',
              bounce: 0,
              delay: 0.4,
              duration: 0.8,
            },
          }}
          className=' font-normal text-gray-400 text-sm'
        >
          Skilled React Developer, focused on user-centric, responsive web
          solutions. Adept in JavaScript and React, passionate about innovation
          and collaborative growth.
        </motion.p>
        <motion.p
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.8,
            delay: 0.5,
          }}
          exit={{
            x: -1000,
            opacity: 0,
            transition: {
              type: 'spring',
              bounce: 0,
              delay: 0.5,
              duration: 0.8,
            },
          }}
          className='cursor-pointer underline underline-offset-8 font-bold text-gray-100 text-base'
        >
          View My Resume
        </motion.p>
      </div>
    </div>
  );
};

export default Home;
