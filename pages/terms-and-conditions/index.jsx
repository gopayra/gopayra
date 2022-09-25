import React from 'react';
import Button from '../../components/common/Button';
import Container from '../../components/common/Container';
import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';
import TAndC from '../../components/TermsAndConditions/TAndC';
import AppleAppStoreIcon from '../../assets/images/icons/appleAppStoreIcon.svg';
import GooglePlayIcon from '../../assets/images/icons/googlePlayIcon.svg';
import DowloadOurApp from '../../assets/images/downloadourapp.png';
import Image from 'next/image';

const index = () => {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <TAndC />
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4 my-10 md:my-32' id="download">
          <div className='w-full flex items-center justify-center gap-6' data-aos="fade-right">
            <div className='p-6 flex flex-col items-center'>
              <h1 className='text-2xl font-bold uppercase text-gopayra'>Download Our App Now</h1>
              <Button link="/appleAPP" logo={AppleAppStoreIcon} />
              <Button link="/playAPP" logo={GooglePlayIcon} />
            </div>
          </div>

          <div className='w-full flex items-center justify-center gap-4' data-aos="fade-left">
            <Image src={DowloadOurApp} alt="" />
          </div>
        </section>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default index;