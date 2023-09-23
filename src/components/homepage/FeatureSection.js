import React from "react";
import { FiCheckCircle, FiList, FiCalendar } from "react-icons/fi";

const FeatureSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Features of EvolutionNova
        </h2>
        <div className="flex flex-wrap justify-center -mx-4">
          <FeatureCard
            icon={<FiCheckCircle className="text-white w-8 h-8" />}
            title="Easy Sign In and Sign Up"
            description="Authentication systems using MongoDB, Where users can create accounts and log in securely using EvolutionNova management system."
          />
          <FeatureCard
            icon={<FiList className="text-white w-8 h-8" />}
            title="Target Status"
            description="Mark your target into Upcoming/Done categories for better organization."
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="w-full md:w-1/3 px-4 mb-8">
  <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg p-6 flex items-center justify-center flex-col h-full">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-white"> {title} </h3>
    <p className="text-white text-center">{description}</p>
  </div>
</div>

  );
};

export default FeatureSection;
