import React from "react";
import Container from "../../../components/common/Container";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Thumbnail from "../../../assets/images/card-thumbnail.webp";
import Image1 from "../../../assets/images/solutionsPages/FleetandDriver.webp";
import Image2 from "../../../assets/images/solutionsPages/fleetAvailability.webp";

const index = () => {
  return (
    <>
      <Head>
        <title>GOPAYRA Blog - GoPayra on Road Logistics</title>
        <meta name="description" content="Go Payra Easy Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-gopayra text-white pt-32 pb-16">
          <Container>
            <h2 className="text-4xl font-semiBold text-center">
              Gopayra is the largest digital freight forwarder platform for your
              on-road logistics.
            </h2>
          </Container>
        </div>
        <Container>
          <div className="grid grid-cols-3 gap-8 mt-14">
            <div className="col-span-2">
              <div className="flex justify-center">
                <Image src={Image1} alt="" />
              </div>
              <p className="text-lg my-10">
                Logistics can be a daunting task, but it doesn&apos;t have to
                be. With the right digital freight forwarder platform, you can
                make your on-road logistics process easier and more efficient.
              </p>

              <p className="text-lg my-10">
                At Gopayra, we provide an innovative and comprehensive digital
                freight forwarding platform that enables you to streamline your
                on-road logistics. Our platform offers a wide range of services,
                including:
              </p>

              <p className="text-lg my-10">
                • Automatic Rate Discovery: We make it easy to quickly find the
                best rate for your invoice. Our platform automatically searches
                for the best rates within our network of over 20,000 carriers.dc
              </p>
              <p className="text-lg my-10">
                • Real-time tracking: Our platform allows you to track your
                shipments in real-time, so you always know where your products
                are.
              </p>
              <p className="text-lg my-10">
                • Comprehensive visibility: Our platform gives you detailed
                visibility into every step of your supply chain, from pickup to
                delivery.
              </p>
              <p className="text-lg my-10">
                • Automated document management: Our platform makes it easy to
                manage all your documents, from bills of lading to customs
                documents.
              </p>
              <p className="text-lg my-10">
                • Advanced analytics: Our platform provides advanced analytics
                capabilities, so you can make data-driven decisions about your
                on-road logistics.
              </p>
              <div className="flex justify-center">
                <Image src={Image2} alt="" />
              </div>
              <p className="text-lg my-10">
                At Gopayarat, we understand that on-road logistics can be
                complicated, and we&apos;re here to make it simple. Our digital
                freight forwarding platform is designed to help you streamline
                your on-road logistics process, so you can focus on what matters
                most: providing superior service to your customers.
              </p>
              {/* footer of blgpost */}
              <div className="flex justify-between text-gopayra font-bold ">
                <Link href="/blog/all-in-one-delivery-service">
                  <p className="hover:text-black cursor-pointer hover:scale-105 transition-all">
                    ⬅️ All In one Delivery.....
                  </p>
                </Link>
                <Link href="/blog/gopayra-supply-chain-logistics">
                  <p className="hover:text-black cursor-pointer hover:scale-105 transition-all">
                    GoPayra supply chain logistics.....➡️
                  </p>
                </Link>
              </div>
            </div>

            <div className="col-span-1">
              <h2 className="text-gopayra font-bold">Our Other Blogs</h2>

              <Link href="/blog/all-in-one-delivery-service">
                <div className="flex gap-4 cursor-pointer hover:bg-green-200 rounded-lg my-10 hover:scale-105 transition-all">
                  <div className="flex">
                    <Image src={Thumbnail} alt="" width={120} height={80} />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold my-4">
                      All in one Delivery service...
                    </h1>
                  </div>
                </div>
              </Link>

              <Link href="/blog/gopayra-supply-chain-logistics">
                <div className="flex gap-4 cursor-pointer hover:bg-green-200 rounded-lg my-10 hover:scale-105 transition-all">
                  <div className="flex">
                    <Image src={Thumbnail} alt="" width={120} height={80} />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold my-4">
                      GoPayra supply chain logistics......
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export default index;
