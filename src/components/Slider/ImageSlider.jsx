import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import Image from "../Images/Image";

export const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const banners = [
    {
      title: "image",
      url: "/images/slider-badag.jpg",
    },
    {
      title: "image",
      url: "/images/slider-scale.jpg",
    },
    {
      title: "image",
      url: "/images/slider-badging.jpg",
    },
    {
      title: "image",
      url: "/images/slider-scales.jpg",
    },
  ];

  return (
    <div>
      <Carousel {...settings}>
        {banners.map((img) => (
          <Wrap>
            <span>
              <Image src={img.url} alt={img.title} width="100%" />
            </span>
          </Wrap>
        ))}
      </Carousel>
    </div>
  );
};

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  span {
    border-radius: 4px;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 4px 8px;
    border: 0px solid rgba(249, 249, 249, 0.8);
    transition-duration: 300ms;

    img {
        width: 100%;
        height: 100%:
    }

    &:hover {
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    padding-bottom: 33px !important;
  }
`;

export default ImageSlider;
