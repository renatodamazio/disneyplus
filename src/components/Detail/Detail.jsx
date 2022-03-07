/* eslint-disable no-sequences */
import React from "react";
import { Container, Content, Wrap } from "../Home/Home.style";
import Image from "../Images/Image";
import { Banner, ContentMeta, Controls, Player } from "./Detail.style";

export const Detail = () => {
  return (
    <Container>
      <Content style={{ paddingTop: 0 }}>
        <Banner>
          <Image src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg" />

          <ContentMeta>
            <Image src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78" />

            <Controls>
              <Wrap>
                <Player>
                  <Image
                    src="/images/play-icon-black.svg"
                  />
                  PLAY
                </Player>
              </Wrap>
            </Controls>
          </ContentMeta>
        </Banner>
      </Content>
    </Container>
  );
};

export default Detail;
