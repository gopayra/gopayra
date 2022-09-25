import React from 'react';
import FeaturesCard from './FeaturesCard';
import OpenTruck from '../../assets/images/features/open-truck.png';
import CoveredTruck from '../../assets/images/features/covered-truck.png';
import PickupTruck from '../../assets/images/features/pickup-truck.png';

const Features = () => {
  const data = [OpenTruck, CoveredTruck, PickupTruck]
  return (
    <div className='border-2 border-green-600 text-center'>
      <h1 className='text-gopayra text-4xl font-extrabold '>Our Solutions</h1>
      <p className='text-gopayraLight text-bold mt-2'>We Are Top Courier and Mover Service in Bangladesh</p>
      {data.map((item, index) => <FeaturesCard key={index} image={item}/>)}
    </div>
  );
};

export default Features;