import React from "react";
import { Container, Content } from "./Recomendations.styles";
import { ViewerImage } from "../Viewers/Viewers";
import { Grid } from "../Home/Home.style";
import { Link } from "react-router-dom";
import Text from "../Text/Text";

export const Recomendations = ({ title, items }) => {
  return (
    <Container>
      <Content>
        <Text type="h4">{title}</Text>
        <Grid columns={4} responsive={2}>
          {items.map((item) => (
            <Link to={item.url}>
              <ViewerImage src={item.src} />
            </Link>
          ))}
        </Grid>
      </Content>
    </Container>
  );
};

export default Recomendations;
