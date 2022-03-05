import React from 'react';
import { Container, Content } from "./Home.style";
import ImageSlider from '../Slider/ImageSlider';
export const Home = () => {
  return (
    <Container>
        <Content>
            <ImageSlider />
        </Content>
    </Container>
  )
}

export default Home;

