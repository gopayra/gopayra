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
      icon: FMCGIcon,
      animation: "fade-left"
    }, {
      type: "Petrochemicals",
      icon: PetrochemicalIcon,
      animation: "fade-left"
    }, {
      type: "Construction",
      icon: ConstructionIcon,
      animation: "fade-left"
    }, {
      type: "Furniture",
      icon: FurnitureIcon,
      animation: "fade-left"
    }, {
      type: "Steel",
      icon: SteelIcon,
      animation: "fade-right"
    }, {
      type: "Cement",
      icon: CementIcon,
      animation: "fade-right"
    }, {
      type: "ConsumerDurables",
      icon: ConsumerDurablesIcon,
      animation: "fade-right"
    }, {
      type: "OilandGas",
      icon: OilandGasIcon,
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
              <Image src={type.icon} alt="" width={84} />
              <h2 className='text-white text-2xl font-semibold'>{type.type}</h2>
            </div>
          })}
        </div>
      </Container>
    </section>
  );
};

export default ChooseYourBusiness;