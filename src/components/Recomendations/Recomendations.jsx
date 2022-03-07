import React from "react";
import { Container, Content } from "./Recomendations.styles";
import { ViewerImage } from "../Viewers/Viewers";
import { Grid } from "../Home/Home.style";
import { Link } from "react-router-dom";
import Text from "../Text/Text";

export const Recomendations = () => {

    const recomendationsArray = [
        {
            url: "",
            src: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"
        }
    ]
  return (
    <Container>
      <Content>
        <Text type="h4">Recomended for You</Text>
        <Grid columns={4} responsive={2}>
            {
                recomendationsArray.map((recomendation) => <Link to={recomendation.url}>
                <ViewerImage src={recomendation.src} />
            </Link>)
            }
            
        </Grid>
      </Content>
    </Container>
  );
};

export default Recomendations;
