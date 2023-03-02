import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Children, useState } from 'react';
import Container from './Container';
import DownlaodOurApp from './DownlaodOurApp';
import Thumbnail from '../../assets/images/supplyChain.png';
import HeroSectionCommon from './HeroSectionCommon';
import SupplyChainManagement from '../SolutionsPages/SupplyChainManagement';


const SolutionsPageLayout = ({ solutionData }) => {
  const router = useRouter();
  const { solutionsName } = router.query;
  const filterPageData = solutionData.filter((item) => item.link === solutionsName);

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

        {filterPageData[0].title === "Supply chain management" && <SupplyChainManagement />}

        {/* contact us form section */}
        <DownlaodOurApp />
      </main>
    </>
  );
};

export default SolutionsPageLayout;