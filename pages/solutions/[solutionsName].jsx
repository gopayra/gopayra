import React from 'react';
import SolutionsPageLayout from '../../components/common/SolutionsPageLayout';
import Thumbnail from '../../assets/images/solutionsPages/supplyChain.webp';
import Thumbnail2 from '../../assets/images/solutionsPages/ecommerce.webp';
import Thumbnail3 from '../../assets/images/solutionsPages/foodDelivery.webp';
import Thumbnail4 from '../../assets/images/solutionsPages/retailandfmcg.webp';
import Thumbnail5 from '../../assets/images/solutionsPages/courierandparcel.webp';
import Thumbnail6 from '../../assets/images/solutionsPages/logisticsManagement.webp';
import Thumbnail7 from '../../assets/images/solutionsPages/industryDataAnalysis.webp';
import Thumbnail8 from '../../assets/images/solutionsPages/allDeliverySystem.webp';
import Thumbnail9 from '../../assets/images/solutionsPages/FleetandDriver.webp';

const solutionData = [{
  Thumbnail: Thumbnail,
  title: "Supply chain management",
  description: "Gopayra's Supply Chain Intelligence Suite is an AI-based optimization and automation solution designed for organisations struggling to solve supply chain disruptions through traditional transformation approaches. The products in the suite help improve supply chain resiliency, increase agility and accelerate time-to-value through actionable insights, smarter workflows and intelligent automation.",
  link: "supply-chain-management"
}, {
  Thumbnail: Thumbnail2,
  title: "E-commerce Logistics Solutions",
  description: 'Work with the best logistics platform and Hassle Free Pickup and delivery Operations',
  link: "e-commerce"
}, {
  Thumbnail: Thumbnail3,
  title: "Food delivery system",
  description: 'Being a grown-up is the best, you don’t need permission to have dessert for dinner',
  link: "food-delivery-system"
}, {
  Thumbnail: Thumbnail4,
  title: "Retail and FMCG",
  description: 'Only Gopayra company give you Supply management system : supply planning Our Logistics E-Commerce',
  link: "retail-and-FMCG"
}, {
  Thumbnail: Thumbnail5,
  title: "Courier & parcel",
  description: 'Only we have delivered the Fastest last mile Delivery. Real time door to door Delivery',
  link: "courier-and-parcel"
}, {
  Thumbnail: Thumbnail6,
  title: "Logistics Management",
  description: 'What are the benefits of Last-Mile Shipment visibility? There are numerous benefits',
  link: "logistics-management"
}, {
  Thumbnail: Thumbnail7,
  title: "Industry data analysis",
  description: 'we give you big data analysis and supply chain management systems. Through which',
  link: "industry-data-analysis"
}, {
  Thumbnail: Thumbnail8,
  title: "All delivery system",
  description: 'According to one retailer, speed of delivery is the most important metric that drives loyalty. ',
  link: "all-delivery-system"
}, {
  Thumbnail: Thumbnail9,
  title: "Fleet & Driver Management",
  description: 'According to one retailer, speed of delivery is the most important metric that drives loyalty. ',
  link: "fleet-and-driver-management"
}]

export async function getStaticProps() {
  return {
    props: {
      solutionData,
    },
  };
}

export const getStaticPaths = async () => {
  const paths = solutionData.map(item => {
    return {
      params: { solutionsName: item.link }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export default function Solutions() {
  return <SolutionsPageLayout solutionData={solutionData} />;
};