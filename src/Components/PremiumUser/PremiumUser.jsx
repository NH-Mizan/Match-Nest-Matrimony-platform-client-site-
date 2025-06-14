import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";


import useBiodata from "../../CastomHooks/Hooks/useBiodata";
import { useState } from "react";
import { Link } from "react-router-dom";
import usePremium from "../../CastomHooks/Hooks/usePremium";

const PremiumUser = () => {
    const [premiumUser] = usePremium()

    const [isAscending, setIsAscending] = useState(true);
    // console.log(premiumUser)
    // Sorting based on age
    const sortedPremiumUsers = premiumUser?.sort((a, b) =>
        isAscending ? a.result.age - b.result.age : b.result.age - a.result.age
    );



    // Toggle sort order
    const toggleSortOrder = () => {
        setIsAscending(!isAscending);
    };

    return (
        <div className="py-12 w-11/12 mx-auto">
            <div className="flex justify-between items-center">
           <div className="">
           <h2 className="text-3xl font-semibold ">
                <span className="text-cyan-500">Premium</span>{" "}
                <span className="text-black">Users</span>
            </h2>
           </div>
            <div className=" mb-8">
                <button
                    onClick={toggleSortOrder}
                    className=" text-black  font-bold py-2 px-4 rounded-lg shadow-md border-2 border-cyan-500"
                >
                    Sort by Age: <span className="text-cyan-500">
                    {isAscending ? "Ascending" : "Descending"}
                    </span>
                </button>
            </div>

            </div>

           

            {/* Sort Button */}
         
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {sortedPremiumUsers?.map((premiumUser) => (
                    <div key={premiumUser._id} className="">
                        <Card className="mt-6 p-2 bg-base-300 w-full">
                            <CardHeader color="blue-gray" className="relative  mt-4">
                                <img
                                    src={premiumUser.result.profileImage}
                                    alt="card-image"
                                    className="w-full h-56"
                                />
                            </CardHeader>

                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    ID:  {premiumUser.result.biodataId}
                                </Typography>
                                <Typography variant="p" color="blue-gray" className="mb-2">
                                    {premiumUser.result.biodataType}
                                </Typography>
                                <Typography variant="p" color="blue-gray" className="mb-2">
                                    <span className="font-bold text-purple-500">Permanent Division</span>:{" "}
                                    {premiumUser.result.permanentDivision}
                                </Typography>
                                <Typography variant="p" color="blue-gray" className="mb-2">
                                    <span className="font-bold text-purple-500">Age</span>: {premiumUser.result.age}
                                </Typography>
                                <Typography variant="p" color="blue-gray" className="mb-2">
                                    <span className="font-bold text-purple-500">Occupation</span>:{" "}
                                    {premiumUser.result.occupation}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Link to={`/biodataDetails/${premiumUser.result._id}`} className="mt-4 my-6 bg-purple-500 text-white py-2 px-6 rounded hover:bg-purple-600">
                                    View More
                                </Link>
                             
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PremiumUser;
