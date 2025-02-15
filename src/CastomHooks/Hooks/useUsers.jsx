import axios from 'axios';
import  { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useUsers = () => {
    const  [users, setUsers] = useState([])
    const axiosSecure =useAxiosSecure()
    useEffect(()=>{
      axiosSecure.get('/users')
    .then(res =>{
      setUsers(res.data)

    })
   
    },[])
    
    return[users]
};

export default useUsers;