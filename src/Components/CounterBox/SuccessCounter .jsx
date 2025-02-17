import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

import useBiodata from "../../CastomHooks/Hooks/useBiodata";

import useReviews from "../../CastomHooks/Hooks/useReviews";

const SuccessCounter = () => {
  const [reviews] = useReviews()
 
  const [biodatas] = useBiodata()
  const maleBiodatas = biodatas.filter((biodata) => biodata.biodataType === "male");
  const femaleBiodatas = biodatas.filter((biodata) => biodata.biodataType === "female");
  

 


  return (
    <div className="py-12">
     
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          <span className="text-purple-500">Our</span>{" "}
          <span className="text-pink-600">Members</span>
       
        </h2>
      <div className=" w-11/12 mx-auto rounded-xl py-8     grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        <div className="bg-base-300 py-12 rounded-xl border border-pink-500 text-center">
          <h3 className="text-2xl font-bold text-purple-500 ">
            
            <CountUp start={0} end={biodatas?.length} duration={5} />+
          </h3>
          <p className="text-black  font-bold py-2">Total Biodata</p>
        </div>
        <div className="bg-base-300 py-12 rounded-xl border border-pink-500  text-center">
          <h3 className="text-2xl font-bold text-pink-500">
       
            <CountUp start={0} end={femaleBiodatas.length} duration={5} />+
          </h3>
          <p className="text-black  font-bold py-2">Girls Biodata</p>
        </div>
        <div className="bg-base-300 py-12 rounded-xl border border-pink-500   text-center">
          <h3 className="text-2xl font-bold text-blue-500">
         
            <CountUp start={0} end={maleBiodatas?.length} duration={5} />+
          </h3>
          <p className="text-black  font-bold py-2">Boys Biodata</p>
        </div>
        <div className="bg-base-300 py-12 rounded-xl border border-pink-500  text-center">
          <h3 className="text-2xl font-bold text-green-500">
            <CountUp start={0} end={reviews?.length} duration={5} />+

          </h3>
          <p className="text-black  font-bold py-2">Marriages Completed</p>
        </div>
      </div>
    
    </div>
  );
};

export default SuccessCounter;
