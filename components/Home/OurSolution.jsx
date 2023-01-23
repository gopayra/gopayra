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
import Image from 'next/image';
import Link from 'next/link';

const OurSolution = () => {

  const solutionData = [{
    Thumbnail: Thumbnail,
    title: "Supply chain management",
    description: 'Only Gopayra company give you Supply management system : supply planning',
    link: "/Supply"
  }, {
    Thumbnail: Thumbnail2,
    title: "E-Commerce",
    description: 'Our Logistics E-Commerce Delivery provider to ensure consistent, secure',
    link: "/e-commerce"
  }, {
    Thumbnail: Thumbnail3,
    title: "Food delivery system",
    description: 'Being a grown-up is the best, you don’t need permission to have dessert for dinner',
    link: "/food-delivery-system"
  }, {
    Thumbnail: Thumbnail4,
    title: "Retail and FMCG",
    description: 'Only Gopayra company give you Supply management system : supply planning Our Logistics E-Commerce',
    link: "/retail-and-FMCG"
  }, {
    Thumbnail: Thumbnail5,
    title: "Courier & parcel",
    description: 'Only we have delivered the Fastest last mile Delivery. Real time door to door Delivery',
    link: "/Supply"
  }, {
    Thumbnail: Thumbnail6,
    title: "Logistics Management",
    description: 'What are the benefits of Last-Mile Shipment visibility? There are numerous benefits',
    link: "/Supply"
  }, {
    Thumbnail: Thumbnail7,
    title: "Industry data analysis",
    description: 'we give you big data analysis and supply chain management systems. Through which',
    link: "/Supply"
  }, {
    Thumbnail: Thumbnail8,
    title: "All delivery system",
    description: 'According to one retailer, speed of delivery is the most important metric that drives loyalty. ',
    link: "/Supply"
  }]
  return (
    <section className='py-16 bg-liteGray'>
      <Container>
        <HeadingText text="Our Solution"></HeadingText>
        <SubHeadingText text="From supply chain to Industry data analysis we are here to solve every problem with our expertise"></SubHeadingText>

        <div className='flex flex-wrap justify-center md:justify-between items-center'>
          {solutionData.map((data, index) => {
            return <Link href={data.link} key={index}>
              <div className='max-w-[270px] h-[300px] text-center cursor-pointer mt-12 p-2 bg-white bg-gradient-to-r hover:text-white hover:from-emerald-400 hover:to-teal-500 solution-card-wrapper rounded-2xl active:border-2 active:border-gopayra transition-all' data-aos="flip-left">
                {/* thumbnail */}
                <div>
                  <Image src={data.Thumbnail} alt="" />
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