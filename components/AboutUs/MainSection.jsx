import React from 'react';
import GridLayout from '../common/GridLayout';
import ourStory from '../../assets/images/aboutusPage/ourStory.webp';
import ourGoal from '../../assets/images/aboutusPage/ourGoal.webp';
import growingGroup from '../../assets/images/aboutusPage/growingGroup.webp';

const MainSection = () => {
  return (
    <>
      <div className='mt-16'></div>
      <GridLayout
        heading="Our story"
        description='We plan to have the truck serviced in 2019 and have been planning ever since. Now we at Gopayra are the market leader in providing smart logistics technology solutions to provide an optimal channel presence. We believe in bringing dream business projects to life and providing a hassle-free experience. We have succeeded in offering a comprehensive online platform for any business genre, from start-ups to reaching new growth parameters.'
        thumbnail={ourStory}
        leftImage
      />

      <GridLayout
        heading="Our goal"
        description='Making logistics business an easy process for everyone.
        Our aim is to reshape the logistics sector of Bangladesh in the future, where these platforms will run on complete automation systems. This sector can be a trouble free sector.
        Creating a digital infrastructure to eliminate inefficiencies'
        thumbnail={ourGoal}
      />

      <GridLayout
        heading="Growing group of people"
        description="Gopayara has grown tremendously over time and our team works hard day and night to deliver the requirements and meet the client's goals. We may not be the best but we are determined to be the best and thats what makes us a team of passionate people dedicated to delivering an experience that makes technology and all technology matter."
        thumbnail={growingGroup}
        leftImage
      />
    </>
  );
};

export default MainSection;