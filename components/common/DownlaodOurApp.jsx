import React from 'react';
import AppButton from '../UI/AppButton';
import Container from './Container';
import Image from 'next/image';
import Woman from '../../assets/images/woman.png';

const DownlaodOurApp = () => {
  return (
    <section className='my-10 bg-slate-100 shadow-lg' id="download">
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <div className='mb-10'>
              <h1 className='text-black text-2xl font-semibold'>User apps</h1>
              <AppButton />
            </div>

            <div className='mb-10'>
              <h1 className='text-black text-2xl font-semibold'>Driver apps</h1>
              <AppButton />
            </div>

            <div className='mb-10'>
              <h1 className='text-black text-2xl font-semibold'>Partners apps</h1>
              <AppButton />
            </div>
          </div>

          {/* image */}
          <div className='download-bg'>
            <div className='flex -mb-5'>
              <Image src={Woman} alt="woman" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DownlaodOurApp;