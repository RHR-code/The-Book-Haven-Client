import React from "react";
import {
  FaBook,
  FaUsers,
  FaChartLine,
  FaBookReader,
  FaStar,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const services = [
  {
    id: 1,
    icon: FaBook,
    title: "Vast Book Collection",
    description:
      "Access thousands of books across all genres. From classics to contemporary bestsellers, find your next great read in our extensive library.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    icon: FaUsers,
    title: "Reading Community",
    description:
      "Connect with fellow book lovers, join reading clubs, and participate in discussions. Share your thoughts and discover new perspectives.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    icon: FaChartLine,
    title: "Reading Analytics",
    description:
      "Track your reading progress, set goals, and visualize your reading habits. Get insights into your literary journey with detailed statistics.",
    gradient: "from-green-500 to-green-600",
  },
  {
    id: 4,
    icon: FaBookReader,
    title: "Personalized Recommendations",
    description:
      "Our AI-powered recommendation engine suggests books based on your reading history and preferences. Discover hidden gems tailored just for you.",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    id: 5,
    icon: FaStar,
    title: "Reviews & Ratings",
    description:
      "Read authentic reviews from our community and share your own opinions. Help others discover great books through honest feedback.",
    gradient: "from-pink-500 to-pink-600",
  },
  {
    id: 6,
    icon: FaMobileAlt,
    title: "Cross-Platform Sync",
    description:
      "Start reading on your phone, continue on your tablet, and finish on your laptop. Your progress syncs seamlessly across all devices.",
    gradient: "from-indigo-500 to-indigo-600",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-lg bg-secondary">
            <FaBook className="text-3xl text-white" />
          </div>
          <h2 className="text-4xl text-primary md:text-5xl font-bold mb-4 -primary">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to enhance your reading experience. Discover
            features designed to make reading more enjoyable and accessible.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="text-3xl text-white" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold mb-3 group-hover:text-opacity-80 transition-colors"
                    style={{ color: "#1a535c" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div
                  className="h-1 w-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #1a535c, #4ecdc4)",
                  }}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card bg-gradient-to-r from-primary to-secondary shadow-2xl max-w-4xl mx-auto">
            <div className="card-body p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Reading Journey?
              </h3>
              <p className="text-white text-lg mb-8 opacity-90">
                Join thousands of readers who are already enjoying the best
                reading experience on Book Haven.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/all-books"
                  className="btn btn-lg btn-primary  border-none hover:scale-105 transition-transform "
                >
                  Read More Books
                </Link>
                <Link
                  to="/add-books"
                  className="btn btn-lg btn-outline border-2 border-white text-white hover:bg-primary hover:border-white hover:scale-105 transition-transform"
                  style={{ "--hover-color": "#1a535c" }}
                >
                  Add Books
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ color: "#1a535c" }}
            >
              50K+
            </div>
            <p className="text-gray-600 font-medium">Books Available</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ color: "#1a535c" }}
            >
              10K+
            </div>
            <p className="text-gray-600 font-medium">Active Readers</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ color: "#1a535c" }}
            >
              100K+
            </div>
            <p className="text-gray-600 font-medium">Reviews Posted</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div
              className="text-4xl md:text-5xl font-bold mb-2"
              style={{ color: "#1a535c" }}
            >
              4.9★
            </div>
            <p className="text-gray-600 font-medium">User Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
