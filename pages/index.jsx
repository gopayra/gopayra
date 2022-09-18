import Head from 'next/head';
import Container from '../components/common/Container';
import Navbar from '../components/common/Navbar';
// main images import
import ShowCase1 from '../assets/images/showcase1.png'
import ShowCase2 from '../assets/images/showcase2.png'
import AppleAppStoreIcon from '../assets/images/icons/appleAppStoreIcon.svg';
import GooglePlayIcon from '../assets/images/icons/googlePlayIcon.svg';
import goPayraBanner from '../assets/images/gopayrabanner.png'
import DowloadOurApp from '../assets/images/downloadourapp.png';
import Rider from '../assets/images/rider.svg'

import Link from 'next/link';
import Button from '../components/common/Button';
import Image from 'next/image';
import Footer from '../components/common/Footer';

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

        {/* hero section */}
        <section className='bg-no-repeat bg-center bg-opacity-10 bg-contain h-screen'>
          <Container>
            <div className='flex justify-center items-center h-full mt-6'>
              <div className='text-center'>
                <h1 className='max-w-[1076px] text-3xl md:text-5xl font-bold text-gopayra' >This Is The First Go Payra To Bring Real Time Trekking Facility To Bangladesh.</h1>
                <p className='font-medium mt-4 md:mt-8 text-slate-400 text-sm md:text-base'>The days of cheating with time and trekking are over.You can see where the delivery boy is with your product sitting at home, outside & office. There is also the option of delivery by setting the time given by you.</p>
                <div className='flex justify-center mt-8'>
                  <Link href="#download">
                    <button className='bg-gopayra text-white flex items-center gap-4 px-16 py-4 rounded-lg text-2xl hover:text-gopayra hover:bg-white active:scale-105'>
                      Download Our App
                    </button>
                  </Link>
                </div>
              </div>

              <div className='h-full w-full hidden md:flex'>
                <Image src={Rider} alt="" />
              </div>
            </div>
          </Container>
        </section>


        {/* showcase section 1 */}
        <section className='py-10 md:py-32 bg-green-400'>
          <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='w-full flex items-center justify-center gap-6' data-aos="fade-right">
                <div className='p-6'>
                  <p className='text-2xl font-bold mb-4 text-black'>You can see where the delivery boy is with your product sitting at home, outside & office. There is also the option of delivery by setting the time given by you.</p>
                  <Link href="#download">
                    <button className='bg-gopayra text-white flex items-center gap-4 px-16 py-4 rounded-lg text-2xl hover:text-gopayra hover:bg-white active:scale-105'>
                      Download Our App
                    </button>
                  </Link>
                </div>
              </div>

              <div className='w-full flex items-center justify-center gap-4 border-8 border-[#218578] rounded-lg' data-aos="fade-left">
                <Image src={ShowCase1} alt="" />
              </div>
            </div>
          </Container>
        </section>

        <Container>
          {/* showcase section 2 */}
          <section className='relative my-10 md:my-32 border-4 border-[#218578] rounded-lg p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='w-full flex items-center justify-center gap-4' data-aos="fade-right">
                <Image src={ShowCase2} alt="" />
              </div>

              <div className='w-full flex items-center justify-center gap-6 bg-[#218578] p-4 rounded-lg' data-aos="fade-left">
                <div className='p-6'>
                  <p className='text-2xl font-bold mb-4'>The value of each product, small to large, sent by your parcel maker is important to us at GoPayra</p>
                  <Link href="#download">
                    <button className='bg-gopayra text-white flex items-center gap-4 px-16 py-4 rounded-lg text-2xl hover:text-gopayra hover:bg-white active:scale-105'>
                      Download Our App
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Download Our APP section */}
          <section className='grid grid-cols-1 md:grid-cols-2 gap-4 my-10 md:my-32' id="download">
            <div className='w-full flex items-center justify-center gap-6' data-aos="fade-right">
              <div className='p-6 flex flex-col items-center'>
                <h1 className='text-2xl font-bold uppercase text-gopayra'>Download Our App Now</h1>
                <Button link="/appleAPP" logo={AppleAppStoreIcon} />
                <Button link="/playAPP" logo={GooglePlayIcon} />
              </div>
            </div>

            <div className='w-full flex items-center justify-center gap-4' data-aos="fade-left">
              <Image src={DowloadOurApp} alt="" />
            </div>
          </section>
        </Container>

        {/* gopayra section */}

        <section>
          <div className='flex'>
            <Image src={goPayraBanner} alt="" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
