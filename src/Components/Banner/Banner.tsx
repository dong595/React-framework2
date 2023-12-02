import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Banner() {
  const slides = [
    {
      url: "https://theme.hstatic.net/1000306633/1000891824/14/slideshow_2.jpg?v=646",
    },
    {
      url: "https://theme.hstatic.net/1000306633/1000891824/14/slideshow_3.jpg?v=646",
    },
    // {
    //   url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    // },
    // {
    //   url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlayEnabled] = useState(true);
  const autoPlayInterval = 5000;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;

    if (isAutoPlayEnabled) {
      intervalId = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, isAutoPlayEnabled, nextSlide]);

  return (
    <>
      <div className="w-full h-[380px] md:max-w-[1400px] md:h-[680px]  mx-auto pb-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        {/* Slide Indicators */}
        <div className="absolute  flex left-1/2 transform -translate-x-1/2">
          {slides.map((_, index) => (
            <RxDotFilled
              key={index}
              onClick={() => goToSlide(index)}
              size={30}
              className={`mx-1 cursor-pointer ${
                index === currentIndex ? "text-white" : "text-gray-400"
              }`}
            />
          ))}
        </div>
        {/* Auto Play Toggle */}
      </div>
    </>
  );
}
