import React from 'react';
import Navbar from '../../components/common/Navbar';
import Container from '../../components/common/Container';
import PrivacyPolicy from '../../components/PrivacyPolicy/PrivacyPolicy';
import DownlaodOurApp from '../../components/common/DownlaodOurApp';
import SingingCompany from '../../components/Home/SingingCompany';
import Footer from '../../components/common/Footer';
import Head from 'next/head';


const index = () => {
  return (
    <>
      <Head>
        <title>GOPAYRA - Privacy & Policy</title>
        <meta name="description" content="Go Payra Easy Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <Container>
          <PrivacyPolicy />
        </Container>
        <DownlaodOurApp />
        <SingingCompany />
      </main>
      <Footer />
    </>
  );
};

export default index;