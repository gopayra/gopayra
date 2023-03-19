import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import DownlaodOurApp from './DownlaodOurApp';
import Thumbnail from '../../assets/images/supplyChain.png';
import HeroSectionCommon from './HeroSectionCommon';
import HowItWorksVideo from './HowItWorksVideo';
import MissionAndVision from './MissionAndVision';
import OurTransport from './OurTransport';
import FoodDeliverySystem from '../SolutionsPages/FoodDeliverySystem';
import VehiclesCategory from './VehiclesCategory';

const ServicesPageLayout = ({ servicesData }) => {
  const router = useRouter();
  const { servicesName } = router.query;
  const filterPageData = servicesData.filter((item) => item.link === servicesName);

  return (
    <>
      <Head>
        <title>GOPAYRA - Services Pages</title>
        <meta name="description" content="Go Payra Easy Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* hero section */}
        <HeroSectionCommon
          title={filterPageData[0].title}
          description={filterPageData[0].description}
          Thumbnail={filterPageData[0].Thumbnail}
          downloadButton
        />

        {/* <FoodDeliverySystem /> */}
        <VehiclesCategory />

        {filterPageData[0].title === 'Gopayra Food Delivery'
          ? null
          : <>
            <MissionAndVision />

            <HowItWorksVideo />
          </>}
        {/* contact us form section */}
        <DownlaodOurApp />
      </main>
    </>
  );
};

export default ServicesPageLayout;