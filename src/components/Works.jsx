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
import { Pagination, Navigation } from "swiper/modules";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";

const SliderButton = () => {
  const swiper = useSwiper();

  return (
    <div className='r-button absolute right-0 top-0 flex justify-end space-x-7  z-50'>
      <ArrowLeft
        size={25}
        onClick={() => swiper.slidePrev()}
        className=' cursor-pointer'
      />
      <ArrowRight
        size={25}
        onClick={() => swiper.slideNext()}
        className=' cursor-pointer'
      />
    </div>
  );
};

// import required modules
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <ScrollAnimation animateIn='animate__animated animate__fadeInUp'>
      <div>
        <Tilt
          options={{
            max: 35,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-3 rounded-2xl md:w-[330px] w-full '
        >
          <div className='relative w-full h-[200px] lg:h-[230px]'>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer animate-pulse'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-[60%] h-[60%]  object-contain'
                />
              </div>
            </div>
          </div>

          <div className='mt-3'>
            <h3 className='text-white font-bold text-[22px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px] '>{description}</p>
          </div>

          <div className='mt-3 flex flex-wrap gap-1.5'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[13px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </div>
    </ScrollAnimation>
  );
};

const Works = () => {
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
        pagination={{
          type: "progressbar",
        }}
        loop={false}
        modules={[Pagination]}
        className='relative mt-3'
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className='w-80 mr-7 pt-8 mb-2'>
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          </SwiperSlide>
        ))}

        <SliderButton />
      </Swiper>
    </div>
  );
};

export default SectionWrapper(Works, "");
