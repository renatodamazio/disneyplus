/* eslint-disable no-sequences */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Content, Grid, Wrap } from "./Home.style";
import ImageSlider from "../Slider/ImageSlider";
import Viewers from "../Viewers/Viewers";
import { Recomendations } from "../Recomendations/Recomendations";
import { db, collection, getDocs } from "../../firebase";
import { selectUserName } from "../store/reducers/User/userSlice.js";

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

  const userName = useSelector(selectUserName);

  const [recommended, setRecommended] = useState([]);
  const [destakHome, setDestakHome] = useState([]);
  const [trending, setTrending] = useState([]);
  const [newDisney, setNewDisney] = useState([]);
  const [originals, setOriginals] = useState([]);

  const getFirebaseDestakHome = async () => {
    const docRef = collection(db, "movies");
    const response = await getDocs(docRef);
    setDestakHome(response);
  };

  useEffect(() => {
    destakHome.forEach((doc) => {
      let movie = doc.data();

      switch (movie.type) {
        case "recommend":
          setRecommended((prev) => [...prev, { id: doc.id, ...movie }]);
          break;
        case "new":
          setNewDisney((prev) => [...prev, { id: doc.id, ...movie }]);
          break;
        case "trending":
          setTrending((prev) => [...prev, { id: doc.id, ...movie }]);
          break;
        case "original":
          setOriginals((prev) => [...prev, { id: doc.id, ...movie }]);
          break;
        default:
      }
    });
  }, [destakHome]);

  useEffect(() => {
    if (recommended.length === 0) {
      getFirebaseDestakHome();
    }
  }, [recommended.length]);

  return (
    <Container >
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
          <Recomendations title="Recomendations for You" items={recommended} />
        </Wrap>
      </Content>

      <Content>
        <Wrap>
          <Recomendations title="New to Disney +" items={newDisney} />
        </Wrap>
      </Content>

      <Content>
        <Wrap>
          <Recomendations title="Originals" items={originals} />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Home;
