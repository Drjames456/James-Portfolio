import React from "react";
import { Tilt } from "react-tilt";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import { PinContainer } from "./ui/3d-pin";

const SliderButton = () => {
  const swiper = useSwiper();

  return (
    <div className=' absolute right-0 top-0 flex justify-end space-x-7 z-50'>
      <h3
        onClick={() => swiper.slideNext()}
        className='w-fit cursor-pointer bg-black-300 px-3 py-1 rounded-md'
      >
        Swipe
      </h3>
    </div>
  );
};

const Works2 = () => {
  return (
    <div id='evidence'>
      <ScrollAnimation animateIn='animate__animated animate__fadeInDown'>
        <div>
          <p className={`${styles.sectionSubText} lg:text-base`}>My work</p>
          <h2
            className={`${styles.sectionHeadText} lg:text-5xl font-clashDisplay`}
          >
            Projects.
          </h2>
        </div>

        <div className='w-full flex'>
          <p className='mt-3 text-secondary text-[14px] max-w-3xl leading-[30px] lg:text-lg'>
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>
      </ScrollAnimation>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
        }}
        // pagination={{
        //   type: "progressbar",
        // }}
        loop={false}
        // modules={[Pagination]}
        className='relative mt-3'
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className='md:w-[23rem] w-full pt-20 mb-2'>
            <PinContainer title={project.name} href={project.source_code_link}>
              <div className='flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] xs:w-[20rem] h-[21rem] '>
                <div>
                  <img
                    src={project.image}
                    alt='project_image'
                    className='w-full h-[15rem] object-cover rounded-md bg-center'
                  />
                </div>

                <div className='text-base font-normal pt-4'>
                  <span className='text-slate-500 '>{project.description}</span>
                </div>

                <div className='mt-2 flex flex-wrap gap-1.5'>
                  {project?.tags.map((tag) => (
                    <p
                      key={`${project.name}-${tag.name}`}
                      className={`text-[13px] ${tag.color}`}
                    >
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </div>
            </PinContainer>
          </SwiperSlide>
        ))}

        <SliderButton />
      </Swiper>
    </div>
  );
};

export default SectionWrapper(Works2, "");
