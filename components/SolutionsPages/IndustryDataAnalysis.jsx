import React from 'react';
import Container from '../common/Container';

const IndustryDataAnalysis = () => {
  const typesOfService = [{
    title: 'Improve productivity',
    desc: 'With real-time notifications and unprecedented ETA accuracy for incoming deliveries, you can maximize throughput on the production line and save staff time on status check calls.'
  }, {
    title: 'Low operating costs',
    desc: 'Transportation charges add up quickly. We help you reduce those risks by reducing downtime, optimizing labor planning and preventing product damage in temperature-controlled shipments.'
  }, {
    title: 'Manage drivers',
    desc: 'Equipping your drivers with the best user-friendly apps, monitoring their behaviour and performance and digitizing their payment system.'
  },]
  return (
    <>
      <section className='mt-32'>
        <Container>

          <div className='grid grid-cols-1 md:grid-cols-3 justify-center gap-8'>
            {typesOfService.map((item, index) => {
              return <div className='pr-8 md:max-w-[331px]' key={index}>
                <h2 className='text-2xl font-semibold'>{item.title}</h2>
                <p className='text-goDesc mt-2'>{item.desc}</p>
              </div>
            })}
          </div>

        </Container>
      </section>

      <section className='mt-12 mb-32'>
        <Container>
          <p className='text-lg px-4 md:px-20'>Increase your on-time delivery rate and give your customers full visibility along the way, with automated status notifications and live tracking dashboards.</p>
        </Container>
      </section>
    </>
  );
};

export default IndustryDataAnalysis;