import React from 'react';
import Container from '../common/Container';
import Card from '../UI/Card';
import HeadingText from '../UI/HeadingText';
import SubHeadingText from '../UI/SubHeadingText';

const OurBlog = () => {
  const cardData = [
    {
      title: "Gopayra Supply Chain Logistics!",
      description:
        "If you're reading this, you're probably already familiar with the concept of supply chain logistics and its importance in today's global economy.....",
      link: "/blog/gopayra-supply-chain-logistics",
      animation: "fade-right",
    },
    {
      title: "All in one Delivery service.",
      description:
        "It's no secret that delivery services are becoming more and more popular for both businesses and consumers. Whether it's delivering services like grocery delivery,...",
      link: "/blog/all-in-one-delivery-service",
      animation: "zoom-in",
    },
    {
      title:
        "Gopayra is the largest digital freight forwarder.....",
      description:
        "Logistics can be a daunting task, but it doesn't have to be. With the right digital freight forwarder platform, you can make your on-road logistics process easier and more efficient....",
      link: "/blog/gopayra-on-road-logistics",
      animation: "fade-left",
    }
  ];
  return (
    <section className='mt-24'>
      <Container>
        <HeadingText text="Our Blog" />
        <SubHeadingText text="Read our blogs for stay up to date with GoPayra latest updates" />

        <div className='flex gap-4 justify-center flex-wrap lg:flex-nowrap my-10'>
          {
            cardData.map((item, index) => {
              return <Card key={index} data={item} />
            })
          }
        </div>
      </Container>
    </section>
  );
};

export default OurBlog;