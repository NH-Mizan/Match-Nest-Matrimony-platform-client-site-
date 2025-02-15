import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const useCount = () => {
    const axiosPublic = useAxiosPublic()
    const [counter, setCounter] = useState()

  useEffect(()=>{
    axiosPublic.get('/biodata-summary')
    .then(res =>{
   setCounter(res.data)

    })
  },[])
  return[counter]
};

export default useCount;