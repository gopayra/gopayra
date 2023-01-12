import React from 'react';
import Navbar from '../../components/common/Navbar';
import Container from '../../components/common/Container';
import PrivacyPolicy from '../../components/PrivacyPolicy/PrivacyPolicy';
import DownlaodOurApp from '../../components/common/DownlaodOurApp';
import SingingCompany from '../../components/Home/SingingCompany';
import Footer from '../../components/common/Footer2';


const index = () => {
  return (
    <>
      <Navbar />
      <Container>
        <PrivacyPolicy />
      </Container>
      <DownlaodOurApp />
      <SingingCompany />
      <Footer />
    </>
  );
};

export default index;