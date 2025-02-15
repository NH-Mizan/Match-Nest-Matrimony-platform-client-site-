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
    const [biodatas] = useBiodata();
    const[premiumUser]=usePremium()
    // const [premiumUsers, setPremiumUsers] = useState(premiumUser);
    const [isAscending, setIsAscending] = useState(true); // Sorting state
 console.log(premiumUser)
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
            <h2 className="font-bold text-3xl text-green-500 text-center py-12">Premium Users</h2>

            {/* Sort Button */}
            <div className="text-center mb-8">
                <button
                    onClick={toggleSortOrder}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600"
                >
                    Sort by Age: {isAscending ? "Ascending" : "Descending"}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {sortedPremiumUsers?.map((premiumUser) => (
                    <div key={premiumUser._id} className="">
                        <Card className="mt-6 p-2  w-full">
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
                                    <span className="font-bold text-red-300">Permanent Division</span>:{" "}
                                    {premiumUser.result.permanentDivision}
                                </Typography>
                                <Typography variant="p" color="blue-gray" className="mb-2">
                                    <span className="font-bold text-red-300">Age</span>: {premiumUser.result.age}
                                </Typography>
                                <Typography variant="p" color="blue-gray" className="mb-2">
                                    <span className="font-bold text-red-300">Occupation</span>:{" "}
                                    {premiumUser.result.occupation}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Link
                                    to={`/biodataDetails/${premiumUser.result._id}`}
                                    className="bg-red-200 py-2 px-4 rounded-xl border-2 border-green-500"
                                >
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
