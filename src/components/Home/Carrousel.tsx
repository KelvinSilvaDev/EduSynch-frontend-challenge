import React, { useEffect, useRef } from "react";
import SwiperCore, { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Image from "next/image";
import sliderOne from "../../../public/Slider/sliderOne.png";
import sliderTwo from "../../../public/Slider/sliderTwo.png";

// SwiperCore.use([]);

export const HomeSliders = () => {
  const swiperRef = useRef<any | null>(null);

  const updateSlideOpacity = (swiper: any) => {
    swiper.slides.forEach((slide: any) => {
      const slideEl = slide as HTMLElement;
      const opacity = slideEl === swiper.slides[swiper.activeIndex] ? 1 : 0.6;
      slideEl.style.opacity = opacity.toString();
    });
  };

  useEffect(() => {
    if (swiperRef.current) {
      updateSlideOpacity(swiperRef.current);
    }
  }, []);

  return (
    <div className="w-full ">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        fadeEffect={{
          crossFade: true,
        }}
        onSlideChange={(swiper) => updateSlideOpacity(swiper)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <Image src={sliderOne} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderTwo} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderOne} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderTwo} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderOne} alt="slider" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={sliderTwo} alt="slider" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
