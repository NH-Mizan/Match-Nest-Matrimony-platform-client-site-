import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import useAxiosSecure from "../../CastomHooks/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useUsers from "../../CastomHooks/Hooks/useUsers";
import Loading from "../../Components/Loader/Loading";

const BiodataDetails = () => {
  const {id} = useParams(); // 
  const axiosSecure = useAxiosSecure()
  const navigate = useNavigate();

  const [users]= useUsers()

  const [biodata, setBiodata] = useState(null);
  const [similarBiodatas, setSimilarBiodatas] = useState([]);

  
  

  // Fetch biodata details
  const fetchBiodata = async () => {
    try {
      const { data } = await axiosSecure.get(`/biodataDetails/${id}`);
    
      setBiodata(data);
    } catch (error) {
      console.error("Error fetching biodata details:", error);
    }
  };

  // Fetch similar biodatas
  const fetchSimilarBiodatas = async () => {
    try {
      const { data } = await axiosSecure.get(`/biodatas/similar?type=${biodata?.biodataType}`);
      setSimilarBiodatas(data);
    } catch (error) {
      console.error("Error fetching similar biodatas:", error);

    }
    fetchBiodata()
  };

  // Add to Favourites
  const handleAddToFavourites = async () => {
    try {
      await axiosSecure.post("/favourites",biodata );
      Swal.fire({
        title: "Added to favourites!",
        icon: "success",
        draggable: true
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
       
      });
      
    }
  };

  // Request contact information
  const handleRequestContact = () => {
    navigate(`/checkout/${id}`);
  };

  useEffect(() => {
    fetchBiodata();
  }, []);

  useEffect(() => {
    if (biodata) fetchSimilarBiodatas();
  }, [biodata]);

  if (!biodata) return <Loading/>

  return (
    <div className="w-11/12 mx-auto pt-24">
      <div className="bg-lime-100 p-4 rounded-xl biodata-details ">
        <h2 className="text-xl font-bold">{biodata?.name}'s Biodata</h2>

        <img src={biodata?.profileImage} alt={`${biodata?.name}`} className="mt-4 rounded-lg w-40 h-40" />
        <ul className="mt-4">
          <li><strong>Age:</strong> {biodata?.age}</li>
          <li><strong>Height:</strong> {biodata?.height} feet</li>
          <li><strong>Occupation:</strong> {biodata?.occupation}</li>
          <li><strong>Permanent Division:</strong> {biodata?.permanentDivision}</li>
          <li><strong>Present Division:</strong> {biodata?.presentDivision}</li>
        </ul>

        {/* Conditionally show contact info for premium users */}
        {biodata?.role == 'apperove' ? (
          <div className="mt-4">
            <p><strong>Email:</strong> {biodata?.email}</p>
            <p><strong>Phone:</strong> {biodata?.mobile}</p>
          </div>
        ) : (
          <div className="mt-4">
            <p><strong>Contact Information:</strong> <span className="text-red-400">Available for premium users only !</span></p>
            <button
              onClick={handleRequestContact}
              className="bg-orange-500 text-white px-3 py-1 mt-2 rounded hover:bg-orange-600"
            >
              Request Contact Information
            </button>
          </div>
        )}

        <button
          onClick={handleAddToFavourites}
          className="bg-blue-500 text-white px-3 py-1 mt-4 rounded hover:bg-blue-600"
        >
          Add to Favourites
        </button>
      </div>

      {/* Similar Biodatas Section */}
      <div className="similar-biodatas mb-12 mt-10">
        <h3 className="text-lg font-bold">Similar Biodatas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {similarBiodatas.map((similar) => (
            <div key={similar._id} className="border-2 border-green-300 p-4 rounded-lg">
              <img src={similar.profileImage} alt={`${similar.name}`} className="rounded-lg w-full h-64 mb-4" />
              <h4 className="font-bold">{similar.name}</h4>
              <p>{similar.age} years old</p>
              <Link
                to={`/biodataDetails/${similar._id}`}
                className="text-blue-500 mt-2 underline z-[10]"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiodataDetails;
