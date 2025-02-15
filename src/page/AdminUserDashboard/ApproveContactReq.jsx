import React, { useEffect, useState } from "react";

import useAxiosSecure from "../../CastomHooks/Hooks/useAxiosSecure";
import useBiodata from "../../CastomHooks/Hooks/useBiodata";
import Swal from "sweetalert2";

const ApproveContactReq = () => {
    const axiosSecure = useAxiosSecure()
    const [biodatas] = useBiodata()
  const [contactRequests, setContactRequests] = useState([]);

  // Fetch contact requests from the API

  const fetchContactRequests = async () => {
    try {
        const { data } = await axiosSecure.get(`/biodata/status?status=pending`);
        setContactRequests(data);
        // console.log(data)
    } catch (error) {
        console.error("Error fetching contact requests:", error);
        alert("Failed to load premium requests.");
    }
}
  useEffect(() => {

    fetchContactRequests()
  }, []);

  // Handle contact request approval
  const handleApproveRequest = (contact) => {
    axiosSecure.patch(`/biodata/status/${contact._id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.matchedCount > 0){
           Swal.fire({
            position: 'top-end',
             icon: "success",
               title: `${res.data.name} is Apperoved Now!! `, 
                  showCancelButton: false,
                  timer: 1500

           }) 
        }
        fetchContactRequests()
    })
  };

  return (
    <div className="w-11/12 mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Approve Contact Requests</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Biodata ID</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactRequests.length > 0 ? (
            contactRequests.map((request) => (
              <tr key={request._id}>
                <td className="border border-gray-300 px-4 py-2">{request.name}</td>
                <td className="border border-gray-300 px-4 py-2">{request.email}</td>
                <td className="border border-gray-300 px-4 py-2">{request.biodataId}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {
                    request.status=== 'pending'? <button
                    onClick={() => handleApproveRequest(request)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                       Approve
                  </button>:<button
                    onClick={() => handleApproveRequest(request)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    pending
                  </button>
                  }
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No contact requests found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApproveContactReq;
