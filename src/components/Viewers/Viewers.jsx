import React from "react";
import Image from "../Images/Image";
import { Container, Video } from "./Viewers.styles";

export const Viewers = ({ src, videoSrc }) => {
  return (
    <Container>
      <Image src={src} width="100%" />
      <Video src={videoSrc} autoPlay={true} loop={true} playsInline={true}>
        <source src={videoSrc} type="video/mp4" />
      </Video>
    </Container>
  );
};

export default Viewers;
