import React, { useEffect } from 'react';

const AboutUsPage = () => {
  useEffect(()=>{
 document.title ='About Us || MatchNest'
  },[])
  return (
    <div className=" py-8 pt-24 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <div className=" text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-700">About Us</h1>
        <p className="text-gray-600 mt-2">Learn more about our mission, vision, and story. </p>
        
      </div>

      {/* About Us Content */}
      <div className="bg-white w-11/12 mx-auto rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          Welcome to our Matrimony platform! We are a dedicated team committed to connecting individuals 
          with their life partners in a secure, user-friendly environment. Our mission is to create 
          meaningful connections that lead to lifelong happiness.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to simplify the process of finding a perfect match by offering personalized features 
          and services tailored to individual preferences. We strive to ensure your journey to finding love 
          is as smooth and enjoyable as possible.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Vision</h2>
        <p className="text-gray-600 leading-relaxed">
          Our vision is to become the most trusted and preferred matrimony platform by fostering 
          an inclusive and innovative approach. We aim to provide users with an unmatched experience 
          while creating genuine and lasting relationships.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed">
          <li>Safe and secure platform with verified profiles</li>
          <li>Easy-to-use interface for browsing and connecting</li>
          <li>Advanced filtering and matchmaking features</li>
          <li>Comprehensive customer support to address all your concerns</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Since our inception, we've helped countless individuals find their life partners. Each 
          success story is a testament to our commitment to creating meaningful connections. We are 
          driven by your happiness and strive to make the matchmaking process as seamless as possible.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold text-gray-700">
          Ready to find your perfect match?
        </h3>
        <button className="mt-4 bg-purple-500 text-white py-2 px-6 rounded hover:bg-purple-600">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AboutUsPage;
