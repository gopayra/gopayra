import Link from 'next/link';
import { useState, useEffect } from 'react';
import Container from './Container';
import Button from './Button';
import Logo from "../../assets/images/navlogo.png";
import Hamburger from '../../assets/images/icons/hamburger.svg';
import Cross from '../../assets/images/icons/cross.svg';
import AppleAppStoreIcon from '../../assets/images/icons/appleAppStoreIcon.svg';
import GooglePlayIcon from '../../assets/images/icons/googlePlayIcon.svg';
import Image from 'next/image';

const Navbar = () => {
  const [MobileNav, setMobileNav] = useState(false);

  const navItem = [
    {
      link: '/',
      text: 'Home'
    }, {
      link: '/download',
      text: 'Download our App'
    }, {
      link: '/business',
      text: 'Business'
    }, {
      link: '/about',
      text: 'About'
    }, {
      link: '/call-us',
      text: 'Call us'
    },
  ]
  return (
    <nav className='gopayra-bg fixed w-full z-10'>
      <Container>
        {/* Brand Logo */}
        <div className='flex justify-between items-center'>
          <div className='cursor-pointer transition-all hover:scale-105'>
            <Link href="/">
              <Image src={Logo} alt="brand-logo"></Image>
            </Link>
          </div>
          {/* Nav items */}
          <ul className='md:flex hidden items-center gap-4 font-bold text-white mt-4 md:mt-0'>
            {navItem.map((item, index) => <NavItem item={item} key={index} />)}
          </ul>
          <div className='md:hidden block transition-all hover:scale-90 active:scale-105 cursor-pointer'>
            <Image src={Hamburger} alt="" onClick={() => setMobileNav(true)} />
          </div>
        </div>

        {/* mobile navigation side bar */}
        {MobileNav &&
          <div className='bg-white md:hidden flex flex-col justify-between h-screen w-full absolute text-right font-bold top-0 left-0 right-0 p-5' data-aos="fade-left">
            <div>
              <div className='transition-all hover:scale-90 active:rotate-90 cursor-pointer origin-center inline-block'>
                <Image src={Cross} alt="" onClick={() => setMobileNav(false)} />
              </div>
              <ul className='text-3xl text-[#34C47E]'>
                {navItem.map((item, index) => <NavItem item={item} key={index} />)}
              </ul>
            </div>

            {/* footer */}
            <div>
              <p className='text-slate-400 pb-4'>Download our app</p>
              <div className='flex gap-4 justify-end'>
                <Button logo={AppleAppStoreIcon} text="App Store" link="/apple"></Button>
                <Button logo={GooglePlayIcon} text="Google Play" link="/google"></Button>
              </div>
            </div>
          </div>
        }
      </Container>
    </nav>
  );
};

export const NavItem = ({ item }) => {
  return (
    <li className='transition-all hover:text-emerald-900 hover:scale-110 active:text-emerald-400 active:scale-105 md:mt-0 mt-10'>
      <Link href={item.link}>{item.text}</Link>
    </li>
  )
}

export default Navbar;