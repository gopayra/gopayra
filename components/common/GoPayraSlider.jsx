import Image from 'next/image';
import React from 'react';
import { FreeMode, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import RentCarIcon from '../../assets/images/icons/rent-by-day.svg';
import RentTripIcon from '../../assets/images/icons/rent-by-trip.svg';

const GoSlider = ({ data }) => {
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
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
        className="mySwiper"
      >
        {data.map((item, index) => {
          return <div className={`${key = 1 && "ml-20"}`} key={index}>
            <SwiperSlide>
              <div className='bg-white cursor-pointer hover:text-white
             bg-gradient-to-r hover:from-emerald-400 hover:to-teal-500 rounded-2xl p-8 w-[270px]'>
                <Image src={RentTripIcon} alt="car rent" />
                <h3 className='font-semibold text-xl'>{item.title}</h3>
                <p className='text-sm text-goDesc hover:text-white mt-2'>{item.description}</p>
              </div>
            </SwiperSlide>
          </div>
        })}
      </Swiper>
    </div>
  );
};

export default GoSlider;