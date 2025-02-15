import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';

const usePremium = () => {
    const axiosPublic= useAxiosPublic()
    const[premiumUser, setPremiumUser] = useState()
    useEffect(() => {
        axiosPublic.get(`/premium/user`).then((res) => {
            setPremiumUser(res.data);
            // console.log("hello premium", res.data);
        });
    }, []);
    return [premiumUser]
};

export default usePremium;