import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [navbarState, toggleNavbar] = useState(false);

    const handleOnToggleNavBarCallback = () => {
        toggleNavbar(!navbarState);
    }

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div className='z-10 cursor-pointer'>
                <img src={logo} alt="portfolio-logo" className='w-[50px]' />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

            {/* handBurger */}
            <div onClick={handleOnToggleNavBarCallback} className='mr-4 md:hidden z-10 cursor-pointer'>
                {
                    navbarState
                        ? <FaTimes />
                        : <FaBars />
                }
            </div>

            {/* mobile menu */}
            <ul className={!navbarState ? 'hidden' : 'absolute top-0  left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center md:hidden'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-blue-800'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                            LinkedIn <FaLinkedin size={30.0} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#333333]'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                            Github <FaGithub size={30.0} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#6dc3b0]'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                            Email <HiOutlineMail size={30.0} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#565f69]'>
                        <a href="/" className='flex justify-between items-center w-full text-gray-300'>
                            Resume <BsFillPersonLinesFill size={30.0} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;