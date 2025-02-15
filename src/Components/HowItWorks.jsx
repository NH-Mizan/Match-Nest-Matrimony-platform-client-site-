import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: "https://i.ibb.co.com/QcZ91GM/download.png",
      title: "Create Biodata",
      description:
        "You can easily create a biodata on OrdhekDeen completely free of cost within some steps.",
    },
    {
      icon: "https://i.ibb.co.com/Y4gk14Q/download.jpg",
      title: "Search Biodata",
      description:
        "You can easily search biodata using many filters including age, upazila, profession, educational qualification.",
    },
    {
      icon: "https://i.ibb.co.com/thJqBQk/images.jpg",
      title: "Contact with Guardians",
      description:
        "If someone likes your biodata or you like someone's biodata you can directly contact their parent.",
    },
    {
      icon: "https://i.ibb.co.com/vLc8mkz/download-1.png",
      title: "Get Married",
      description:
        "If you like the biodata and conversation, do your own inquiry & get married according to Sunnah.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          <span className="text-pink-500">How</span>{" "}
          <span className="text-purple-600">MatchNest Works</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border-2 border-red-200 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-24 h-24 border-2 border-purple-200 rounded-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
