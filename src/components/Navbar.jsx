import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../style';
import { mobileNavLinks, navLinks } from '../constants';
import { logoIcon } from '../assets';
import { Android, TextRight, X } from 'react-bootstrap-icons';
import 'animate.css';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddi
      } w-full flex items-center fixed py-2 top-0 z-20 md:px-7  px-6 ${
        scrolled
          ? 'bg-primaryy animate__animated animate__fadeInDown'
          : 'bg-transparent'
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-8xl '>
        <Link
          to='/'
          className='flex items-center gap-1'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <div className='relative  '>
            <span className='absolute -bottom-[0.3px] right-1 w-[10px] h-[10px] rounded-full border-white bg-green-500'></span>
            <img src={logoIcon} alt='' className='rounded-full w-12 h-12' />
          </div>

          <div>
            <p className='text-white text-lg md:text-[13px] lg:text-lg font-semibold cursor-pointer flex font-clashDisplay'>
              Osunba Micheal James &nbsp;
              <span className='sm:block hidden font-clashDisplay'>
                | raythadev
              </span>
            </p>
            <div className='flex items-center'>
              <Android size={20} />
              <p className='leading-[12px] text-gray-400 ml-1 text-sm'>
                available for hire
              </p>
            </div>
          </div>
        </Link>

        <ul className='list-none hidden sm:flex flex-row md:gap-3 lg:gap-7 '>
          {mobileNavLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[14px] font-medium cursor-pointer lg:text-base`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center '>
          <div
            className='w-[28px] h-[28px] object-contain z-50 cursor-pointer '
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <X size={35} color='white' />
            ) : (
              <TextRight size={30} color='white' />
            )}
          </div>

          <div className=''>
            <div
              className={`${
                !toggle
                  ? ' hidden '
                  : 'flex animate__animated animate__fadeInRight'
              }  bg-[#211e35] absolute right-0 top-16 h-fit w-full z-20 border border-t-0  bg-opacity-[0.97] `}
            >
              <ul className='list-none flex items-start p-12 pb-6 pt-5 space-y-6 flex-1 flex-col '>
                {mobileNavLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title
                        ? 'text-white border-2  border-l-0 border-t-0 border-r-0 pb-[4px] w-6'
                        : 'text-secondary'
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
