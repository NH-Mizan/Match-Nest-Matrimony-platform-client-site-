import React, { useState, useEffect } from "react";
import axios from "axios";
import useAxiosSecure from "../../CastomHooks/Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ApprovedPremium = () => {

    const axiosSecure = useAxiosSecure()
    const [premiumRequests, setPremiumRequests] = useState([]);

    // Fetch premium approval requests
    const fetchPremiumRequests = async () => {
        try {
            const { data } = await axiosSecure.get(`/users/premium?role=pending`);
            setPremiumRequests(data);
            console.log(data)
        } catch (error) {
            console.error("Error fetching premium requests:", error);
            alert("Failed to load premium requests.");
        }
    }
    const handleMakePremium =(user)=>{
        axiosSecure.patch(`/users/premium/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.matchedCount > 0){
               Swal.fire({
                position: 'top-end',
                 icon: "success",
                   title: `${user.name} is Premium Now!! `, 
                      showCancelButton: false,
                      timer: 1500
    
               }) 
            }
            fetchPremiumRequests()
        })
    
    };

    useEffect(() => {
        fetchPremiumRequests();
    }, []);

    return (
        <div className="container mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-4">Approved Premium Requests</h2>
            <table className="table-auto w-full border">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Biodata ID</th>
                        <th className="px-4 py-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {premiumRequests.length > 0 ? (
                        premiumRequests.map((request) => (
                            <tr key={request._id} className="text-center">
                                <td className="px-4 py-2 border">{request.userName}</td>
                                <td className="px-4 py-2 border">{request.email}</td>
                                <td className="px-4 py-2 border">{request._id}</td>
                                <td className="px-4 py-2 border">
                                    <button
                                        onClick={() => handleMakePremium(request)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                    >
                                        {
                                            request.role==='pending' ? "Apperove Premium":""
                                        }
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="px-4 py-2 border text-center">
                                No premium requests found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ApprovedPremium;
