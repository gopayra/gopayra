import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import HeadingText from '../UI/HeadingText';
import SlideNormal from './SlideNormal';
import { FreeMode } from 'swiper';

import PrivateCar from '../../assets/images/privateCar.png';
import OpenTruck from '../../assets/images/openTruck.png';
import Ambulance from '../../assets/images/ambulance.png';
import MiniTruck from '../../assets/images/miniTruck.png';
import CoveredVan from '../../assets/images/CoveredVan.png';

const VehiclesCategory = () => {
  const typesOfFoods = [{
    id: 1,
    title: "Car",
    description: "First time in Bangladesh history we are giving Bike ride sharing courier service and they are very popular...",
    icon: PrivateCar,
  }, {
    id: 2,
    title: "Truck",
    description: "Gopayra's app provides a Truck rent system, making it easy to request on-demand moving and delivery...",
    icon: OpenTruck,
  }, {
    id: 3,
    title: "Ambulance",
    description: "Book mini trucks online. Whenever you need, wherever you need...",
    icon: Ambulance,
  }, {
    id: 4,
    title: "Mini Truck",
    description: "If you are planning to rent a Mini truck transport for delivering your goods, you have already made a smart choice...",
    icon: MiniTruck,
  }, {
    id: 5,
    title: "Larry",
    description: "We offer a large range of best quality used trucks and trailers for all of your specific port Transports...",
    icon: CoveredVan,
  }];
  return (
    <section className='mt-32'>
      <HeadingText
        text='Vehicles Category'
      />

      <div className='mt-12'>
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
          {typesOfFoods.map((item, index) => {
            return <SwiperSlide key={index} >
              <SlideNormal item={item} />
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default VehiclesCategory;