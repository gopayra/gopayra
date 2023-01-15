import React from 'react';
import Navbar from '../../components/common/Navbar';
import Container from '../../components/common/Container';
import PrivacyPolicy from '../../components/PrivacyPolicy/PrivacyPolicy';
import DownlaodOurApp from '../../components/common/DownlaodOurApp';
import SingingCompany from '../../components/Home/SingingCompany';
import Footer from '../../components/common/Footer';


const index = () => {
  return (
    <>
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