import React from 'react';
import CustomGoPayraSlider from '../common/CustomGoPayraSlider';
import HeadingText from '../UI/HeadingText';
import SubHeadingText from '../UI/SubHeadingText';
import Bike from '../../assets/images/bike.png';
import OpenTruck from '../../assets/images/openTruck.png';
import MiniTruck from '../../assets/images/miniTruck.png';
import CoveredVan from '../../assets/images/CoveredVan.png';
import Larry from '../../assets/images/CoveredVan.png';

const transportData = [{
  vehicleImage: Bike,
  vehicleType: "Bike",
  details: "First time in Bangladesh history we are giving Bike ride sharing courier service and they are very popular..."
}, {
  vehicleImage: OpenTruck,
  vehicleType: "Open Truck",
  details: "Gopayra's app provides a Truck rent system, making it easy to request on-demand moving and delivery..."
}, {
  vehicleImage: MiniTruck,
  vehicleType: "Mini Truck",
  details: "Book mini trucks online. Whenever you need, wherever you need..."
}, {
  vehicleImage: CoveredVan,
  vehicleType: "Covered Van",
  details: "If you are planning to rent a Covered van transport for delivering your goods, you have already made a smart choice..."
}, {
  vehicleImage: Larry,
  vehicleType: "Larry",
  details: "We offer a large range of best quality used trucks and trailers for all of your specific port Transports..."
},]

const OurTransport = () => {
  return (
    <section className='mt-24 pb-32'>
      <HeadingText text="Our Transport" />
      <SubHeadingText text="We provide various type of vehicle option for your convenience" />

      <CustomGoPayraSlider transportData={transportData} />
    </section>
  );
};

export default OurTransport;