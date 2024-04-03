import { Link } from 'react-router-dom';
import { motion, useCycle, AnimatePresence } from 'framer-motion';
//AnimatePresence is for unmounted mobileNav condition and its will work
//till we set the exit='close' to our element we have in our condition
//and then wrap it with AnimatePresence now our close button for mobile view has animation effect

export default function NavBar() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  return (
    <nav className=' top-0 h-16 xl:h-20 2xl:h-24 3xl:h-28'>
      <div className='flex items-center justify-between w-full h-full px-4 notSm:px-6 xl:px-8 2xl:px-10 3xl:px-12'>
        <Link
          to='/'
          className='text-md font-bold text-gray-100 hover:text-yellow-500 ml-2 notSm:ml-0 notSm:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl'
        >
          Mohsen Kazemi
        </Link>
        <div className='relative z-10'>
          <motion.button
            animate={mobileNav ? 'open' : 'close'}
            onClick={() => toggleMobileNav()}
            className='notSm:hidden flex flex-col space-y-1 border-none bg-transparent px-2 focus:outline-none '
          >
            <motion.span
              variants={{
                open: { rotate: 45, y: 8, backgroundColor: 'rgb(234 179 8)' },
                close: { rotate: 0 },
              }}
              className='bg-gray-100 h-1 w-6 rounded-sm block'
            ></motion.span>
            <motion.span
              variants={{
                open: { opacity: 0 },
                close: { opacity: 1 },
              }}
              className='bg-gray-100 h-1 w-6 rounded-sm block'
            ></motion.span>
            <motion.span
              variants={{
                open: { rotate: -45, y: -8, backgroundColor: 'rgb(234 179 8)' },
                close: { rotate: 0 },
              }}
              className='bg-gray-100 h-1 w-6 rounded-sm block'
            ></motion.span>
          </motion.button>
        </div>
        <div className='sm:hidden flex justify-center items-center mr-2 lg:mr-4 2xl:mr-6 3xl:mr-6'>
          <ul className='flex gap-x-6 text-lg lg:gap-x-8 xl:gap-x-10 font-semibold xl:text-xl 2xl:text-2xl 2xl:gap-x-12 3xl:gap-x-16 3xl:text-3xl'>
            <li className='flex'>
              <Link
                to='/'
                className='text-yellow-500 active:text-yellow-200 mx-auto'
              >
                Home
              </Link>
            </li>
            <li className='flex'>
              <Link
                className='text-yellow-500 active:text-yellow-200'
                to='/projects'
              >
                Projects
              </Link>
            </li>
            <li className='flex'>
              <Link
                className='text-yellow-500 active:text-yellow-200'
                to='/services'
              >
                Services
              </Link>
            </li>
            <li className='flex'>
              <Link
                className='text-yellow-500 active:text-yellow-200'
                to='/contact'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {mobileNav && (
          <motion.div
            key='navKey'
            variants={{
              open: {
                x: '0%',
                transition: {
                  when: 'beforeChildren',
                  type: 'spring',
                  bounce: 0,
                  duration: 0.5,
                },
              },
              close: {
                x: '100%',
                transition: {
                  when: 'afterChildren',
                  type: 'spring',
                  bounce: 0,
                  duration: 0.5,
                },
              },
            }}
            initial='close'
            animate='open'
            exit='close'
            className='fixed inset-0 bg-stone-900 p-6 space-y-10 flex flex-col justify-center items-center'
          >
            <motion.div
              key='menuItems'
              variants={{
                open: {
                  y: '0%',
                  opacity: 1,
                },
                close: {
                  y: '25%',
                  opacity: 0,
                },
              }}
              transition={{
                type: 'tween',
              }}
            >
              <ul className='space-y-5'>
                <li className='flex text-2xl font-bold'>
                  <Link
                    onClick={() => toggleMobileNav()}
                    className='text-yellow-500 active:text-yellow-200 mx-auto'
                    to='/'
                  >
                    Home
                  </Link>
                </li>
                <li className='flex text-2xl font-bold '>
                  <Link
                    onClick={() => toggleMobileNav()}
                    className='text-yellow-500 active:text-yellow-200'
                    to='/projects'
                  >
                    Projects
                  </Link>
                </li>

                <li className='flex text-2xl font-bold '>
                  <Link
                    onClick={() => toggleMobileNav()}
                    className='text-yellow-500 active:text-yellow-200'
                    to='/services'
                  >
                    Services
                  </Link>
                </li>
                <li className='flex text-2xl font-bold '>
                  <Link
                    onClick={() => toggleMobileNav()}
                    className='text-yellow-500 active:text-yellow-200'
                    to='/contact'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
            <motion.div
              key='divider'
              variants={{
                open: {
                  y: '0%',
                  opacity: 1,
                  scaleX: 1,
                },
                close: {
                  y: '25%',
                  opacity: 0,
                  scaleX: 0,
                },
              }}
              transition={{
                type: 'tween',
              }}
              className='w-full bg-yellow-500 h-1'
            ></motion.div>
            <motion.div
              key='social'
              variants={{
                open: {
                  y: '0%',
                  opacity: 1,
                },
                close: {
                  y: '25%',
                  opacity: 0,
                },
              }}
              transition={{
                type: 'tween',
              }}
            >
              <ul className='gap-4 flex justify-center items-center'>
                <li>
                  <svg
                    width='24px'
                    height='24px'
                    viewBox='0 0 24 24'
                    id='github'
                    fill='rgb(250 204 21)'
                    className='hover:fill-yellow-200 cursor-pointer'
                    onClick={() =>
                      window.open('https://github.com/MohsenKazemizade')
                    }
                  >
                    <path
                      d='M20.116 5.901a3.883 3.883 0 0 0-.26-.31 4.413 4.413 0 0 0 .21-.76 5.284 5.284 0 0 0-.35-2.8s-1.12-.35-3.69 1.38a12.477 12.477 0 0 0-3.35-.45 12.604 12.604 0 0 0-3.36.45c-2.57-1.75-3.69-1.38-3.69-1.38a5.263 5.263 0 0 0-.35 2.77 4.21 4.21 0 0 0 .22.79c-.09.1-.18.21-.26.31a5.14 5.14 0 0 0-1.12 3.3 7.686 7.686 0 0 0 .04.85c.32 4.43 3.27 5.46 6.08 5.78a2.558 2.558 0 0 0-.77 1.39 4.022 4.022 0 0 0-.13 1.09v1.31c-1.119.1-2.267-.063-2.623-1.061a5.695 5.695 0 0 0-1.834-2.413 1.179 1.179 0 0 1-.17-.112 1.001 1.001 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.003.812.81 1.337 1.143 1.515a4.466 4.466 0 0 1 .923 1.359c.364 1.023 1.429 2.578 4.466 2.376l.002.098.004.268a1 1 0 0 0 1 1H15.026a1 1 0 0 0 1-1s.008-3.16.008-3.69a4.024 4.024 0 0 0-.13-1.09l-.002-.006.004.006c-.009-.035-.022-.063-.032-.097a2.532 2.532 0 0 0-.74-1.293l.012.021-.02-.02c2.81-.32 5.74-1.37 6.06-5.78a7.687 7.687 0 0 0 .04-.85 5.23 5.23 0 0 0-1.11-3.3Z'
                      data-name='Brand Logos'
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    width='24px'
                    height='24px'
                    viewBox='0 0 30 30'
                    fill='rgb(250 204 21)'
                    className='hover:fill-yellow-200 cursor-pointer'
                    onClick={() => window.open('https://twitter.com/MaisonCuz')}
                  >
                    <path d='M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z'></path>
                  </svg>
                </li>
                <li>
                  <svg
                    width='24px'
                    height='24px'
                    viewBox='0 0 64 64'
                    fill='rgb(250 204 21)'
                    className='hover:fill-yellow-200 cursor-pointer'
                    onClick={() =>
                      window.open('https://www.instagram.com/maisoncuz/')
                    }
                  >
                    <path d='M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z'></path>
                  </svg>
                </li>
                <li>
                  <svg
                    width='24px'
                    height='24px'
                    viewBox='0 0 30 30'
                    fill='rgb(250 204 21)'
                    className='hover:fill-yellow-200 cursor-pointer'
                    onClick={() =>
                      window.open(
                        'https://www.linkedin.com/in/mohsen-kazemi-751761137/'
                      )
                    }
                  >
                    <path d='M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z'></path>
                  </svg>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
