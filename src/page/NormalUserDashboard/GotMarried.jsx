import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../CastomHooks/Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const GotMarried = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic()

  const handleSubmit =  (e) => {
    e.preventDefault();

    // Get form values
    const form = e.target;
    const selfBiodataId = form.selfBiodataId.value;
    const partnerBiodataId = form.partnerBiodataId.value;
    const coupleImage = form.coupleImage.value;
    const success_story = form.story.value;
    const reviewStar = form.reviewStar.value; 
    const marriageDate = form.marriageDate.value; 

    // Creating Form Data Object
    const formData = {
      selfBiodataId,
      partnerBiodataId,
      coupleImage,
      success_story,
      reviewStar,
      marriageDate,
    };
 
    axiosPublic.post("/reviews", formData)
      .then(res => {
        if(res.data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User created successfully.',
                showConfirmButton: false,
                timer: 1500
            });
         
        }
        navigate('/')
    })
  };

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">Share Your Success Story</h2>
      <form className="bg-white shadow-lg p-6 rounded" onSubmit={handleSubmit}>
        {/* Self Biodata ID */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Self Biodata ID:</label>
          <input
            type="text"
            name="selfBiodataId"
            className="border w-full p-2 rounded"
            placeholder="Enter your biodata ID"
            required
          />
        </div>

        {/* Partner Biodata ID */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Partner Biodata ID:</label>
          <input
            type="text"
            name="partnerBiodataId"
            className="border w-full p-2 rounded"
            placeholder="Enter partner biodata ID"
            required
          />
        </div>

        {/* Couple Image */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Couple Image:</label>
          <input
            type="text"
            name="coupleImage"
            className="border w-full p-2 rounded"
            placeholder="Paste the image URL or upload"
            required
          />
        </div>

        {/* Marriage Date */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Marriage Date:</label>
          <input
            type="date"
            name="marriageDate"
            className="border w-full p-2 rounded"
            required
          />
        </div>

        {/* Review Rating */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Rate Your Experience:</label>
          <select
            name="reviewStar"
            className="border w-full p-2 rounded"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a rating
            </option>
            <option value="1">1 Star - Poor</option>
            <option value="2">2 Stars - Fair</option>
            <option value="3">3 Stars - Good</option>
            <option value="4">4 Stars - Very Good</option>
            <option value="5">5 Stars - Excellent</option>
          </select>
        </div>

        {/* Success Story */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Success Story Review:</label>
          <textarea
            name="story"
            className="border w-full p-2 rounded"
            rows="4"
            placeholder="Share your experience with our platform"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default GotMarried;
