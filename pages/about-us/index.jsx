import Head from "next/head";
import MainSection from "../../components/AboutUs/MainSection";
import HeroSectionCommon from "../../components/common/HeroSectionCommon";
import AboutUs from "../../assets/images/aboutusPage/aboutUS.webp";
import OurTeamSection from "../../components/AboutUs/OurTeamSection";
import DownlaodOurApp from "../../components/common/DownlaodOurApp";

export default function index() {
  return (
    <>
      <Head>
        <title>GOPAYRA - About us</title>
        <meta name="description" content="Go Payra Easy Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSectionCommon 
        title="About us"
        description="Gopayra has brought the aim of industrial revolution in Bangladesh with new technology in this new era of logistics department."
        Thumbnail={AboutUs}
        downloadButton
        />
        <MainSection />
        <OurTeamSection />

        <DownlaodOurApp />
      </main>
    </>
  );
};