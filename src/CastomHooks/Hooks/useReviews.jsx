import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useReviews = () => {
    const  [reviews, setReviews] = useState([])
    const axiosPublic = useAxiosPublic()
    useEffect(()=>{
      axiosPublic.get('/reviews')
    .then(res =>{
      setReviews(res.data)

    })
   
    },[])
    
    return [reviews]
};

export default useReviews;