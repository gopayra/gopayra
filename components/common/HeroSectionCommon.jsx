import Image from 'next/image';
import React from 'react';
import Container from './Container';

const HeroSectionCommon = ({ title, description, Thumbnail }) => {
  return (
    <div className='bg-gopayra h-[676px]'>
      <Container>
        <div className='h-full grid grid-cols-1 md:grid-cols-2 items-center mt-20 pb-20'>

          {/* right column */}
          <div className='my-auto text-white' data-aos="fade-right">
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='text-lg mt-4'>{description}</p>
            <div className='mt-12 flex gap-14'>
              <div className='text-white'>
                <h2 className='text-[32px] font-semibold'>65%</h2>
                <p className='text-sm'>Scale up<br /> Operations</p>
              </div>

              <div className='text-white'>
                <h2 className='text-[32px] font-semibold'>85%</h2>
                <p className='text-sm'>Planning &<br /> Forecasting</p>
              </div>

              <div className='text-white'>
                <h2 className='text-[32px] font-semibold'>10-30%</h2>
                <p className='text-sm'>Saved Logistics<br />Cost and Time</p>
              </div>
            </div>
          </div>

          {/* left column */}
          <div className='justify-center map-bg-white h-full lg:flex items-center ml-12 hidden' data-aos="fade-left">
            <Image src={Thumbnail} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSectionCommon;