import linkedinIcon from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';
import github from '../assets/github.svg';
export default function Header() {
  return (
    <header className='flex flex-row py-10 px-14'>
      <div className='basis-1/2'>
        <div className=" [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[24px] tracking-[0] leading-[normal]">
          Maison Cuz
        </div>
      </div>
      <div className='basis-1/2 flex flex-row pr-10 place-items-center'>
        <div className="basis-1/6 relative text-center w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-color-2 text-[18px] tracking-[0] leading-[normal]">
          Home
        </div>
        <div className="basis-1/6 relative text-center w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-color-2 text-[18px] tracking-[0] leading-[normal]">
          Projects
        </div>
        <div className="basis-1/6 relative text-center w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-color-2 text-[18px] tracking-[0] leading-[normal]">
          About
        </div>
        <div className="basis-1/6 relative text-center w-fit mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-color-2 text-[18px] tracking-[0] leading-[normal]">
          Contacts
        </div>
        <div className='basis-2/6 flex flex-row-reverse gap-4 px-4 items-center'>
          <div className='grow'></div>
          <img
            className='w-[24px] h-[24px] top-[45px] left-[1283px]'
            alt='Akar icons linkedin'
            src={linkedinIcon}
          />
          <img
            className='w-[30px] h-[29px] top-[43px] left-[1234px]'
            alt='Prime github'
            src={github}
          />
          <img
            className='w-[24px] h-[24px] top-[46px] left-[1191px]'
            alt='Instagram'
            src={instagram}
          />
          <div className='grow'></div>
        </div>
      </div>
    </header>
  );
}
