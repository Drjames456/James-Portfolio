import React, { useRef, useState } from 'react';
import { free, logoIcon } from '../assets';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Linkedin, Twitter, Whatsapp } from 'react-bootstrap-icons';

const Contact = () => {
  const year = new Date().getFullYear();

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    choice: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_jsmtjv9',
        'template_2jk3l74',
        {
          from_name: form.name,
          to_name: 'James',
          from_email: form.email,
          to_email: 'osunbaadeola56@gmail.com',
          choice: form.choice,
          message: form.message,
        },
        'NvCW_hJQ3fQXsIjEW'
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            text: 'Thanks for your message, We will get back to you shortly...',
            icon: 'success',
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            timer: 4000,
          });
          // toast.success("Thank you for sending a message");
          // setTimeout(
          //   () => toast.success("We will get back to you shortly..."),
          //   [4000]
          // );

          setForm({
            name: '',
            email: '',
            message: '',
            choice: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          // toast.error("Something went wrong");

          Swal.fire({
            text: 'An error occurred while submitting your message. Please try again.',
            icon: 'error',
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            timer: 4000,
          });
        }
      );
  };

  return (
    <div className=' pt-7 pb-5 relative'>
      <div className='flex justify-center items-center gap-1.5'>
        <img src={logoIcon} alt='' className='rounded-full w-14 h-14' />

        <div className='text-black-100'>
          <h2 className='font-clashDisplay text-2xl font-semibold'>
            Osunba Adeola
          </h2>
          <div className='pl-2  flex items-center gap-1.5'>
            <div className='w-2.5 h-2.5 rounded-full bg-green-500'></div>
            <p className='font-light text-sm'>available for hire</p>
          </div>
        </div>
      </div>

      <h1 className='text-4xl font-clashDisplay font-semibold text-center pt-9 text-black-100'>
        Get started
      </h1>
      <p className='text-center text-black-100 font-light pt-1 px-7 text-sm'>
        Fill out the form below and I'll be in touch ASAP!
      </p>

      <div>
        <div className='flex justify-center pt-10 relative'>
          <div className='bg-[#211e35] md:w-[80%] lg:w-[60%] w-[100%] md:h-[46rem] h-[47rem] contact-bg md:px-7 z-10 '>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-12 flex flex-col gap-6 p-7 pt-0 rounded-md'
            >
              <label className='flex flex-col'>
                <span className='text-white text-base font-medium mb-3 font-clashDisplay'>
                  Name
                </span>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  required
                  className='border border-gray-200 bg-[#373549]  px-3 placeholder:text-secondary text-white rounded-[4px] py-2 text-base outline-none  font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white text-base font-medium mb-3 font-clashDisplay '>
                  Email
                </span>
                <input
                  type='email'
                  name='email'
                  required
                  value={form.email}
                  onChange={handleChange}
                  className='border border-gray-200 bg-[#373549]  px-3 text-base placeholder:text-secondary text-white rounded-[4px] py-2 outline-none  font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white text-base font-medium mb-3 font-clashDisplay'>
                  What type of website do you need ?
                </span>
                <input
                  type='text'
                  required
                  name='choice'
                  value={form.choice}
                  onChange={handleChange}
                  className='border border-gray-200 bg-[#373549] text-base px-3 placeholder:text-secondary text-white rounded-[4px] py-3 outline-none  font-medium'
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white text-base font-medium mb-3 font-clashDisplay'>
                  Additional message
                </span>
                <textarea
                  rows={7}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  className=' border border-gray-200 bg-[#373549] px-3 py-3 text-base placeholder:text-secondary text-white rounded-[4px] outline-none  font-medium'
                />
              </label>

              <button
                type='submit'
                className='bg-white text-black-100 py-2.5 px-8 rounded-md outline-none w-full text-base font-bold shadow-sm shadow-primary mb-2 font-clashDisplay'
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>

          <div className='md:w-[80%] lg:w-[60%] w-[100%] md:h-[46rem] h-[47rem] absolute bg-indigo-600 contact'></div>
        </div>

        <div className='pl-5 md:pl-20 pt-2'>
          <img src={free} alt='' className='w-[4.7rem]' />
        </div>

        <hr className='mt-14' />

        <div className='flex justify-between items-center px-3'>
          <p className='text-center mt-2 py-2 text-sm text-gray-300 font-light'>
            &copy; copyright {year}
          </p>

          <h2 className='text-sm font-light text-center text-gray-300'>
            All Rights Reserved
          </h2>
        </div>

        <div className='flex justify-center pt-4'>
          <h2 className='text-sm text-gray-300'>
            Developed by{' '}
            <span
              onClick={() =>
                window.open('https://wa.me/+2348169276204', '_blank')
              }
              className='cursor-pointer font-medium'
            >
              @raythedev
            </span>
          </h2>
        </div>

        <div className='flex justify-center space-x-3 pt-3'>
          <div
            onClick={() =>
              window.open('https://wa.me/+2348169276204', '_blank')
            }
            className='cursor-pointer'
          >
            <Whatsapp size={25} />
          </div>

          <div
            onClick={() =>
              window.open('https://https://x.com/AdeolaOsunba', '_blank')
            }
            className='cursor-pointer'
          >
            <Twitter size={25} />
          </div>

          <div
            onClick={() =>
              window.open('https://www.linkedin.com/in/osunbajames', '_blank')
            }
            className='cursor-pointer'
          >
            <Linkedin size={25} />
          </div>
        </div>

        <div className='absolute bg-stone-300 w-full h-[30rem] -z-40 top-0'></div>
      </div>
    </div>
  );
};

export default Contact;
