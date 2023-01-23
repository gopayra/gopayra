import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

function MyApp({ Component, pageProps }) {
  useEffect(() => { AOS.init(); }, [])
  return <Component {...pageProps} />
}

export default MyApp
