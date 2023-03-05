import Image from 'next/image';
import React from 'react';
import Container from './Container';


const GridLayout = ({ heading, description, thumbnail, leftImage }) => {
  return (
    <section>
      <Container>
        <div className='h-full grid grid-cols-1 md:grid-cols-2 items-center mt-8 gap-8'>

          {leftImage && <div data-aos="fade-right">
            <Image src={thumbnail} alt="" />
          </div>}
          <div data-aos="zoom-in">
            {heading && <h1 className='text-heading font-semibold mb-8'>{heading}</h1>}
            <p className='text-goDesc'>{description}</p>
          </div>
          {!leftImage && <div>
            <Image src={thumbnail} alt="" data-aos="fade-left"/>
          </div>}
        </div>
      </Container>
    </section>
  );
};

export default GridLayout;