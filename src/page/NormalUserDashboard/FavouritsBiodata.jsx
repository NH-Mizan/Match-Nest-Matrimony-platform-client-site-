import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../CastomHooks/Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const FavouritesBiodata = () => {
    const [favouriteBiodatas, setFavoriteBiodatas] = useState()
    const axiosSecure = useAxiosSecure()
    
    const favauriteItem = () => {
        axiosSecure.get('/favourites')
            .then(res => {
                setFavoriteBiodatas(res.data)
                
            })
    }
    const Filter = 

    useEffect(() => {
        favauriteItem()

    }, [])

    const handleRemoveFavourite = (email) => {

        Swal.fire({
            title: "Are you sure?",
            text: "Favourite data Delete!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/favourites?email=${email}`)
                    .then(data => {
                        console.log(data)
                        
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Campaign has been deleted.",
                                icon: "success"
                            });

                            favauriteItem()

                    })
            }
            favauriteItem()
        });

    }
    return (
        <div className="p-12 max-w-6xl mx-auto bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">My Favourite Biodatas</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Biodata ID</th>
                            <th className="border border-gray-300 px-4 py-2">
                                Permanent Address
                            </th>
                            <th className="border border-gray-300 px-4 py-2">Occupation</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favouriteBiodatas?.length > 0 ? (
                            favouriteBiodatas.map((biodata, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                                >
                                    <td className="border border-gray-300 px-4 py-2">
                                        {biodata.name}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {biodata.biodataId}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {biodata.permanentDivision}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {biodata.occupation}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">
                                        <button
                                            onClick={() => handleRemoveFavourite(biodata.email)}
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
                                    colSpan="5"
                                    className="text-center text-gray-500 py-4 border border-gray-300"
                                >
                                    No favourite biodatas found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FavouritesBiodata;
