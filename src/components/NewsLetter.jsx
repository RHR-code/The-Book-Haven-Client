import React, { useState } from "react";
import { MdEmail, MdCheckCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-secondary">
            <FaBook className="text-3xl bg-secondary " />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Stay Updated with Book Haven
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest book recommendations,
            reviews, and exclusive reading tips delivered to your inbox.
          </p>
        </div>

        {!subscribed ? (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-secondary  focus:outline-none focus:border-white transition-colors text-white"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 bg-secondary"
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-300 mt-4 text-center">
              Join 10,000+ book lovers who never miss an update. Unsubscribe
              anytime.
            </p>
          </form>
        ) : (
          <div className="max-w-xl mx-auto text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <MdCheckCircle className="text-6xl mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-bold mb-2 text-secondary">
                Successfully Subscribed!
              </h3>
              <p className="text-gray-600">
                Thank you for joining Book Haven. Check your inbox for a welcome
                email.
              </p>
            </div>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="text-white">
            <div className="text-3xl font-bold mb-1 text-secondary">Weekly</div>
            <p className="text-sm text-gray-200">Book Recommendations</p>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-1 text-secondary">
              Exclusive
            </div>
            <p className="text-sm text-gray-200">Author Interviews</p>
          </div>
          <div className="text-white">
            <div className="text-3xl font-bold mb-1 text-secondary">
              Early Access
            </div>
            <p className="text-sm text-gray-200">To New Features</p>
          </div>
        </div>
      </div>
    </section>
  );
}
