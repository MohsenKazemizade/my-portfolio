import React from 'react';

const SliderProjects = () => {
  return (
    <div className='flex items-end justify-center'>
      <div className='flex flex-col gap-2 h-4/6'>
        <input type='radio' name='slide' id='c1' hidden />
        <label
          for='c1'
          className='bg-Portfolio w-[421px] h-[60px] rounded-3xl bg-cover cursor-pointer overflow-hidden mx-[10px] flex items-end shadow-card transition-all duration-600 ease-[cubic-bezier(0.28,-0.03,0,0.99)]'
        >
          <div className='flex flex-nowrap items-center pb-2.5'>
            <div className='bg-yellow-500 text-gray-800 font-bold flex w-[37px] h-[37px] justify-center items-center mx-[12px] rounded-full'>
              1
            </div>
            <div className='flex overflow-hidden justify-between pr-[15px] items-center w-[360px]  text-left delay-300 transition-all duration-500 ease-in-out'>
              <div>
                <h4 className='text-yellow-400 font-bold text-sm uppercase'>
                  Globalization
                </h4>
                <p className='text-yellow-400 text-sm'>
                  Help people all aver the world
                </p>
              </div>
              <button className='h-8 py-0 text-sm bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 hover:border-yellow-500 text-yellow-500 transition duration-300 ease-in-out'>
                preveiw
              </button>
            </div>
          </div>
        </label>
        <input type='radio' name='slide' id='c2' hidden />
        <label
          for='c2'
          className='bg-animatedCV w-[421px] h-[60px] rounded-3xl bg-cover cursor-pointer overflow-hidden mx-[10px] flex items-end shadow-card transition-all duration-600 ease-[cubic-bezier(0.28,-0.03,0,0.99)]'
        >
          <div className='flex flex-nowrap items-center pb-2.5'>
            <div className='bg-yellow-500 text-gray-800 font-bold flex w-[37px] h-[37px] justify-center items-center mx-[12px] rounded-full'>
              2
            </div>
            <div className='flex overflow-hidden justify-between pr-[15px] items-center w-[360px]  text-left delay-300 transition-all duration-500 ease-in-out'>
              <div>
                <h4 className='text-yellow-400 font-bold text-sm uppercase'>
                  Globalization
                </h4>
                <p className='text-yellow-400 text-sm'>
                  Help people all aver the world
                </p>
              </div>
              <button className='h-8 py-0 text-sm bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 hover:border-yellow-500 text-yellow-500 transition duration-300 ease-in-out'>
                preveiw
              </button>
            </div>
          </div>
        </label>
        <input type='radio' name='slide' id='c3' hidden />
        <label
          for='c3'
          className='bg-project4 w-[421px] h-[60px] rounded-3xl bg-cover cursor-pointer overflow-hidden mx-[10px] flex items-end shadow-card transition-all duration-600 ease-[cubic-bezier(0.28,-0.03,0,0.99)]'
        >
          <div className='flex flex-nowrap items-center pb-2.5'>
            <div className='bg-yellow-500 text-gray-800 font-bold flex w-[37px] h-[37px] justify-center items-center mx-[12px] rounded-full'>
              3
            </div>
            <div className='flex overflow-hidden justify-between pr-[15px] items-center w-[360px]  text-left delay-300 transition-all duration-500 ease-in-out'>
              <div>
                <h4 className='text-yellow-400 font-bold text-sm uppercase'>
                  Globalization
                </h4>
                <p className='text-yellow-400 text-sm'>
                  Help people all aver the world
                </p>
              </div>
              <button className='h-8 py-0 text-sm bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 hover:border-yellow-500 text-yellow-500 transition duration-300 ease-in-out'>
                preveiw
              </button>
            </div>
          </div>
        </label>
        <input type='radio' name='slide' id='c4' hidden />
        <label
          for='c4'
          className='bg-project4 w-[421px] h-[60px] rounded-3xl bg-cover cursor-pointer overflow-hidden mx-[10px] flex items-end shadow-card transition-all duration-600 ease-[cubic-bezier(0.28,-0.03,0,0.99)]'
        >
          <div className='flex flex-nowrap items-center pb-2.5'>
            <div className='bg-yellow-500 text-gray-800 font-bold flex w-[37px] h-[37px] justify-center items-center mx-[12px] rounded-full'>
              4
            </div>
            <div className='flex overflow-hidden justify-between pr-[15px] items-center w-[360px]  text-left delay-300 transition-all duration-500 ease-in-out'>
              <div>
                <h4 className='text-yellow-400 font-bold text-sm uppercase'>
                  Globalization
                </h4>
                <p className='text-yellow-400 text-sm'>
                  Help people all aver the world
                </p>
              </div>
              <button className='h-8 py-0 text-sm bg-transparent shadow-sm border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-800 hover:border-yellow-500 text-yellow-500 transition duration-300 ease-in-out'>
                preveiw
              </button>
            </div>
          </div>
        </label>
        {/* ///////// */}
        {/* <input type='radio' name='slide' id='c5' hidden />
        <label
          for='c5'
          className='bg-project1 w-[421px] h-[60px] rounded-3xl bg-cover cursor-pointer overflow-hidden mx-[10px] flex items-end shadow-card transition-all duration-600 ease-[cubic-bezier(0.28,-0.03,0,0.99)]'
        >
          <div className='flex flex-nowrap items-center pb-2.5'>
            <div className='bg-yellow-500 text-gray-800 font-bold flex w-[37px] h-[37px] justify-center items-center mx-[12px] rounded-full'>
              5
            </div>
            <div className='flex overflow-hidden justify-between pr-[15px] items-center w-[360px]  text-left delay-300 transition-all duration-500 ease-in-out'>
              <div>
                <h4 className='text-yellow-400 font-bold text-sm uppercase'>
                  Globalization
                </h4>
                <p className='text-yellow-400 text-sm'>
                  Help people all aver the world
                </p>
              </div>
              <button className='h-8 py-0 text-sm bg-yellow-500 shadow-sm border-2 border-yellow-500 hover:bg-gray-600 hover:text-yellow-500 hover:border-yellow-500 text-gray-600 transition duration-300 ease-in-out'>
                preveiw
              </button>
            </div>
          </div>
        </label>
        <input type='radio' name='slide' id='c6' hidden />
        <label
          for='c6'
          className='bg-project1 w-[421px] h-[60px] rounded-3xl bg-cover cursor-pointer overflow-hidden mx-[10px] flex items-end shadow-card transition-all duration-600 ease-[cubic-bezier(0.28,-0.03,0,0.99)]'
        >
          <div className='flex flex-nowrap items-center pb-2.5'>
            <div className='bg-yellow-500 text-gray-800 font-bold flex w-[37px] h-[37px] justify-center items-center mx-[12px] rounded-full'>
              6
            </div>
            <div className='flex overflow-hidden justify-between pr-[15px] items-center w-[360px]  text-left delay-300 transition-all duration-500 ease-in-out'>
              <div>
                <h4 className='text-yellow-400 font-bold text-sm uppercase'>
                  Globalization
                </h4>
                <p className='text-yellow-400 text-sm'>
                  Help people all aver the world
                </p>
              </div>
              <button className='h-8 py-0 text-sm bg-yellow-500 shadow-sm border-2 border-yellow-500 hover:bg-gray-600 hover:text-yellow-500 hover:border-yellow-500 text-gray-600 transition duration-300 ease-in-out'>
                preveiw
              </button>
            </div>
          </div>
        </label> */}
      </div>
    </div>
  );
};
export default SliderProjects;
