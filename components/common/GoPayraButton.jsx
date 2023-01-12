import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GoPayraButton = (props) => {
  return (
    <Link href={props.link}>
      <button className='bg-gopayra text-white flex items-center gap-4 px-8 py-3 rounded-lg mt-4 hover:bg-white hover:text-gopayra active:scale-105'>
        {props.logo && <Image src={props.logo} alt="" />}
        Download Our App
      </button>
    </Link>
  );
};

export default GoPayraButton;