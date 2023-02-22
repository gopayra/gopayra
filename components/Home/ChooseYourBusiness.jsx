import React from 'react';
import HeadingText from '../UI/HeadingText';
import Image from 'next/image';
import Container from '../common/Container';

// images imports
import FMCGIcon from '../../assets/images/icons/fmcg.svg';
import PetrochemicalIcon from '../../assets/images/icons/petrochemical.svg';
import ConstructionIcon from '../../assets/images/icons/construction.svg';
import FurnitureIcon from '../../assets/images/icons/furniture.svg';
import SteelIcon from '../../assets/images/icons/steel.svg';
import CementIcon from '../../assets/images/icons/cement.svg';
import ConsumerDurablesIcon from '../../assets/images/icons/consumer-durables.svg';
import OilandGasIcon from '../../assets/images/icons/oilandgas.svg';

const ChooseYourBusiness = () => {
  const typesofBusiness = [
    {
      type: "FMCG",
      icon: 'https://gopayra.com/_next/static/media/fmcg.b146f3c9.svg',
      animation: "fade-left"
    }, {
      type: "Petrochemicals",
      icon: 'https://gopayra.com/_next/static/media/petrochemical.3446dd4b.svg',
      animation: "fade-left"
    }, {
      type: "Construction",
      icon: 'https://gopayra.com/_next/static/media/construction.17ce6f26.svg',
      animation: "fade-left"
    }, {
      type: "Furniture",
      icon: 'https://gopayra.com/_next/static/media/furniture.abcfe37b.svg',
      animation: "fade-left"
    }, {
      type: "Steel",
      icon: 'https://gopayra.com/_next/static/media/steel.39e606c2.svg',
      animation: "fade-right"
    }, {
      type: "Cement",
      icon: 'https://gopayra.com/_next/static/media/cement.e874f978.svg',
      animation: "fade-right"
    }, {
      type: "ConsumerDurables",
      icon: 'https://gopayra.com/_next/static/media/consumer-durables.6455a9bc.svg',
      animation: "fade-right"
    }, {
      type: "OilandGas",
      icon: 'https://gopayra.com/_next/static/media/oilandgas.5fe6ee79.svg',
      animation: "fade-right"
    }
  ]
  return (
    <section className='mt-24'>
      <Container>
        <HeadingText text="Choose your Business" />
        <div className='flex justify-center gap-2 flex-wrap my-12'>
          {typesofBusiness.map((type, index) => {
            return <div className='bg-gopayra hover:scale-105 transition-all text-center w-[270px] h-[220px] rounded-3xl flex flex-col gap-4 justify-center items-center mt-5' key={index} data-aos={type.animation}>
              <Image src={type.icon} alt="" width={84} height={84} />
              <h2 className='text-white text-2xl font-semibold'>{type.type}</h2>
            </div>
          })}
        </div>
      </Container>
    </section>
  );
};

export default ChooseYourBusiness;