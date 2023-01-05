import React from 'react';
import PlayStore from "../../assets/images/icons/playstore.svg";
import AppStore from "../../assets/images/icons/app-store.svg";
import Image from 'next/image';

const AppButton = ({ appLink, playLink }) => {
  return (
    <div className='flex gap-4 mt-4'>
      <a href={playLink} target="_blank" rel="noreferrer">
        <button className='bg-black text-white flex items-center text-left gap-4 py-2 px-4 rounded-xl hover:translate-x-3 transition-all'>
          <Image src={PlayStore} alt="appIcon" />
          <div>
            <p className='text-sm'>Get in</p>
            <p className='font-semibold text-lg'>Play Store</p>
          </div>
        </button>
      </a>

      <a href={appLink} target="_blank" rel="noreferrer">
        <button className='bg-black text-white flex items-center text-left gap-4 py-2 px-4 rounded-xl hover:translate-x-3 transition-all'>
          <Image src={AppStore} alt="appIcon" />
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