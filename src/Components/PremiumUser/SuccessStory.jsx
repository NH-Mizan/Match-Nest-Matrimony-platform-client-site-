import React, { useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useReviews from "../../CastomHooks/Hooks/useReviews";

const SuccessStory = () => {
  const [reviews] = useReviews();

  // Sorting stories in descending order based on the marriage date
  const sortedStories = reviews.sort(
    (a, b) => new Date(b.marriageDate) - new Date(a.marriageDate)
  );

  return (
    <div className="bg-gray-50 py-12 w-11/12 mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-purple-600">
        Success Stories
      </h2>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ type: "fraction" }}
        navigation={true}
        virtual
      >
        {sortedStories?.map((story) => (
          <SwiperSlide key={story.id || story._id}>
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <img
                src={story.coupleImage || "https://via.placeholder.com/150"}
                alt="Couple"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <p className="text-sm text-gray-500">
                Married on:{" "}
                {story.marriageDate
                  ? new Date(story.marriageDate).toLocaleDateString()
                  : "Date not provided"}
              </p>
              <div className="flex justify-center items-center mt-2">
                {[...Array(Math.floor(story.reviewStar || 0))].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">
                    ★
                  </span>
                ))}
                {story.reviewStar && story.reviewStar % 1 ? (
                  <span className="text-yellow-500 text-lg">☆</span>
                ) : null}
              </div>
              <p className="mt-4 py-12 text-gray-700 text-sm">
                {story.success_story || "No success story provided."}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuccessStory;
