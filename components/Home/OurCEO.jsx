import Image from 'next/image';
import React from 'react';
import QouteIcon from '../../assets/images/icons/quote-left.svg'
import Container from '../common/Container';
import CEO from '../../assets/images/ceo.png';

const OurCEO = () => {
  return (
    <div className='gopayra-bg-v2 text-white my-32'>
      <div className='flex flex-wrap md:flex-nowrap justify-center md:justify-between max-w-[1170px] mx-auto px-4 h-full'>
        <div className='max-w-[700px] mt-12 md:my-auto'>
          <Image src={QouteIcon} alt="" />
          <h1 className='text-[32px] font-semibold'>“Our pilots are our heroes. Our pilots are well qualified. we&apos;ve trained into them from the beginning.”</h1>
          <h2 className='text-2xl font-semibold'>Md. Shariful Haque</h2>
          <p>Founder & CEO of Gopayra</p>
        </div>
        <div className='map-bg'>
          <div className='mt-10 md:-mt-16 flex'>
            <Image src={CEO} alt="" w={433} h={586} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCEO;