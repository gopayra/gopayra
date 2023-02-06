import React from 'react';

const CommingSoon = ({text}) => {
  return (
    <div className='h-screen flex justify-center items-center bg-gopayra'>
      <h1 className='text-4xl text-go text-white
      '><span className='text-yellow-200 font-bold'>{text}</span> page comming soon</h1>
    </div>
  );
};

export default CommingSoon;