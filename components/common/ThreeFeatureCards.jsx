import Image from 'next/image';
import React from 'react';
import Container from './Container';

const ThreeFeatureCards = ({ cardData, fontSize }) => {
  return (
    <section>
      <Container>
        <div className='flex gap-4 justify-center my-20 items-center flex-wrap md:flex-nowrap md:justify-between'>

          {cardData.map((item, index) => {
            return <div className='w-[370px] h-[196px] border border-[#CDE2DF] rounded-3xl flex justify-center items-center' data-aos={index === 0 ? "fade-right" : index === 1 ? "zoom-in" : 'fade-left'} key={index}>
              <div className='text-center p-4' >
                <Image src={item.icon} alt="" />
                <h3 className={`text-${fontSize} font-semibold mt-4'`}>{item.text}</h3>
              </div>
            </div>
          })}
        </div>
      </Container>
    </section>
  );
};

export default ThreeFeatureCards;