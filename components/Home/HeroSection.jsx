import React from 'react';
import Container from '../common/Container';
import DownlaodOurAppButton from '../UI/DownlaodOurAppButton';
import TruckImage from '../../assets/images/hero-truck.png';
import CourierManImage from '../../assets/images/courier-man.png';
import Image from 'next/image';

const HeroSection = () => {
  const ourServices = [{
    title: "Rent by day",
    description: "Hire our truck rent by day"
  }]
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
        
      </div>
    </section>

  );
};

export default HeroSection;