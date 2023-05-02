import React from "react";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
const Discover = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        autoHeight={true}
        autoplay={{
          delay: 5000,

          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          720: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        loop
        navigation={true}
        modules={[Autoplay, Navigation]}
        className=" forYouBanner rounded-md border-none "
      >
        <SwiperSlide className="bg-black">
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <MovieCard />
        </SwiperSlide>{" "}
        <SwiperSlide className="bg-black">
          <MovieCard />
        </SwiperSlide>{" "}
        <SwiperSlide className="bg-black">
          <MovieCard />
        </SwiperSlide>{" "}
        <SwiperSlide className="bg-black">
          <MovieCard />
        </SwiperSlide>{" "}
        <SwiperSlide className="bg-black">
          <MovieCard />
        </SwiperSlide>{" "}
        <SwiperSlide className="bg-black">
          <MovieCard />
        </SwiperSlide>{" "}
        <SwiperSlide className="bg-black">
          <MovieCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Discover;
