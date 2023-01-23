import React from 'react';
import Container from '../common/Container';
import HeadingText from '../UI/HeadingText';
import Image from 'next/image';

import AvailabilityIcon from '../../assets/images/icons/availabilityIcon.svg';
import LowestRatesIcon from '../../assets/images/icons/lowestRatesIcon.svg';
import CustomerSupportIcon from '../../assets/images/icons/customerSupportIcon.svg';
import DataAnalyticsIcon from '../../assets/images/icons/dataAnalyticsIcon.svg';

const GopayraGuarantee = () => {
  return (
    <section className='my-12'>
      <Container>
        <HeadingText text="Gopayra guarantee" />
        <div className='flex justify-between items-center mt-12'>
          <div className='flex gap-5 items-center'>
            <Image src={AvailabilityIcon} alt="" data-aos="flip-up"/>
            <h3 className='text-xl font-semibold'>100% <br /> Availability</h3>
          </div>

          <div className='flex gap-5 items-center'>
            <Image src={LowestRatesIcon} alt="" data-aos="flip-up"/>
            <h3 className='text-xl font-semibold'>Lowest <br /> Rates</h3>
          </div>

          <div className='flex gap-5 items-center'>
            <Image src={CustomerSupportIcon} alt="" data-aos="flip-up"/>
            <h3 className='text-xl font-semibold'>24x7 <br /> Support</h3>
          </div>

          <div className='flex gap-5 items-center'>
            <Image src={DataAnalyticsIcon} alt="" data-aos="flip-up"/>
            <h3 className='text-xl font-semibold'>Data Analytics <br /> & Reporting</h3>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GopayraGuarantee;