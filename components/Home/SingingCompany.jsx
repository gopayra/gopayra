import Image from 'next/image';
import React from 'react';
import ClientOne from '../../assets/images/clients-logo/client1.png'
import Container from '../common/Container';

const SingingCompany = () => {
  return (
    <Container >
      <h1 className='text-black text-[28px] text-center font-semibold my-8'>Our singing company</h1>
      <div className='flex justify-center gap-16 mb-14'>
        <Image src={ClientOne} alt="clientLogo" />
        <Image src={ClientOne} alt="clientLogo" />
        <Image src={ClientOne} alt="clientLogo" />
        <Image src={ClientOne} alt="clientLogo" />
        <Image src={ClientOne} alt="clientLogo" />
      </div>
    </Container>
  );
};

export default SingingCompany;