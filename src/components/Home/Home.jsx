import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Content, Grid, Wrap } from "./Home.style";
import ImageSlider from "../Slider/ImageSlider";
import Viewers from "../Viewers/Viewers";
import { Recomendations } from "../Recomendations/Recomendations";
import { db, collection, getDocs } from "../../firebase";
import { selectUserName } from "../store/reducers/User/userSlice.js";
import { setMovies } from "../store/reducers/Movies/movieSlicer";

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

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommended = [];
  let trending = [];
  let newDisney = [];
  let originals = [];

  useEffect(() => {
    const movies = async () => {
      const docRef = collection(db, "movies");
      const querySnapshot = await getDocs(docRef);

      querySnapshot.forEach((doc) => {
        let movie = doc.data();

        switch (movie.type) {
          case "recommend":
            recommended.push({ id: doc.id, movie });
            break;
          case "new":
            newDisney.push({ id: doc.id, movie });
            break;
          case "trending":
            trending.push({ id: doc.id, movie });
            break;
          case "original":
            originals.push({ id: doc.id, movie });
            break;
          default:
        }
      });

      dispatch(
        setMovies({
          recommend: recommended,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    };

    movies();
  }, []);

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
