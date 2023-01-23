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
    icon: AvatarwithStarIcon,
    numbers: 8100,
    type: 'Happy Client',
    duration: 15
  }, {
    icon: BookingIcon,
    numbers: 1500,
    type: 'Booking',
    duration: 30
  }, {
    icon: TruckIcon,
    numbers: 500,
    type: 'Trucks',
    duration: 50
  }, {
    icon: DriversIcon,
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
                <div className='bg-[#CDE2DF] rounded-[20px] px-[1.313em] py-[1.094em]'>
                  <Image src={item.icon} alt="" />
                </div>
                <div className='text-white'>
                  <h1 className='text-heading font-semibold'><CountUp start={item.numbers - 40} end={item.numbers} duration={item.duration} />+ </h1>
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