/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel my-2">
      <button className="z-10 carousel-button carousel-button-left" onClick={prevSlide}>
        <FaChevronLeft className='dark:text-blue-500'/>
      </button>
      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="carousel-item w-auto flex items-center mx-auto">
            <img src={item.imageUrl} alt={item.altText} />
          </div>
        ))}
      </div>
      <button className=" z-10 carousel-button carousel-button-right" onClick={nextSlide}>
        <FaChevronRight className='dark:text-blue-500'/>
      </button>
    </div>
  );
};

export default Carousel;
