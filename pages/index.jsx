import Head from 'next/head';
import Container from '../components/common/Container';
import Navbar from '../components/common/Navbar';
// main images import
import ShowCase1 from '../assets/images/showcase1.png'
import ShowCase2 from '../assets/images/showcase2.png'
import Logo from '../assets/images/navlogo.png';
import AppleAppStoreIcon from '../assets/images/icons/appleAppStoreIcon.svg';
import GooglePlayIcon from '../assets/images/icons/appleAppStoreIcon.svg';
// social icons import 
import Facebook from '../assets/images/icons/facebook.svg';
import LinkedIn from '../assets/images/icons/linkedin.svg';
import Twitter from '../assets/images/icons/twitter.svg';
import Instagram from '../assets/images/icons/instagram.svg';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>GO PAYRA</title>
        <meta name="description" content="Go Payra Easy Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar />

      <main>
        <Container>
          {/* hero section */}
          <section className='hero-bg bg-no-repeat bg-center bg-opacity-10 bg-contain h-[50vh] md:h-screen flex items-center justify-center mt-16'>
            <div className='text-center'>
              <h1 className='max-w-[1076px] text-3xl md:text-6xl font-bold text-gopayra' >This is the first Go Pyara to bring real time
                trekking facility to Bangladesh.</h1>
              <p className='font-medium mt-4 md:mt-8 text-slate-400 text-sm md:text-base'>The days of cheating with time and trekking are over.You can see where the delivery boy is with your product sitting at home, outside & office. There is also the option of delivery by setting the time given by you.</p>
            </div>
          </section>

          {/* showcase section 1 */}
          <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='w-full flex items-center justify-center gap-6' data-aos="fade-right">
              <div className='p-6'>
                <p className='text-2xl font-bold mb-4'>You can see where the delivery boy is with your product sitting at home, outside & office. There is also the option of delivery by setting the time given by you.</p>
                <Link href="/download">
                  <button className='gopayra-bg text-white flex items-center gap-4 px-16 py-4 rounded-lg text-2xl'>
                    Download Our App
                  </button>
                </Link>
              </div>
            </div>

            <div className='w-full flex items-center justify-center gap-4' data-aos="fade-left">
              <Image src={ShowCase1} alt="" />
            </div>
          </section>

          {/* showcase section 2 */}
          <section className='relative'>
            <div className='bg-gopayra absolute h-[100px]'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
              <div className='w-full flex items-center justify-center gap-4' data-aos="fade-right">
                <Image src={ShowCase2} alt="" />
              </div>

              <div className='w-full flex items-center justify-center gap-6' data-aos="fade-left">
                <div className='p-6'>
                  <p className='text-2xl font-bold mb-4'>The value of each product, small to large, sent by your parcel maker is important to us at GoPayra</p>
                  <Link href="/download">
                    <button className='gopayra-bg text-white flex items-center gap-4 px-16 py-4 rounded-lg text-2xl'>
                      Download Our App
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Download Our APP section */}
          <section className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
            <div className='w-full flex items-center justify-center gap-6' data-aos="fade-right">
              <div className='p-6 flex flex-col items-center'>
                <h1 className='text-2xl font-bold uppercase'>Download Our App Now</h1>
                <Button link="/appleAPP" logo={AppleAppStoreIcon} />
                <Button link="/playAPP" logo={GooglePlayIcon} />
              </div>
            </div>

            <div className='w-full flex items-center justify-center gap-4' data-aos="fade-left">
              <Image src={ShowCase2} alt="" />
            </div>
          </section>
        </Container>
      </main>

      <footer className='bg-gopayra'>
        <Container>
          <div className='flex justify-between mb-8'>
            <div className='cursor-pointer transition-all hover:scale-110'>
              <Image src={Logo} alt="" />
            </div>
            <div className='flex gap-4'>
              <div className='cursor-pointer transition-all hover:scale-110'><Link href="/facebook"><Image src={Facebook} alt="" /></Link></div>
              <div className='cursor-pointer transition-all hover:scale-110'><Link href="/facebook"><Image src={LinkedIn} alt="" /></Link></div>
              <div className='cursor-pointer transition-all hover:scale-110'><Link href="/facebook"><Image src={Twitter} alt="" /></Link></div>
              <div className='cursor-pointer transition-all hover:scale-110'><Link href="/facebook"><Image src={Instagram} alt="" /></Link></div>
            </div>
          </div>

          <div className='my-4 flex justify-between'>
            <ul className='text-xs flex gap-4'>
              <li><Link href="/home">Terms of Service</Link></li>
              <li><Link href="/home">Cookie Policy</Link></li>
              <li><Link href="/home">FAQ</Link></li>
              <li><Link href="/home">Support</Link></li>
              <li><Link href="/home">Careers</Link></li>
            </ul>
            <p className='text-xs'>Copyright © 2022 GoPayra. All rights reserved.
            </p>
          </div>
        </Container>
      </footer>
    </>
  )
}
