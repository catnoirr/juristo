"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

const Review = () => {
  const reviews = [
    {
      name: "Sarah Thompson",
      role: "Client",
      image: "/client1.jpg",
      rating: 5,
      review: "The combination of AI technology and expert legal support helped me navigate my workplace anxiety accommodation case with confidence. The team was compassionate and professional throughout.",
      date: "March 2024"
    },
    {
      name: "David Chen",
      role: "Healthcare Professional",
      image: "/client2.jpg",
      rating: 5,
      review: "As a healthcare provider, I've referred multiple patients to this service. Their 24/7 AI support and expert legal guidance have been invaluable for patients dealing with mental health legal challenges.",
      date: "February 2024"
    },
    {
      name: "Emily Martinez",
      role: "Client",
      image: "/client3.jpg",
      rating: 5,
      review: "The confidential AI-powered initial consultation made me feel safe to discuss my concerns. The legal team provided excellent support for my disability rights case while being sensitive to my anxiety.",
      date: "March 2024"
    },
    {
      name: "Dr. Michael Brown",
      role: "Mental Health Advocate",
      image: "/client4.jpg",
      rating: 5,
      review: "This platform bridges a crucial gap in mental health advocacy. The AI technology makes legal support more accessible, while the expert team ensures comprehensive care for each case.",
      date: "January 2024"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <svg
        key={index}
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600">
            Real experiences from people we've helped with mental health legal support
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active',
            bulletClass: 'swiper-pagination-bullet',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          loop={true}
          speed={1000}
          className="!pb-16"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-8 py-20 h-full flex flex-col border">
                <div className="flex items-center mb-6">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                    <p className="text-gray-600">{review.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">{renderStars(review.rating)}</div>
                <p className="text-gray-600 flex-grow mb-4">"{review.review}"</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{review.date}</span>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    Verified Review
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx global>{`
          .swiper-pagination {
            position: relative;
            bottom: 0 !important;
            margin-top: 2rem;
          }
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #CBD5E0;
            opacity: 1;
            margin: 0 6px !important;
          }
          .swiper-pagination-bullet-active {
            background: #3B82F6;
            width: 24px;
            border-radius: 6px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Review;
