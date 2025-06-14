import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const viewMoreBtn = () =>{
  
    // }
    const slides = [
        {
            title: "From Strangers to Partners",
            image: "https://i.ibb.co.com/dnznR4h/677439968975915289-vdm-1.jpg",
            description: "A beautiful journey of two strangers, Ahmed and Sara, who met on this platform by chance. Ahmed, a compassionate doctor, and Sara, an ambitious entrepreneur, discovered their shared dreams and values..."
        },
        {
            title: " A Love Beyond Borders",
            image: "https://i.ibb.co.com/20XDQFvJ/13370130124014002-vdm-2-1.jpg",
            description: "An inspiring story of Raj and Priya, whose love transcended borders and cultural differences. Raj, a tech genius from India, found his soulmate in Priya, a vibrant artist from France..."
        },
        {
            title: "When Opposites Attract",
            image: "https://i.ibb.co.com/XxckmwNN/889883207642163758-vdm-1.jpg",
            description: "his heartwarming tale is about Arjun, a calm and reserved librarian, and Aisha, an extroverted marketing executive..."
        },
        {
            title: "When Opposites Attract",
            image: "https://i.ibb.co.com/RTJ94xby/159033430582442485-vdm-1.jpg",
            description: "his heartwarming tale is about Arjun, a calm and reserved librarian, and Aisha, an extroverted marketing executive..."
        },
       
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative overflow-hidden w-full max-w-full mx-auto h-full pb-8 ">
            {/* Carousel Content */}
            <div
                className="flex transition-transform duration-1000"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="relative w-full h-[100vh] flex-shrink-0"
                    >
                        {/* Background Image */}
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-[100vh]  "
                        />
                        {/* Title and Description */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white p-6">
                            <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                            <p className="text-lg text-center mt-6 max-w-2xl">{slide.description}</p>
                            {/* <button onClick={viewMoreBtn} className='btn btn-secondary  mt-24'>View More</button> */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between px-4">
                <button
                    className="btn btn-circle bg-white text-black"
                    onClick={() =>
                        setCurrentIndex((prevIndex) =>
                            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
                        )
                    }
                >
                    ❮
                </button>
                <button
                    className="btn btn-circle bg-white text-black"
                    onClick={() =>
                        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
                    }
                >
                    ❯
                </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`btn btn-xs ${currentIndex === index ? "bg-cyan-500" : "bg-gray-300"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;
