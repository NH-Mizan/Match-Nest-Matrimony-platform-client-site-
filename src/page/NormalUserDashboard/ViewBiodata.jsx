import React, { useEffect, useState } from "react";

import useAuth from "../../CastomHooks/Hooks/useAuth";
import useAxiosPublic from "../../CastomHooks/Hooks/useAxiosPublic";
import Swal from "sweetalert2";


const ViewBiodata = () => {
  const {user} = useAuth()

  const axiosPublic = useAxiosPublic()
  
  console.log(user)

  const [biodata, setBiodata] = useState()
  // console.log(biodata)


 
  useEffect(() => {
   axiosPublic.get(`/biodatas/viewdata?email=${user.email}`)
    .then(res=>{
      setBiodata(res.data);
      // console.log(res.data)
    })
    
  }, [])



  const handleRequestPremium = (user) => {
    Swal.fire({
      title: "Are you sure ?",
      text: "Request Premium user ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Send it !"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.patch(`/users/request/${user.email}`)
        .then(res => {
          // console.log(res.data)
          if (res.data.matchedCount > 0) {
            Swal.fire({
              title: "Send Admin Request!",
              text: "Your file has been successfull.",
              icon: "success"
            });
          }
        })
      
      }
    });
   

  };

  return (
    <div className="p-16 mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">View Biodata </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         {/* Profile Image */}
         <div className="md:col-span-2">
          
          {biodata?.profileImage ? (
            <img
              src={biodata?.profileImage}
              alt="Profile"
              className="mt-2 w-32 h-32 rounded-full"
            />
          ) : (
            <p className="text-gray-700">No Image</p>
          )}
        </div>

        {/* Biodata Type */}
        <div>
          <h4 className="font-bold">Biodata Type</h4>
          <p className="text-gray-700">{biodata?.biodataType || "N/A"}</p>
        </div>

        {/* Name */}
        <div>
          <h4 className="font-bold">Name</h4>
          <p className="text-gray-700">{biodata?.name || "N/A"}</p>
        </div>

       

        {/* Date of Birth */}
        <div>
          <h4 className="font-bold">Date of Birth</h4>
          <p className="text-gray-700">{biodata?.dob || "N/A"}</p>
        </div>

        {/* Height */}
        <div>
          <h4 className="font-bold">Height</h4>
          <p className="text-gray-700">{biodata?.height || "N/A"} cm</p>
        </div>

        {/* Weight */}
        <div>
          <h4 className="font-bold">Weight</h4>
          <p className="text-gray-700">{biodata?.weight || "N/A"} kg</p>
        </div>

        {/* Age */}
        <div>
          <h4 className="font-bold">Age</h4>
          <p className="text-gray-700">{biodata?.age || "N/A"} years</p>
        </div>

        {/* Occupation */}
        <div>
          <h4 className="font-bold">Occupation</h4>
          <p className="text-gray-700">{biodata?.occupation || "N/A"}</p>
        </div>

        {/* Race */}
        <div>
          <h4 className="font-bold">Race (Skin Color)</h4>
          <p className="text-gray-700">{biodata?.race || "N/A"}</p>
        </div>

        {/* Father's Name */}
        <div>
          <h4 className="font-bold">Father's Name</h4>
          <p className="text-gray-700">{biodata?.fatherName || "N/A"}</p>
        </div>

        {/* Mother's Name */}
        <div>
          <h4 className="font-bold">Mother's Name</h4>
          <p className="text-gray-700">{biodata?.motherName || "N/A"}</p>
        </div>

        {/* Permanent Division */}
        <div>
          <h4 className="font-bold">Permanent Division</h4>
          <p className="text-gray-700">{biodata?.permanentDivision || "N/A"}</p>
        </div>

        {/* Present Division */}
        <div>
          <h4 className="font-bold">Present Division</h4>
          <p className="text-gray-700">{biodata?.presentDivision || "N/A"}</p>
        </div>

        {/* Expected Partner Age */}
        <div>
          <h4 className="font-bold">Expected Partner Age</h4>
          <p className="text-gray-700">{biodata?.exAge || "N/A"} years</p>
        </div>

        {/* Expected Partner Height */}
        <div>
          <h4 className="font-bold">Expected Partner Height</h4>
          <p className="text-gray-700">{biodata?.exHeight || "N/A"} cm</p>
        </div>

        {/* Expected Partner Weight */}
        <div>
          <h4 className="font-bold">Expected Partner Weight</h4>
          <p className="text-gray-700">{biodata?.exWeight || "N/A"} kg</p>
        </div>

        {/* Contact Email */}
        <div>
          <h4 className="font-bold">Contact Email</h4>
          <p className="text-gray-700">{biodata?.email || "N/A"}</p>
        </div>

        {/* Mobile Number */}
        <div>
          <h4 className="font-bold">Mobile Number</h4>
          <p className="text-gray-700">{biodata?.mobile || "N/A"}</p>
        </div>
      </div>

      {/* Make Biodata to Premium Button */}
      <button
        onClick={() => handleRequestPremium(user)}
        className="bg-orange-500 text-white font-bold py-2 px-6 mt-6 rounded hover:bg-orange-600"
      >
        Make Biodata to Premium
      </button>
    </div>
  );
};

export default ViewBiodata;
