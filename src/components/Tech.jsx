import React, { useState } from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/index";
import { styles } from "../style";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const Tech = () => {
  return (
    <div className=' gap-2'>
      <div className='accordion__faq'>
        <ScrollAnimation animateIn='animate__animated animate__fadeInDown'>
          <h1 className={`${styles.sectionSubText} lg:text-base`}>Technical</h1>
          <h3
            className={`${styles.sectionHeadText} font-clashDisplay lg:text-5xl `}
          >
            Skills
          </h3>
        </ScrollAnimation>

        <div className='progressbar mt-8 '>
          {technologies.map((item) => (
            <div key={item.name} className='md:w-32 w-[7.6rem] md:mx-0 mx-auto'>
              <ScrollAnimation animateIn='animate__animated animate__zoomIn'>
                <img
                  src={item.icon}
                  alt={item.name}
                  className='md:w-full w-[80%]'
                />

                <h3 className='text-center pt-2 text-lg'>{item.name}</h3>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
