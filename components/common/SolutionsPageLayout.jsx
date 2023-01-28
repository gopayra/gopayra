import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Container from './Container';
import DownlaodOurApp from './DownlaodOurApp';
import Thumbnail from '../../assets/images/supplyChain.png';
import ShowCase from '../../assets/images/showcase1.png';

const SolutionsPageLayout = ({solutionData}) => {
  const router = useRouter();
  const { solutionsName } = router.query;
  const filterPageData = solutionData.filter((item) => item.link === solutionsName);
  
  return (
    <>
      <Head>
        <title>GOPAYRA - {filterPageData[0].title}</title>
        <meta name="description" content="Go Payra Easy Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* contacts us hero section */}
        <div className='bg-gopayra h-[676px]'>
          <Container>
            <div className='h-full grid grid-cols-1 md:grid-cols-2 items-center mt-20 pb-20'>
              <div className='my-auto text-white' data-aos="fade-right">
                <h1 className='text-6xl font-bold'>{filterPageData[0].title}</h1>
                <p className='text-lg mt-4'>{filterPageData[0].description}</p>
              </div>
              <div className='justify-center map-bg-white h-full lg:flex items-center ml-12 hidden' data-aos="fade-left">
                <Image src={Thumbnail} alt="" />
              </div>
            </div>
          </Container>
        </div>

        <div className='flex justify-center'>
          <Image src={ShowCase} alt="" width={638} height={432} />
        </div>

        {/* contact us form section */}
        <DownlaodOurApp />
      </main>
    </>
  );
};

export default SolutionsPageLayout;