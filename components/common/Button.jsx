import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Button = (props) => {
  return (
    <Link href={props.link}>
      <button className='gopayra-bg text-white flex items-center gap-4 px-8 py-3 rounded-lg mt-4'>
        {props.logo && <Image src={props.logo} alt="" />}
        Download Our App
      </button>
    </Link>
  );
};

export default Button;