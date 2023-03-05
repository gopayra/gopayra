import React from 'react';
import GridLayout from '../common/GridLayout';
import Image from 'next/image';
import Container from '../common/Container';

import retailandFmcg from '../../assets/images/solutionsPages/reatilandFmcgtruck.webp'
import outsourceTransport from '../../assets/images/solutionsPages/outsourceTransport.webp'
import futureProofSupply from '../../assets/images/solutionsPages/futureProofSupply.webp'
import supplyChainTech from '../../assets/images/showcase1.png';
import benefitsOfAI from '../../assets/images/solutionsPages/benefitsOfAI.webp';
import smallCheckmark from '../../assets/images/solutionsPages/smallCheckmark.svg';
import GridLayoutBig from '../common/GridLayoutBig';


const RetailAndFMCG = () => {
  return (
    <>
      <GridLayoutBig
        heading="Retail & FMCG Logistics Solutions"
        description="Bet on the drop-off point If you require a large number of retail and FMCG daily deliveries, drop-off points serve the purpose only. Collection points, as they are known, help reduce transportation costs. For affordable prices, you can count on reliable Gopayra to get your products to the right place at the right time."
        description2="Service logic is a no-brainer. Leave orders only at accredited, exclusively commercial locations. From there, your carrier/s pick up the product, collect it with others and are responsible for delivery. With this, everyone benefits as the amount of items grouped at specific points optimizes the work. Save you time and money!"
        thumbnail={retailandFmcg}
        leftImage
      />

      <GridLayoutBig
        heading="Outsource transport for unlimited capacity"
        description="Extensive coverage in the service area, which is complemented by an increased number of vehicles capable of handling any volume of shipments. It's sheer power with zero laziness."
        description2="With Gopayra, our customers benefit from a strong and diverse domestic network of 10,000+ trucks. On our platform, shippers like you place thousands of load requests every day and it automatically assigns the best possible transportation. Each carrier in our network is thoroughly vetted, and we collect and analyze data on each of their transportation journeys. This helps us evaluate the best options for you in real-time, giving you value for your money. What's more, you do well beyond routine maintenance, dynamic route planning, traceability and an adequate customer-first service structure."
        thumbnail={outsourceTransport}
      />

      <GridLayoutBig
        heading="A Future-Proof Supply Chain 2 Futures."
        description="Resilience is a buzz word we often hear in the context of the post-Covid pandemic logistics industry. It is often used to describe both workers and businesses, as businesses continue to protect their labor outside of wait-and-go conditions throughout the pandemic. It is important for a company or industry to embrace these big impacts, ride out the storm and start preparing where it left off. At first, these words may sound a bit wishy-washy, but it's definitely achievable."
        thumbnail={futureProofSupply}
        leftImage
      />

      <GridLayout
        heading="Supply Chain Technology"
        description="Everyday market and competitive conditions change, forcing companies to be dynamic. The competition mainly focuses on the day-to-day conditions of the shop in this industry, to better understand customers and find solutions to rethink large resources for production."
        thumbnail={supplyChainTech}
      />

      <section>
        <Container>
          <div className='h-full grid grid-cols-1 md:grid-cols-3 items-center mt-12 gap-12'>

            <div data-aos="fade-right">
              <Image src={benefitsOfAI} alt="" />
            </div>

            <div data-aos="zoom-in" className='col-span-2'>
              <h1 className='text-heading font-semibold mb-8 whitespace-nowrap'>Benefits of AI Technology with Business</h1>
              <p className='text-goDesc'>Intelligent order management dashboard for dealers</p>
              <p className='text-goDesc'>Fully automated and customised order-to-delivery management system automation.</p>

              <div className='flex items-center gap-2 mt-6'>
                <Image src={smallCheckmark} alt="" />
                <p>Online payment gateway integration.</p>
              </div>
              <div className='flex items-center gap-2 mt-6'>
                <Image src={smallCheckmark} alt="" />
                <p>Built-in business analytics software.</p>
              </div>
              <div className='flex items-center gap-2 mt-6'>
                <Image src={smallCheckmark} alt="" />
                <p>Dealers can create orders and keep track of shipments easily.</p>
              </div>
              <div className='flex items-center gap-2 mt-6'>
                <Image src={smallCheckmark} alt="" />
                <p>The app has smart inventory management.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default RetailAndFMCG;