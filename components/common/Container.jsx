import React from 'react';

const Container = (props) => {
  return (
    <div className='max-w-[1170px] mx-auto px-4 py-5 h-full'>
      {props.children}
    </div>
  );
};

export default Container;