import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BestSeller = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <div>
      {/* Slider */}

      <h1 className="text-2xl ms-20 font-medium title-font mb-4 text-gray-900 border-l-8 border-yellow-300 font-serif font-semibold">
        BESTSELLER
      </h1>

      <div className="bg-gray-300">
        <div className="ms-20 me-20 mb-8 flex flex-col">
          <Slider {...settings} className="mt-6">
            <div className="px-2">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                src="https://www.beyoung.in/api/catalog/homepage-5-dec/best/1.jpg"
              />
            </div>
            <div className="px-2">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                src="https://www.beyoung.in/api/catalog/homepage-5-dec/best/6.jpg"
              />
            </div>
            <div className="px-2">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                src="https://www.beyoung.in/api/catalog/homepage-5-dec/best/2.jpg"
              />
            </div>
            <div className="px-2">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                src="https://www.beyoung.in/api/catalog/homepage-5-dec/best/8.jpg"
              />
            </div>
            <div className="px-2">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                src="https://www.beyoung.in/api/catalog/homepage-5-dec/best/5.jpg"
              />
            </div>
            <div className="px-2">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                src="https://www.beyoung.in/api/catalog/homepage-5-dec/best/4.jpg"
              />
            </div>
            <div className="px-2">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                src="https://www.beyoung.in/api/catalog/homepage-5-dec/best/1.jpg"
              />
            </div>
            <div className="px-2">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                src="https://www.beyoung.in/api/catalog/homepage-5-dec/best/6.jpg"
              />
            </div>
            <div className="px-2">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                src="https://www.beyoung.in/api/catalog/homepage-5-dec/best/2.jpg"
              />
            </div>
            <div className="px-2">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                src="https://www.beyoung.in/api/catalog/homepage-5-dec/best/8.jpg"
              />
            </div>
            <div className="px-2">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                src="https://www.beyoung.in/api/catalog/homepage-5-dec/best/5.jpg"
              />
            </div>
            <div className="px-2">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4"
                src="https://www.beyoung.in/api/catalog/homepage-5-dec/best/4.jpg"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
