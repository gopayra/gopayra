import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// social icons import 
import Logo from '../../assets/images/logos/lite-logo.png';
import Facebook from '../../assets/images/icons/facebook.svg';
import LinkedIn from '../../assets/images/icons/linkedin.svg';
import Twitter from '../../assets/images/icons/twitter.svg';
import Location from '../../assets/images/icons/location.svg';
import Mobile from '../../assets/images/icons/mobile.svg';
import Email from '../../assets/images/icons/email.svg';
import Leaf from '../../assets/images/icons/leaf.svg';


import Container from './Container';
// import Instagram from '../../assets/images/icons/instagram.svg';

const Footer = () => {
  return (
    <footer className='bg-gopayra'>
      <Container>
        <div className='flex flex-col items-center text-center my-10'>
          <div className='cursor-pointer transition-all hover:scale-110 flex'>
            <Image src={Logo} alt="" width={120} height={120} />
          </div>
          <p className='text-sm mt-5 text-goDesc'>Gopayra is an app based on-demand trucking service providing platform. With the cutting age technology Gopayra helps individuals or corporate bodies, cargo owners, truck drivers, truck owners from across Bangladesh to connect with each other digitally on a single platform and do hassle free movement of goods.</p>
        </div>

        <div className='my-4 flex justify-between flex-wrap'>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Company</h3>
            <ul className='text-sm text-goDesc flex flex-col gap-2'>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><Image src={Leaf} alt="" /><Link href="/home">About Us</Link></li>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><Image src={Leaf} alt="" /><Link href="/home">Careers</Link></li>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><Image src={Leaf} alt="" /><Link href="/home">Contact</Link></li>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><Image src={Leaf} alt="" /><Link href="/home">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>Support</h3>
            <ul className='text-sm text-goDesc flex flex-col gap-2'>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><Image src={Leaf} alt="" /><Link href="/home">FAQ</Link></li>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><Image src={Leaf} alt="" /><Link href="/home">Cookie Policy</Link></li>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><Image src={Leaf} alt="" /><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>Solutions</h3>
            <ul className='text-sm text-goDesc flex flex-col gap-2'>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><Image src={Leaf} alt="" /><Link href="/home">Warehouse</Link></li>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><Image src={Leaf} alt="" /><Link href="/home">Cargo/Truck/Fleet management</Link></li>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><Image src={Leaf} alt="" /><Link href="/home">Home Delivery</Link></li>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><Image src={Leaf} alt="" /><Link href="/home">Employee Tracking</Link></li>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><Image src={Leaf} alt="" /><Link href="/home">Fleet & Driver Tracking</Link></li>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><Image src={Leaf} alt="" /><Link href="/home">Distribution Channel</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>Quick Contact</h3>
            <ul className='text-sm text-goDesc flex flex-col gap-2'>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><Image src={Location} alt="" /><a href="https://goo.gl/maps/Aawq58xzsoSD87PL7" target="_blank" rel="noreferrer">House 10, Nikunjo 2, Road 10, Khilkhet Dhaka</a></li>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><span><Image src={Email} alt="" /></span><a href="tel:+8801533629552">+8801533629552</a></li>
              <li className='flex gap-1 items-center hover:text-white transition-all hover:scale-105'><span><Image src={Mobile} alt="" /></span><a href="mailto:info.gopayra@gmail.com">info.gopayra@gmail.com</a></li>
            </ul>
          </div>

        </div>

        {/* social links */}
        <div className='flex gap-4 items-center justify-center my-10'>
          <div className='cursor-pointer transition-all hover:scale-110'><a href="https://www.facebook.com/GoPayraDelivery" target='blank'><Image src={Facebook} alt="facebook" /></a></div>
          <div className='cursor-pointer transition-all hover:scale-110'><a href="/linkedin"><Image src={LinkedIn} alt="linkedin" /></a></div>
          <div className='cursor-pointer transition-all hover:scale-110'><a href="/twitter"><Image src={Twitter} alt="twitter" /></a></div>
        </div>

        {/* copyright */}
        <div className='border-t border-[#ffffff65] py-4 text-center'>
          <p className='text-xs'>Copyright © 2022 GoPayra. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;