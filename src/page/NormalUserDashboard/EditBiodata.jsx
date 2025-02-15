import React, { useEffect, useState } from "react";
import useAuth from "../../CastomHooks/Hooks/useAuth";

import Swal from "sweetalert2";
import useAxiosSecure from "../../CastomHooks/Hooks/useAxiosSecure";


const EditBiodata = () => {
  const axiosSecure = useAxiosSecure()

  const { user } = useAuth()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const biodataType = form.biodataType.value;
    const name = form.name.value;
    const profileImage = form.profileImage.value;
    const dob = form.dob.value;
    const age = form.age.value;
    const height = form.height.value;
    const weight = form.weight.value;
    const occupation = form.occupation.value;
    const race = form.race.value;
    const fatherName = form.fatherName.value;
    const motherName = form.motherName.value;
    const permanentDivision = form.permanentDivision.value;
    const presentDivision = form.presentDivision.value;
    const exHeight = form.exHeight.value;
    const exWeight = form.exWeight.value;
    const exAge = form.exAge.value;
    const email = form.email.value;
    const mobile = form.mobile.value;


    const biodataInfo = { biodataType, name, profileImage, dob, height, weight,age, occupation, race, fatherName, motherName, permanentDivision, presentDivision, exHeight,exWeight,exAge, email, mobile }
    
   
      try {
       await axiosSecure.post('/biodatas', biodataInfo)
        Swal.fire({
            title: 'Success!',
            text: ' Biodata Edite Sucessfully',
            icon: 'success',
            confirmButtonText: 'Back'
        })
    } catch(error){
        Swal.fire({
            title: 'Oops.....!',
            text: `Somthing went wrong ! ${error.message}`,
            icon: 'error',
            confirmButtonText: 'Back'
        })
    }

  };
  useEffect(()=>{
 document.title ='Biodata Edit || MatchNest'
  },[])

  return (
    <div className="p-12 w-full bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Edit Biodata</h2>
      <form onSubmit={handleSubmit}>

        {/* Biodata Type */}
        <div className="mb-4">
          <label className="font-bold">Biodata Type</label>
          <select
            name="biodataType"


            className="w-full p-2 mt-2 border rounded"
            required
          >
            <option value="">Select Type</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="lg:flex gap-12">

          {/* Name */}
          <div className="mb-4">
            <label className="font-bold">Name</label>
            <input
              type="text"
              name="name"

              className="w-full p-2 mt-2 border rounded"
              placeholder="Your full name"
              required
            />
          </div>
          {/* Profile Image */}
          <div className="mb-4">
            <label className="font-bold">Profile Image Link</label>
            <input
              type="text"
              name="profileImage"

              className="w-full p-2 mt-2 border rounded"
              placeholder="Image link (URL)"
              required
            />
          </div>
        </div>


        {/* Date of Birth */}
        <div className="mb-4">
          <label className="font-bold">Date of Birth</label>
          <input
            type="date"
            name="dob"

            className="w-full p-2 mt-2 border rounded"
            required
          />
        </div>

        <div className="flex gap-12">
          {/* Height */}
          <div className="mb-4">
            <label className="font-bold">Height (cm)</label>
            <input
              type="number"
              name="height"

              className="w-full p-2 mt-2 border rounded"
              required
            />
          </div>

          {/* Weight */}
          <div className="mb-4">
            <label className="font-bold">Weight (kg)</label>
            <input
              type="number"
              name="weight"

              className="w-full p-2 mt-2 border rounded"
              required
            />
          </div>
        </div>
        <div className="mb-4">
            <label className="font-bold">Age</label>
            <input
              type="number"
              name="age"

              className="w-full p-2 mt-2 border rounded"
              required
            />
          </div>

        {/* Occupation */}
        <div className="mb-4">
          <label className="font-bold">Occupation</label>
          <select
            name="occupation"

            className="w-full p-2 mt-2 border rounded"
            required
          >
            <option value="">Select Occupation</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="engineer">Engineer</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>

        {/* Race */}
        <div className="mb-4">
          <label className="font-bold">Race</label>
          <select
            name="race"

            className="w-full p-2 mt-2 border rounded"
            required
          >
            <option value="">Select Race</option>
            <option value="fair">Fair</option>
            <option value="tan">Tan</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Parent Details */}
        <div className="mb-4">
          <label className="font-bold">Father's Name</label>
          <input
            type="text"
            name="fatherName"

            className="w-full p-2 mt-2 border rounded"
            placeholder="Father's Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="font-bold">Mother's Name</label>
          <input
            type="text"
            name="motherName"

            className="w-full p-2 mt-2 border rounded"
            placeholder="Mother's Name"
            required
          />
        </div>

        {/* Permanent Division */}
        <div className="mb-4">
          <label className="font-bold">Present Division</label>
          <select
            name="presentDivision"

            className="w-full p-2 mt-2 border rounded"
            required
          >
            Dhaka, Chattagra, Rangpur, Barisal, Khulna, Mymensingh, Sylhet
            <option value="">Select Division</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagra">Chattagra</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Sylhet">Sylhet</option>

          </select>
        </div>
        <div className="mb-4">
          <label className="font-bold">Permanent Division </label>
          <select
            name="permanentDivision"

            className="w-full p-2 mt-2 border rounded"
            required
          >
            Dhaka, Chattagra, Rangpur, Barisal, Khulna, Mymensingh, Sylhet
            <option value="">Select Division</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattagra">Chattagra</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Sylhet">Sylhet</option>
            {/* Add remaining divisions here */}
          </select>
        </div>

       

        <div className="flex gap-12">
          {/* Height */}
          <div className="mb-4">
            <label className="font-bold">Expected Partner Height  (cm)</label>
            <input
              type="number"
              name="exHeight"

              className="w-full p-2 mt-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="font-bold">Expected Partner Weight (kg)</label>
            <input
              type="number"
              name="exWeight"

              className="w-full p-2 mt-2 border rounded"
              required
            />
          </div>
        </div>
        <div className="mb-4">
            <label className="font-bold"> Expected Partner Age</label>
            <input
              type="number"
              name="exAge"

              className="w-full p-2 mt-2 border rounded"
              required
            />
          </div>


        {/* Contact Email */}
        <div className="mb-4">
          <label className="font-bold">Contact Email</label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            readOnly
            className="w-full p-2 mt-2 border rounded bg-gray-100"
          />
        </div>

        {/* Mobile */}
        <div className="mb-4">
          <label className="font-bold">Mobile Number</label>
          <input
            type="tel"
            name="mobile"

            className="w-full p-2 mt-2 border rounded"
            placeholder="Enter Mobile Number"
            required
          />
        </div>

        {/* Save and Publish */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
        >
          Save and Publish Now
        </button>
      </form>
    </div>
  );
};

export default EditBiodata;
