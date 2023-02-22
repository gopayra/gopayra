import React from 'react';
import PlayStore from "../../assets/images/icons/playstore.svg";
import AppStore from "../../assets/images/icons/app-store.svg";
import Image from 'next/image';

const AppButton = ({ appLink, playLink }) => {
  return (
    <div className='flex gap-4 mt-4'>
      <a href={playLink} target="_blank" rel="noreferrer">
        <button className='bg-black text-white flex items-center text-left gap-4 py-2 px-4 rounded-xl hover:translate-x-3 transition-all'>
          <Image src='https://gopayra.com/_next/static/media/playstore.ae699ba4.svg' alt="appIcon" width={32} height={32}/>
          <div>
            <p className='text-sm'>Get in</p>
            <p className='font-semibold text-lg'>Play Store</p>
          </div>
        </button>
      </a>

      <a href={appLink} target="_blank" rel="noreferrer">
        <button className='bg-black text-white flex items-center text-left gap-4 py-2 px-4 rounded-xl hover:translate-x-3 transition-all'>
          <Image src='https://gopayra.com/_next/static/media/app-store.d5a1d3d7.svg' alt="appIcon" width={32} height={32}/>
          <div>
            <p className='text-sm'>Get in</p>
            <p className='font-semibold text-lg'>App Store</p>
          </div>
        </button>
      </a>
    </div>
  );
};

export default AppButton;