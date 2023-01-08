import React from 'react';
import Container from '../common/Container';
import Card from '../UI/Card';
import HeadingText from '../UI/HeadingText';
import SubHeadingText from '../UI/SubHeadingText';

const OurBlog = () => {
  const cardData = [{
    title: "The Sense of Community",
    description: "We believe in honesty Performance. We value any technology. Our innovations are human-centric, meaningful.",
    link: "/blog",
    animation: "fade-right"
  }, {
    title: "Gopayra's largest digital freight forwarder platform for your on-road logistics.",
    description: "Each day, thousands of shippers and carriers optimise and cut costs, increase loads, reduce empty miles, and enjoy improved income.",
    link: "/blog",
    animation: "zoom-in"
  }, {
    title: "3.The best possible transport allocation.",
    description: "Instant pricing. Live track-and-trace. Real-time analytics.",
    link: "/blog",
    animation: "fade-left"
  },]
  return (
    <Container>
      <HeadingText text="Our Blog" />
      <SubHeadingText text="A Future-Proof Supply Chain Is The Future." />

      <div className='flex gap-4 justify-center flex-wrap lg:flex-nowrap my-10'>
        {
          cardData.map((item, index) => {
            return <Card key={index} data={item} />
          })
        }
      </div>
    </Container>
  );
};

export default OurBlog;