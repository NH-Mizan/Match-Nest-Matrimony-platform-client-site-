import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useBiodata = () => {
    const  [biodatas, setBiodatas] = useState([])
    const axiosPublic = useAxiosPublic()
   useEffect(()=>{
    axiosPublic.get('/biodatas')
      .then(res =>{
        setBiodatas(res.data)
      })
   },[])
  
    return [biodatas]
};

export default useBiodata;