import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode, Navigation } from "swiper";
import Image from 'next/image';

const CustomGoPayraSlider = ({transportData}) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        freeMode={true}
        navigation={true}
        scrollbar={{
          hide: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        modules={[Scrollbar, FreeMode, Navigation]}
        className="customGopayraSlider pb-4 mt-14"
        url="/privacy-policy"
      >
        {transportData.map((item, index) => {
          return <SwiperSlide className='text-center bg-liteGray border-2 border-transparent hover:border-gopayraLight active:border-2 active:border-gopayra rounded-xl py-3 px-4 transition-all cursor-pointer' style={{ widht: "300px", height: "271px" }} key={index}>
            <Image src={item.vehicleImage} alt="" />
            <h1 className='text-2xl font-semibold'>{item.vehicleType}</h1>
            <p className='text-goDesc mt-4 text-sm px-8'>{item.details}</p>
          </SwiperSlide>
        })}
        <SwiperSlide />
      </Swiper>
    </>
  );
};

export default CustomGoPayraSlider;