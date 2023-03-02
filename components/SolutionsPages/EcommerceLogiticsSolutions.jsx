import Image from 'next/image';
import React from 'react';
import Container from '../common/Container';
import AnimatedCheckmark from '../UI/AnimatedCheckmark';
import HeadingText from '../UI/HeadingText';

// all image imports
import Thumbnail from '../../assets/images/solutionsPages/automatedDispatch.webp';
import Thumbnail2 from '../../assets/images/solutionsPages/fleetAnalyticsAndReports.webp';
import Thumbnail3 from '../../assets/images/solutionsPages/realTimeTransportation.webp';
import Thumbnail4 from '../../assets/images/solutionsPages/setPreferences.webp';
import Thumbnail5 from '../../assets/images/solutionsPages/keyFeaturesEcom.webp';
import ThreePLService from '../../assets/images/solutionsPages/3plService.webp';
import FourPLService from '../../assets/images/solutionsPages/4PLService.webp';
import GridLayout from '../common/GridLayout';


const styles = {
  div: "text-center w-80",
  h1: 'text-2xl font-semibold mb-4'
}

const data = [
  {
    thumbnail: Thumbnail,
    heading: 'Automated Dispatch & Allocation',
    description: 'Delivery tasks are automatically assigned to in-house or third party partners based on availability and set preferences.',
    leftImage: true
  },{
    thumbnail: Thumbnail2,
    heading: 'Fleet Analytics & Reports',
    description: 'Check performance of carriers and costing in Gopayra&apos;s analytics dashboard. Gain new insights and optimize deliveries to improve efficiency.'
  },{
    thumbnail: Thumbnail3,
    heading: 'Real-Time Transportation Visibility',
    description: 'Live tracking and delivery updates from start to finish. Elevate customer experience providing complete visibility and tracking in the application.',
    leftImage: true
  },{
    thumbnail: Thumbnail4,
    heading: 'Set Preferences Based On Delivery Goals',
    description: 'Set priority for delivery tasks based on faster delivery times or lower costs. Tasks will be auto-assigned based on set preferences.'
  },{
    thumbnail: Thumbnail5,
    heading: 'Key features of our E-Commerce Partner App',
    description: 'Gopayra User Friendly & Easy-To-Use pickup delivery Apps',
    leftImage: true
  },
]
const EcommerceLogiticsSolutions = () => {
  return (
    <>
      <Container>
        <div className='flex flex-wrap justify-evenly gap-20 my-32'>
          <div className={styles.div}>
            <h1 className={styles.h1}>Flexible Customer Pricing</h1>
            <p>Effective pricing for pickup delivery apps to the customers as per their delivery needs.</p>
          </div>

          <div className={styles.div}>
            <h1 className={styles.h1}>Freelancers Module</h1>
            <p>Enable your freelancer&apos;s to look at their daily tasks on the platform with a single click.</p>
          </div>

          <div className={styles.div}>
            <h1 className={styles.h1}>Ratings & Review</h1>
            <p>We Allow customers to rate their experience from your pickup and delivery business.</p>
          </div>

          <div className={`${styles.div}`}>
            <h1 className={styles.h1}>Alerts & Updates</h1>
            <p>Keep your customers updated with real-time notification of pick and delivery cycle.</p>
          </div>
        </div>
      </Container>
      {data.map((item, key) => {
        return <GridLayout
        key={key}
        heading={item.heading}
        description={item.description}
        thumbnail={item.thumbnail}
        leftImage={item.leftImage}
        />
      })}

      {/* customer section */}
      <section className='bg-[#F6F9FC] py-32'>
        <HeadingText text="Cutomer" />
        <Container>
          <div className='flex flex-wrap md:flex-nowrap gap-12 justify-center mt-8'>
            <div className='text-center w-72'>
              <AnimatedCheckmark />
              <p className='font-medium'>Real-time visibility on pickup and delivery status.</p>
            </div>

            <div className='text-center w-72'>
              <AnimatedCheckmark />
              <p className='font-medium'>Real-time tracking and status update on pickup and delivery app with a SMS.</p>
            </div>

            <div className='text-center w-72'>
              <AnimatedCheckmark />
              <p className='font-medium'>Instant information in case of incident (e.g. ETA)</p>
            </div>

            <div className='text-center w-72'>
              <AnimatedCheckmark />
              <p className='font-medium'>On-Demand Pickup & Delivery App</p>
            </div>
          </div>
        </Container>
      </section>

      {/* service details */}
      <section>
        <Container>
          <div className='h-full grid grid-cols-1 md:grid-cols-2 items-center mt-8 gap-8'>
            <div>
              <Image src={ThreePLService} alt="" data-aos="fade-right" />
            </div>

            <div data-aos="fade-left">
              <h1 className='text-heading font-semibold'>3PL Service</h1>
              <p className='text-goDesc mt-8'>A 3PL will offer innovative strategies to transform your supply chain into a cost-effective, responsive model. This decentralised, hyper-connected model provides the responsiveness needed to meet customers&apos; expectations for timely delivery.</p>

              <p className='text-goDesc mt-8'>No matter if you&apos;re direct-to-consumer or in a service-level agreement situation, customers expect overnight delivery, or as close to it as possible. The Warehouse Anywhere system can optimize your inventory per location to ensure stock is on hand in areas of highest demand. You will save on transportation and logistics expenses while improving customer service.</p>
            </div>
          </div>

          <div className='h-full grid grid-cols-1 md:grid-cols-2 items-center my-32 gap-8'>

            <div data-aos="fade-right">
              <h1 className='text-heading font-semibold'>4PL service</h1>
              <h2 className='text-2xl font-semibold'>What&apos;s the difference between 3PL and 4PL logistics?</h2>
              <p className='text-goDesc mt-8'>A 3PL will offer innovative strategies to transform your supply chain into a cost-effective, responsive model. This decentralised, hyper-connected model provides the responsiveness needed to meet customers&apos; expectations for timely delivery.</p>

              <p className='text-goDesc mt-8'>No matter if you&apos;re direct-to-consumer or in a service-level agreement situation, customers expect overnight delivery, or as close to it as possible. The Warehouse Anywhere system can optimize your inventory per location to ensure stock is on hand in areas of highest demand. You will save on transportation and logistics expenses while improving customer service.</p>
            </div>

            <div>
              <Image src={FourPLService} alt="" data-aos="fade-left" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default EcommerceLogiticsSolutions;