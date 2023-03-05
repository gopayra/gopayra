import React from 'react';

// all images imports
import manageShipments from '../../assets/images/solutionsPages/manageShipments.webp'
import autoPickup from '../../assets/images/solutionsPages/autoPickup.webp'
import completeTracking from '../../assets/images/solutionsPages/completeTracking.webp'
import routeOptimization from '../../assets/images/solutionsPages/routeOptimization.webp'
import performanceAnalysis from '../../assets/images/solutionsPages/performanceAnalysis.webp'
import aNewChange from '../../assets/images/solutionsPages/aNewChange.webp'
import GridLayout from '../common/GridLayout';
import GridLayoutBig from '../common/GridLayoutBig';

const LogisticsManagement = () => {
  return (
    <>
      <GridLayout
        heading="Manage shipments in one place"
        description="Smart dashboard for receiving and sending order requests through TMS software. Track the entire order fulfilment cycle and facilitate timely actions such as deletions, cancellations and reallocations with TMS logistics"
        thumbnail={manageShipments}
        leftImage
      />

      <GridLayout
        heading="Auto pickup and delivery dispatch"
        description='The TMS logistics system automatically schedules pickup and delivery to the nearest drivers after receiving the order. The driver immediately sends a "delivery alert" to his app to accept new delivery jobs.'
        thumbnail={autoPickup}
      />

      <GridLayout
        heading="Complete tracking"
        description="Ensure real-time driver and truck tracking using our delivery truck routing software. Manage dispatch status and driver activity timeline for zero delay in dispatch with best Gopayra software."
        thumbnail={completeTracking}
        leftImage
      />

      <GridLayout
        heading="Route Optimization for Drivers"
        description="Our Trucking logistics Software offers route optimization to pick the shortest & fastest routes, helping you reduce costs and boost efficiency."
        thumbnail={routeOptimization}
      />

      <GridLayout
        heading="Performance analysis"
        description="Dispatch Monitor - Deliveries - Tracking, number of deliveries, ratings and reviews of drivers, cancelled and delayed orders and more to help you take control of your business with top trucking software."
        thumbnail={performanceAnalysis}
        leftImage
      />

      <GridLayoutBig
        heading="A new change means a new opportunity"
        description="Gopayra continues to set new expectations for customers in both B2B and B2C. It is very challenging for shippers to adopt advanced technology tools in a cost-effective and most efficient way to weather the storm."
        description2='The co-existence of demand and supply allows shippers flexibility when choosing a transporter or carrier according to supply needs. Likewise, now carriers can pick or reject an incoming freight from an integrity and economic perspective, the innovative model allows them to deal with those who behave properly and pay on time.'
        thumbnail={aNewChange}
      />
    </>
  );
};

export default LogisticsManagement;