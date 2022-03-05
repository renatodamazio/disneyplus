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
    autoplay: true,
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
          <Image src={img.url} alt={img.title} width="100%" />
        ))}
      </Carousel>
    </div>
  );
};

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
`;

export default ImageSlider;
