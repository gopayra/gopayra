import React from 'react';
import Container from '../common/Container';
import ThreeFeatureCards from '../common/ThreeFeatureCards';
import HeadingText from '../UI/HeadingText';
import GridLayout from '../common/GridLayout';

import HomeMoving from '../../assets/images/servicesPages/homeMoving.svg';
import ResidentialMove from '../../assets/images/servicesPages/residentialMove.svg';
import officePrinters from '../../assets/images/servicesPages/officePrinters.svg';
import payment from '../../assets/images/servicesPages/payment.webp';

const MoveMyHome = () => {
  const cardData = [
    {
      icon: HomeMoving,
      text: 'Home moving'
    }, {
      icon: ResidentialMove,
      text: 'Residential move'
    }, {
      icon: officePrinters,
      text: 'Office Printers and other IT Equipmentstorage'
    }
  ]
  return (
    <>
      <section className='mt-24'>
        <Container>
          <HeadingText text="Move my Home & Office" />
          <p className='text-center text-lg mt-4 px-4 md:px-32'>Instruction management Manage effectively and Track everything while moving your home/office with information on address, schedule information, estimates and more.</p>
        </Container>
        <ThreeFeatureCards cardData={cardData} />
      </section>

      <GridLayout
        heading="Payment"
        description="We provide complete cash on delivery and perfect payment for Commercial shifting at the lowest rate for the customer."
        thumbnail={payment}
        leftImage
      />
    </>
  );
};

export default MoveMyHome;