import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../../CastomHooks/SocailLogIn/GoogleLogin';
import { Context } from '../../Provider/AuthProvider';


const LogIn = () => {
    const {handleLogInProvider , setUser} = useContext(Context)
    const [show, setShow] = useState(false)
    const [error, setError] = useState({})
    const navigate = useNavigate()
 
    const handleLoginForm =(e)=>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        handleLogInProvider(email, password)
        .then(res=>{
            setUser(res.user)
            navigate('/')

        }) .catch((erro) => {
            setError({...error, login: erro.code })
        });

        

    } 
    return (
        <div>
        <div className=' mx-auto w-11/12 '>
        <div
            className="hero py-12"
            >
{/* style={{
                backgroundImage: "url(https://i.ibb.co.com/dBQJyTR/banner3.jpg)",
            }} */}

            <div className="hero-content  p-12 rounded-xl flex flex-col lg:flex-row md:flex-row gap-12 bg-lime-100 text-center">
                <div className=""><img src='https://i.ibb.co.com/nQ0XZNM/images-1.jpg' alt="" className="rounded-lg h-80 w-80" /></div>
                <div className="max-w-md text-left">
                {/* login section */}

                    <div className="card p-4 w-full max-w-lg py-12">
                        <h2 className="text-3xl font-bold text-center mb-6 ">Welcome Back Login Now !!</h2>
                        <form onSubmit={handleLoginForm} className="card-body border-2 border-white bg-green-100  p-4 rounded-xl">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? 'text' : 'password'}
                                    name='password' placeholder="password" className="input input-bordered" required />

                                <button type='button' onClick={() => setShow(!show)} className="btn btn-xs absolute right-4 top-12">{
                                    show ? <FaEyeSlash /> : <FaEye />
                                } </button>
                                {
                                    error.login &&
                                    <label className="label text-red-500 font-bold">{error.login}</label>


                                }
                                <label className="label">

                                    <Link to={'/forget'} className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                         <div className='w-full'> 
                         <GoogleLogin/>
                         </div>
                        <p className=" text-center"> Don’t have an account? <Link to={'/register'} className='text-red-500 font-bold'>Register Here </Link> </p>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    </div>

            
        </div>
    );
};

export default LogIn;