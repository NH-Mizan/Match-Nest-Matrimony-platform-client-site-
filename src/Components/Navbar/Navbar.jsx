import React, { useContext, useState } from 'react';

import { FaUpLong } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import { Context } from '../../Provider/AuthProvider';
import { Button } from '@material-tailwind/react';
import { IoLogOut } from 'react-icons/io5';
import { RxDashboard } from 'react-icons/rx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, handleLogOutProvider } = useContext(Context)
  return (
    <div className="fixed w-full z-50 ">
      <div className='relative  shadow bg-black bg-opacity-35'>
        <nav className="w-11/12 mx-auto">
          <div className="py-4 mx-auto">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl text-white font-bold">Match<span className='text-cyan-500'>Nest</span> </h2>

                </div>


                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="text-white dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                    aria-label="toggle menu"
                  >
                    {!isOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 8h16M4 16h16"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </button>

                  <div className='ml-4'>

                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                          <img
                            alt="user photo "
                            src={user && user?.photoURL} />
                        </div>
                      </div>
                      <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-cyan-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                          <Link to={'/dashboard'}> <RxDashboard />Dashboard</Link>
                        </li>

                        <li><Button onClick={handleLogOutProvider}><IoLogOut />  Logout </Button></li>
                      </ul>
                    </div>


                  </div>
                </div>

              </div>


              {/* Mobile Menu */}
              <div
                className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                  }`}
              >
                <div className="flex flex-col -mx-6 lg:flex-row font-bold lg:items-center lg:mx-8">
                  <NavLink
                    to={'/'}
                    className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-cyan-500"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={'/biodatas'}
                    className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-cyan-500"
                  >
                    Biodatas
                  </NavLink>
                  <NavLink
                    to={'/about'}
                    className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-cyan-500 "
                  >
                    About Us
                  </NavLink>
                  <NavLink
                    to={'/contact'}
                    className="px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:text-cyan-500 "
                  >
                    Contact Us
                  </NavLink>
                </div>


                <div className="flex items-center mt-4 lg:mt-0">
                  <div className='items-center flex'>
                    {
                      user ?
                        <div className="dropdown dropdown-end">
                          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                              <img
                                alt="Tailwind CSS Navbar component"
                                src={user && user?.photoURL} />
                            </div>
                          </div>
                          <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                              <Link to={'/dashboard'}><RxDashboard />Dashboard</Link>
                            </li>

                            <li><button onClick={handleLogOutProvider}> <IoLogOut /> Logout  </button></li>
                          </ul>
                        </div>
                        :
                        <Link to={'/login'} className='btn btn-neutral mr-4'>LogIn</Link>
                    }


                  </div>


                </div>
              </div>

            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;