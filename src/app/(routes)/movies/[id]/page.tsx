"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import MovieOverview from "@/components/MovieDetails/MovieOverview";
import MovieCast from "@/components/MovieDetails/MovieCast";
import "swiper/css";
import "swiper/css/pagination";

const MovieDetail = () => {
  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <MovieOverview />
      </SwiperSlide>
      <SwiperSlide>
        <MovieCast />
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default MovieDetail;
