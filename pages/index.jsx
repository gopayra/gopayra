import Head from 'next/head';
import Container from '../components/common/Container';
import Navbar from '../components/common/Navbar2.0';
// main images import
import ShowCase1 from '../assets/images/showcase1.png'
import ShowCase2 from '../assets/images/showcase2.png'
import TruckSolutions from '../assets/images/features/truck-solutions.jpeg';

import Link from 'next/link';
import GoPayraButton from '../components/UI/GoPayraButton';
import Image from 'next/image';
import Footer from '../components/common/Footer';
import Features from '../components/Features/Features';
import GoPayraHeading from '../components/UI/GoPayraHeading';
import SingingCompany from '../components/Home/SingingCompany';
import DownlaodOurApp from '../components/common/DownlaodOurApp';
import OurBlog from '../components/Home/OurBlog';
import AppFeatures from '../components/Home/AppFeatures';
import OurCEO from '../components/Home/OurCEO';
import WhyChooseOurApps from '../components/Home/WhyChooseOurApps';
import ChooseYourBusiness from '../components/Home/ChooseYourBusiness';
import HeroSection from '../components/Home/HeroSection';
import CountUp from 'react-countup';
import { useState } from 'react';
import Analitics from '../components/Home/Analitics';
import OurSolution from '../components/Home/OurSolution';
import GopayraGuarantee from '../components/Home/GopayraGuarantee';
import CustomGoPayraSlider from '../components/common/CustomGoPayraSlider';
import OurTransport from '../components/Home/OurTransport';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const onStart = () => { setLoading(true) };
  const onEnd = () => { setLoading(false) };
  const containerProps = {
    'aria-busy': loading
  };
  return (
    <>
      <Head>
        <title>GOPAYRA</title>
        <meta name="description" content="Go Payra Easy Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* hero section */}
        <HeroSection />

        <Analitics />

        <OurSolution />

        <GopayraGuarantee />

        {/* <section className='bg-no-repeat bg-center bg-opacity-10 bg-contain h-screen'>
          <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center h-full mt-6'>
              <div className='text-center'>
                <h1 className='max-w-[1076px] text-3xl md:text-4xl font-bold text-gopayra' >This Is The First Go Payra To Bring Real Time Trekking Facility To Bangladesh.</h1>
                <p className='font-medium mt-4 text-slate-600 text-sm md:text-base'>The days of cheating with time and trekking are over.You can see where the delivery boy is with your product sitting at home, outside & office. There is also the option of delivery by setting the time given by you.</p>
                <div className='flex justify-center mt-8'>
                  <Link href="#download">
                    <button className='bg-gopayra text-white flex items-center gap-4 px-16 py-4 rounded-lg text-2xl hover:bg-gopayraLight active:scale-105'>
                      Download Our App1
                    </button>
                  </Link>
                </div>
              </div>

              <div className='h-full w-full hidden md:flex'>
                <Image src={Rider} alt="" />
              </div>
            </div>
          </Container>
        </section> */}

        {/* <CountUp end={100} duration="3" onStart={onStart} onEnd={onEnd} containerProps={containerProps} /> */}

        {/* showcase section 1 */}
        {/* <section className='py-10 md:py-32'>
          <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='w-full flex items-center justify-center gap-6' data-aos="fade-right">
                <div className='p-6'>
                  <p className='text-2xl font-bold mb-4 text-gopayra text-justify'>You can see where the delivery boy is with your product sitting at home, outside & office. There is also the option of delivery by setting the time given by you.</p>
                  <Link href="#download">
                    <button className='bg-gopayraLight text-white flex items-center gap-4 px-16 py-4 rounded-lg text-2xl hover:text-gopayraLight hover:bg-white active:scale-105'>
                      Download Our App
                    </button>
                  </Link>
                </div>
              </div>

              <div className='w-full flex items-center justify-center gap-4' data-aos="fade-left">
                <Image src={ShowCase1} alt="" />
              </div>
            </div>
          </Container>
        </section> */}

        {/* Our solutions section */}
        <Container>
          <section className='text-center mt-44' data-aos="fade-in">
            <GoPayraHeading
              heading="Our Truck Solutions"
              subHeading="We Are Top Courier and Mover Service in Bangladesh"
            />
            <Image src={TruckSolutions} alt="" />
          </section>
        </Container>

          {/* showcase section 2 */}
        {/* <Container>
          <section className='relative my-10 border-4 border-[#218578] rounded-lg p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='w-full flex items-center justify-center gap-4' data-aos="fade-right">
                <Image src={ShowCase2} alt="" />
              </div>

              <div className='w-full flex items-center justify-center gap-6 bg-[#218578] p-4 rounded-lg' data-aos="fade-left">
                <div className='p-6'>
                  <p className='text-2xl font-bold mb-4 text-center'>The value of each product, small to large, sent by your parcel maker is important to us at GoPayra</p>
                  <div className='flex justify-center'>
                    <Link href="#download">
                      <button className='bg-white text-gopayraLight flex items-center gap-4 px-16 py-4 rounded-lg text-2xl hover:text-white hover:bg-gopayraLight active:scale-105'>
                        Download Our App
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container> */}
        {/* Choose your business section*/}
        <ChooseYourBusiness />

        {/* Why choose our apps section */}
        <WhyChooseOurApps />

        {/* Our transport section */}
        <OurTransport />

        {/* Our CEO section */}
        <OurCEO />

        {/* App Features section */}
        <AppFeatures />

        {/* Our blog section */}
        <OurBlog />

        {/* Download Our APP section */}
        <DownlaodOurApp />

        {/* our clients section */}
        <SingingCompany />

      </main>
    </>
  )
}
