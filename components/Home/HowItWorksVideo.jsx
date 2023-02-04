import Image from 'next/image';
import React, { useState } from 'react';
import Container from '../common/Container';
import HeadingText from '../UI/HeadingText';
import SubHeadingText from '../UI/SubHeadingText';
import Thumbnail from '../../assets/images/video-thumbnail.jpg';

const HowItWorksVideo = () => {  
  return (
    <Container>
      <div className='map-bg h-full pb-20'>
        <HeadingText text="How it works" />
        <SubHeadingText text="Here is a video how we operate our system" />
        <Image src={Thumbnail} alt="image" />

        <div className='flex justify-center items-center mt-10'>
          <div className='flex max-w-[772px] h-[457px] border rounded-3xl overflow-hidden'>
            <video id="my-video" className="" preload="auto" poster="https://gopayra.com/_next/static/media/card-thumbnail.d246906f.webp" loop controls>
              <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowItWorksVideo;