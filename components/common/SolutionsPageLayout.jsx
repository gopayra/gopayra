import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import DownlaodOurApp from './DownlaodOurApp';
import HeroSectionCommon from './HeroSectionCommon';
import SupplyChainManagement from '../SolutionsPages/SupplyChainManagement';
import EcommerceLogiticsSolutions from '../SolutionsPages/EcommerceLogiticsSolutions';


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
        <HeroSectionCommon title={filterPageData[0].title} description={filterPageData[0].description} Thumbnail={filterPageData[0].Thumbnail} />

        {filterPageData[0].title === "Supply chain management" && <SupplyChainManagement />}

        {filterPageData[0].title === "E-commerce Logistics Solutions" && <EcommerceLogiticsSolutions />}

        {/* contact us form section */}
        <DownlaodOurApp />
      </main>
    </>
  );
};

export default SolutionsPageLayout;