import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import { Navbar } from './components';
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className='relative z-0 bg-primaryy '>
      <ToastContainer autoClose={2000} pauseOnHover={false} />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/contact-me' element={<Contact />} />
      </Routes>
      <Analytics />
    </div>
  );
};

export default App;
