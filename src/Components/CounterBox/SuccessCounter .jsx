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
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-purple-600">
        Our Success Stories 
      </h2>
      <div className=" w-11/12 mx-auto py-8 bg-gray-400  shadow-md  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        <div className=" text-center">
          <h3 className="text-2xl font-bold text-purple-500 ">
            
            <CountUp start={0} end={biodatas?.length} duration={5} />
          </h3>
          <p className="text-gray-700">Total Biodata</p>
        </div>
        <div className=" text-center">
          <h3 className="text-2xl font-bold text-pink-500">
       
            <CountUp start={0} end={femaleBiodatas.length} duration={5} />
          </h3>
          <p className="text-gray-700">Girls Biodata</p>
        </div>
        <div className="  text-center">
          <h3 className="text-2xl font-bold text-blue-500">
         
            <CountUp start={0} end={maleBiodatas?.length} duration={5} />
          </h3>
          <p className="text-gray-700">Boys Biodata</p>
        </div>
        <div className=" text-center">
          <h3 className="text-2xl font-bold text-green-500">
            <CountUp start={0} end={reviews?.length} duration={5} />

          </h3>
          <p className="text-gray-700">Marriages Completed</p>
        </div>
      </div>
    
    </div>
  );
};

export default SuccessCounter;
