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

export const Player = styled.button`
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
  background: rgb(249, 249, 249);
  border: none;
  font-size: 15px;
  color: rgb(0, 0, 0);

  img {
    max-width: 32px;
    max-height: 32px;
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
