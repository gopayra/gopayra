import React from 'react';
import Container from '../common/Container';
import HeadingText from '../UI/HeadingText';
import Image from 'next/image';

// All images imports
import parcelReception from '../../assets/images/solutionsPages/parcel.svg';
import streamline from '../../assets/images/solutionsPages/streamline.svg';
import onlinePayment from '../../assets/images/solutionsPages/onlinePayment.svg';
import customerControl from '../../assets/images/solutionsPages/customerControl.svg';
import collections from '../../assets/images/solutionsPages/collections.svg';
import onlineCustomer from '../../assets/images/solutionsPages/onlineCustomer.svg';
import support from '../../assets/images/solutionsPages/support.svg';


const CourierAndParcel = () => {
  const data = [{
    icon: parcelReception,
    text: 'Parcel reception.'
  }, {
    icon: streamline,
    text: 'Run in Streamline.'
  }, {
    icon: onlinePayment,
    text: 'Online payment.'
  }, {
    icon: customerControl,
    text: 'Customer control panel.'
  }, {
    icon: collections,
    text: 'Collection of controls ran.'
  }, {
    icon: onlineCustomer,
    text: 'Online customer registration.'
  }, {
    icon: support,
    text: '24/7 online support'
  },]

  const typesOfService = [{
    title: 'Packet entry',
    desc: 'Our door to door delivery service accommodates any type of packet entry to suit every customer&apos;s requirement'
  }, {
    title: 'Return order',
    desc: 'Live track every activity of your delivery man. We provide live tracking of your order from the time it is received to your hand.'
  }, {
    title: 'Real-time tracking',
    desc: 'Live track every activity of your delivery man. We provide live tracking of your order from the time it is received to your hand.'
  }, {
    title: 'Proof of delivery',
    desc: 'Collect electronic proof of delivery in the form of images and signatures after the delivery reaches your customer.'
  }, {
    title: 'Barcode support',
    desc: 'We provide a barcode on each of our products. Share the barcode on your invoice with the customer.'
  }, {
    title: 'Reporting and analysis',
    desc: 'Database system is provided to view and store all your previous invoice reports.'
  }]
  return (
    <>
      <section className='mt-32'>
        <Container>
          <HeadingText text='We give you' />

          <div className='flex flex-wrap justify-center gap-4 mt-12'>

            {data.map((item, index) => {
              return <div className='flex flex-col gap-4 justify-center items-center border border-liteBorder rounded-3xl w-[270px] h-[140px]' key={index}>
                <Image src={item.icon} alt="" />
                <h3 className='text-xl font-semibold'>{item.text}</h3>
              </div>
            })}

          </div>
        </Container>
      </section>

      <section className='my-12'>
        <Container>
          <p className='text-lg px-4 md:px-20'>Today, digital innovation is at the heart of every sector. You need to digitize internal operations to improve and become more cost-effective. Discover better ways to deal with and attract customers. Bring new things and companies to market. Because changing financial circumstances mean you&apos;re masterminding around a moving goal. But the new organization jumps in completely at full risk. Competition is also increasing. So, you need a quick method. That turns your creative new idea into a winning application. Our best online platform Gopayra will work to make you digital.</p>
        </Container>
      </section>

      <section>
        <Container>

          <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-8'>
            {typesOfService.map((item, index) => {
              return <div className='pr-8 md:max-w-[331px]' key={index}>
                <h2 className='text-2xl font-semibold'>{item.title}</h2>
                <p className='text-goDesc mt-2'>{item.desc}</p>
              </div>
            })}
          </div>

        </Container>
      </section>
    </>
  );
};

export default CourierAndParcel;