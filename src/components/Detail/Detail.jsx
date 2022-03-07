/* eslint-disable no-sequences */
import React, { useState, useEffect } from "react";
import { Container, Content, Wrap } from "../Home/Home.style";
import Image from "../Images/Image";
import { db, doc, getDoc } from "../../firebase";
import { useParams } from "react-router-dom";

import {
  Banner,
  ContentMeta,
  Controls,
  Button,
  Text,
  SmallButton,
} from "./Detail.style";

export const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  const fetchData = async () => {
    const docRef = doc(db, "movies", id);
    const docSnap = await getDoc(docRef);

    setDetailData(docSnap.data());
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <Container>
      <Content style={{ paddingTop: 0 }}>
        <Banner>
          <Image src={detailData.backgroundImg} />

          <ContentMeta>
            <Image src={detailData.titleImg} />

            <Wrap>
              <Controls>
                <Button>
                  <Image src="/images/play-icon-black.svg" alt="Play image" />
                  PLAY
                </Button>

                <Button variation="invert">
                  <Image
                    src="/images/play-icon-black.svg"
                    alt="Trailer image"
                  />
                  TRAILER
                </Button>

                <SmallButton>
                  <span></span>
                  <span></span>
                </SmallButton>

                <SmallButton>
                  <span></span>
                  <Image src="/images/group-icon.svg" alt="Group" />
                </SmallButton>
              </Controls>

              <Text variation="subtitle">
                {detailData.subTitle} <br />
              </Text>
              <Text variation="description">{detailData.description}</Text>
            </Wrap>
          </ContentMeta>
        </Banner>
      </Content>
    </Container>
  );
};

export default Detail;
