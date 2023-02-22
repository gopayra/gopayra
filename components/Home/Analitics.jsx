import Image from 'next/image';
import React from 'react';
import AvatarwithStarIcon from '../../assets/images/icons/avatarwithstar.svg';
import BookingIcon from '../../assets/images/icons/bookingIcon.svg';
import TruckIcon from '../../assets/images/icons/trucksIcon.svg';
import DriversIcon from '../../assets/images/icons/driversIcon.svg';
import Container from '../common/Container';
import CountUp from 'react-countup';


const Analitics = () => {
  const AnaliticsData = [{
    icon: "https://gopayra.com/_next/static/media/avatarwithstar.8f986c56.svg",
    numbers: 8100,
    type: 'Happy Client',
    duration: 15
  }, {
    icon: 'https://gopayra.com/_next/static/media/bookingIcon.5ef76c05.svg',
    numbers: 1500,
    type: 'Booking',
    duration: 30
  }, {
    icon: 'https://gopayra.com/_next/static/media/trucksIcon.63b53bc3.svg',
    numbers: 500,
    type: 'Trucks',
    duration: 50
  }, {
    icon: 'https://gopayra.com/_next/static/media/driversIcon.b52ea6f0.svg',
    numbers: 1000,
    type: 'Drivers',
    duration: 60
  }]
  return (
    <section className='h-full md:h-80 bg-gopayra mt-52'>
      <Container>
        <div className='flex gap-16 flex-wrap md:flex-nowrap justify-center md:justify-between h-full items-center py-8 md:py-0'>
          {
            AnaliticsData.map((item, index) => {
              return <div className='flex gap-6 items-center h-full w-72' key={index}>
                <div className='bg-[#CDE2DF] rounded-[20px] px-[1.313em] py-[1.094em] w-[90px] h-[90px]'>
                  <Image src={item.icon} alt="" width={48} height={48}/>
                </div>
                <div className='text-white'>
                  <h1 className='text-heading font-semibold w-[125px]'><CountUp start={item.numbers - 40} end={item.numbers} duration={item.duration} />+ </h1>
                  <p className='text-xl font-medium'>{item.type}</p>
                </div>
              </div>
            })
          }
        </div>
      </Container>
    </section>
  );
};

export default Analitics;