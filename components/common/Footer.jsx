import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// social icons import 
import Logo from '../../assets/images/logos/colored-logo.png';
import Location from '../../assets/images/icons/location.svg';
import Mobile from '../../assets/images/icons/mobile.svg';
import Email from '../../assets/images/icons/email.svg';
import Container from './Container';
import { UilTwitter, UilFacebookF, UilInstagram, UilYoutube } from '@iconscout/react-unicons'

const Footer = () => {
  const styles = {
    h3Style: "text-white text-xl font-semibold mb-4 mt-4 md:mt-0",
    ulStyle: "text-goDesc flex flex-col gap-2",
    liStyle: "flex text-[#C9C9CA] gap-1 items-center hover:text-white transition-all hover:scale-105",
    iconStyle: "text-white hover:text-black inline-block p-2 rounded-full bg-liteBlack hover:bg-white cursor-pointer"
  }
  return (
    <footer className='bg-black'>
      <Container>
        <div className='my-4 md:flex md:justify-between justify-center flex-wrap block mt-20 text-center md:text-left'>
          <div className='w-64 mx-auto md:mx-0'>
            <div className='cursor-pointer transition-all hover:scale-110 flex' data-aos="flip-left">
              <Image src={Logo} alt="" width={100} height={100} />
            </div>
            <p className='mt-5 leading-6 text-[#C9C9CA]'>Bringing automation in the logistics industry in Bangladesh through innovation.</p>
            {/* social links */}
            <div className='flex gap-4 items-center my-10'>
              <div className='cursor-pointer transition-all hover:scale-110'><a href="/twitter"><div className={styles.iconStyle}>
                <UilTwitter size="24" />
              </div></a></div>
              <div className='cursor-pointer transition-all hover:scale-110'><a href="https://www.facebook.com/GoPayraDelivery" target='blank'><div className={styles.iconStyle}>
                <UilFacebookF size="24" />
              </div></a></div>
              <div className='cursor-pointer transition-all hover:scale-110 text-white'><a href="/linkedin"><div className={styles.iconStyle}>
                <UilInstagram size="24" />
              </div></a></div>
              <div className='cursor-pointer transition-all hover:scale-110'><a href="/linkedin"><div className={styles.iconStyle}>
                <UilYoutube size="24" />
              </div></a></div>
            </div>
          </div>

          <div>
            <h3 className={styles.h3Style}>Company</h3>
            <ul className={styles.ulStyle}>
              <li className={styles.liStyle}><Link href="/about-us">About Us</Link></li>
              <li className={styles.liStyle}><Link href="/contact-us">Contact Us</Link></li>
              <li className={styles.liStyle}><Link href="/home">Blog</Link></li>
              <li className={styles.liStyle}><Link href="/home">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.h3Style}>Support</h3>
            <ul className={styles.ulStyle}>
              <li className={styles.liStyle}><Link href="/home">FAQ</Link></li>
              <li className={styles.liStyle}><Link href="/privacy-policy">Privacy & Policy</Link></li>
              <li className={styles.liStyle}><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.h3Style}>Solutions</h3>
            <ul className={styles.ulStyle}>
              <li className={styles.liStyle}><Link href="solutions/supply-chain-management">Supply chain management</Link></li>
              <li className={styles.liStyle}><Link href="/e-commerce">E-Commerce</Link></li>
              <li className={styles.liStyle}><Link href="/food-delivery-system">Food delivery system</Link></li>
              <li className={styles.liStyle}><Link href="/retail-and-FMCG">Retail and FMCG</Link></li>
              <li className={styles.liStyle}><Link href="/courier-and-parcel">Courier & parcel</Link></li>
              <li className={styles.liStyle}><Link href="/logistics-management">Logistics Management</Link></li>
              <li className={styles.liStyle}><Link href="/industry-data-analysis">Industry data analysis</Link></li>
              <li className={styles.liStyle}><Link href="/fleet-and-driver-management">Fleet & Driver Management</Link></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.h3Style}>Quick Contact</h3>
            <ul className={styles.ulStyle}>
              <li className={styles.liStyle}><Image src={Location} alt="" /><a href="https://goo.gl/maps/Aawq58xzsoSD87PL7" target="_blank" rel="noreferrer" className='w-64'>House# 10, Road# 10, Nikunja 2, Khilkhet, Dhaka</a></li>
              <li className={styles.liStyle}><span><Image src={Email} alt="" /></span><a href="tel:+8801533629552">+8801533629552</a></li>
              <li className={styles.liStyle}><span><Image src={Mobile} alt="" /></span><a href="mailto:info.gopayra@gmail.com">info.gopayra@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* copyright */}
        <div className='border-t border-[#ffffff65] py-6 text-center'>
          <p className='text-goDesc'>Copyright © 2022 GoPayra. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;