import { testimonials } from "../constants";
import ScrollAnimation from "react-animate-on-scroll";
import { styles } from "../style";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Feedback2 = () => {
  return (
    <>
      <div
        id='testimonial'
        className={`sm:px-16 px-6 sm:pt-12 pt-10 mt-20 mb-4 max-w-7xl mx-auto`}
      >
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
      </div>

      <div className='h-[23rem] rounded-md flex flex-col dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
      </div>
    </>
  );
};

export default Feedback2;
