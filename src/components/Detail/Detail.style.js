import styled from "styled-components";

export const Banner = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
    opacity: 0.8;
  }
`;

export const ContentMeta = styled.div`
  position: absolute;
  width: 100%;
  min-height: 30vh;
  padding-top: 24px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  > img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
    float: left;
  }
`;

export const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0;
  min-height: 56px;
  width: 100%;
`;

export const SmallButton = styled.button`
  border-radius: 50%;
  border: 2px solid rgb(249, 249, 249);
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 4px;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
  }

  span:first-child {
    height: 2px;
    transform: translate(1px, 0px) rotate(0deg);
    width: 16px;
  }

  span:nth-child(2) {
    height: 16px;
    transform: translateX(-8px) rotate(0deg);
    width: 2px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  display: flex;
  justify-content: flex;
  letter-spacing: 1.8px;
  text-align: center;
  background: ${(props) =>
    props.variation === "invert" ? "rgb(0, 0, 0, 0.3)" : "rgb(249, 249, 249)"};
  border: 1px solid rgb(249, 249, 249);
  font-size: 15px;
  color: ${(props) =>
    props.variation === "invert" ? "rgb(249, 249, 249)" : "rgb(0, 0, 0)"};

  img {
    max-width: 32px;
    max-height: 32px;
    filter: invert(
      ${(props) => (props.variation === "invert" ? "100%" : "0%")}
    );
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0 12px;
    font-size: 12px;
    margin: 0 10px 0 0;

    img {
      width: 25px;
    }
  }
`;

export const Text = styled.p`
  color: rgb(249, 249, 249);
  font-size: ${(props) => (props.variation === "subtitle" ? "20px" : "15px")};
  min-height: 20px;
  text-align: left;
  line-height: 1.4px;
  padding: 16px 0;

  @media (max-width: 758px) {
    font-size: ${(props) => (props.variation === "subtitle" ? "14px" : "12px")};
  }
`;
