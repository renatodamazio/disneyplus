import React from "react";
import Image from "../Images/Image";
import { Container, Video } from "./Viewers.styles";

export const ViewerImage = ({ src }) => {
  return (
    <Container>
      <Image src={src} width="100%" />
    </Container>
  );
};

export const Viewers = ({ src, videoSrc }) => {
  return (
    <Container>
      <Image src={src} width="100%" />
      <Video src={videoSrc} loop muted autoPlay controls="">
        <source src={videoSrc} type="video/mp4" />
      </Video>
    </Container>
  );
};

export default Viewers;
