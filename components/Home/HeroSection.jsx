import React from 'react';
import Container from '../common/Container';
import DownlaodOurAppButton from '../UI/DownlaodOurAppButton';
import TruckImage from '../../assets/images/hero-truck.webp';
import CourierManImage from '../../assets/images/courier-man.webp';
import Image from 'next/image';
import GoPayraSlider from '../common/GoPayraSlider';
import RentCarIcon from '../../assets/images/icons/rent-by-day.svg';
import RentCarLiteIcon from '../../assets/images/icons/rent-by-day-lite.svg';

import RentTripIcon from '../../assets/images/icons/rent-by-trip.svg';
import RentTripLiteIcon from '../../assets/images/icons/rent-by-trip-lite.svg';

import MoveMyMoveIcon from '../../assets/images/icons/move-my-home.svg';
import MoveMyMoveLiteIcon from '../../assets/images/icons/move-my-home-lite.svg';

import OfficeMoveIcon from '../../assets/images/icons/office-move.svg';
import OfficeMoveLiteIcon from '../../assets/images/icons/office-move-lite.svg';

import FoodDeliveryIcon from '../../assets/images/icons/food-delivery.svg';
import FoodDeliveryLiteIcon from '../../assets/images/icons/food-delivery-lite.svg';

import ParcelTruckIcon from '../../assets/images/icons/parcel-truck.svg';
import ParcelTruckLiteIcon from '../../assets/images/icons/parcel-truck-lite.svg';



const HeroSection = () => {
  const ourServices = [{
    id: 1,
    title: "Rent by day",
    description: "Hire our truck rent by day",
    icon: 'https://gopayra.com/_next/static/media/rent-by-trip.dc193367.svg',
    iconLite: 'https://gopayra.com/_next/static/media/rent-by-trip-lite.42537366.svg',
    link: "/services/rent-by-day"
  }, {
    id: 2,
    title: "Rent by Trip",
    description: "Renting a Car/Truck/ Ambulance and driver for your multi-stop trips. ",
    icon: 'https://gopayra.com/_next/static/media/rent-by-day.f82a3ed3.svg',
    iconLite: 'https://gopayra.com/_next/static/media/rent-by-day-lite.707f19de.svg',
    link: "/services/rent-by-trip"
  }, {
    id: 3,
    title: "Move my home",
    description: "Safety Packing, moving, and removal of goods takes a lot of effort when you do it all on your own.",
    icon: 'https://gopayra.com/_next/static/media/move-my-home.9fcb13c2.svg',
    iconLite: 'https://gopayra.com/_next/static/media/move-my-home-lite.16e3df59.svg',
    link: "/services/move-my-home"
  }, {
    id: 4,
    title: "Office & commercial move",
    description: "Quality Packing If you have some very expensive furniture at the office",
    icon: 'https://gopayra.com/_next/static/media/office-move.4b5ae543.svg',
    iconLite: 'https://gopayra.com/_next/static/media/office-move-lite.187641e0.svg',
    link: "/services/office-and-commercial-move"
  }, {
    id: 5,
    title: "Courier & Parcel",
    description: "Only we have delivered the Fastest last mile Delivery. Real time door to door Delivery",
    icon: 'https://gopayra.com/_next/static/media/parcel-truck.90e2264d.svg',
    iconLite: 'https://gopayra.com/_next/static/media/parcel-truck-lite.6b0fd328.svg',
    link: "/services/courier-and-parcel"
  }, {
    id: 6,
    title: "Food Delivery",
    description: "Safety Packing, moving, and removal of goods takes a lot of effort when you do it all on your own.",
    icon: 'https://gopayra.com/_next/static/media/food-delivery.31d5dfc7.svg',
    iconLite: 'https://gopayra.com/_next/static/media/food-delivery-lite.84b9838f.svg',    
    link: "/services/food-delivery"
  }];
  return (
    <section className='bg-gopayra bg-no-repeat bg-center bg-contain h-[800px]'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center h-full mt-6'>
          <div>
            <h1 className='text-white font-bold text-5xl md:text-[64px] mb-12 whitespace-nowrap'>The largest last mile <br /> delivery service in <br /> Bangladesh</h1>

            <DownlaodOurAppButton />

            <div className='mt-12 flex gap-14'>
              <div className='text-white'>
                <h2 className='text-[32px] font-semibold'>65%</h2>
                <p className='text-sm'>Scale up Operations</p>
              </div>

              <div className='text-white'>
                <h2 className='text-[32px] font-semibold'>85%</h2>
                <p className='text-sm'>Planning & Forecasting</p>
              </div>

              <div className='text-white'>
                <h2 className='text-[32px] font-semibold'>10-30%</h2>
                <p className='text-sm'>Saved Logistics Cost and Time</p>
              </div>
            </div>
          </div>

          <div className='hidden map-bg-white h-full md:flex justify-center items-center'>
            <div className='flex'>
              <Image src="https://gopayra.com/_next/static/media/hero-truck.78d44869.webp" alt="" data-aos="zoom-in" width={569} height={411}/>
            </div>
            <div className='absolute top-[4.6em] -mr-[16rem]'>
              <Image src="https://gopayra.com/_next/static/media/courier-man.9e70a430.webp" alt="" data-aos="fade-left" height={726} width={537}/>
            </div>
          </div>

        </div>
      </Container>

      {/* Solutions */}
      <div className='-mt-20'>
        {/* slider */}
        <GoPayraSlider data={ourServices} />
      </div>
      
    </section>

  );
};

export default HeroSection;