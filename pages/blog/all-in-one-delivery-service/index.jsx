import React from "react";
import Container from "../../../components/common/Container";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Thumbnail from "../../../assets/images/card-thumbnail.webp";
import Image1 from "../../../assets/images/solutionsPages/proofOfDelivery.webp";
import Image2 from "../../../assets/images/solutionsPages/scheduling.webp";

const index = () => {
  return (
    <>
      <Head>
        <title>GOPAYRA Blog - All in One Delivery Service</title>
        <meta name="description" content="Go Payra Easy Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-gopayra text-white pt-32 pb-16">
          <Container>
            <h2 className="text-4xl font-semiBold text-center">
              All in one Delivery service
            </h2>
          </Container>
        </div>
        <Container>
          <div className="grid grid-cols-3 gap-8 mt-14">
            <div className="col-span-2">
              <p className="text-lg my-10">
                It&apos;s no secret that delivery services are becoming more and more
                popular for both businesses and consumers. Whether it&apos;s
                delivering services like grocery delivery, restaurant delivery,
                or even home repairs, it&apos;s hard to beat the convenience of
                having something delivered to you. But what if you could fulfil
                all your delivery needs in one app?
              </p>
              <div className="flex justify-center">
                <Image src={Image1} alt="" />
              </div>

              <p className="text-lg my-10">
                That&apos;s where all-in-one delivery on the <b className="text-gopayra">Gopayra</b> app comes in.
                All in One Delivery is a powerful delivery system that allows
                users to access multiple delivery services from one easy-to-use
                app. With All-in-One Delivery, users can request delivery
                services from multiple providers, such as restaurants, grocery
                stores, and home repair companies, all in one place.
              </p>
              <div className="flex justify-center">
                <Image src={Image2} alt="" />
              </div>
              <p className="text-lg my-10">
                The app makes it easy to compare prices and delivery times
                between different providers and make an informed decision. You
                can also customize your delivery preferences, such as choosing
                to receive text notifications when your order is on its way.
                Also, the app offers a variety of payment methods, so you can
                pay with your preferred payment method.
              </p>
              <p className="text-lg my-10">
                All in One Delivery connects you with a network of reliable
                local delivery providers, so you can be sure your order will
                arrive on time and in optimal condition. And if you need help
                ordering, the app.
              </p>
              <p className="text-lg my-10">
                The best way to use all delivery services in the Gopayra app is
                to use an app like All-in-One Delivery.
              </p>
              {/* footer of blgpost */}
              <div className="flex justify-between text-gopayra font-bold ">
                <Link href="/blog/gopayra-supply-chain-logistics">
                  <p className="hover:text-black cursor-pointer hover:scale-105 transition-all">
                    ⬅️ GoPayra supply chain logistics.....
                  </p>
                </Link>
                <Link href="/blog/gopayra-on-road-logistics">
                  <p className="hover:text-black cursor-pointer hover:scale-105 transition-all">
                    GoPayra on road logistics.....➡️
                  </p>
                </Link>
              </div>
            </div>

            <div className="col-span-1">
              <h2 className="text-gopayra font-bold">Our Other Blogs</h2>

              <Link href="/blog/gopayra-supply-chain-logistics">
                <div className="flex gap-4 cursor-pointer hover:bg-green-200 rounded-lg my-10 hover:scale-105 transition-all">
                  <div className="flex">
                    <Image src={Thumbnail} alt="" width={120} height={80} />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold my-4">
                    GoPayra Supply Chain Logistics...
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
