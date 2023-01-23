import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Thumbnail from '../../assets/images/card-thumbnail.webp';

const Card = ({data}) => {
  return (
    <div className='max-w-[370px]' data-aos={data.animation}>
      {/* thumbnail */}
      <div>
        <Image src={Thumbnail} alt="" />
      </div>
      {/* content */}
      <h2 className='text-2xl font-semibold my-4'>{data.title}</h2>
      <p className='text-godesc text-neutral-500'>{data.description}</p>
      {/* link */}
      <div className='pt-4 text-lg text-gopayra font-medium'>
        <Link href={data.link}>Read more</Link>
      </div>
    </div>
  );
};

export default Card;