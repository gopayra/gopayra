import Head from "next/head";
import CommingSoon from "../../components/common/CommingSoon";
import Container from "../../components/common/Container";
import Image from "next/image";
import Thumbnail from "../../assets/images/card-thumbnail.webp";
import Link from "next/link";

export default function index() {
  const cardData = [
    {
      title: "Gopayra Supply Chain Logistics!",
      description:
        "If you're reading this, you're probably already familiar with the concept of supply chain logistics and its importance in today's global economy.....",
      link: "/blog/gopayra-supply-chain-logistics",
      animation: "fade-right",
    },
    {
      title: "All in one Delivery service.",
      description:
        "It's no secret that delivery services are becoming more and more popular for both businesses and consumers. Whether it's delivering services like grocery delivery,...",
      link: "/blog/all-in-one-delivery-service",
      animation: "zoom-in",
    },
    {
      title:
      "Gopayra is the largest digital freight forwarder.....",
      description:
        "Logistics can be a daunting task, but it doesn't have to be. With the right digital freight forwarder platform, you can make your on-road logistics process easier and more efficient....",
      link: "/blog/gopayra-on-road-logistics",
      animation: "fade-left",
    },
  ];
  return (
    <>
      <Head>
        <title>GOPAYRA - Blog</title>
        <meta name="description" content="Go Payra Easy Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-gopayra h-[250px]">
          <Container>
            <div className="mx-auto text-white mt-24" data-aos="fade-right">
              <h1 className="text-6xl font-bold text-center">All Blogs</h1>
            </div>
          </Container>
        </div>
        <BlogsContainer cardData={cardData} />
      </main>
    </>
  );
}

const BlogsContainer = ({ cardData }) => {
  return (
    <Container>
      {cardData.map((item, index) => {
        return (
          <Link href={item.link} key={index}>
            <div className="grid grid-cols-3 gap-10 cursor-pointer hover:bg-green-200 rounded-lg my-10 hover:scale-105 transition-all">
              <div className="flex">
                <Image src={Thumbnail} alt="" />
              </div>

              <div className="col-span-2">
                <h1 className="text-2xl font-semibold my-4">
                  {item.title}
                </h1>
                <p className="pr-10">{item.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </Container>
  );
};
