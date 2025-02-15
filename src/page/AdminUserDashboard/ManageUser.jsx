import React, { useState, useEffect } from "react";

import { FaSearch } from "react-icons/fa";
import useAxiosSecure from "../../CastomHooks/Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const axiosSecure = useAxiosSecure()

  // Fetch users from the server
  const fetchUsers = async (query = "") => {
    try {
      const { data } = await axiosSecure.get(`/users?userName=${query}`);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };



    const handleMakeAdmin =(user)=>{
      axiosSecure.patch(`/users/admin/${user._id}`)
  
      .then(res =>{
          console.log(res.data)
          if(res.data.matchedCount > 0){
             Swal.fire({
              position: 'top-end',
               icon: "success",
                 title: `${user.name} is Admin Now!! `, 
                    showCancelButton: false,
                    timer: 1500

             }) 
             
          }
          fetchUsers()
      })
  };

  // Handle Make Premium
  const handleMakePremium =(user)=>{
    axiosSecure.patch(`/users/premium/${user._id}`)

    .then(res =>{
        console.log(res.data)
        if(res.data.matchedCount > 0){
           Swal.fire({
            position: 'top-end',
             icon: "success",
               title: `${res.data.user.name} is Premium Now!! `, 
                  showCancelButton: false,
                  timer: 1500

           }) 
        }
        fetchUsers()
    })
};

  // Handle search query changes
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    fetchUsers(e.target.value); // Fetch users dynamically while typing
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className=" mx-auto mt-6 mb-12">
      <h2 className="text-xl font-bold mb-4">Manage Users</h2>
      <div className="flex">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search by username"
        className="border-2 border-red-300  px-3 py-2 w-96"
        

      />
      
      <div className="bg-red-300 px-4"><FaSearch className="mt-4 text-white"/></div>
      </div>

     

      <table className="table-auto border-collapse border mt-4 border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">User Name</th>
            <th className="border border-gray-300 px-4 py-2">User Email</th>
            <th className="border border-gray-300 px-4 py-2">Admin Action</th>
            <th className="border border-gray-300 px-4 py-2">Premium Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td className="border border-gray-300 px-4 py-2">{user.userName}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">
                {
                  user.role === 'admin'? <button
                  onClick={() => handleMakeAdmin(user)}
                  className="bg-red-500 text-white px-3 py-1 mr-2 rounded hover:bg-blue-600"
                >
                   Admin
                </button> : 
                 <button
                onClick={() => handleMakeAdmin(user)}
                className="bg-blue-500 text-white px-3 py-1 mr-2 rounded hover:bg-blue-600"
              >
                Make Admin
              </button>
                }


               
               
                
              </td>
              <td className="border border-gray-300 px-4 py-2"> {
                user.role === 'pending'? <button
                onClick={() => handleMakePremium(user)}
                className="bg-lime-500 text-white px-3 py-1 mr-2 rounded hover:bg-blue-600"
              >
               Make Premium
              </button> : 
               <button disabled
              onClick={() => handleMakePremium(user)} 
              className="text-white px-3 py-1 mr-2 rounded hover:bg-blue-600"
            >
            
            </button>
              }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
