import { motion } from 'framer-motion';

const SliderProjects = () => {
  return (
    <div className='flex items-end justify-center content-center notSm:h-full'>
      <div className='flex flex-col notSm:flex-row gap-3 h-4/6 notSm:h-full w-11/12 px-4 notSm:justify-center notSm:items-center'>
        <motion.div
          initial={{ x: 2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.8,
            delay: 0.2,
          }}
          exit={{
            x: -2000,
            opacity: 0,
            transition: {
              type: 'spring',
              delay: 0.2,
              bounce: 0,
              duration: 0.8,
            },
          }}
        >
          <input className='peer/c1' type='radio' name='slide' id='c1' hidden />
          <label
            htmlFor='c1'
            className='bg-[url(./assets/img1.png)] peer-checked/c1:h-72 h-[60px] notSm:peer-checked/c1:w-fit notSm:w-[60px] notSm:h-72 rounded-3xl bg-cover cursor-pointer flex items-end ease-[cubic-bezier(.8,0,.2,1)] duration-700'
          >
            <div className='flex items-center mb-2.5 pr-4 justify-between w-full overflow-hidden'>
              <div className='flex items-center'>
                <div className='bg-yellow-500 text-gray-800 font-bold flex min-w-9 min-h-9 justify-center items-center ml-3 mr-3 rounded-full'>
                  1
                </div>
                <div>
                  <h4 className='text-yellow-400 font-bold text-sm uppercase'>
                    Globalization
                  </h4>
                  <p className='text-yellow-400 text-sm'>
                    Help people all aver the world
                  </p>
                </div>
              </div>
              <button className='h-8 py-0 text-sm bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 hover:border-yellow-500 text-yellow-500 transition duration-300 ease-in-out'>
                preveiw
              </button>
            </div>
          </label>
        </motion.div>
        {/* <motion.div
          initial={{ x: 2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            delay: 0.3,
            bounce: 0,
            duration: 0.8,
          }}
          exit={{
            x: -2000,
            opacity: 0,
            transition: {
              type: 'spring',
              delay: 0.3,
              bounce: 0,
              duration: 0.8,
            },
          }}
        >
          <input className='peer/c2' type='radio' name='slide' id='c2' hidden />
          <label
            htmlFor='c2'
            className='bg-[url(./assets/img2.png)] peer-checked/c2:h-72 h-[60px] notSm:peer-checked/c2:w-fit notSm:h-full notSm:w-[60px]  rounded-3xl bg-cover cursor-pointer overflow-hidden flex items-end ease-[cubic-bezier(.8,0,.2,1)] duration-700'
          >
            <div className='flex items-center mb-2.5 pr-4 justify-between w-full'>
              <div className='flex items-center'>
                <div className='bg-yellow-500 text-gray-800 font-bold flex min-w-9 min-h-9  justify-center items-center ml-3 mr-3 rounded-full'>
                  2
                </div>
                <div>
                  <h4 className='text-yellow-400 font-bold text-sm uppercase'>
                    Globalization
                  </h4>
                  <p className='text-yellow-400 text-sm'>
                    Help people all aver the world
                  </p>
                </div>
              </div>
              <button className='h-8 py-0 text-sm bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 hover:border-yellow-500 text-yellow-500 transition duration-300 ease-in-out'>
                preveiw
              </button>
            </div>
          </label>
        </motion.div>
        <motion.div
          initial={{ x: 2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            delay: 0.4,
            bounce: 0,
            duration: 0.8,
          }}
          exit={{
            x: -2000,
            opacity: 0,
            transition: {
              type: 'spring',
              delay: 0.4,
              bounce: 0,
              duration: 0.8,
            },
          }}
        >
          <input className='peer/c3' type='radio' name='slide' id='c3' hidden />
          <label
            htmlFor='c3'
            className='bg-[url(./assets/img3.png)] peer-checked/c3:h-72 h-[60px] notSm:peer-checked/c3:w-fit notSm:h-full notSm:w-[60px] rounded-3xl bg-cover cursor-pointer overflow-hidden flex items-end ease-[cubic-bezier(.8,0,.2,1)] duration-700'
          >
            <div className='flex items-center mb-2.5 pr-4 justify-between w-full'>
              <div className='flex items-center'>
                <div className='bg-yellow-500 text-gray-800 font-bold flex min-w-9 min-h-9  justify-center items-center ml-3 mr-3 rounded-full'>
                  3
                </div>
                <div>
                  <h4 className='text-yellow-400 font-bold text-sm uppercase'>
                    Globalization
                  </h4>
                  <p className='text-yellow-400 text-sm'>
                    Help people all aver the world
                  </p>
                </div>
              </div>
              <button className='h-8 py-0 text-sm bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 hover:border-yellow-500 text-yellow-500 transition duration-300 ease-in-out'>
                preveiw
              </button>
            </div>
          </label>
        </motion.div>
        <motion.div
          initial={{ x: 2000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            delay: 0.5,
            bounce: 0,
            duration: 0.8,
          }}
          exit={{
            x: -2000,
            opacity: 0,
            transition: {
              type: 'spring',
              delay: 0.5,
              bounce: 0,
              duration: 0.8,
            },
          }}
        >
          <input className='peer/c4' type='radio' name='slide' id='c4' hidden />
          <label
            htmlFor='c4'
            className='bg-[url(./assets/img4.png)] peer-checked/c4:h-72 h-[60px] notSm:peer-checked/c4:w-fit notSm:h-full notSm:w-[60px] rounded-3xl bg-cover cursor-pointer overflow-hidden flex items-end ease-[cubic-bezier(.8,0,.2,1)] duration-700'
          >
            <div className='flex items-center mb-2.5 pr-4 justify-between w-full'>
              <div className='flex items-center'>
                <div className='bg-yellow-500 text-gray-800 font-bold flex min-w-9 min-h-9 justify-center items-center ml-3 mr-3 rounded-full'>
                  4
                </div>
                <div>
                  <h4 className='text-yellow-400 font-bold text-sm uppercase'>
                    Globalization
                  </h4>
                  <p className='text-yellow-400 text-sm'>
                    Help people all aver the world
                  </p>
                </div>
              </div>
              <button className='h-8 py-0 text-sm outline-none bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 hover:border-yellow-500 text-yellow-500 transition duration-300 ease-in-out'>
                preveiw
              </button>
            </div>
          </label>
        </motion.div> */}
      </div>
    </div>
  );
};
export default SliderProjects;
