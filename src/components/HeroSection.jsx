import char from '../assets/charector.png';

export default function HeroSection() {
  return (
    <>
      <div className='flex flex-row-reverse pr-16 pl-14 lg:pr-14 sm:grid sm:grid-cols-2 sm:grid-rows-2'>
        <div className='basis-3/5 lg:basis-4/7 sm:col-span-2 sm:justify-center'>
          <img
            className='top-0 sm:mx-auto sm:w-4/5 right-[480] object-cover sm:items-center'
            alt='Untitled design'
            src={char}
          />
        </div>
        <div className='basis-2/5 lg:basis-3/7 flex flex-col-reverse gap-4 pl-8 pb-32 lg:pb-26 md:pb-24 sm:py-auto sm:col-span-2'>
          <p className="underline underline-offset-[8px] [font-family:'Poppins-ExtraBold',Helvetica] font-bold text-white text-base xl:text-lg 2xl:text-xl 3xl:text-2xl">
            View My Projects
          </p>
          <p className="mb-4 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#f8f7f980] text-sm xl:text-base 2xl:text-xl 3xl:text-2xl tracking-[0] leading-snug">
            Skilled React Developer, focused on user-centric, responsive web
            solutions. Adept in JavaScript and React, passionate about
            innovation and collaborative growth.
          </p>
          <h1 className="[font-family:'Poppins-Bold',Helvetica] font-extrabold text-color-2 text-4xl sm:text-2xl 2xl:text-6xl 3xl:text-7xl tracking-[0] leading-none">
            I’M A WEB Developer
          </h1>
          <p className="[font-family:'Poppins-Medium',Helvetica] animate-typing overflow-hidden whitespace-nowrap font-medium text-white text-base 3xl:text-3xl 2xl:text-xl xl:text-xl lg:text-lg tracking-[0] leading-[normal]">
            Hi , my name is Mohsen
          </p>
        </div>
      </div>
    </>
  );
}
