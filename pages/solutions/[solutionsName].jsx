import { useRouter } from 'next/router';
import React from 'react';
import SolutionsPageLayout from '../../components/common/SolutionsPageLayout';
import Thumbnail from '../../assets/images/supplyChain.png';

const solutionData = [{
  Thumbnail: Thumbnail,
  title: "Supply chain management",
  description: "Gopayra's Supply Chain Intelligence Suite is an AI-based optimization and automation solution designed for organisations struggling to solve supply chain disruptions through traditional transformation approaches. The products in the suite help improve supply chain resiliency, increase agility and accelerate time-to-value through actionable insights, smarter workflows and intelligent automation.",
  link: "supply-chain-management"
}, {
  Thumbnail: "Thumbnail2",
  title: "E-Commerce",
  description: 'Our Logistics E-Commerce Delivery provider to ensure consistent, secure',
  link: "e-commerce"
}, {
  Thumbnail: "Thumbnail3",
  title: "Food delivery system",
  description: 'Being a grown-up is the best, you don’t need permission to have dessert for dinner',
  link: "food-delivery-system"
}, {
  Thumbnail: "Thumbnail4",
  title: "Retail and FMCG",
  description: 'Only Gopayra company give you Supply management system : supply planning Our Logistics E-Commerce',
  link: "retail-and-FMCG"
}, {
  Thumbnail: "Thumbnail5",
  title: "Courier & parcel",
  description: 'Only we have delivered the Fastest last mile Delivery. Real time door to door Delivery',
  link: "courier-and-parcel"
}, {
  Thumbnail: "Thumbnail6",
  title: "Logistics Management",
  description: 'What are the benefits of Last-Mile Shipment visibility? There are numerous benefits',
  link: "logistics-management"
}, {
  Thumbnail: "Thumbnail7",
  title: "Industry data analysis",
  description: 'we give you big data analysis and supply chain management systems. Through which',
  link: "industry-data-analysis"
}, {
  Thumbnail: "Thumbnail8",
  title: "All delivery system",
  description: 'According to one retailer, speed of delivery is the most important metric that drives loyalty. ',
  link: "all-delivery-system"
}, {
  Thumbnail: "Thumbnail8",
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