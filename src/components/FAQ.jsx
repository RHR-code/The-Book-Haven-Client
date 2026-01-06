import React from "react";
import {
  FaQuestionCircle,
  FaBook,
  FaUserPlus,
  FaShieldAlt,
  FaCreditCard,
  FaMobile,
} from "react-icons/fa";

const faqs = [
  {
    id: 1,
    icon: FaBook,
    question: "How do I add a book to Book Haven?",
    answer:
      "Adding a book is easy! Simply click on the 'Add Book' button in your dashboard, fill in the book details including title, author, description, and cover image, then click submit. Your book will be available for other readers to discover immediately.",
  },
  {
    id: 2,
    icon: FaUserPlus,
    question: "Is Book Haven free to use?",
    answer:
      "Yes! Book Haven is completely free for all users. You can read unlimited books, add your own books, write reviews, and connect with other readers without any subscription fees. We believe in making literature accessible to everyone.",
  },
  {
    id: 3,
    icon: FaShieldAlt,
    question: "How do you ensure book quality and prevent spam?",
    answer:
      "We have a community-driven moderation system where users can report inappropriate content. Our team reviews flagged content regularly. Additionally, we use automated filters to detect spam and maintain the quality of our book collection.",
  },
  {
    id: 4,
    icon: FaBook,
    question: "Can I download books for offline reading?",
    answer:
      "Currently, Book Haven focuses on online reading to ensure the best experience and respect copyright laws. However, you can save books to your reading list and access them anytime with an internet connection. Offline mode is on our roadmap for future updates.",
  },
  {
    id: 5,
    icon: FaCreditCard,
    question: "Do authors get paid when I read their books?",
    answer:
      "Book Haven supports authors through our partnership program. If an author has enrolled in our program, they receive compensation based on reader engagement. We're committed to supporting the literary community while keeping content accessible.",
  },
  {
    id: 6,
    icon: FaMobile,
    question: "Is there a mobile app available?",
    answer:
      "Yes! Book Haven is available on both iOS and Android. Download our mobile app from the App Store or Google Play Store to enjoy reading on the go. Your reading progress syncs automatically across all devices.",
  },
  {
    id: 7,
    icon: FaQuestionCircle,
    question: "How can I contact support if I have issues?",
    answer:
      "We're here to help! You can reach our support team by clicking the 'Help' button in your account settings or by emailing support@bookhaven.com. We typically respond within 24 hours on business days.",
  },
  {
    id: 8,
    icon: FaBook,
    question: "Can I create reading lists and share them with friends?",
    answer:
      "Absolutely! You can create unlimited custom reading lists, organize them by genre, mood, or any category you like, and share them with friends via a unique link. You can also follow other users' reading lists for new book discoveries.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-primary">
            <FaQuestionCircle className="text-3xl text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We've got answers! Find everything you need to know
            about Book Haven.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const Icon = faq.icon;
            return (
              <div
                key={faq.id}
                className="collapse collapse-plus bg-gray-50 rounded-lg border border-gray-200 hover:border-opacity-50 transition-all"
                style={{ borderColor: "#4ecdc4" }}
              >
                <input type="radio" name="faq-accordion" />
                <div
                  className="collapse-title text-lg font-semibold flex items-center gap-3"
                  style={{ color: "#1a535c" }}
                >
                  <Icon
                    className="text-xl flex-shrink-0"
                    style={{ color: "#4ecdc4" }}
                  />
                  <span>{faq.question}</span>
                </div>
                <div className="collapse-content">
                  <p className="text-gray-600 leading-relaxed pt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center p-8 rounded-xl bg-primary">
          <h3 className="text-2xl font-bold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-200 mb-6">
            Can't find the answer you're looking for? Our support team is here
            to help.
          </p>
          <button className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg bg-secondary">
            Contact Support@gmail.com
          </button>
        </div>
      </div>
    </section>
  );
}
