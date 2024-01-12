import char from '../assets/charector.png';

export default function HeroSection() {
  return (
    <>
      <div className='flex flex-row pr-16 pl-14'>
        <div className='basis-2/5 flex flex-col-reverse gap-4 pl-8 pb-32'>
          <div className=" underline underline-offset-[8px] [font-family:'Poppins-ExtraBold',Helvetica] font-bold text-white text-[24px]">
            View My Projects
          </div>
          <p className="mb-4 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#f8f7f980] text-[24px] sm:text-[14px] tracking-[0] leading-snug">
            Skilled React Developer, focused on user-centric, responsive web
            solutions. Adept in JavaScript and React, passionate about
            innovation and collaborative growth.
          </p>
          <div className="[font-family:'Poppins-Bold',Helvetica] font-extrabold text-color-2 text-[77px] sm:text-[40px] tracking-[0] leading-none">
            I’M A WEB Developer
          </div>
          <p className=" [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[28px] tracking-[0] leading-[normal]">
            Hi , my name is Maison,
          </p>
        </div>
        <div className='basis-3/5'>
          <img
            className='  top-0 left-[450px] object-cover'
            alt='Untitled design'
            src={char}
          />
        </div>
      </div>
    </>
  );
}
