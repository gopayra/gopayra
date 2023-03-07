import Image from 'next/image';
import React from 'react';
import Container from '../common/Container';
import HeadingText from '../UI/HeadingText';
// all the tech icons imports
import movers from '../../assets/images/solutionsPages/moving-home.svg';
import transport from '../../assets/images/solutionsPages/delivery-truck.svg';
import eCommerces from '../../assets/images/solutionsPages/shopping.svg';
import courier from '../../assets/images/solutionsPages/courier.svg';
import transportManagement from '../../assets/images/solutionsPages/transportManagement.svg';
import groceryDelivery from '../../assets/images/solutionsPages/grocery-cart.svg';
import flower from '../../assets/images/solutionsPages/bouquet.svg';

// customer app icons
import flexibleCustomerPricing from '../../assets/images/solutionsPages/flexibleCustomerPricing.svg';
import freelancersModule from '../../assets/images/solutionsPages/freelancersModule.svg';
import alertsAndUpdates from '../../assets/images/solutionsPages/alertsAndUpdates.svg';
import multiplePaymentGateways from '../../assets/images/solutionsPages/multiplePaymentGateways.svg';
import ratingsAndReview from '../../assets/images/solutionsPages/raingsAndReview.svg';
import inBuiltChat from '../../assets/images/solutionsPages/inBuiltChat.svg';

// all images imports
import appMockup from '../../assets/images/appMockup.webp';
import deliveryTypes from '../../assets/images/solutionsPages/deliveryTypes.webp';
import packetEntry from '../../assets/images/solutionsPages/packetEntry.webp';
import scheduling from '../../assets/images/solutionsPages/scheduling.webp';
import sorting from '../../assets/images/solutionsPages/sorting.webp';
import returnOrder from '../../assets/images/solutionsPages/returnOrder.webp';
import routeOptimization from '../../assets/images/solutionsPages/routeOptimization.webp';
import barcodeSupport from '../../assets/images/solutionsPages/barcodeSupport.webp';
import proofOfDelivery from '../../assets/images/solutionsPages/proofOfDelivery.webp';
import realTimeTracking from '../../assets/images/solutionsPages/realTimeTracking.webp';
import reportsAndAnalytics from '../../assets/images/solutionsPages/reportsAndAnalytics.webp';
import lightMap from '../../assets/images/solutionsPages/lightMap.webp';
import darkMap from '../../assets/images/solutionsPages/darkMap.webp';
import streetsMap from '../../assets/images/solutionsPages/streetsMap.webp';
import AppButton from '../UI/AppButton';
import GridLayout from '../common/GridLayout';

const AllDeliverySystem = () => {
  const techData = [{
    icon: movers,
    bgColor: "#E4F0EF",
    text: "Movers & Packers"
  }, {
    icon: transport,
    bgColor: "#D6ECF4",
    text: "Transport"
  }, {
    icon: eCommerces,
    bgColor: "#FCEFD9",
    text: "E-commerce & Retail"
  }, {
    icon: courier,
    bgColor: "#E8FBE1",
    text: "Courier Delivery"
  }, {
    icon: transportManagement,
    bgColor: "#FAF4B7",
    text: "Transport Management"
  }, {
    icon: groceryDelivery,
    bgColor: "#FCEFD9",
    text: "Grocery Delivery"
  }, {
    icon: flower,
    bgColor: "#ECE3FC",
    text: "Flower Delivery"
  }]

  const customAppData = [{
    icon: flexibleCustomerPricing,
    text: 'Flexible Customer Pricing',
  }, {
    icon: freelancersModule,
    text: 'Freelancers Module',
  }, {
    icon: alertsAndUpdates,
    text: 'Alerts & Updates',
  }, {
    icon: multiplePaymentGateways,
    text: 'Multiple Payment Gateways',
  }, {
    icon: ratingsAndReview,
    text: 'Ratings & Review',
  }, {
    icon: inBuiltChat,
    text: 'In-built Chat',
  }]

  const sectionData = [{
    heading: 'Delivery Types',
    image: deliveryTypes,
    desc: 'Different delivery types to meet your customer delivery needs',
    leftImage: true
  }, {
    heading: 'Packet Entry',
    image: packetEntry,
    desc: 'Easy packet entry module to fit every customer requirements Alerts & Updates Instant alerts to keep dispatcher & customer updated throughout delivery cycle',
  }, {
    heading: 'Scheduling',
    image: scheduling,
    desc: 'Job scheduling to ensure maximum calendar utilization.',
    leftImage: true
  }, {
    heading: 'Sorting',
    image: sorting,
    desc: 'Easy sorting of packets as per geofences and courier boy assigned to it .'
  }, {
    heading: 'Return Order',
    image: returnOrder,
    desc: 'Keep a record on return orders and schedule them to be sent next for delivery',
    leftImage: true
  }, {
    heading: 'Route Optimization',
    image: routeOptimization,
    desc: 'Cut cost on fuel to make on-time deliveries through the most optimized routes.'
  }, {
    heading: 'Barcode Support',
    image: barcodeSupport,
    desc: 'Process bar codes on your shipments with our robust solution.',
    leftImage: true
  }, {
    heading: 'Proof of Delivery',
    image: proofOfDelivery,
    desc: 'Collect electronic proof of delivery in form of images & signatures'
  }, {
    heading: 'Real-Time Tracking',
    image: realTimeTracking,
    desc: 'Track every activity of your courier boys in real-time on an interactive map',
    leftImage: true
  }, {
    heading: 'Reports & Analytics',
    image: reportsAndAnalytics,
    desc: 'Advanced analytics to identify bottlenecks and make data driven decision'
  }]
  return (
    <>
      <section className='bg-liteGray'>
        <Container>
          <h1 className='text-[32px] font-semibold px-4 text-center md:px-32 mx-auto mt-[7.5rem] mb-24'>All in one tech courier solution for all your business needs. We give the world best delivery facility in this apps Like</h1>

          <div className='flex flex-wrap gap-4 justify-center items-center mb-24'>
            {techData.map((item, index) => {
              return <div className='w-[270px] h-[220px] text-center bg-white rounded-3xl flex flex-col justify-center gap-5 group cursor-pointer border border-transparent hover:border-gopayra' key={index}>
                <div className={`w-[70px] h-[70px] flex items-center justify-center rounded-full mx-auto group-hover:animate-bounce transition-all`} style={{ backgroundColor: item.bgColor }}>
                  <Image src={item.icon} alt="" />
                </div>
                <h2 className='text-2xl font-semibold max-w-[200px] mx-auto'>{item.text}</h2>
              </div>
            })}

          </div>
        </Container>
      </section>

      {/* customer app section */}
      <section>
        <Container>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 mt-28 px-12'>
            <div>
              <Image src={appMockup} alt="" />
            </div>

            <div className='max-w-[600px]'>
              <h1 className='text-heading font-semibold text-black'>Customer App</h1>
              <p className='text-goDesc my-8'>With the user-friendly interface of Customer App, customers can Easily place orders online, - Track the status of their order on map interface with real-time location of delivery agent, - View the on-going discounts and special offers</p>
              <ul className='list-disc mb-8 font-medium ml-8'>
                <li>On demand delivery app for customers.</li>
                <li>Real-time delivery tracking & status updates.</li>
                <li>Customer Chat with SCGinead Drivers.</li>
              </ul>
              <AppButton />
            </div>
          </div>
        </Container>
      </section>

      {/* Agent app section */}
      <section>
        <Container>
          <div className='flex flex-col-reverse gap-8 md:grid md:grid-cols-2 mt-28 px-12'>
            <div className='max-w-[600px]'>
              <h1 className='text-heading font-semibold text-black'>Agent App</h1>
              <p className='text-goDesc my-8'>Reduce time by automatically assigning all your car delivery tasks and control the car from home. - Easily deliver through the most optimized routes to deliver doorsteps to every customer in the shortest possible time.</p>
              <ul className='list-disc mb-8 font-medium ml-8'>
                <li>Bird eye business view</li>
                <li>Driver GPS tracking & task status</li>
                <li>Driver performance management</li>
                <li>Manage ratings & reviews</li>
              </ul>
              <AppButton />
            </div>

            <div className='flex justify-end'>
              <Image src={appMockup} alt="" />
            </div>
          </div>
        </Container>
      </section>

      {/* Driver app section */}
      <section className='mb-12'>
        <Container>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 mt-28 px-12'>
            <div>
              <Image src={appMockup} alt="" />
            </div>

            <div className='max-w-[600px]'>
              <h1 className='text-heading font-semibold text-black'>Driver App</h1>
              <p className='text-goDesc my-8'>We connect fleet managers with vehicle drivers. Customers can monitor real-time status, routes, driver activity and customer reviews. Drivers can view all current and future destinations, choose smart routes, receive contact alerts and mark off deliveries.</p>
              <ul className='list-disc mb-8 font-medium ml-8'>
                <li>Auto delivery dispatch</li>
                <li>Route Optimization & Navigation</li>
                <li>Task Alerts & Reminders</li>
                <li>Driver&apos;s Earnings</li>
              </ul>
              <AppButton />
            </div>
          </div>
        </Container>
      </section>

      {/* Customer app technologies */}
      <section className='py-32 bg-liteGray mb-12'>
        <Container>
          <HeadingText text='Customer App' />

          <div className='mt-12 flex flex-wrap justify-center gap-3'>
            {customAppData.map((item, index) => {
              return <div className='text-center bg-white rounded-3xl w-[370px] h-[196px] flex flex-col justify-center gap-4 group border border-liteBorder hover:border-gopayra cursor-pointer transition-all' key={index}>
                <Image src={item.icon} alt="" className='group-hover:animate-pulse' />
                <h2 className='text-2xl font-semibold group-hover:scale-105'>{item.text}</h2>
              </div>
            })}
          </div>
        </Container>
      </section>

      {sectionData.map((item, index) => {
        return <GridLayout
        key={index}
        heading={item.heading}
        description={item.desc}
        thumbnail={item.image}
        leftImage={item.leftImage}
      />
      })}


      <section className='bg-liteGray py-32'>
        <Container>
        <h1 className='text-[32px] text-center font-semibold mx-auto max-w-[750px]'>We offer mapping solution to medium and large scale enterprises at a fraction of the cost. And we are also offering 3 type maps in customer apps</h1>

        <div className='mt-12 flex gap-8 flex-wrap justify-center md:flex-nowrap'>
          <div className='text-center'>
            <Image src={lightMap} alt="" />
            <h2 className='text-2xl font-semibold mt-2'>Light map</h2>
          </div>

          <div className='text-center'>
            <Image src={darkMap} alt="" />
            <h2 className='text-2xl font-semibold mt-2'>Dark map</h2>
          </div>

          <div className='text-center'>
            <Image src={streetsMap} alt="" />
            <h2 className='text-2xl font-semibold mt-2'>Streets map</h2>
          </div>
        </div>
        </Container>
      </section>
    </>
  );
};

export default AllDeliverySystem;