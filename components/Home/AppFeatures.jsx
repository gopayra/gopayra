import Image from 'next/image';
import React from 'react';
import Container from '../common/Container';
import HeadingText from '../UI/HeadingText';
import SubHeadingText from '../UI/SubHeadingText';
import Deliveries from '../../assets/images/features/fast-delivery.svg';
import Tracking from '../../assets/images/features/tracking.svg';
import MultiPoint from '../../assets/images/features/pins.svg';
import Schedule from '../../assets/images/features/schedule.svg';
import ResendOrders from '../../assets/images/features/resend-orders.svg';
import Address from '../../assets/images/features/address.svg';
import Map from '../../public/bangladesh.png';

const AppFeatures = () => {
  return (
    <Container>
      <HeadingText text="AppFeatures" />
      <SubHeadingText text="In this customer-centric era, Gopayra has optimized routes, automation,
Facilitates real-time tracking and efficient movement of products for both B2C and B2B departments.
Customers can view their orders on a map interface with real-time location of the delivery agent. And, payments can be made through payment gateways and various online wallets to provide secure payments." />

      <div className='flex items-center justify-around h-[572px] pt-16'>
        <div className='flex flex-col gap-12' data-aos="fade-right">
          <div>
            <Image src='https://gopayra.com/_next/static/media/fast-delivery.a446865c.svg' alt="" width={48} height={48} />
            <h3 className='text-xl font-semibold mt-3'>All Deliveries in One App</h3>
          </div>
          <div>
            <Image src='https://gopayra.com/_next/static/media/tracking.a554f5b3.svg' alt="" width={48} height={48} />
            <h3 className='text-xl font-semibold mt-3'>Tracking</h3>
          </div>
          <div>
            <Image src='https://gopayra.com/_next/static/media/pins.a0dbb1f3.svg' alt="" width={48} height={48} />
            <h3 className='text-xl font-semibold mt-3'>Mulit-point Deliveries</h3>
          </div>
        </div>

        <div className='p-14 hidden md:block' data-aos="zoom-in">
          <Image src='https://gopayra.com/_next/static/media/bangladesh.027fea3e.png' alt="" width={477} height={553} />
        </div>

        <div className='flex flex-col gap-12' data-aos="fade-left">
          <div>
            <Image src='https://gopayra.com/_next/static/media/schedule.70e99777.svg' alt="" width={48} height={48} />
            <h3 className='text-xl font-semibold mt-3'>Schedule Pickup</h3>
          </div>
          <div>
            <Image src='https://gopayra.com/_next/static/media/resend-orders.3ba25108.svg' alt="" width={48} height={48} />
            <h3 className='text-xl font-semibold mt-3'>Resend Orders</h3>
          </div>
          <div>
            <Image src='https://gopayra.com/_next/static/media/address.90ea2387.svg' alt="" width={48} height={48} />
            <h3 className='text-xl font-semibold mt-3'>Saved Address</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AppFeatures;