import React from 'react';
import Container from '../common/Container';
import DownlaodOurAppButton from '../UI/DownlaodOurAppButton';
import TruckImage from '../../assets/images/hero-truck.png';
import CourierManImage from '../../assets/images/courier-man.png';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className='bg-gopayra bg-no-repeat bg-center bg-contain h-[800px]'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center h-full mt-6'>
          <div>
            <h1 className='text-white font-bold text-[64px] mb-12'>The largest last mile delivery service in Bangladesh</h1>

            <DownlaodOurAppButton />

            <div className='mt-12 flex gap-16'>
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

          <div className='map-bg-white h-full flex justify-center items-center'>
            <div className='flex'>
              <Image src={TruckImage} alt="" data-aos="zoom-in" />
            </div>
            <div className='absolute top-[4.6em] right-2'>
              <Image src={CourierManImage} alt="" data-aos="fade-left" />
            </div>
          </div>

        </div>

        {/* Solutions */}
        <div>
          <div>
            
          </div>
        </div>
      </Container>
    </section>

  );
};

export default HeroSection;