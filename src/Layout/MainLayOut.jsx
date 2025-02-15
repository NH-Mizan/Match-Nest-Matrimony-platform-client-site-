
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import useAuth from '../CastomHooks/Hooks/useAuth';
import Loading from '../Components/Loader/Loading';

const MainLayOut = () => {
    const { loading } = useAuth()
    return (
        <div>
            <Navbar />
            {
                loading ?
                 <Loading /> 
                :
                <Outlet />
            }
            <Footer />


        </div>
    );
};

export default MainLayOut;

