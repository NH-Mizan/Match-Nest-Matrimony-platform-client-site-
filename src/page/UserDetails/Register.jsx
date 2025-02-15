import React, { useContext, useState } from 'react';
import GoogleLogin from '../../CastomHooks/SocailLogIn/GoogleLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../Provider/AuthProvider';
import useAxiosPublic from '../../CastomHooks/Hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const [show, setShow] = useState(false)
    const [error, setError] = useState()
    const {handleCreateProvider, setUser} = useContext(Context)
    const navigate = useNavigate()

    const handleRegisterForm = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        const userInfo = {name, email, photo, password}
        // console.log(userInfo)
        const userInf = {
            userName: name,
            email: email
            
        }
   
        axiosPublic.post('/users', userInf)
            .then(res => {
                if(res.data.insertedId){
                    // console.log('usera added to')
             
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User created successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                 
                }
            })
        handleCreateProvider(email, password)
        .then (() =>{
           
            // console.log(user)
            updateProfileData({ displayName: name, photoURL: photo })
            .then(() => {
                // create user entry in the database
                setUser((prev) => {
                    return { ...prev, displayName: name, photoURL: photo }
                    
                })
       
           
                  

            })
            
        }) .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
          navigate('/')  

    }
    return (
        <div>
            <div className=' mx-auto w-11/12 '>
                <div
                    className="hero py-12"
                   >



                    <div className="card bg-base-100 w-full max-w-lg py-12 shrink-0 shadow-2xl">
                        <h2 className="text-3xl font-bold text-center ">Join Our Mission !!</h2>

                        <form onSubmit={handleRegisterForm} className="card-body">
                            <label className="input input-bordered flex items-center my-2 gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input type="text" name='name' className="grow" placeholder="Username" required />
                            </label>
                            <label className="input input-bordered flex items-center my-2 gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input type="text" name='photo' className="grow" placeholder="Photo URL" required />
                            </label>

                            <label className="input input-bordered flex items-center my-2 gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="email" name='email' className="grow" placeholder="Email" required />
                            </label>

                            <div className="form-control relative my-2">

                                <input type={show ? 'text' : 'password'}
                                    name='password' placeholder="password" className="input input-bordered" required />

                                <button type='button' onClick={() => setShow(!show)} className="btn btn-xs absolute right-4 top-3">{
                                    show ? <FaEyeSlash /> : <FaEye />
                                } </button>
                            </div>
                            <label className="label text-red-500 font-bold">{error}</label>

                            <button className='btn btn-info'>Submit Now </button>

                            <div>
                                <GoogleLogin />
                            </div>
                        </form>


                        <p className=" text-center"> Already have an account? <Link to={'/login'} className='text-red-500 font-bold'>Login Now </Link> </p>



                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;