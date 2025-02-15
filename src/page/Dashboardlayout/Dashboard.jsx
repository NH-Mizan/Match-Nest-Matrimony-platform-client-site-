import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import { Context } from '../../Provider/AuthProvider';
import { IoLogOut } from 'react-icons/io5';
import { FaUser, FaUsersGear, FaUsersViewfinder } from 'react-icons/fa6';
import { SiAdobepremierepro } from 'react-icons/si';
import { FaHome, FaUserEdit } from 'react-icons/fa';
import { VscGitPullRequestNewChanges } from 'react-icons/vsc';
import { MdContactMail, MdFavorite } from 'react-icons/md';
import useUsers from '../../CastomHooks/Hooks/useUsers';
import useAuth from '../../CastomHooks/Hooks/useAuth';
import useAxiosSecure from '../../CastomHooks/Hooks/useAxiosSecure';
import AdminHome from '../AdminUserDashboard/AdminHome';




const Dashboard = () => {
    const{handleLogOutProvider}= useContext(Context)
    const axiosSecure =useAxiosSecure()
    const{user}=useAuth()
    const [admin, setAdmin] =useState()
    const [users]= useUsers()
    

    const adminChek = () =>{
        axiosSecure.get(`/users/isadmin?email=${user.email}`)
        .then(res =>{
            setAdmin(res.data)
        })
    }
    useEffect(()=>{
         document.title ='Dashbord  || MatchNest'
        adminChek()
    },[])

    const isAdmin = admin?.role === 'admin'

    // const isAdmin = true;
    // const isAdmin = false;
    
    return (
        <div className="min-h-screen w-11/12 mx-auto flex bg-gray-100">

            {/* Sidebar for Dashboard Navigation */}
            {
                isAdmin? <div className="w-1/4 p-4 bg-white mt-12 shadow-md ">
                     <h2 className="text-lg font-bold mb-4">Admin Dashboard</h2>

                     <ul>
                    <li className="mb-2">
                        <NavLink
                            to="/dashboard/adminhome"
                            className="flex gap-2 items-center  py-2 px-3 text-gray-700 rounded hover:bg-purple-200 -"
                        >
                           <FaUser className='text-xl'/>  Admin Home
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="manage"
                            className="flex gap-2 items-center  py-2 px-3 text-gray-700 rounded hover:bg-purple-200 -"
                        >
                           <FaUsersGear className='text-xl'/>  Manage Users
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="approved-premium"
                            className="flex gap-2 items-center  py-2 px-3 text-gray-700 rounded hover:bg-purple-200"
                        >
                          <SiAdobepremierepro className='text-xl'/>  Approved Premium
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="contact-request"
                            className="flex gap-2 items-center  py-2 px-3 text-gray-700 rounded hover:bg-purple-200"
                        >
                          <VscGitPullRequestNewChanges className='text-xl'/>  Approved Contact Request
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="/"
                            className="flex gap-2 items-center  py-2 px-3 text-gray-700 rounded hover:bg-purple-200"
                        >
                          <FaHome className='text-xl'/>  Home
                        </NavLink>
                    </li>
               
                    <li>
                        <button
                            onClick={handleLogOutProvider}
                            className="flex items-center gap-2 py-2 px-3 text-red-500 rounded hover:bg-purple-200"
                        >
                         <IoLogOut className='text-xl' />   Logout
                        </button>
                    </li>
                </ul>

                </div> 
                :
                <div className="w-1/4 p-4 bg-white mt-12 shadow-md ">
                <h2 className="text-lg font-bold mb-4">User Dashboard</h2>
                <ul>
                    <li className="mb-2">
                        <NavLink
                            to="edit-biodata"
                            className="flex gap-2 items-center py-2 px-3 text-gray-700 rounded hover:bg-purple-200 -"
                        >
                           <FaUserEdit className='text-xl' /> Edit Biodata
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="view-biodata"
                            className="flex gap-2 items-center py-2 px-3 text-gray-700 rounded hover:bg-purple-200"
                        >
                          <FaUsersViewfinder className='text-xl'/>  View Biodata
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="my-contact-request"
                            className="flex gap-2 items-center  py-2 px-3 text-gray-700 rounded hover:bg-purple-200"
                        >
                           <MdContactMail className='text-xl'/> My Contact Request
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="favourites-biodata"
                            className="flex gap-2 items-center  py-2 px-3 text-gray-700 rounded hover:bg-purple-200"
                        >
                           <MdFavorite className='text-xl'/> Favourites Biodata
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="reviewsAdd"
                            className="flex gap-2 items-center  py-2 px-3 text-gray-700 rounded hover:bg-purple-200"
                        >
                           <FaUserEdit className='text-xl'/> Add Success Married
                        </NavLink>
                    </li>
                    <li className="mb-2">
                        <NavLink
                            to="/"
                            className="flex gap-2 items-center  py-2 px-3 text-gray-700 rounded hover:bg-purple-200"
                        >
                          <FaHome className='text-xl'/>  Home
                        </NavLink>
                    </li>
                    <li>
                        <button
                            onClick={handleLogOutProvider}
                            className="flex gap-2 items-center  py-2 px-3 text-red-500 rounded hover:bg-purple-200"
                        >
                          <IoLogOut className='text-xl'/>  Logout
                        </button>
                    </li>
                </ul>
            </div>
            }
         <div className='mt-12 ml-8 w-3/4'>
         
         <Outlet />
         </div>


        </div>
    );
};

export default Dashboard;
