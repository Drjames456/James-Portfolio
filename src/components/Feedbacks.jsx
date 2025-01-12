import React from "react";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";

// const FeedbackCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (

// );

const Feedbacks = () => {
  return (
    <div id='testimonial'>
      <ScrollAnimation animateIn='animate__animated animate__fadeInDown'>
        <div>
          <p className={`${styles.sectionSubText} lg:text-base`}>
            What others say
          </p>
          <h2
            className={`lg:text-5xl ${styles.sectionHeadText}  font-clashDisplay`}
          >
            Testimonials.
          </h2>
        </div>
      </ScrollAnimation>

      <div className={`mt-4 bg-black-100 rounded-[20px]`}>
        <div
          className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[150px]`}
        ></div>
        <div
          className={`-mt-24 pb-8 px-4 grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-5 gap-6 justify-center `}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className='lg:last:hidden  md:last:block '
            >
              <ScrollAnimation animateIn='animate__animated animate__zoomIn'>
                <div className='bg-black-200 p-7 rounded-3xl w-full '>
                  <p className='text-white font-black text-[48px]'>"</p>

                  <div className=''>
                    <p className='text-white text-[15px] lg:text-lg '>
                      {testimonial.testimonial}
                    </p>

                    <div className='mt-4 flex justify-between items-center gap-1'>
                      <div className='flex-1 flex flex-col'>
                        <p className='text-white font-medium text-[12px] lg:text-[14px]'>
                          <span className='blue-text-gradient'>@</span>
                          {testimonial.name}
                        </p>
                        <p className='mt-1 text-secondary lg:text-[11px] text-[10px]'>
                          {testimonial.designation} {testimonial.company}
                        </p>
                      </div>

                      <img
                        src={testimonial.image}
                        alt={`feedback_by-${testimonial.name}`}
                        className='w-9 h-9 rounded-full object-cover object-top lg:w-12 lg:h-12'
                      />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
