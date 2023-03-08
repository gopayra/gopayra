import React from 'react';
import HeadingText from '../UI/HeadingText';
import people from '../../assets/images/aboutusPage/people.webp';
import Image from 'next/image';
import Container from '../common/Container';

const OurTeamSection = () => {
  const higherManagementData = [{
    dp: people,
    fullName: 'Yakub Bhuyan',
    title: 'Chairman'
  }, {
    dp: people,
    fullName: 'Dr.Aminul islam Juyel',
    title: 'Vice chairman'
  }, {
    dp: people,
    fullName: 'Md.Shariful Haque',
    title: 'Managing Director & CEO'
  }, {
    dp: people,
    fullName: 'Eng. Enamul Haque',
    title: 'Director Operation'
  }, {
    dp: people,
    fullName: 'Dr.Saima Rahman',
    title: 'Director'
  },]

  const advisorPanel = [{
    dp: people,
    fullName: 'Nayeem Islam',
    title: 'Legal advisor'
  }, {
    dp: people,
    fullName: 'Redwan Rizu',
    title: 'Legal advisor'
  }, {
    dp: people,
    fullName: 'Jahid seizer',
    title: 'Legal advisor'
  }]

  const operationTeamData = [{
    dp: people,
    fullName: 'Shariful Pradhan Hridoy',
    title: 'Chief Technical Officer'
  }, {
    dp: people,
    fullName: 'Tariqul islam',
    title: 'Accounting officer'
  }, {
    dp: people,
    fullName: 'Shahadin Mahmud',
    title: 'UI and UX engineer'
  }, {
    dp: people,
    fullName: 'Tanzim Bin Yunus',
    title: 'Senior Marketing officer'
  }]
  return (
    <>
      <section className='mt-32'>
        <HeadingText text='Our Team' />

        {/* team card */}
        <div className='text-center mt-16'>
          <Image src={people} alt="" />
          {/* full name */}
          <h2 className='text-2xl font-semibold mt-6 mb-4'>Md. Shariful Haque</h2>
          {/* title */}
          <p className='text-goDesc'>Founder</p>
        </div>
      </section>

      {/* higher management section */}
      <section className='mt-20'>
        <Container>
          <HeadingText text='Higher Management' />

          <div className='flex flex-wrap justify-center gap-4'>
            {higherManagementData.map((item, index) => {
              return <div className='text-center mt-16' key={index}>
              <Image src={item.dp} alt="" />
              {/* full name */}
              <h2 className='text-2xl font-semibold mt-6 mb-4'>{item.fullName}</h2>
              {/* title */}
              <p className='text-goDesc'>{item.title}</p>
            </div>
            })}
          </div>
        </Container>
      </section>

      {/* Advisor panel section */}
      <section className='mt-20'>
        <Container>
          <HeadingText text='Advisor Panel' />

          <div className='flex flex-wrap justify-center gap-4'>
            {advisorPanel.map((item, index) => {
              return <div className='text-center mt-16' key={index}>
              <Image src={item.dp} alt="" />
              {/* full name */}
              <h2 className='text-2xl font-semibold mt-6 mb-4'>{item.fullName}</h2>
              {/* title */}
              <p className='text-goDesc'>{item.title}</p>
            </div>
            })}
          </div>
        </Container>
      </section>

      {/* operation team section */}
      <section className='my-20'>
        <Container>
          <HeadingText text='Operation Team' />

          <div className='flex flex-wrap justify-center gap-4'>
            {operationTeamData.map((item, index) => {
              return <div className='text-center mt-16' key={index}>
              <Image src={item.dp} alt="" />
              {/* full name */}
              <h2 className='text-2xl font-semibold mt-6 mb-4'>{item.fullName}</h2>
              {/* title */}
              <p className='text-goDesc'>{item.title}</p>
            </div>
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurTeamSection;