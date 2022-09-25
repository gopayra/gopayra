import React from 'react';

const Heading = ({ heading, subHeading }) => {
  return (
    <>
      <h1 className='text-gopayra text-4xl font-extrabold' data-aos="zoom-in">{heading}</h1>
      {subHeading && <p className='text-gopayraLight text-bold mt-2 mb-8' >{subHeading}</p>}
    </>
  );
};

export default Heading;