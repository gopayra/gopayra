import React from 'react';
import Container from '../common/Container';
import HeadingText from '../UI/HeadingText';
import SubHeadingText from '../UI/SubHeadingText';
import Thumbnail from '../../assets/images/card-thumbnail.webp'
import Thumbnail2 from '../../assets/images/allDeliverySystem.webp'
import Thumbnail3 from '../../assets/images/industryDataAnalysis.webp'
import Thumbnail4 from '../../assets/images/logisticmanagement.webp'
import Thumbnail5 from '../../assets/images/courier-parcel.webp'
import Thumbnail6 from '../../assets/images/retailandfmcg.webp'
import Thumbnail7 from '../../assets/images/foodDelivery.webp'
import Thumbnail8 from '../../assets/images/ecommerce.webp'
import Thumbnail9 from '../../assets/images/fleetandDrivermng.webp'
import Image from 'next/image';
import Link from 'next/link';

const OurSolution = () => {

  const solutionData = [{
    Thumbnail: 'https://gopayra.com/_next/static/media/card-thumbnail.d246906f.webp',
    title: "Supply chain management",
    description: 'Only Gopayra company give you Supply management system : supply planning',
    link: "/supply-chain-management"
  }, {
    Thumbnail: 'https://gopayra.com/_next/static/media/allDeliverySystem.49218412.webp',
    title: "E-Commerce",
    description: 'Our Logistics E-Commerce Delivery provider to ensure consistent, secure',
    link: "/e-commerce"
  }, {
    Thumbnail: 'https://gopayra.com/_next/static/media/industryDataAnalysis.faca6891.webp',
    title: "Food delivery system",
    description: 'Being a grown-up is the best, you don’t need permission to have dessert for dinner',
    link: "/food-delivery-system"
  }, {
    Thumbnail: 'https://gopayra.com/_next/static/media/logisticmanagement.87ea6e3d.webp',
    title: "Retail and FMCG",
    description: 'Only Gopayra company give you Supply management system : supply planning Our Logistics E-Commerce',
    link: "/retail-and-FMCG"
  }, {
    Thumbnail: 'https://gopayra.com/_next/static/media/courier-parcel.d21fba9d.webp',
    title: "Courier & parcel",
    description: 'Only we have delivered the Fastest last mile Delivery. Real time door to door Delivery',
    link: "/courier-and-parcel"
  }, {
    Thumbnail: 'https://gopayra.com/_next/static/media/retailandfmcg.bbc908a7.webp',
    title: "Logistics Management",
    description: 'What are the benefits of Last-Mile Shipment visibility? There are numerous benefits',
    link: "/logistics-management"
  }, {
    Thumbnail: 'https://gopayra.com/_next/static/media/foodDelivery.0faabffe.webp',
    title: "Industry data analysis",
    description: 'we give you big data analysis and supply chain management systems. Through which',
    link: "/industry-data-analysis"
  }, {
    Thumbnail: 'https://gopayra.com/_next/static/media/ecommerce.91a1469f.webp',
    title: "All delivery system",
    description: 'According to one retailer, speed of delivery is the most important metric that drives loyalty. ',
    link: "/all-delivery-system"
  }, {
    Thumbnail: 'https://gopayra.com/_next/static/media/fleetandDrivermng.28e3ca54.webp',
    title: "Fleet & Driver Management",
    description: "Fleet management should live in your pocket. Gopayra's web and mobile...",
    link: "/fleet-and-driver-management"
  }]
  return (
    <section className='py-16 bg-liteGray'>
      <Container>
        <HeadingText text="Our Solution"></HeadingText>
        <SubHeadingText text="From supply chain to Industry data analysis we are here to solve every problem with our expertise"></SubHeadingText>

        <div className='flex flex-wrap justify-center md:justify-between items-center'>
          {solutionData.map((data, index) => {
            return <Link href={`solutions${data.link}`} key={index}>
              <div className='max-w-[270px] h-[300px] text-center cursor-pointer mt-12 p-2 bg-white bg-gradient-to-r hover:text-white hover:from-emerald-400 hover:to-teal-500 solution-card-wrapper rounded-2xl active:border-2 active:border-gopayra transition-all' data-aos="flip-left">
                {/* thumbnail */}
                <div>
                  <Image src={data.Thumbnail} alt="" width={254} height={137} />
                </div>
                {/* content */}
                <h2 className='text-xl font-semibold mt-4 mb-2'>{data.title}</h2>
                <p className='text-sm text-godesc text-neutral-500 p-2'>{data.description}</p>
              </div>
            </Link>
          })}
        </div>

      </Container>
    </section>
  );
};

export default OurSolution;