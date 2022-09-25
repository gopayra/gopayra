import Image from 'next/image';
import React from 'react';

const FeaturesCard = ({ image }) => {
  return (
    <div className='text-black'>
      <h1>WOW</h1>
      <Image src={image} alt="" />
    </div>
  );
};

export default FeaturesCard;