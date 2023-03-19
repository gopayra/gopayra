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
import MoveMyHome from '../ServicesPages/MoveMyHome';
import OfficeAndCommercialMove from '../ServicesPages/OfficeAndCommercialMove';
import CourierAndParcel from '../ServicesPages/CourierAndParcel';

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

        {filterPageData[0].title === 'Office & commercial move' && <OfficeAndCommercialMove />}
        {filterPageData[0].title === 'Rent by day' && <VehiclesCategory />}
        {filterPageData[0].title === 'Rent by trip' && <VehiclesCategory />}

        {filterPageData[0].title === 'Move my home' && <MoveMyHome />}

        {filterPageData[0].title === 'Courier & Parcel' && <CourierAndParcel />}


        {filterPageData[0].title === 'Gopayra Food Delivery'
          ? <FoodDeliverySystem />
          : <>
            {filterPageData[0].title === 'Move my home' ? null : <MissionAndVision />}
            <HowItWorksVideo />
          </>}

        {/* contact us form section */}
        <DownlaodOurApp />
      </main>
    </>
  );
};

export default ServicesPageLayout;