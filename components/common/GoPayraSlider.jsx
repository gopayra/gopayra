import Image from 'next/image';
import React from 'react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Slide';

const GoPayraSlider = ({ data }) => {

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          // when window width is >= 640px
          450: {
            width: 450,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        className="ourServices-slider"
      >
        {data.map((item, index) => {
          return <SwiperSlide key={index} >
            <Slide item={item} />
          </SwiperSlide>
        })}
      </Swiper>
    </div>
  );
};

export default GoPayraSlider;