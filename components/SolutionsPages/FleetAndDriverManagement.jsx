import React from 'react';
import GridLayoutBig from '../common/GridLayoutBig';
import benefitsOfAI from '../../assets/images/solutionsPages/benefitsOfAI.webp';
import GopayraVehicleTrackingSolutions from '../../assets/images/solutionsPages/GopayraVehicleTrackingSolutions.webp';
import keepYourUpToSpeed from '../../assets/images/solutionsPages/keepYourUpToSpeed.webp';
import increaseVisibilty from '../../assets/images/solutionsPages/increaseVisibilty.webp';
import fleetAvailability from '../../assets/images/solutionsPages/fleetAvailability.webp';
import intelligentRoute from '../../assets/images/solutionsPages/intelligentRoute.webp';
import ratingsAndReviews from '../../assets/images/solutionsPages/ratingsAndReviews.webp';
import readyToImprove from '../../assets/images/solutionsPages/readyToImprove.webp';
import GridLayout from '../common/GridLayout';
import Container from '../common/Container';
import Image from 'next/image';

const FleetAndDriverManagement = () => {
  return (
    <>
      <GridLayout
        heading="Gopayra Now Vehicle Tracking Solutions & Fleet Monitoring"
        description='Fleet management should live in your pocket. Gopayra’s web and mobile-based software allows you to automate fleet maintenance tasks and keep vehicles and drivers running smoothly from anywhere. It simplifies real-time fleet tracking and monitoring while promoting fleet operations at efficient capacities. Our data-analytic tools and reports help you cut expenses. Regardless of your business needs, Gopayra is your quick fix.'
        thumbnail={GopayraVehicleTrackingSolutions}
        leftImage
      />

      {/* keep your fleet up section */}
      <section>
        <Container>
          <div className='h-full grid grid-cols-1 md:grid-cols-2 items-center mt-12'>

            <div data-aos="zoom-in">
              <h1 className='text-heading font-semibold mb-8'>Keep Your Fleet Up to Speed</h1>
              <p className='text-lg mb-8'>Boost profits & reduce delays by monitoring your fleet with our fleet management & tracking system.</p>

              <h1 className='text-2xl font-semibold mb-4'>We have GPS vehicle tracking system & Live alerts for customers</h1>
              <p className='text-lg mb-8'>Keep our customers updated the fleet delivery lifecycle by sending them real-time SMS alerts at various stages. Reduce Vehicle Downtime and boost efficiency with our vehicle tracking software.</p>

              <h1 className='text-2xl font-semibold mb-4'>Real-Time GPS Tracking</h1>
              <p className='text-lg mb-8'>Real- time GPS Tracking, managing and eyeing multiple vehicles at once</p>
            </div>

            <div data-aos="fade-left" className='flex justify-end'>
              <Image src={keepYourUpToSpeed} alt="" />
            </div>
          </div>
        </Container>
      </section>

      {/* keep your fleet up section */}
      <section>
        <Container>
          <div className='h-full grid grid-cols-1 md:grid-cols-2 items-center mt-12'>

            <div data-aos="fade-right" >
              <Image src={benefitsOfAI} alt="" width={461} height={340} />
            </div>

            <div data-aos="zoom-in">
              <h1 className='text-2xl font-semibold mb-2'>Route Optimization to reduce Fleet run time & costVehicle Management</h1>
              <p className='text-lg mb-8'>Real- time GPS Tracking, managing and eyeing multiple vehicles at once</p>

              <h1 className='text-2xl font-semibold mb-2'>Driver Behaviour</h1>
              <p className='text-lg mb-8'>Assesses speed limits, brakes usage, reckless driving, extra stops.</p>

              <h1 className='text-2xl font-semibold mb-4'>Fleet Manager Dashboard</h1>
              <p className='text-lg'>Get a bird’s-eye view of fleet productivity and manage exceptions in real-time.</p>
            </div>

          </div>
        </Container>
      </section>

      {/* keep your fleet up section */}
      <section>
        <Container>
          <div className='h-full grid grid-cols-1 md:grid-cols-2 items-center mt-12'>

            <div data-aos="zoom-in">
              <h1 className='text-2xl font-semibold mb-2'>Increase visibility</h1>
              <p className='text-lg mb-6'>Keep your team in the know. Full-screen mode makes it easy to display real-time dashboards on TVs in your office.</p>

              <h1 className='text-2xl font-semibold mb-2'>Get speedy insight</h1>
              <p className='text-lg mb-6'>Build a robust dashboard in just a few minutes. Add charts and graphs and customise the layout to keep key performance metrics top of mind.</p>

              <h1 className='text-2xl font-semibold mb-4'>Share data securely</h1>
              <p className='text-lg'>Create shared dashboards for key stakeholders across your organisation— technicians, drivers, management, etc. Control access with fine-grained permissions.</p>
            </div>

            <div data-aos="fade-left" className='flex justify-end'>
              <Image src={increaseVisibilty} alt="" width={461} height={340} />
            </div>

          </div>
        </Container>
      </section>

      <GridLayout
        heading="Fleet availability & Auto Dispatch"
        description='Fleet availability for order servicing is monitored and a check is kept on fleet capacity. Our entire fleet map is provided on the manager dashboard to check fleet availability and schedule. Plan ahead to ensure full capacity utilization and no business losses. Automatic dispatch to idle fleet as per alerts sent to route mills and associated fleet drivers. Complete fleet management solution.'
        thumbnail={fleetAvailability}
        leftImage
      />

      <section>
        <Container>
          <div className='h-full grid grid-cols-1 md:grid-cols-2 items-center mt-12'>

            <div data-aos="zoom-in">
              <h1 className='text-heading font-semibold mb-8'>Intelligent Route ptimization</h1>
              <h1 className='text-2xl font-semibold mb-4'>Vehicle-Based Optimization</h1>
              <p className='text-lg mb-6'>Cover van, Pickup, bikes or cars, map a route and optimize your fleet based on vehicle type taking into account its volume, speed & fuel efficiency.</p>

              <h1 className='text-2xl font-semibold mb-4'>Monitor and Manage Your Routes</h1>
              <p className='text-lg mb-6'>Select and plan the routes that you would like to optimize and assign to drivers based on their availability and location by taking help of a route optimization software.</p>

              <h1 className='text-2xl font-semibold mb-4'>Multi-Stop Route Planner</h1>
              <p className='text-lg'>Create a single task for single pickup and multiple drop-offs. Plan and optimize your routes for speedy drop-offs with the help of a delivery route planner app.</p>

            </div>

            <div data-aos="fade-left" className='flex justify-end'>
              <Image src={intelligentRoute} alt="" />
            </div>
          </div>
        </Container>
      </section>

      <GridLayout
        heading="Ratings and reviews"
        description='Allows your clients to share reviews in an easy, fast and non-intrusive way. Lets manage different fleet orders and ratings for fleet drivers to create a brand outside of your business. Customers are able to share good things about you on social media and other relevant portals and create some buzz.'
        thumbnail={ratingsAndReviews}
        leftImage
      />

      <GridLayout
        heading="Ready to improve your fleet & driver nagement?"
        description='If you’re ready to learn more about smarter fleet & driver management, let us know and one of our Sales Development Representatives will be in touch!'
        thumbnail={readyToImprove}
      />
      <div className='mb-20'></div>
    </>
  );
};

export default FleetAndDriverManagement;