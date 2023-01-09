import Link from 'next/link';
import React from 'react';

const DownlaodOurAppButton = () => {
  return (
    <Link href="#download">
      <button className='bg-white font-medium rounded-lg px-7 py-4 cursor-pointer transition-all hover:scale-105'>Download Our App</button>
    </Link>
  );
};

export default DownlaodOurAppButton;