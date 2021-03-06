import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding-top: 60px;
  background: url("/images/home-background.png") center/cover no-repeat fixed;
`;

export const Content = styled.section`
  width: 100%;
  float: left;
  padding: 30px 0px 26px;
`;

export const Wrap = styled.div`
  padding: 0 36px;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(
    ${(props) => (props.columns ? props.columns : 5)},
    minmax(0, 1fr)
  );

  @media (max-width: 768px) {
    grid-template-columns: repeat(
      ${(props) => (props.responsive ? props.responsive : 1)},
      minmax(0, 1fr)
    );
  }
`;
