import Link from 'next/link';
import { useState, useEffect } from 'react';
import Container from './Container';
import GoPayraButton from '../UI/GoPayraButton';
import Logo from "../../assets/images/logos/lite-logo.png";
import Hamburger from '../../assets/images/icons/hamburger.svg';
import Cross from '../../assets/images/icons/cross.svg';
import AppleAppStoreIcon from '../../assets/images/icons/appleAppStoreIcon.svg';
import GooglePlayIcon from '../../assets/images/icons/googlePlayIcon.svg';
import Image from 'next/image';
import WhiteButton from '../UI/WhiteButton';
import ChevronDown from '../../assets/images/icons/chevronArrow.svg';

const solutionData = [{
  title: "Supply chain management",
  link: "/solutions/supply-chain-management"
}, {
  title: "E-Commerce",
  link: "/solutions/e-commerce"
}, {
  title: "Food delivery system",
  link: "/solutions/food-delivery-system"
}, {
  title: "Retail and FMCG",
  link: "/solutions/retail-and-FMCG"
}, {
  title: "Courier & parcel",
  link: "/solutions/courier-and-parcel"
}, {
  title: "Logistics Management",
  link: "/solutions/logistics-management"
}, {
  title: "Industry data analysis",
  link: "/solutions/industry-data-analysis"
}, {
  title: "All delivery system",
  link: "/solutions/all-delivery-system"
}, {
  title: "Fleet & Driver Management",
  link: "/solutions/fleet-and-driver-management"
}]

const ourServices = [{
  title: "Rent by day",
  link: "/services/rent-by-day",
}, {
  title: "Rent by Trip",
  link: "/services/rent-by-trip",
}, {
  title: "Move my home",
  link: "/services/move-my-home",
}, {
  title: "Office & commercial move",
  link: "/services/office-and-commercial-move",
}, {
  title: "Courier & Parcel",
  link: "/services/courier-and-parcel",
}, {
  title: "Food Delivery",
  link: "/services/food-delivery",
}];

const Navbar = () => {
  const [MobileNav, setMobileNav] = useState(false);
  const [navBG, setNavBG] = useState(false);

  const ChangeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 88) {
        setNavBG(true);
      } else {
        setNavBG(false);
      }
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener('scroll', ChangeBackground)
  }

  const navItem = [
    {
      link: '/',
      text: 'Home'
    }, {
      link: '/solutions',
      text: 'Solutions',
      subLinks: solutionData
    }, {
      link: '/about',
      text: 'About'
    }, {
      link: '/services',
      text: 'Services',
      subLinks: ourServices
    }, {
      link: '/join-with-us',
      text: 'Join with us',
      subLinks: [{
        title: "Become a partner",
        link: "/become-a-partner"
      }, {
        title: "Become a rider",
        link: "/become-a-rider"
      }]
    }, {
      link: '/contact-us',
      text: 'Contact us'
    },
  ]
  return (
    <nav className={`${navBG ? 'bg-gopayra' : 'bg-transparent'}  fixed w-full z-10`}>
      <Container>
        {/* Brand Logo */}
        <div className='flex justify-between items-center'>
          <div className='cursor-pointer transition-all hover:scale-105'>
            <Link href="/">
              <Image src={Logo} alt="brand-logo" height={60} width={60}></Image>
            </Link>
          </div>
          {/* Nav items */}
          <div className='md:flex hidden items-center gap-8 font-medium text-white mt-4 md:mt-0'>
            {navItem.map((item, index) => <NavItem item={item} key={index} />)}
            {/* <li className='transition-all hover:text-emerald-300 hover:scale-110 active:text-emerald-200 active:scale-105 md:mt-0 mt-10'>
              <Link href="/solution">Solution  </Link>
              <Image src={ChevronDown} alt="" className='group-hover:rotate-180 ' />
            </li> */}
          </div>


          <WhiteButton text="Track Order" url="track-order" />

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
                <GoPayraButton logo={AppleAppStoreIcon} text="App Store" link="/apple"></GoPayraButton>
                <GoPayraButton logo={GooglePlayIcon} text="Google Play" link="/google"></GoPayraButton>
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
    <div className='group transition-all'>
      <ul>
        <li className='transition-all hover:text-emerald-300 hover:scale-110 active:text-emerald-200 active:scale-105 md:mt-0 mt-10 flex gap-2'>
          <Link href={item.link}>{item.text}</Link>
          {item.subLinks && <Image src={ChevronDown} alt="" className='group-hover:rotate-180' />}
        </li>
      </ul>

      {item.subLinks
        && <div className='fixed -ml-14 hidden group-hover:block py-2 bg-gopayra border-x border-b border-gopayraLight px-4 rounded-lg'>
          <ul>
            {/* {item.solutionData.map((item, index) => <li key={index}>{item.title}</li>)} */}
            {item.subLinks.map((item, index) => {
              return <li key={index} className='transition-all hover:text-emerald-300 hover:scale-110 active:text-emerald-200 active:scale-105 pt-4'>
                <Link href={item.link}>{item.title}</Link>
              </li>
            })}
          </ul>
        </div>
      }
    </div>
  )
}

export default Navbar;