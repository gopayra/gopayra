import Thumbnail from '../../assets/images/supplyChain.png';
import ServicesPageLayout from '../../components/common/ServicesPageLayout';

const servicesData = [{
  Thumbnail: Thumbnail,
  title: "Rent by day",
  description: "(Rent a truck 1st day of each month.) Renting a Car/Truck/ Ambulance and driver for your multi-stop trips. Safety Packing, moving, and removal of goods takes a lot of effort when you do it all on your own.",
  link: "rent-by-day"
}, {
  Thumbnail: "Thumbnail2",
  title: "Rent by Trip",
  description: 'Choose which transport you need to hire from the Gopayra fleet. Find it now! Choose from the transport that Gopayara offers. Read our reviews, secure booking. Get instant confirmation. 24/7 customer service is available for one and a half of our customers.',
  link: "rent-by-trip"
}, {
  Thumbnail: "Thumbnail3",
  title: "Move my home",
  description: 'Gopayra is the best packers and movers software for you',
  link: "move-my-home"
}, {
  Thumbnail: "Thumbnail4",
  title: "Office & commercial move",
  description: 'Gopayra works as packers and movers in any leading area of Bangladesh with modern technology.',
  link: "office-and-commercial-move"
}, {
  Thumbnail: "Thumbnail5",
  title: "Courier & Parcel",
  description: 'Gopayra Courier and Parcel Management Software solves all types of shipments instantly. Which can take your business to the best position.',
  link: "courier-and-parcel"
}, {
  Thumbnail: "Thumbnail6",
  title: "Gopayra Food Delivery",
  description: 'We always try our best to provide you with a flawless service',
  link: "food-delivery"
}]

export async function getStaticProps() {
  return {
    props: {
      servicesData,
    },
  };
}

export const getStaticPaths = async () => {
  const paths = servicesData.map(item => {
    return {
      params: { servicesName: item.link }
    }
  })

  return {
    paths,
    fallback: false
  }
}



export default function Solutions() {
  return <ServicesPageLayout servicesData={servicesData} />;
};