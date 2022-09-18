import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// social icons import 
import Logo from '../../assets/images/logos/lite-logo.png';
import Facebook from '../../assets/images/icons/facebook.svg';
import LinkedIn from '../../assets/images/icons/linkedin.svg';
import Twitter from '../../assets/images/icons/twitter.svg';
import Container from './Container';
// import Instagram from '../../assets/images/icons/instagram.svg';

const Footer1 = () => {
  return (
    <footer className='bg-gopayra'>
      <Container>
        <div className='flex justify-between mb-4'>
          <div className='cursor-pointer transition-all hover:scale-110 flex'>
            <Image src={Logo} alt="" width={60} height={60} />
          </div>
          <div className='flex gap-4 items-center'>
            <div className='cursor-pointer transition-all hover:scale-110'><a href="https://www.facebook.com/GoPayraDelivery" target='blank'><Image src={Facebook} alt="facebook" /></a></div>
            <div className='cursor-pointer transition-all hover:scale-110'><a href="/linkedin"><Image src={LinkedIn} alt="linkedin" /></a></div>
            <div className='cursor-pointer transition-all hover:scale-110'><a href="/twitter"><Image src={Twitter} alt="twitter" /></a></div>
          </div>
        </div>

        <div className='my-4 flex justify-between'>
          <ul className='text-xs flex gap-4'>
            <li><Link href="/home">Terms of Service</Link></li>
            <li><Link href="/home">Cookie Policy</Link></li>
            <li><Link href="/home">FAQ</Link></li>
            <li><Link href="/home">Support</Link></li>
            <li><Link href="/home">Careers</Link></li>
          </ul>
          <p className='text-xs'>Copyright © 2022 GoPayra. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer1;