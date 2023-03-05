import Image from 'next/image';
import React from 'react';

const SlideNormal = ({ item }) => {
  const [isHovering, setIsHovering] = React.useState(false);
  return (
      <div className='text-center bg-white cursor-pointer hover:text-white
             bg-gradient-to-r hover:from-emerald-400 hover:to-teal-500 rounded-2xl px-4 py-8 w-[300px] h-[271px]' onMouseEnter={() => setIsHovering(!isHovering)} onMouseLeave={() => setIsHovering(!isHovering)}>
        <Image src={item.icon} alt="service-icon" />
        <h3 className='font-semibold text-xl'>{item.title}</h3>
        <p className={`text-sm ${isHovering ? 'text-white' : 'text-goDesc'} mt-2`}>{item.description}</p>
      </div>
  );
};

export default SlideNormal;