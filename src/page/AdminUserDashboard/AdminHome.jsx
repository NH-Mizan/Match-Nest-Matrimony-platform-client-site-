import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import useReviews from "../../CastomHooks/Hooks/useReviews";
import useCounter from "../../CastomHooks/CountData/useCount";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminHome = () => {
  const [reviews] = useReviews();
  const [counter] = useCounter();
  const [selectedStory, setSelectedStory] = useState(null); // State to handle selected story
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility

  const chartData = {
    labels: ["Total Biodatas", "Male Biodatas", "Female Biodatas", "Premium Biodatas"],
    datasets: [
      {
        data: [
          counter?.totalBiodatas,
          counter?.maleBiodatas,
          counter?.femaleBiodatas,
          counter?.premiumBiodatas,
        ],
        backgroundColor: ["#4CAF50", "#2196F3", "#FF5722", "#FFC107"],
        borderColor: ["#ffffff"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw;
            return ` ${tooltipItem.label}: ${value}`;
          },
        },
      },
    },
  };

  // Function to handle viewing the story
  const handleViewStory = (story) => {
    setSelectedStory(story); // Set the selected story
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedStory(null); // Clear the selected story
  };

  return (
    <div className="container mx-auto p-4">
      {/* Statistics Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Biodata Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-xl font-bold text-green-600">Total Biodatas</h3>
            <p className="text-2xl font-extrabold">{counter?.totalBiodatas || 0}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-xl font-bold text-blue-600">Male Biodatas</h3>
            <p className="text-2xl font-extrabold">{counter?.maleBiodatas || 0}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-xl font-bold text-red-600">Female Biodatas</h3>
            <p className="text-2xl font-extrabold">{counter?.femaleBiodatas || 0}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-xl font-bold text-yellow-600">Premium Biodatas</h3>
            <p className="text-2xl font-extrabold">{counter?.premiumBiodatas || 0}</p>
          </div>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Biodata Overview</h2>
        <div className="w-full max-w-md mx-auto">
          <Pie data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Success Stories Table */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border">Male Biodata ID</th>
              <th className="px-4 py-2 border">Female Biodata ID</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((story) => (
              <tr key={story._id}>
                <td className="px-4 py-2 border">{story.id}</td>
                <td className="px-4 py-2 border">{story.exId}</td>
                <td className="px-4 py-2 border">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => handleViewStory(story)}
                  >
                    View Story
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Viewing Story */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h3 className="text-2xl font-bold mb-4 text-center">Success Story</h3>
            <p>
              <strong>Male Biodata ID:</strong> {selectedStory.id}
            </p>
            <p>
              <strong>Female Biodata ID:</strong> {selectedStory.exId}
            </p>
            <p>
              <strong>Story:</strong> {selectedStory.success_story || "No story available"}
            </p>
            <div className="mt-4 text-right">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
