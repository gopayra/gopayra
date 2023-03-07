import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Container from './Container';
import DownlaodOurApp from './DownlaodOurApp';
import Thumbnail from '../../assets/images/supplyChain.png';
import ShowCase from '../../assets/images/showcase1.png';
import HeroSectionCommon from './HeroSectionCommon';
import HowItWorks from './HowItWorks';
import HowItWorksVideo from './HowItWorksVideo';
import MissionAndVision from './MissionAndVision';
import OurTransport from './OurTransport';

const ServicesPageLayout = ({ servicesData }) => {
  const router = useRouter();
  const { servicesName } = router.query;
  const filterPageData = servicesData.filter((item) => item.link === servicesName);

  return (
    <>
      <Head>
        <title>GOPAYRA - Solutions Pages</title>
        <meta name="description" content="Go Payra Easy Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* hero section */}
        <HeroSectionCommon title={filterPageData[0].title} description={filterPageData[0].description} Thumbnail={Thumbnail} />

        <OurTransport />
        
        <HowItWorksVideo />

        <MissionAndVision />

        {/* contact us form section */}
        <DownlaodOurApp />
      </main>
    </>
  );
};

export default ServicesPageLayout;