import React, {useState} from 'react';
import { acmLogo } from '../assets';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
<nav>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={acmLogo} alt="Flowbite Logo" />
    <button onClick={toggleNavbar} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class={`${!isOpen ? "hidden " : " "} bg-transparent w-full md:block md:w-auto`} id="navbar-default">
      <ul class="font-Gotham text-lg flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
        <li>
          <a href="#" class="block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 dark:text-white" >Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-black rounded  md:border-0 md:p-0 ">About Us</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-black rounded md:border-0 md:p-0 ">Register</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-black rounded  md:border-0 md:p-0">Future Unvieled</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-black rounded  md:border-0 md:p-0">Competitions Map</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    );
};

export default Navbar;
      