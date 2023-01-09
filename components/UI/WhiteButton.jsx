import Link from 'next/link';
import React from 'react';

const WhiteButton = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className='bg-white font-medium rounded-lg px-6 py-3 cursor-pointer transition-all hover:scale-105'>{text}</button>
    </Link>
  );
};

export default WhiteButton;