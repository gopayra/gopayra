import Head from "next/head";
import CommingSoon from "../../components/common/CommingSoon";

export default function index() {
  return (
    <>
      <Head>
        <title>GOPAYRA - Careers</title>
        <meta name="description" content="Go Payra Easy Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CommingSoon text="Careers"/>
      </main>
    </>
  );
};