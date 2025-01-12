const newLine = '';

const dataCollection = [
  {
    question: 'How long does a website take to build',
    answer: (
      <h1>
        A typical website take 4-8weeks and where it falls in that range depends
        on : <br /> -Size of the website(i.e how many pages) <br /> -Complexity
        of design <br /> -Speed of feedback & communication
      </h1>
    ),
    // answer: ` `,
  },
  {
    question: 'I have a design ready. Can you build it?',
    answer: 'Yep! I can jump in at any stage of the process',
  },
  {
    question: " What if I don't like the design?",
    answer:
      "I have a 100% money-back guarantee up until you see the first draft of the design, so if you don't like it at that point I'll refund your deposit.",
  },
];

import React, { useState } from 'react';
import { styles } from '../style';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import 'animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Faqs = () => {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }

    setActiveAccordion(index);
  }

  return (
    <section
      id='faqs'
      className={`${styles.padding} max-w-7xl mx-auto relative z-0 `}
    >
      <div className='accordion__faq'>
        <ScrollAnimation animateIn='animate__animated  animate__fadeInDown'>
          <h1 className={`${styles.sectionSubText} text-center pb-2 md:pb-4`}>
            FAQS
          </h1>
          <h3
            className={` ${styles.sectionHeadText} font-clashDisplay pb-4 text-center leading-[53px] 
        `}
          >
            Frequently Asked Questions
          </h3>
        </ScrollAnimation>

        <ScrollAnimation animateIn='animate__animated  animate__zoomIn'>
          {dataCollection.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleAccordion(index)}
              className='mt-2 cursor-pointer'
            >
              <div className='accordion__feq border-t-[3px] border-t-secondary pt-3 flex-row flex justify-between items-center '>
                <h3
                  className={`${
                    accordion === index ? 'active' : ''
                  } lg:text-lg text-base font-normal `}
                >
                  {item.question}
                </h3>

                <div>
                  {accordion === index ? (
                    <>
                      {' '}
                      <span className='font-bold text-xl '>
                        <ChevronUp size={20} className='font-bold' />
                      </span>
                    </>
                  ) : (
                    <>
                      <span>
                        <ChevronDown size={20} color='rgb(170 166 195)' />
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className='p-3'>
                <span
                  className={`${
                    accordion === index ? 'active' : 'inactive'
                  } block text-sm text-gray-400 font-light leading-[30px] animate__animated animate__fadeInUp `}
                >
                  {item.answer}
                </span>
              </div>
            </div>
          ))}
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Faqs;
