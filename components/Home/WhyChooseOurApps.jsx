import React from 'react';
import HeadingText from '../UI/HeadingText';
import Image from 'next/image';
import Container from '../common/Container';
import MultipointIcon from '../../assets/images/icons/whyChooseOurAppsIcons/multipoint.svg';
import LiveShipmentIcon from '../../assets/images/icons/whyChooseOurAppsIcons/liveShipment.svg';
import IncreasesIcon from '../../assets/images/icons/whyChooseOurAppsIcons/increases.svg';
import TopicalIcon from '../../assets/images/icons/whyChooseOurAppsIcons/topical.svg';
import ImprovesIcon from '../../assets/images/icons/whyChooseOurAppsIcons/improves.svg';
import RecusesIcon from '../../assets/images/icons/whyChooseOurAppsIcons/reduces.svg';
import ReducesUnathorisedIcon from '../../assets/images/icons/whyChooseOurAppsIcons/reducesUnathorised.svg';
import OptimisesIcon from '../../assets/images/icons/whyChooseOurAppsIcons/optimises.svg';
import ProofIcon from '../../assets/images/icons/whyChooseOurAppsIcons/proof.svg';
import HistoricalIcon from '../../assets/images/icons/whyChooseOurAppsIcons/historical.svg';


const WhyChooseOurApps = () => {
  const highlights = [{
    icon: 'https://gopayra.com/_next/static/media/multipoint.12d46b92.svg',
    points: "Multipoint Delivery"
  }, {
    icon: 'https://gopayra.com/_next/static/media/liveShipment.f651cd6a.svg',
    points: "Live Shipment Status Updates"
  }, {
    icon: 'https://gopayra.com/_next/static/media/increases.2ac08e5b.svg',
    points: "Increases Productivity"
  }, {
    icon: 'https://gopayra.com/_next/static/media/topical.4e565c75.svg',
    points: "Torical data"
  }, {
    icon: 'https://gopayra.com/_next/static/media/improves.c6d7e265.svg',
    points: "Improves Customer Satisfaction"
  }, {
    icon: 'https://gopayra.com/_next/static/media/reduces.4c0f780a.svg',
    points: "Reduces Fuel Costs"
  }, {
    icon: 'https://gopayra.com/_next/static/media/reducesUnathorised.13da5cf0.svg',
    points: "Reduces Unauthorised Use and Aids in Theft Recovery"
  }, {
    icon: 'https://gopayra.com/_next/static/media/optimises.0826c86b.svg',
    points: "Optimises routing"
  }, {
    icon: 'https://gopayra.com/_next/static/media/proof.39a5108d.svg',
    points: "Proof Delivery"
  }, {
    icon: 'https://gopayra.com/_next/static/media/historical.733ae419.svg',
    points: "Historical data"
  }];
  return (
    <section className='mt-24'>
      <Container>
        <HeadingText text="Why choose our apps" />
        <div className='flex justify-center flex-wrap gap-[10px] mt-12' data-aos="zoom-in">

          {highlights.map((highlight, index) => {
            return <div className='rounded-2xl border border-liteBorder pt-4 w-[219px] h-[120px] text-center mt-3 hover:border-gopayra hover:scale-105 transition-all cursor-pointer' key={index}>
              <div className='bg-gopayra w-[32px] h-[32px] mx-auto rounded-full flex justify-center items-center'>
                <Image src={highlight.icon} alt="" width={18} height={18} />
              </div>
              <p className='font-medium mt-2'>{highlight.points}</p>
            </div>
          })}

        </div>

        {/* see more button */}
        <div className='text-center mt-12'>
          <button className='py-4 px-7 bg-black text-white rounded-lg text-lg font-medium hover:bg-white border hover:border-black hover:text-black active:bg-gopayra active:text-white transition-all'>
            See more
          </button>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseOurApps;