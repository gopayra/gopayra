import Image from "next/image";
import React, { useState } from "react";
import Container from "./Container";
import HeadingText from "../UI/HeadingText";
import SubHeadingText from "../UI/SubHeadingText";
import Thumbnail from "../../assets/images/video-thumbnail.jpg";

const HowItWorksVideo = () => {
  return (
    <section className="mt-24">
      <Container>
        <div className="map-bg-right h-full pb-20">
          <HeadingText text="How it works" />
          <SubHeadingText text="Here is a video how we operate our system" />

          <div className="flex justify-center items-center mt-10">
            <div className="flex overflow-hidden">
            <iframe
              width="720"
              height="720"
              src="https://www.youtube.com/embed/Pk3wAOlJ9KI?controls=0&rel=0"
              title="YouTube video player"
            ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksVideo;
