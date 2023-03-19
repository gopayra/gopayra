import React from 'react';

// slider icons
import Gift from '../../assets/images/servicesPages/Gift.svg';
import Document from '../../assets/images/servicesPages/Document.svg';
import Package from '../../assets/images/servicesPages/Package.svg';
import Accessories from '../../assets/images/servicesPages/Accessories.svg';
import Electronics from '../../assets/images/servicesPages/Electronics.svg';

// key values icons
import lastmile from '../../assets/images/servicesPages/lastmile.svg';
import realtime from '../../assets/images/servicesPages/realtime.svg';
import minimise from '../../assets/images/servicesPages/minimise.svg';
import customer from '../../assets/images/servicesPages/customer.svg';
import reduce from '../../assets/images/servicesPages/reduce.svg';
import bottomline from '../../assets/images/servicesPages/bottomline.svg';
import invoice from '../../assets/images/servicesPages/invoice.svg';
import HeadingText from '../UI/HeadingText';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import SlideNormal from '../common/SlideNormal';
import Image from 'next/image';
import Container from '../common/Container';



const CourierAndParcel = () => {
  const whatCanYouSend = [{
    id: 1,
    title: "Gift",
    description: "Gopayra provides a convenient and dependable way to send gifts to your loved ones who may be living far away...",
    icon: Gift,
  }, {
    id: 2,
    title: "Document",
    description: "Gopayra document delivery services can help you get them to their intended recipients quickly and efficiently...",
    icon: Document,
  }, {
    id: 3,
    title: "Package",
    description: "Package delivery services are a convenient and reliable way to send parcels and packages to various destinations....",
    icon: Package,
  }, {
    id: 4,
    title: "Accessories",
    description: "electronic accessories, or other types of accessories, accessory delivery services Gopayra can help it to delivered safely...",
    icon: Accessories,
  }, {
    id: 5,
    title: "Electronics",
    description: "For Electronics delivery we offer a variety of shipping options to meet your needs. Our services include same-day delivery...",
    icon: Electronics,
  },]


  const keyValues = [
    {
      icon: lastmile,
      text: 'Improve last mile delivery efficiency'
    }, {
      icon: realtime,
      text: 'Provide real-time visibility'
    }, {
      icon: minimise,
      text: 'Minimise delivery time'
    }, {
      icon: customer,
      text: 'Increase customer satisfaction'
    }, {
      icon: reduce,
      text: 'Reduce operating costs and risks'
    }, {
      icon: bottomline,
      text: 'Improve our bottom line'
    }, {
      icon: invoice,
      text: 'Digital invoice with proof of delivery'
    }
  ]
  return (
    <>
      <section className='pt-32 bg-liteGray'>
        <HeadingText
          text='What Can You Send?'
        />

        <div className='mt-12'>
          <Swiper
            slidesPerView={1}
            spaceBetween={40}
            freeMode={true}
            modules={[FreeMode]}
            breakpoints={{
              // when window width is >= 640px
              450: {
                width: 450,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
            className="ourServices-slider"
          >
            {whatCanYouSend.map((item, index) => {
              return <SwiperSlide key={index} >
                <SlideNormal item={item} />
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </section>

      <section className='bg-liteGray pb-32 mb-16'>
          <div className='mx-auto max-w-[1170px] flex flex-wrap justify-center items-center gap-6'>
            {keyValues.map((item, index) => {
              return <div key={index} className="w-[270px] h-[100px] border border-liteBorder rounded-xl flex gap-4 items-center justify-center bg-white group">
                <Image src={item.icon} alt="" width={60} height={60} className="group-hover:animate-pulse transition-all"/>
                <h3 className='text-xl font-semibold w-[174px]'>{item.text}</h3>
              </div>
            })}
          </div>
      </section>
    </>
  );
};

export default CourierAndParcel;