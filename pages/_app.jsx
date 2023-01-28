import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import Layout from '../components/common/Layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => { AOS.init(); }, [])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
