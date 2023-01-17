import React from 'react';
import Container from '../common/Container';
import DownlaodOurAppButton from '../UI/DownlaodOurAppButton';
import TruckImage from '../../assets/images/hero-truck.png';
import CourierManImage from '../../assets/images/courier-man.png';
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
    icon: RentTripIcon,
    iconLite: RentTripLiteIcon
  }, {
    id: 2,
    title: "Rent by Trip",
    description: "Renting a Car/Truck/ Ambulance and driver for your multi-stop trips. ",
    icon: RentCarIcon,
    iconLite: RentCarLiteIcon
  }, {
    id: 3,
    title: "Move my home",
    description: "Safety Packing, moving, and removal of goods takes a lot of effort when you do it all on your own.",
    icon: MoveMyMoveIcon,
    iconLite: MoveMyMoveLiteIcon
  }, {
    id: 4,
    title: "Office & commercial move",
    description: "Quality Packing If you have some very expensive furniture at the office",
    icon: OfficeMoveIcon,
    iconLite: OfficeMoveLiteIcon
  }, {
    id: 5,
    title: "Courier & Parcel",
    description: "Only we have delivered the Fastest last mile Delivery. Real time door to door Delivery",
    icon: ParcelTruckIcon,
    iconLite: ParcelTruckLiteIcon
  }, {
    id: 6,
    title: "Food Delivery",
    description: "Safety Packing, moving, and removal of goods takes a lot of effort when you do it all on your own.",
    icon: FoodDeliveryIcon,
    iconLite: FoodDeliveryLiteIcon
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
              <Image src={TruckImage} alt="" data-aos="zoom-in" />
            </div>
            <div className='absolute top-[4.6em] -mr-[16rem]'>
              <Image src={CourierManImage} alt="" data-aos="fade-left" />
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