import React from 'react';
import { FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideNormal from '../common/SlideNormal';
import HeadingText from '../UI/HeadingText';
import ThreeFeatureCards from '../common/ThreeFeatureCards';
import GridLayout from '../common/GridLayout';

// all image imports
import bottledWater from '../../assets/images/solutionsPages/bottledWater.png';
import bakedGoods from '../../assets/images/solutionsPages/bakedGoods.png';
import frozenFood from '../../assets/images/solutionsPages/frozenFood.png';
import dryProducts from '../../assets/images/solutionsPages/dryProducts.png';
import vegetables from '../../assets/images/solutionsPages/vegetables.png';
import realTimeTracking from '../../assets/images/solutionsPages/realTimeTracking.svg';
import deliveryCycle from '../../assets/images/solutionsPages/deliveryCycle.svg';
import digitalProof from '../../assets/images/solutionsPages/digitalProof.svg'
import notification from '../../assets/images/solutionsPages/notification.webp';
import availability from '../../assets/images/solutionsPages/availability.webp';
import orderFulfillment from '../../assets/images/solutionsPages/orderFulfillment.webp';
import inAppChat from '../../assets/images/solutionsPages/inAppChat.png';



const FoodDeliverySystem = () => {
  const typesOfFoods = [{
    id: 1,
    title: "Bottled Water",
    description: "Bottled water delivery products provide a hassle-free way to access clean and refreshing drinking water straight to your door.",
    icon: bottledWater,
  }, {
    id: 2,
    title: "Baked Goods",
    description: "Baked goods can be delivered to your desired location with care, ensuring that they remain fresh and flavorful during transport.",
    icon: bakedGoods,
  }, {
    id: 3,
    title: "Frozen food",
    description: "With careful packaging and temperature-controlled transportation, frozen food products can be transported safely and efficiently",
    icon: frozenFood,
  }, {
    id: 4,
    title: "Dry products",
    description: "Dry product delivery services offer a convenient way to receive your favorite dry goods, such as snacks, cereal, pasta, and more, at your desired location.",
    icon: dryProducts,
  }, {
    id: 5,
    title: "Vegetables",
    description: "Vegetable delivery services offer a convenient way to receive fresh and healthy produce straight to your desired location.",
    icon: vegetables,
  }];

  const cardData = [
    {
      icon: realTimeTracking,
      text: 'Uber like real-time tracking of delivery agents.'
    }, {
      icon: deliveryCycle,
      text: 'Update your customer with the ongoing delivery cycle.'
    }, {
      icon: digitalProof,
      text: 'Collect digital proof of delivery through signature, image, barcode etc.'
    }]
  return (
    <>
      {/* foods section */}
      <section className='mt-32'>
        <HeadingText
          text='We also provide all types of food'
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
            {typesOfFoods.map((item, index) => {
              return <SwiperSlide key={index} >
                <SlideNormal item={item} />
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </section>

      {/* real time tracking section */}
      <section>
        <HeadingText
          text='Real-time tracking and proof of delivery'
        />

        <ThreeFeatureCards cardData={cardData} fontSize="lg" />
      </section>

      <GridLayout
        heading="Instant new order notification."
        description="Never fear of being lost, never be late.
        Drivers receive visual and sound notifications when orders arrive or are assigned, even when the app is closed"
        thumbnail={notification}
        leftImage
      />

      <GridLayout
        heading="Availability of shares"
        description="Easy management of shifts and schedules is provided, thereby making order assignment more efficient"
        thumbnail={availability}
      />

      <GridLayout
        heading="Order fulfillment status"
        description="When each delivery is completed, our driver stops his delivery task and records the happy fulfilment of the order.
        And they wait for a new order!"
        thumbnail={orderFulfillment}
        leftImage
      />

      <GridLayout
        heading="In-app chat with customers"
        description="Communicate on the go with an in-app chat facility for drivers. Drivers can chat with customers to confirm delivery location or other order details"
        thumbnail={inAppChat}
      />
    </>
  );
};

export default FoodDeliverySystem;