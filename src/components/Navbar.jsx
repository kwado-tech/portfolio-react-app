import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [navbarState, toggleNavbar] = useState(false);

    const handleOnToggleNavBarCallback = () => {
        toggleNavbar(!navbarState);
    }

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
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
        </div>
    );
}

export default Navbar;