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
  description: 'We live in an age when anything can be delivered to your doorstep without going out to buy it. Now with a few clicks, you can get whatever your hungry stomach craves',
  link: "food-delivery-system"
}, {
  Thumbnail: Thumbnail4,
  title: "Retail and FMCG",
  description: 'Only Gopayra company give you Supply management system : supply planning Our Logistics E-Commerce Delivery provider to ensure consistent, secure Being a grown-up is the best, you don&apos;t need permission to have dessert for dinner Retail Delivery Connect is not just about learning but building relationships.',
  link: "retail-and-FMCG"
}, {
  Thumbnail: Thumbnail5,
  title: "Courier & parcel",
  description: 'Our parcels are handled by experts in postal systems, express mail, private courier companies and truckload shipping carriers.',
  link: "courier-and-parcel"
}, {
  Thumbnail: Thumbnail6,
  title: "Logistics Management",
  description: 'Gopayra cloud based trucking dispatch software helps you manage your fleet and automatic dispatch for your transport company. Supply chain professionals are right to challenge practice in a post-pandemic world. Let&apos;s discuss new twists, risky turns and new possibilities',
  link: "logistics-management"
}, {
  Thumbnail: Thumbnail7,
  title: "Industry data analysis",
  description: 'Our automation system provides a data save facility to reduce the cost of paper and eliminate the fear of losing account books. You will get all the calculations of your transport month after month in our digital app.',
  link: "industry-data-analysis"
}, {
  Thumbnail: Thumbnail8,
  title: "All delivery system",
  description: 'Last-mile delivery is the most important of the entire delivery chain. Missed deliveries, delays and unhappy customers are a nightmare for any business owner. And no one wants to be in that position.',
  link: "all-delivery-system"
}, {
  Thumbnail: Thumbnail9,
  title: "Fleet & Driver Management",
  description: 'We help you efficiently manage and track ordering, loading, and delivery processes on a digital platform.',
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