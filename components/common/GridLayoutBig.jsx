import Image from 'next/image';
import React from 'react';
import Container from './Container';


const GridLayoutBig = ({ heading, description, thumbnail, leftImage, description2 }) => {
  return (
    <section>
      <Container>
        <div className='h-full grid grid-cols-1 md:grid-cols-3 items-center mt-8 gap-16'>

          {leftImage && <div data-aos="fade-right">
            <Image src={thumbnail} alt=""/>
          </div>}
          <div data-aos="zoom-in" className='col-span-2 max-w-[600px]'>
            {heading && <h1 className='text-heading font-semibold mb-8'>{heading}</h1>}
            <p className='text-goDesc'>{description}</p>
            {description2 && <p className='text-goDesc mt-8'>{description2}</p>}
          </div>
          {!leftImage && <div className='flex justify-end'>
            <Image src={thumbnail} alt="" data-aos="fade-left"/>
          </div>}
        </div>
      </Container>
    </section>
  );
};

export default GridLayoutBig;