import React from "react";
import {
  FaBook,
  FaHeart,
  FaUsers,
  FaAward,
  FaShippingFast,
  FaLock,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdLocalShipping } from "react-icons/md";
import { Link } from "react-router";

export default function AboutUs() {
  const values = [
    {
      icon: <FaBook className="w-8 h-8" />,
      title: "Passion for Books",
      description:
        "We believe in the transformative power of books and their ability to inspire, educate, and entertain.",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Community First",
      description:
        "Building a community of readers who share knowledge, recommendations, and the joy of reading.",
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Quality Selection",
      description:
        "Curating the finest collection of books across all genres to satisfy every reader's taste.",
    },
    {
      icon: <BiSupport className="w-8 h-8" />,
      title: "Customer Care",
      description:
        "Providing exceptional service and support to ensure the best shopping experience.",
    },
  ];

  const features = [
    {
      icon: <FaShippingFast className="w-6 h-6" />,
      title: "Fast Delivery",
      description:
        "Quick and reliable shipping to get books to you as soon as possible",
    },
    {
      icon: <FaLock className="w-6 h-6" />,
      title: "Secure Payments",
      description: "Safe and encrypted transactions for your peace of mind",
    },
    {
      icon: <MdLocalShipping className="w-6 h-6" />,
      title: "Easy Returns",
      description: "Hassle-free return policy within 30 days of purchase",
    },
  ];

  const stats = [
    { number: "50K+", label: "Books Available" },
    { number: "25K+", label: "Happy Readers" },
    { number: "100+", label: "Publishers" },
    { number: "4.8/5", label: "Customer Rating" },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-secondary text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-3">
            <FaBook className="text-4xl md:text-5xl" />
            About The Book Haven
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto">
            Your gateway to endless stories, knowledge, and adventures
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
            <div className="space-y-4  text-lg leading-relaxed">
              <p>
                Founded with a simple mission: to make quality books accessible
                to everyone, everywhere. The Book Haven began as a small
                community bookstore and has grown into a trusted online
                destination for book lovers worldwide.
              </p>
              <p>
                We understand that every book holds the potential to change a
                life, spark an idea, or provide an escape. That's why we've
                dedicated ourselves to building a platform that celebrates the
                written word in all its forms.
              </p>
              <p>
                From bestsellers to hidden gems, from timeless classics to
                contemporary voices, we curate a diverse collection that
                reflects the richness of human storytelling.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-xl p-8">
                <FaHeart className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-center">
                  To inspire a love of reading by connecting readers with books
                  that enlighten, entertain, and empower, while fostering a
                  vibrant community of literary enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-amber-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-secondary"
            >
              <div className="text-primary mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-br from-primary/20 to-secondary/20 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-primary mb-6">
          Meet Our Team
        </h2>
        <p className="text-center  text-lg mb-12 max-w-3xl mx-auto">
          Behind The Book Haven is a passionate team of book lovers, tech
          enthusiasts, and customer service experts dedicated to bringing you
          the best reading experience.
        </p>
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center shadow-xl">
          <FaUsers className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Join Our Growing Family</h3>
          <p className="text-amber-100 text-lg">
            We're always looking for talented individuals who share our passion
            for books and innovation. Check our careers page for opportunities.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-primary/20 to-secondary/20 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white mb-4">
                <FaEnvelope />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600">support@bookhaven.com</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white mb-4">
                <FaPhone />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full text-white mb-4">
                <FaMapMarkerAlt />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Book Street, Reading City</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-secondary py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Reading Journey Today
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Discover thousands of books waiting to be explored
          </p>
          <Link
            to="/all-books"
            className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Browse Our Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
