import React, { useState, useEffect } from "react";
import FilterSection from "./FilterSection";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loader/Loading";
import useAxiosPublic from "../../CastomHooks/Hooks/useAxiosPublic";

const BiodatasPage = () => {
  const [biodatas, setBiodatas] = useState([]);
  const axiosPublic = useAxiosPublic()
  const [filters, setFilters] = useState({ ageRange: 100, type: "", division: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6); // Number of items per page

  // Fetch biodatas on mount
  useEffect(() => {
    document.title ='All Biodata || MatchNest'
    axiosPublic.get("/biodatas").then((res) => {
      setBiodatas(res.data);
    });
  }, []);

  // Filter logic
  const filteredBiodatas = biodatas?.filter((biodata) => {
    const ageMatch = biodata.age <= filters.ageRange;
    const typeMatch = filters.type ? biodata.biodataType === filters.type : true;
    const divisionMatch = filters.division ? biodata.permanentDivision === filters.division : true;

    return ageMatch && typeMatch && divisionMatch;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBiodatas = filteredBiodatas.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredBiodatas.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  if (!biodatas) return <Loading/>

  return (
    <div className="flex w-11/12 mx-auto pt-20">
      {/* Left: Filter Section */}
      <div className="w-1/4  bg-gray-100 p-4">
        <div className="fixed">
        <FilterSection setFilters={setFilters} />
        </div>
      </div>

      {/* Right: Biodata Display */}
      <div className="w-3/4 p-4">
        <h2 className="text-xl font-bold mb-4">
          Biodatas ({filteredBiodatas.length})
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {currentBiodatas.length > 0 ? (
            currentBiodatas.map((biodata) => (
              <div key={biodata._id} className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={biodata.profileImage}
                  alt={biodata.biodataType}
                  className="w-full h-64  rounded"
                />
                <h3 className="text-lg font-bold mt-2">
                  {biodata.biodataType === "male" ? "Male" : "Female"}
                </h3>
                <h2 className="text-lg font-bold mt-2">{biodata.name}</h2>
                <p>Age: {biodata.age}</p>
                <p>Division: {biodata.permanentDivision}</p>
                <p className="mb-4">Occupation: {biodata.occupation}</p>
                <Link
                  to={`/biodataDetails/${biodata._id}`}
                 className="mt-4 my-6 bg-purple-500 text-white py-2 px-6 rounded hover:bg-purple-600"
                >
                  View Profile
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No biodatas match the selected filters.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 py-12">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`mx-2 py-2 px-4 rounded border ${
                currentPage === 1 ? "bg-gray-300 text-gray-500" : "bg-purple-500 text-white"
              }`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 py-2 px-4 rounded border ${
                  currentPage === index + 1
                    ? "bg-pink-500 text-white"
                    : "bg-white text-purple-500 border-purple-500 hover:bg-purple-600 hover:text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`mx-2 py-2 px-4 rounded border ${
                currentPage === totalPages ? "bg-gray-300 text-gray-500" : "bg-purple-500 text-white"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BiodatasPage;
