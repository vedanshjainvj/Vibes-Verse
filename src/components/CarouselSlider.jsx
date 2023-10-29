import React from "react";

const CarouselSlide = ({ imgSrc, alt, text, isActive }) => (
  <div
    className={`${
      isActive ? "block" : "hidden"
    } duration-700 ease-in-out relative`}
    data-carousel-item
  >
    <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
      {text}
    </span>
    <img
      src={imgSrc}
      className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      alt={alt}
    />
  </div>
);

const CarouselSlider = () => {
  // Replace these image URLs with your own
  const data = [
    {
      imgSrc:
        "https://i.pinimg.com/236x/64/22/9a/64229a7d87c1586010167db5c348d012.jpg",
      alt: "Slide 1",
      text: "First Slide",
    },
    {
      imgSrc:
        "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "Slide 2",
      text: "Second Slide",
    },
    {
      imgSrc:
        "https://flowbite.com/docs/images/carousel/carousel-3.svg",
      alt: "Slide 3",
      text: "Third Slide",
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="max-w-2xl mx-auto text-white
    ">
      <div
        id="default-carousel"
        className="relative"
        data-carousel="static"
      >
        <div className="overflow-hidden relative h-96 sm:h-64 xl:h-80 2xl:h-96 rounded-lg">
          {data.map((slide, index) => (
            <CarouselSlide
              key={index}
              imgSrc={slide.imgSrc}
              alt={slide.alt}
              text={slide.text}
              isActive={index === currentSlide}
            />
          ))}
        </div>
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          {data.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={() =>
            setCurrentSlide((prevSlide) =>
              prevSlide === 0 ? data.length - 1 : prevSlide - 1
            )
          }
        >
          <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="hidden">Previous</span>
            </span>
        </button>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={() =>
            setCurrentSlide((prevSlide) =>
              prevSlide === data.length - 1 ? 0 : prevSlide + 1
            )
          }
        >
          
        <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="hidden">Next</span>
            </span>
        </button>
        </button>
      </div>
    </div>
  );
};

export default CarouselSlider;
