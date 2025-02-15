import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../CastomHooks/Hooks/useAxiosSecure";


const MyContactRequest = () => {
  const axiosSecure = useAxiosSecure()
    const [contactRequests, setContactRequests] = useState()

    const fetchStatusRequests = async () => {
      try {
          const { data } = await axiosSecure.get(`/biodata/status?status=pending`);
          setContactRequests(data);
          
      } catch (error) {
          console.error("Error fetching premium requests:", error);
          alert("Failed to load premium requests.");
      }
  }
    

    const handleDeleteRequest =()=>{

    }
    useEffect(()=>{
      fetchStatusRequests()
    },[])
  return (
    <div className="p-12  max-w-6xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">My Contact Requests</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Biodata ID</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Mobile No</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactRequests?.length > 0 ? (
              contactRequests?.map((request, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {request.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {request.biodataId}
                  </td>
                  <td
                    className={`border border-gray-300 px-4 py-2 ${
                      request.status === "approve"
                        ? "text-green-600 font-bold"
                        : "text-yellow-500 font-bold"
                    }`}
                  >
                    {request.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {request.status === "approve" ? request.mobile : "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {request.status === "approve" ? request.email : "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      onClick={() => handleDeleteRequest(request.id)}
                      className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center text-gray-500 py-4 border border-gray-300"
                >
                  No contact requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyContactRequest;
