import React from 'react';
import AppButton from '../UI/AppButton';
import Container from './Container';
import Image from 'next/image';
import Woman from '../../assets/images/woman.png';

const DownlaodOurApp = () => {
  const downloadDetails = [
    {
      typeOfApps: "User apps",
      appLink: "http://apple.com",
      playLink: "http://google.com"
    }, {
      typeOfApps: "Driver apps",
      appLink: "http://apple.com",
      playLink: "http://google.com"
    }, {
      typeOfApps: "Partners apps",
      appLink: "http://apple.com",
      playLink: "http://google.com"
    }
  ]
  return (
    <section className='my-10 bg-slate-100 shadow-lg' id="download">
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center pt-5'>
          <div>
            {
              downloadDetails.map((item, index) => {
                return <div className='mb-10' key={index} data-aos="fade-right">
                  <h1 className='text-2xl font-semibold'>{item.typeOfApps}</h1>
                  <AppButton appLink={item.appLink} playLink={item.playLink} />
                </div>
              })
            }

          </div>

          {/* image */}
          <div className='map-bg'>
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