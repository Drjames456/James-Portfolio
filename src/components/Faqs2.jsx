import { useRef, useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { GoDash } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { faqsList } from "../constants";
import { styles } from "../style";

const FaqsCard = ({ faqsList, idx, isOpenByDefault }) => {
  const answerElRef = useRef(null);
  const [state, setState] = useState(isOpenByDefault);
  const [answerH, setAnswerH] = useState(isOpenByDefault ? "auto" : "0");
  const [backgroundColor, setBackgroundColor] = useState(false);
  const [answerPaddingBottom, setAnswerPaddingBottom] = useState("0");

  useEffect(() => {
    // Close all items on mobile
    if (window.innerWidth <= 768) {
      setState(false);
      setAnswerH("0");
    }
  }, []);

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current?.scrollHeight;
    if (answerElH) {
      setState(!state);
      setAnswerH(state ? "0" : "auto");
      setBackgroundColor(!state);
      setAnswerPaddingBottom(state ? "0" : "4px");
    }
  };

  return (
    <div
      id='faqs'
      className={`${
        backgroundColor ? "pb-4 " : ""
      } space-y-1 mt-3 overflow-hidden relative border-b border-[#ddd] `}
      key={idx}
      onClick={handleOpenAnswer}
    >
      <div className='flex items-center justify-between gap-x-4'>
        <h4
          className={`${
            backgroundColor ? "text-[#fff]" : ""
          } cursor-pointer py-4 md:py-3 flex items-center justify-between text-xl font-medium text-[#dfd9ff]`}
        >
          {faqsList.q}
        </h4>

        <div className=''>
          {state ? (
            <GoDash
              size={25}
              color={`${backgroundColor ? "#fff" : "#dfd9ff"}`}
              className=''
              cursor='pointer'
            />
          ) : (
            <GoPlus
              size={25}
              color={`${backgroundColor ? "#fff" : "#dfd9ff"}`}
              cursor='pointer'
            />
          )}
        </div>
      </div>

      <div
        ref={answerElRef}
        className='duration-300'
        style={{ height: answerH, paddingBottom: answerPaddingBottom }}
      >
        <div>
          <p className='text-base text-gray-400 font-light leading-[30px]'>
            {faqsList.a}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faqs2 = () => {
  return (
    <section className='xl:py-20 md:py-16 sm:px-16 px-4 sm:py-12 py-10'>
      <div className='flex xl:flex-row flex-col pt-14 md:pt-0 xl:pt-14 md:gap-10 gap-4 xl:gap-4 wrapper'>
        <div className='xl:w-1/2 w-full'>
          <h1 className={`${styles.sectionSubText}`}>FAQS</h1>
          <h3 className={`text-3xl font-bold font-clashDisplay leading-[1.2] `}>
            Frequently Asked Questions
          </h3>
        </div>

        <div className='xl:w-1/2 w-full'>
          {faqsList.map((item, idx) => (
            <FaqsCard
              key={idx}
              faqsList={item}
              idx={idx}
              isOpenByDefault={idx === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs2;
