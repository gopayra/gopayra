import React, { useState } from 'react';
import { UilTwitter, UilFacebookF, UilInstagram, UilYoutube } from '@iconscout/react-unicons';

const SocialPopUp = () => {
  const styles = {
    iconContainerStyle: "cursor-pointer transition-all",
    iconStyle: "text-white hover:text-black inline-block p-2 rounded-full bg-liteBlack hover:bg-white cursor-pointer"
  }

  const [showPopUP, setShowPopUP] = useState(false);

  const ChangeBackground = () => {
    
    if (typeof window !== "undefined") {
      if (window.scrollY > 600) {
        setShowPopUP(true);
      } else {
        setShowPopUP(false);
      }
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', ChangeBackground)
    console.log(window.scrollY)
  }
  return (
    <div className={`bg-gopayra fixed z-10 right-0 top-80 p-2 rounded-full ${showPopUP ? 'block' : 'hidden'}`}>
      <div className={styles.iconContainerStyle} ><a href="https://twitter.com/InfoGopayra"><div className={styles.iconStyle}>
        <UilTwitter size="24" />
      </div></a></div>
      <div className='cursor-pointer transition-all hover:scale-110'><a href="https://www.facebook.com/GoPayraDelivery" target='blank'><div className={styles.iconStyle}>
        <UilFacebookF size="24" />
      </div></a></div>
      <div className={styles.iconContainerStyle} ><a href="/instagram"><div className={styles.iconStyle}>
        <UilInstagram size="24" />
      </div></a></div>
      <div className={styles.iconContainerStyle} ><a href="/linkedin"><div className={styles.iconStyle}>
        <UilYoutube size="24" />
      </div></a></div>
    </div>
  );
};

export default SocialPopUp;