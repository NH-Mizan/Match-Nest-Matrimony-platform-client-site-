import React from 'react';

const FilterSection = ({ setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h3 className="font-bold text-lg mb-4">Filters</h3>

      {/* Filter by Age */}
      <div className="mb-4">
        <label className="font-bold">Age Range</label>
        <input
          type="range"
          name="ageRange"
          min="18"
          max="100"
          onChange={handleFilterChange}
          className="w-full mt-2"
        />
      </div>

      {/* Filter by Type */}
      <div className="mb-4">
        <label className="font-bold">Biodata Type</label>
        <select
          name="type"
          onChange={handleFilterChange}
          className="w-full p-2 mt-2 border"
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* Filter by Division */}
      <div className="mb-4">
        <label className="font-bold">Division</label>
        <select
          name="division"
          onChange={handleFilterChange}
          className="w-full p-2 mt-2 border"
        >
          <option value="">All</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Chattagra">Chattagra</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Barisal">Barisal</option>
          <option value="Khulna">Khulna</option>
          <option value="Mymensingh">Mymensingh</option>
          <option value="Sylhet">Sylhet</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
