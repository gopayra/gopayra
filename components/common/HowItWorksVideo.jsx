import Image from 'next/image';
import React, { useState } from 'react';
import Container from './Container';
import HeadingText from '../UI/HeadingText';
import SubHeadingText from '../UI/SubHeadingText';
import Thumbnail from '../../assets/images/video-thumbnail.jpg';

const HowItWorksVideo = () => {
  return (
    <section className='mt-24'>
      <Container>
        <div className='map-bg-right h-full pb-20'>
          <HeadingText text="How it works" />
          <SubHeadingText text="Here is a video how we operate our system" />


          <div className='flex justify-center items-center mt-10'>
            <div className='flex max-w-[772px] h-[457px] overflow-hidden'>
              <video id="my-video" className="rounded-3xl" preload="auto" poster="https://gopayra.com/_next/static/media/video-thumbnail.da698279.jpg" loop controls>
                <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksVideo;