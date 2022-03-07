import React from "react";
import { Container, Content, Grid, Wrap } from "./Home.style";
import ImageSlider from "../Slider/ImageSlider";
import Viewers from "../Viewers/Viewers";
import { Recomendations } from "../Recomendations/Recomendations";

const recomendationsArray = [
  {
    url: "",
    src: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg",
  },
];

export const Home = () => {
  const viewerContent = [
    {
      src: "/images/viewers-disney.png",
      video: "/videos/1564674844-disney.mp4",
      title: "Disney logo",
    },
    {
      src: "/images/viewers-marvel.png",
      video: "/videos/1564676115-marvel.mp4",
      title: "Marvel logo",
    },
    {
      src: "/images/viewers-national.png",
      video: "/videos/1564676296-national-geographic.mp4",
      title: "National logo",
    },
    {
      src: "/images/viewers-pixar.png",
      video: "/videos/1564676714-pixar.mp4",
      title: "Pixar Logo",
    },
    {
      src: "/images/viewers-starwars.png",
      video: "/videos/1608229455-star-wars.mp4",
      title: "Star Wars",
    },
  ];

  return (
    <Container>
      <Content>
        <ImageSlider />
      </Content>
      <Content>
        <Wrap>
          <Grid>
            {viewerContent.map((viewer, key) => (
              <Viewers src={viewer.src} key={key} videoSrc={viewer.video} />
            ))}
          </Grid>
        </Wrap>
      </Content>

      <Content>
        <Wrap>
          <Recomendations title="Recomendations for You" items={recomendationsArray} />
        </Wrap>
      </Content>

      <Content>
        <Wrap>
          <Recomendations title="New to Disney +" items={recomendationsArray} />
        </Wrap>
      </Content>

      <Content>
        <Wrap>
          <Recomendations title="Originals" items={recomendationsArray} />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Home;
