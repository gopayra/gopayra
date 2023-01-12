import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }) {
  useEffect(() => { AOS.init(); }, [])
  return <Component {...pageProps} />
}

export default MyApp
