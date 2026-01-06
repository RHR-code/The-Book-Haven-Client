import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Book Enthusiast",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "Book Haven has completely transformed my reading experience. The community is amazing, and I've discovered so many incredible books I would have never found otherwise!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Literature Professor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "As an educator, I appreciate how Book Haven makes literature accessible to everyone. The platform is intuitive and the book recommendations are always spot-on.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Avid Reader",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
    text: "I've read over 50 books this year thanks to Book Haven! The reading lists and personalized suggestions keep me motivated and engaged with my reading goals.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Book Blogger",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
    text: "Book Haven is a game-changer for book lovers. The ability to connect with other readers and share reviews has enriched my reading journey tremendously.",
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Teacher",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    rating: 5,
    text: "I recommend Book Haven to all my students. It's helped them develop a genuine love for reading and discover genres they never knew they'd enjoy.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-16 px-4 ">
      <style>{`
        .swiper-button-prev,
        .swiper-button-next {
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          color: #1a535c;
        }
        
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 20px;
          font-weight: bold;
        }
        
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          transform: scale(1.1);
        }
        
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #4ecdc4;
          opacity: 0.5;
        }
        
        .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 6px;
          opacity: 1;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-primary font-bold mb-3">
            What Our Readers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of happy readers who have made Book Haven their go-to
            platform for discovering and enjoying great books.
          </p>
        </div>

        <div className="relative px-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-secondary rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto relative">
                  <FaQuoteLeft className="text-5xl mb-6 opacity-20 text-primary" />

                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover mb-4 ring-4 ring-opacity-50"
                      style={{ ringColor: "#4ecdc4" }}
                    />

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-xl text-yellow-600    "
                        />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    <div>
                      <h4
                        className="font-bold text-lg"
                        style={{ color: "#1a535c" }}
                      >
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
