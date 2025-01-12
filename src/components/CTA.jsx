import React from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { heart } from '../assets';

const CTA = () => {
  const navigate = useNavigate();

  return (
    <div id='contact' className='pb-7'>
      <div className='flex items-center justify-center p-3 pb-0 relative animate-pulse'>
        <div className='bg-[#211e35] md:h-[19rem] h-[25rem] mb-6 w-[100%] lg:w-[75%] md:px-10 flex flex-col justify-center items-center cta z-10  '>
          <h1 className='text-center text-5xl font-semibold font-clashDisplay heading'>
            Let's build something <br className='lg:flex hidden' /> great
            together
          </h1>

          <div
            onClick={() => {
              window.scrollTo(0, 0);
              navigate('/contact-me');
            }}
            className='flex justify-center items-center gap-2 bg-white  py-3 lg:py-4 lg:px-3 rounded-xl px-3 mt-8 cursor-pointer '
          >
            <h4 className='text-black-100 font-semibold text-base'>
              Work with me
            </h4>

            <ArrowRight color='rgb(16 13 37)' fontSize={17} />
          </div>
        </div>

        <div className='absolute  h-[25rem] w-[98%] bg-indigo-600 top-3.5 cta-bg md:hidden'></div>
      </div>

      <div className='flex md:flex-row-reverse md:justify-between items-center flex-col px-10'>
        <div className='flex md:flex-row flex-col md:gap-2 items-center justify-center'>
          <p className='text-center text-sm'>Got a question ?</p>

          <a
            href='mailto:osunbaadeola56@gmail.com'
            className='text-sm text-center font-semibold text-indigo-500'
          >
            hello@james.com
          </a>
        </div>

        <div className='flex justify-center items-center pt-3 text-center font-light text-sm gap-0.5'>
          <span>Made with</span>
          <img src={heart} alt='heart' className='w-5 h-5' />
          <span>by me</span>
        </div>
      </div>
    </div>
  );
};

export default CTA;
