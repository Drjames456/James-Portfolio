import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';

import { styles } from '../style';
import {
  github,
  instagram,
  linkedin,
  myApp,
  resume,
  twitter,
  whatsapp,
} from '../assets';
import Typewriter from 'typewriter-effect';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import { Download } from 'react-bootstrap-icons';

const Hero = () => {
  return (
    <section
      id='home'
      className={`relative w-full h-1/3 md:h-[28rem] mx-auto max-w-7xl`}
    >
      <div
        className={` ${styles.paddingX} flex md:flex-row flex-col md:justify-between md:gap-20`}
      >
        <div
          className={`md:pt-36 lg:pt-48 pt-28 flex flex-row items-start md:w-[60%] flex-1`}
        >
          <div className='flex flex-col justify-center items-center mt-1.5 mr-1.5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-36 h-40 violet-gradient' />
          </div>

          <div>
            <h1
              className={`text-4xl lg:text-6xl font-bold text-white font-clashDisplay`}
            >
              Hi there!
              <br /> I'm{' '}
              <span className='text-[#915EFF] font-clashDisplay'>James</span>
            </h1>
            <div className='flex space-x-1 items-center mt-3'>
              <h1 className='text-white text-base font-bold lg:text-xl'>
                a/an
              </h1>
              <h1 className='font-bold text-xl lg:text-3xl text-[#915EFF] '>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    strings: [
                      'Frontend Developer ',
                      'Mobile Developer ',
                      'Freelancer ',
                    ],
                  }}
                />
              </h1>
            </div>
            <p className='text-base lg:text-lg pt-3 pb-4'>
              "Welcome to my digital realm! I specialize in creating engaging web applications and intuitive user interfaces. With a blend of creativity and precision, I transform ideas into reality, helping businesses succeed in the dynamic digital world."
            </p>

            <div className='flex items-center gap-2 '>
              <div
                className='cursor-pointer flex items-center gap-2 border-[4px] w-[99px]
                  h-[40px] rounded-md uppercase font-semibold justify-center  lg:text-base lg:w-[130px] lg:h-[50px] bg-[#222] text-[13px] border-b-[#915EFF] border-t-0 border-r-0 border-l-0 lg:mt-3'
              >
                <a href={resume} download='Resume' className=' '>
                  Resume
                </a>
                <Download size={15} />
              </div>
            </div>
          </div>
        </div>

        <div className='md:w-[43%] md:pt-20 lg:pt-16 pt-10 showcase-img mx-auto md:mx-0'>
          <div className=' bg-black-100  p-7 rounded-2xl'>
            <img src={myApp} className='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
