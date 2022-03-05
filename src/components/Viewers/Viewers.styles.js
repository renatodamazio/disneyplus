import styled from "styled-components";

export const Video = styled.video`
  position: absolute;
  top: -3px;
  left: 0;
  width: 103%;
  height: 103%;
  z-index: 0;
  opacity: 0;
  transition: all 250ms cubic-bezier(0.025, 0.46, 0.45, 0.94) 0s;
`;

export const Container = styled.div`
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.025, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
    position: relative;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgb(249, 249, 249, 0.8);

    ${Video} {
      opacity: 1;
    }
  }
`;
