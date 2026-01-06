import React from "react";

const Statistics = () => {
  return (
    <div>
      {/* Stats Section */}
      <h2 className="text-3xl md:text-4xl text-primary font-bold text-center mb-3">
        Our Achievements
      </h2>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-4xl font-bold mb-2 text-primary">10K+</div>
          <p className="text-gray-600">Active Readers</p>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2 text-primary">50K+</div>
          <p className="text-gray-600">Books Listed</p>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2 text-primary">25K+</div>
          <p className="text-gray-600">Reviews</p>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2 text-primary">4.9★</div>
          <p className="text-gray-600">Average Rating</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Statistics;
