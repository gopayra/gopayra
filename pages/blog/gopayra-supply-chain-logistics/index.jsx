import React from "react";
import Container from "../../../components/common/Container";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Thumbnail from "../../../assets/images/card-thumbnail.webp";
import Image1 from "../../../assets/images/supplyChain.png";
import Image2 from "../../../assets/images/showcase1.png";

const index = () => {
  return (
    <>
      <Head>
        <title>GOPAYRA Blog - Gopayra Supply Chain Logistics!</title>
        <meta name="description" content="Go Payra Easy Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-gopayra text-white pt-32 pb-16">
          <Container>
            <h2 className="text-4xl font-semiBold text-center">
              Welcome to the world of Gopayra Supply Chain Logistics!
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
                If you&apos;re reading this, you&apos;re probably already
                familiar with the concept of supply chain logistics and its
                importance in today&apos;s global economy. But, if you&apos;re
                just starting out, it&apos;s important to understand the key
                elements that make up a successful supply chain logistics
                strategy.
              </p>

              <p className="text-lg my-10">
                At its core, supply chain logistics is the management and
                coordination of the movement of goods from their point of origin
                to their destination. This includes transportation, storage and
                delivery of products from raw materials to the end user. It
                involves a complex network of activities, people and technology
                that come together to ensure that products are delivered in a
                timely, cost-effective and efficient manner.
              </p>
              <div className="flex justify-center">
                <Image src={Image2} alt="" />
              </div>
              <p className="text-lg my-10">
                Gopayra As a supply chain logistics service provider, we
                understand that each of our customers has unique needs.
                That&apos;s why we offer customized solutions to suit each
                client&apos;s unique requirements. We understand that no two
                supply chains are the same and we strive to provide the best
                service to ensure the success of your business.
              </p>
              <p className="text-lg my-10">
                From carrier selection and transport route optimization to cargo
                and warehousing management, our team of experienced
                professionals help you navigate the complexities in the smartest
                way possible.
              </p>
              {/* footer of blgpost */}
              <div className="flex justify-between text-gopayra font-bold ">
                <Link href="/blog/all-in-one-delivery-service" >
                  <p className="hover:text-black cursor-pointer hover:scale-105 transition-all">⬅️ All In one Delivery.....</p>
                </Link>
                <Link href="/blog/gopayra-on-road-logistics">
                  <p className="hover:text-black cursor-pointer hover:scale-105 transition-all">GoPayra on road logistics.....➡️</p>
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

              <Link href="/blog/gopayra-on-road-logistics">
                <div className="flex gap-4 cursor-pointer hover:bg-green-200 rounded-lg my-10 hover:scale-105 transition-all">
                  <div className="flex">
                    <Image src={Thumbnail} alt="" width={120} height={80} />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold my-4">
                      GoPayra on road logistics......
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
