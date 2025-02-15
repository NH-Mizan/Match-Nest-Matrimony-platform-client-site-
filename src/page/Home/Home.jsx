import React, { useEffect } from 'react';
import Banner from '../../Components/Banner/Banner';
import HowItWorks from '../../Components/HowItWorks';
import SuccessCounter from '../../Components/CounterBox/SuccessCounter ';
import PremiumUser from '../../Components/PremiumUser/PremiumUser';
import SuccessStory from '../../Components/PremiumUser/SuccessStory';

const Home = () => {
    useEffect(()=>{
         document.title ='Home page || MatchNest'
    },[])
    return (
        <div>
            <Banner/>
       
             <PremiumUser/>
           
            <HowItWorks/>
            <SuccessCounter/>
            <SuccessStory/>
            
        </div>
    );
};

export default Home;