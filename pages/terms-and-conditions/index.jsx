import React from 'react';
import Container from '../../components/common/Container';
import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';
import TAndC from '../../components/TermsAndConditions/TAndC';
import AppleAppStoreIcon from '../../assets/images/icons/appleAppStoreIcon.svg';
import GooglePlayIcon from '../../assets/images/icons/googlePlayIcon.svg';
import Image from 'next/image';
import DownlaodOurApp from '../../components/common/DownlaodOurApp';
import SingingCompany from '../../components/Home/SingingCompany';
import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>GOPAYRA - Terms and conditions</title>
        <meta name="description" content="Go Payra Easy Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Container>
          <TAndC />
        </Container>
        <DownlaodOurApp />
        <SingingCompany />
      </main>
      <Footer />
    </>
  );
};

export default index;