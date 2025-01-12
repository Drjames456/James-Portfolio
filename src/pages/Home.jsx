import React from "react";
import { About, Experience, Hero, Navbar, Tech } from "../components";
import CTA from "../components/CTA";
import Faqs2 from "./../components/Faqs2";
import Works2 from "../components/Works2";
import Feedback2 from "../components/Feedback2";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works2 />
      <Feedback2 />
      <Faqs2 />
      <CTA />
    </div>
  );
};

export default Home;
