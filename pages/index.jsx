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
import OurTransport from '../components/common/OurTransport';
import HowItWorksVideo from '../components/common/HowItWorksVideo';

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

        <HowItWorksVideo />

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
