import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Context } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const GoogleLogin = () => {
const {handleGoogleProvider,setUser} = useContext(Context)
const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()
    const handleGooleSingIn = () =>{
        handleGoogleProvider()
      .then(res =>{
        setUser(res.user)
        // console.log(res.user)
        axiosPublic.post('/users',{userName:res.user.displayName, email:res.user.email})
        .then(res => {
            if(res.data.insertedId){

         
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
             
            }
            navigate('/')
        })

       
      })

    }
    return (
        <div>
              <button type='button' onClick={handleGooleSingIn} className='btn btn-primary btn-outline mt-4'><FcGoogle className='text-xl' /> Google Login Now </button>
        </div>
    );
};

export default GoogleLogin;