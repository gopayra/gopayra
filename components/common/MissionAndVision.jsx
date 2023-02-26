import Image from 'next/image';
import React from 'react';
import Thumbnail from '../../assets/images/missionandvission-thumbnail.png';
import Container from './Container';

const MissionAndVision = () => {
  return (
    <Container>
      <div className='grid grid-cols-2 items-center'>
        <div className='flex'>
          <Image src={Thumbnail} alt="" width={456} height={500}/>
        </div>
        <div>
          <div>
            <h1 className='text-[32px] font-semibold'>Our Mission</h1>
            <p className='text-lg my-4'>Organising the fragmented on-road logistics landscape using a digital freight platform that thrives on transparency, reliability, and exceptional business availability.</p>
          </div>
          <div className='mt-8'>
            <h1 className='text-[32px] font-semibold'>Our Vision</h1>
            <p className='text-lg mt-4'>Our mission is to serve as an indispensable partner by helping our clients create and maximize sustainable competitive advantages. We do this by helping them market their products quickly, efficiently and securely Along with that introducing the people of our country to the automation process.</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MissionAndVision;