import { useEffect, useState } from "react";

const Carousel = ({
  images,
  animate = true,
  rating,
  styles,
  dotsDistance = "20px",
  imageClass,
}) => {
  const [index, setIndex] = useState(0);

  // Auto slide (Left → Right)
  useEffect(() => {
    if (animate) {
      const interval = setInterval(() => {
        goRight(); // LTR direction
      }, 3000);

      return () => clearInterval(interval);
    }
  }, []);

  const goLeft = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goRight = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative">
      <div className="relative w-full overflow-x-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className={`w-full object-cover flex-shrink-0 ${imageClass}`}
              style={{
                borderBottomLeftRadius: "25px",
                borderBottomRightRadius: "25px",
                height: "60vh",
                ...styles,
              }}
              alt="slide"
            />
          ))}
        </div>

        {/* Dots */}
      </div>

      <div
        className="absolute bottom-[-20px] z-10000 left-1/2 -translate-x-1/2 flex gap-0.5 "
        style={{
          bottom: dotsDistance,
        }}
      >
        {images.map((_, i) => (
          <div
            onClick={() => {
              setIndex(i);
            }}
            key={i}
            className={`w-1 h-1 rounded-full ${
              i === index ? "bg-[#3a3a45]" : "bg-[#909199]"
            } ${i === index ? "w-4" : "w-1"}`}
            style={{ transition: "0.5s" }}
          ></div>
        ))}
      </div>
      {rating && (
        <div
          style={{
            background:
              "linear-gradient(1.5708rad, rgb(243, 240, 255), rgb(243, 240, 255))",
          }}
          className="absolute bottom-3 right-3 p-2 py-1 rounded-[10px]  bg-[#fff] flex flex-col"
        >
          <p className="text-[12px] text-center font-[600] momo">
            Brand Rating
          </p>
          <div className="flex justify-center items-center">
            <p className="text-[12px] text-center font-[600] momo">{rating}</p>
            <span
              className="bg-contain h-[9px] w-[9px] ml-[4px] "
              style={{
                backgroundImage:
                  "url(https://constant.myntassets.com/pwa/assets/img/2bce8a2b-e1d5-465a-8980-62f3d778377c1548353615799-Fill-90-Copy-7.png)",
              }}
            ></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
