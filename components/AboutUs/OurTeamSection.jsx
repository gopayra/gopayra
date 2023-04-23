import React from 'react';
import HeadingText from '../UI/HeadingText';
import Container from '../common/Container';
import Image from 'next/image';

// team images import
import people from '../../assets/images/aboutusPage/people.webp';
import Shariful from '../../assets/images/aboutusPage/shariful-haque.webp';
import Yakub from '../../assets/images/aboutusPage/yakub-bhuyan.webp';
import Aminul from '../../assets/images/aboutusPage/aminul-islam.webp';
import Enamul from '../../assets/images/aboutusPage/enamul-haque.webp';
import Saima from '../../assets/images/aboutusPage/saima-rahman.webp';

import Nayeem from '../../assets/images/aboutusPage/nayeem-islam.webp';
import Redwan from '../../assets/images/aboutusPage/redwan-rizu.webp';
import Jahid from '../../assets/images/aboutusPage/jahid-seizer.webp';

import Pradhan from '../../assets/images/aboutusPage/shariful-pradhan-hridoy.webp';
import Tariqul from '../../assets/images/aboutusPage/tariqul-islam.webp';
import Munna from '../../assets/images/aboutusPage/munna.webp';
import Shahadin from '../../assets/images/aboutusPage/shahadin.webp';

const OurTeamSection = () => {
  const higherManagementData = [{
    dp: Yakub,
    fullName: 'Yakub Bhuyan',
    title: 'Chairman'
  }, {
    dp: Aminul,
    fullName: 'Dr.Aminul islam Juyel',
    title: 'Vice chairman'
  }, {
    dp: Shariful,
    fullName: 'Md.Shariful Haque',
    title: 'Managing Director & CEO'
  }, {
    dp: Enamul,
    fullName: 'Eng. Enamul Haque',
    title: 'Director Operation'
  }, {
    dp: Saima,
    fullName: 'Dr.Saima Rahman',
    title: 'Director'
  },]

  const advisorPanel = [{
    dp: Nayeem,
    fullName: 'Nayeem Islam',
    title: 'Legal advisor'
  }, {
    dp: Redwan,
    fullName: 'Redwan Rizu',
    title: 'Legal advisor'
  }, {
    dp: Jahid,
    fullName: 'Jahid seizer',
    title: 'Legal advisor'
  }]

  const operationTeamData = [{
    dp: Pradhan,
    fullName: 'Shariful Pradhan Hridoy',
    title: 'Chief Technical Officer'
  }, {
    dp: Tariqul,
    fullName: 'Tariqul islam',
    title: 'Accounting officer'
  }, {
    dp: Shahadin,
    fullName: 'Shahadin Mahmud',
    title: 'UI and UX engineer'
  }, {
    dp: Munna,
    fullName: 'Munna',
    title: 'Office executive'
  }]
  return (
    <>
      <section className='mt-32'>
        <HeadingText text='Our Team' />

        {/* founder card */}
        {/* <div className='text-center mt-16'>
          <Image src={Shariful} alt="" width={270} height={299}/>
          <h2 className='text-2xl font-semibold mt-6 mb-4'>Md. Shariful Haque</h2>
          <p className='text-goDesc'>Founder</p>
        </div> */}
      </section>

      {/* higher management section */}
      <section className='mt-20'>
        <Container>
          <HeadingText text='Higher Management' />

          <div className='flex flex-wrap justify-center gap-4'>
            {higherManagementData.map((item, index) => {
              return <div className='text-center mt-16' key={index}>
              <Image src={item.dp} alt="" width={270} height={299}/>
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
              <Image src={item.dp} alt="" width={270} height={299}/>
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
              <Image src={item.dp} alt="" width={270} height={299}/>
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