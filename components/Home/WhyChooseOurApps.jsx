import React from 'react';
import HeadingText from '../UI/HeadingText';
import Checkmark from '../../assets/images/icons/goCheckmark.svg';
import Image from 'next/image';
import Container from '../common/Container';


const WhyChooseOurApps = () => {
  const highlights = ["Multipoint Delivery", "Live Shipment Status Updates", " Increases Productivity", "Torical data", "Improves Customer Satisfaction", "Reduces Fuel Costs", "Reduces Unauthorised Use and Aids in Theft Recovery", "Optimises routing", "Proof Delivery", "Historical data"];
  return (
    <Container>
      <HeadingText text="Why choose our apps"/>
      <div className='flex justify-center flex-wrap gap-[10px] mt-12' data-aos="zoom-in">

        {highlights.map((text, index) => {
          return <div className='rounded-2xl border border-liteBorder pt-4 w-[219px] h-[120px] text-center mt-3 hover:border-gopayra hover:scale-105 transition-all cursor-pointer' key={index}>
            <Image src={Checkmark} alt="" />
            <p className='font-medium'>{text}</p>
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