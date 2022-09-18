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

const Footer = () => {
  return (
    <footer className='bg-gopayra'>
      <Container>
        <div className='flex flex-col items-center text-center my-10'>
          <div className='cursor-pointer transition-all hover:scale-110 flex'>
            <Image src={Logo} alt="" width={120} height={120} />
          </div>
          <p className='text-sm mt-5 text-[#d6d6d6]'>Gopayra is an app based on-demand trucking service providing platform. With the cutting age technology Gopayra helps individuals or corporate bodies, cargo owners, truck drivers, truck owners from across Bangladesh to connect with each other digitally on a single platform and do hassle free movement of goods.</p>
        </div>

        <div className='my-4 flex justify-between flex-wrap'>
          <div>
            <h3 className='text-xl font-semibold mb-4'>Company</h3>
            <ul className='text-sm text-[#d6d6d6] flex flex-col gap-2'>
              <li><Link href="/home">About Us</Link></li>
              <li><Link href="/home">Careers</Link></li>
              <li><Link href="/home">Contact</Link></li>
              <li><Link href="/home">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>Support</h3>
            <ul className='text-sm text-[#d6d6d6] flex flex-col gap-2'>
              <li><Link href="/home">FAQ</Link></li>
              <li><Link href="/home">Cookie Policy</Link></li>
              <li><Link href="/home">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>Solutions</h3>
            <ul className='text-sm text-[#d6d6d6] flex flex-col gap-2'>
              <li><Link href="/home">Warehouse</Link></li>
              <li><Link href="/home">Cargo/Truck/Fleet management</Link></li>
              <li><Link href="/home">Home Delivery</Link></li>
              <li><Link href="/home">Employee Tracking</Link></li>
              <li><Link href="/home">Fleet & Driver Tracking</Link></li>
              <li><Link href="/home">Distribution Channel</Link></li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold mb-4'>Quick Contact</h3>
            <ul className='text-sm text-[#d6d6d6] flex flex-col gap-2'>
              <li><Link href="/home">House 10, Nikunjo 2, road 10 , house 10, khilkhet Dhaka</Link></li>
              <li><Link href="/home">+8801533629552</Link></li>
              <li><Link href="/home">info.gopayra@gmail.com</Link></li>
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