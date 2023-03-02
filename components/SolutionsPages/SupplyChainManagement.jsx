import Image from 'next/image';
import React from 'react';
import Container from '../common/Container';
import GridLayout from '../common/GridLayout';
import SupplyVisibility from '../../assets/images/solutionsPages/supplyChainVisibility.webp';
import OrderManagement from '../../assets/images/solutionsPages/orderManagement.svg'
import ProductManagement from '../../assets/images/solutionsPages/productManagement.svg'
import LogisticsVisibility from '../../assets/images/solutionsPages/logisticsVisibility.svg'
import API from '../../assets/images/solutionsPages/api.svg'
import Cloud from '../../assets/images/solutionsPages/cloud.svg'
import TrustedData from '../../assets/images/solutionsPages/trustedData.svg'
import supplyImage2 from '../../assets/images/solutionsPages/supplyImage2.webp'
import ShowCase from '../../assets/images/showcase1.png';
import HeadingText from '../UI/HeadingText';
import SubHeadingText from '../UI/SubHeadingText';

const SupplyChainManagement = () => {
  const styles = {
    div: 'w-[370px] h-[196px] border border-[#CDE2DF] rounded-3xl flex justify-center items-center',
    h3: 'text-2xl font-semibold whitespace-nowrap mt-4'
  }
  return (
    <>
      <div className='flex justify-center my-20' data-aos="zoom-in">
        <Image src={ShowCase} alt="" width={638} height={432} />
      </div>
      <GridLayout
        heading="How Supply Chain Visibility Works"
        description="A Better Way to Manage Your Supply Chain. Access your supply chain data, reconcile invoices and identify gaps in real time to scale your business."
        thumbnail={SupplyVisibility}>
      </GridLayout>


      {/* How supply chain works */}
      <section>
        <Container>
          <div className='flex gap-4 justify-center my-20 items-center flex-wrap md:flex-nowrap md:justify-between'>
            <div className={styles.div} data-aos="fade-right">
              <div className='text-center'>
                <Image src={OrderManagement} alt="" />
                <h3 className={styles.h3}>Order Management</h3>
              </div>
            </div>

            <div className={styles.div} data-aos="zoom-in">
              <div className='text-center'>
                <Image src={ProductManagement} alt="" />
                <h3 className={styles.h3}>Production Management</h3>
              </div>
            </div>

            <div className={styles.div} data-aos="fade-left">
              <div className='text-center'>
                <Image src={LogisticsVisibility} alt="" />
                <h3 className={styles.h3}>Logistics Visibility</h3>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Capabilities Of Gopayra */}
      <section>
        <Container>
          <h1 className='text-heading font-semibold pb-10'>Core Capabilities Of Gopayra</h1>
          <h2 className='text-[28px] font-semibold '>Gain insight into the entire supply chain</h2>
          <p className='text-lg text-goDesc pt-4'>Gain visibility across all inventory, all order types (Sales, Purchase, Return, etc.), and all transportation across inbound, outbound, and after sales flows</p>

          <h2 className='text-[28px] font-semibold mt-10'>Access real-time analytics</h2>
          <p className='text-lg text-goDesc pt-4'>Continuously optimise by monitoring order volumes, revenues, and costs, and on-demand delivery</p>

          <h2 className='text-[28px] font-semibold mt-10'>Monitor goals and performance</h2>
          <p className='text-lg text-goDesc pt-4'>Capture and monitor cost, sustainability, and partner performance metrics to continuously improve</p>

          <h2 className='text-[28px] font-semibold mt-10'>The Industry’s Most Reliable Data</h2>
          <p className='text-lg text-goDesc pt-4'>Our data-first approach offers you the insights to mitigate supply chain risks and make informed decisions in real-time using dynamic ETAs, automated exception detection, and proactive alerts.</p>
        </Container>
      </section>

      <section className='bg-[#F6F9FC] my-20'>
        <Container>
          <div className='flex gap-8 my-24 items-center justify-center flex-wrap md:flex-nowrap'>
            <div className='text-center' data-aos="fade-right">
              <Image src={API} alt="" />
              <h3 className="text-2xl font-semibold mt-6">API-first, delivering data to your teams, systems, and customers</h3>
            </div>

            <div className='text-center' data-aos="zoom-in">
              <Image src={Cloud} alt="" />
              <h3 className="text-2xl font-semibold mt-6">Cloud-based data storing and cleaning unnecessary data</h3>
            </div>

            <div className='text-center' data-aos="fade-left">
              <Image src={TrustedData} alt="" />
              <h3 className="text-2xl font-semibold mt-6">The trusted data you need & predictive analytics you want</h3>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <HeadingText text='Supply Chain Management' />
          <SubHeadingText text='We help shippers, carriers and logistics service providers to gain supply chain visibility.' />
          <GridLayout
            description="Manage your supply chain with precision and efficiency, especially in the face of disruptions. Improve inventory predictability, reduce excess fees like demurrage and detention, and exceed customer expectations."
            thumbnail={supplyImage2}
            leftImage={true}
          />
        </Container>
      </section>
    </>
  );
};

export default SupplyChainManagement;