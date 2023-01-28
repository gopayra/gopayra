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
    icon: MultipointIcon,
    points: "Multipoint Delivery"
  }, {
    icon: LiveShipmentIcon,
    points: "Live Shipment Status Updates"
  }, {
    icon: IncreasesIcon,
    points: "Increases Productivity"
  }, {
    icon: TopicalIcon,
    points: "Torical data"
  }, {
    icon: ImprovesIcon,
    points: "Improves Customer Satisfaction"
  }, {
    icon: RecusesIcon,
    points: "Reduces Fuel Costs"
  }, {
    icon: ReducesUnathorisedIcon,
    points: "Reduces Unauthorised Use and Aids in Theft Recovery"
  }, {
    icon: OptimisesIcon,
    points: "Optimises routing"
  }, {
    icon: ProofIcon,
    points: "Proof Delivery"
  }, {
    icon: HistoricalIcon,
    points: "Historical data"
  }];
  return (
    <Container>
      <HeadingText text="Why choose our apps" />
      <div className='flex justify-center flex-wrap gap-[10px] mt-12' data-aos="zoom-in">

        {highlights.map((highlight, index) => {
          return <div className='rounded-2xl border border-liteBorder pt-4 w-[219px] h-[120px] text-center mt-3 hover:border-gopayra hover:scale-105 transition-all cursor-pointer' key={index}>
            <div className='bg-gopayra w-[32px] h-[32px] mx-auto rounded-full flex justify-center items-center'>
              <Image src={highlight.icon} alt="" />
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
  );
};

export default WhyChooseOurApps;