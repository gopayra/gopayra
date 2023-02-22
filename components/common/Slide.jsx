import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Slide = ({ item }) => {
  const [isHovering, setIsHovering] = React.useState(false);
  return (
    <Link href={item.link} >
      <div className='bg-white cursor-pointer hover:text-white
             bg-gradient-to-r hover:from-emerald-400 hover:to-teal-500 rounded-2xl px-4 py-8 w-[270px] h-[220px] shadow-lg' onMouseEnter={() => setIsHovering(false)} onMouseLeave={() => setIsHovering(!isHovering)}>
        {isHovering ? <Image src={item.iconLite} alt="service-icon" width={60} height={60} /> : <Image src={item.icon} alt="service-icon" width={60} height={60} />}
        <h3 className='font-semibold text-xl'>{item.title}</h3>
        <p className={`text-sm ${isHovering ? 'text-white' : 'text-goDesc'} mt-2`}>{item.description}</p>
      </div>
    </Link>
  );
};

export default Slide;