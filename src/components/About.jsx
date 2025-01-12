import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const ServiceCard = ({ index, title, icon }) => (
  <ScrollAnimation animateIn='animate__animated animate__zoomIn'>
    <Tilt className='xs:w-[200px] lg:w-[260px]  w-[280px]'>
      <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  </ScrollAnimation>
);

const About = () => {
  return (
    <>
      <div className='lg:pt-44 relative'>
        <ScrollAnimation animateIn='animate__animated animate__fadeInLeft'>
          <div>
            <p className={` ${styles.sectionSubText} lg:text-base `}>
              Introduction
            </p>
            <h2
              className={` ${styles.sectionHeadText} lg:text-5xl  font-clashDisplay`}
            >
              Overview.
            </h2>

            <p className='mt-4 text-secondary text-[15px] max-w-3xl leading-[28px] lg:text-lg'>
              I'm a skilled software developer with experience in TypeScript and
              JavaScript, and expertise in frameworks like React, Node.js, and
              Next.js. I'm a quick learner and collaborate closely with clients
              to create efficient, scalable, and user-friendly solutions that
              solve real-world problems. Let's work together to bring your ideas
              to life!
            </p>
          </div>
        </ScrollAnimation>

        <div className='mt-10 flex md:flex-row flex-col md:gap-0 gap-10 md:justify-evenly justify-center items-center'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        <div className='absolute top-0 w-full  justify-center items-center hidden lg:flex'>
          <a href='#about'>
            <div className='w-[30px] h-[52px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
              <motion.div
                animate={{
                  y: [1, 20, 3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-secondary mb-1'
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
