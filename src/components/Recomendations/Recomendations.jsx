import React from "react";
import { Container, Content } from "./Recomendations.styles";
import { ViewerCard } from "../Viewers/Viewers";
import { Grid } from "../Home/Home.style";
export const Recomendations = () => {
  return (
    <Container>
      <Content>
        <h4>Recomendations</h4>

        <Grid columns={4} responsive={ 2 }>
          <ViewerCard />
          <ViewerCard />
          <ViewerCard />
          <ViewerCard />
        </Grid>
      </Content>
    </Container>
  );
};

export default Recomendations;
