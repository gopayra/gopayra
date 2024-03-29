import React from 'react';
import DownlaodOurApp from '../../components/common/DownlaodOurApp';
import Footer from '../../components/common/Footer';
import ContactUsImage from '../../assets/images/contact-us.webp'
import Image from 'next/image';
import Container from '../../components/common/Container';
import Navbar from '../../components/common/Navbar2.0';
import ContactusForm from '../../components/common/ContactusForm';
import Head from 'next/head';

export default function index() {
  return (
    <>
      <Head>
        <title>GOPAYRA - Contact us</title>
        <meta name="description" content="Go Payra Easy Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* contacts us hero section */}
        <div className='bg-gopayra h-[676px]'>
          <Container>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 items-center mt-20 pb-20'>
              <div className='my-auto text-white' data-aos="fade-right">
                <h1 className='text-6xl font-bold'>Contact Us</h1>
                <p className='text-lg mt-4'>GoPayra last-mile delivery to your doorstep within an hour.</p>
              </div>
              <div className='justify-center map-bg-white h-full lg:flex items-center ml-12 hidden' data-aos="fade-left">
                <Image src={ContactUsImage} alt="" />
              </div>
            </div>
          </Container>
        </div>

        {/* contact us form section */}
        <ContactusForm />
        <DownlaodOurApp />
      </main>
    </>
  );
};