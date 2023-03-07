import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import DownlaodOurApp from './DownlaodOurApp';
import HeroSectionCommon from './HeroSectionCommon';
import SupplyChainManagement from '../SolutionsPages/SupplyChainManagement';
import EcommerceLogiticsSolutions from '../SolutionsPages/EcommerceLogiticsSolutions';
import FoodDeliverySystem from '../SolutionsPages/FoodDeliverySystem';
import RetailAndFMCG from '../SolutionsPages/RetailAndFMCG';
import CourierAndParcel from '../SolutionsPages/CourierAndParcel';
import LogisticsManagement from '../SolutionsPages/LogisticsManagement';
import IndustryDataAnalysis from '../SolutionsPages/IndustryDataAnalysis';
import AllDeliverySystem from '../SolutionsPages/AllDeliverySystem';


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

        {filterPageData[0].title === "Food delivery system" && <FoodDeliverySystem />}

        {filterPageData[0].title === "Retail and FMCG" && <RetailAndFMCG />}

        {filterPageData[0].title === "Courier & parcel" && <CourierAndParcel />}

        {filterPageData[0].title === "Logistics Management" && <LogisticsManagement />}

        {filterPageData[0].title === "Industry data analysis" && <IndustryDataAnalysis />}

        {filterPageData[0].title === "All delivery system" && <AllDeliverySystem />}

        {/* contact us form section */}
        {filterPageData[0].title === "All delivery system" || filterPageData[0].title === 'Fleet & Driver Management' ? null : <DownlaodOurApp />}
      </main>
    </>
  );
};

export default SolutionsPageLayout;