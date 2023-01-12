import React from 'react';
import Button from '../../components/common/Button';
import Container from '../../components/common/Container';
import Footer from '../../components/common/Footer2';
import Navbar from '../../components/common/Navbar';
import TAndC from '../../components/TermsAndConditions/TAndC2.0';
import AppleAppStoreIcon from '../../assets/images/icons/appleAppStoreIcon.svg';
import GooglePlayIcon from '../../assets/images/icons/googlePlayIcon.svg';
import Image from 'next/image';
import DownlaodOurApp from '../../components/common/DownlaodOurApp';
import SingingCompany from '../../components/Home/SingingCompany';

const index = () => {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <TAndC />
      </Container>
      <DownlaodOurApp />
      <SingingCompany />
      <Footer></Footer>
    </>
  );
};

export default index;