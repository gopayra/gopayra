import React from 'react';
import Container from '../common/Container';
import HeadingText from '../UI/HeadingText';
import Image from 'next/image';

import AvailabilityIcon from '../../assets/images/icons/availabilityIcon.svg';
import LowestRatesIcon from '../../assets/images/icons/lowestRatesIcon.svg';
import CustomerSupportIcon from '../../assets/images/icons/customerSupportIcon.svg';
import DataAnalyticsIcon from '../../assets/images/icons/dataAnalyticsIcon.svg';

const GopayraGuarantee = () => {
  const styles = "flex flex-col md:flex-row gap-5 items-center"
  return (
    <section className='my-12'>
      <Container>
        <HeadingText text="Gopayra guarantee" />
        <div className='grid grid-cols-2 md:flex justify-center gap-8 md:flex-row md:justify-between items-center mt-12'>
          <div className={styles}>
            <Image src={AvailabilityIcon} alt="" data-aos="flip-up"/>
            <h3 className='text-xl font-semibold'>100% <br /> Availability</h3>
          </div>

          <div className={styles}>
            <Image src={LowestRatesIcon} alt="" data-aos="flip-up"/>
            <h3 className='text-xl font-semibold'>Lowest <br /> Rates</h3>
          </div>

          <div className={styles}>
            <Image src={CustomerSupportIcon} alt="" data-aos="flip-up"/>
            <h3 className='text-xl font-semibold'>24x7 <br /> Support</h3>
          </div>

          <div className={styles}>
            <Image src={DataAnalyticsIcon} alt="" data-aos="flip-up"/>
            <h3 className='text-xl font-semibold'>Data Analytics <br /> & Reporting</h3>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GopayraGuarantee;