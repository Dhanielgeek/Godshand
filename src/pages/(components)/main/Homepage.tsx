import Mainlayouts from "@/pages/layouts/Mainlayouts";
import Head from "next/head";
import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";

const Homepage = () => {
  return (
    <Mainlayouts>
      <Head>
        <title>GodsHand</title>
      </Head>
      <section>
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Portfolio />
      </section>
    </Mainlayouts>
  );
};

export default Homepage;
