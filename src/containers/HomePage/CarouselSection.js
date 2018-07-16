import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import img1 from "../../img/caru1.jpg";
import img2 from "../../img/caru2.jpg";
import img3 from "../../img/caru3.jpg";

const CarouselSection = () => (
  <SectionMargin>
    <Carousel>
      <Carousel.Item>
        <img
          style={{ backgroundColor: "#f39c12", opacity: ".7" }}
          width={1600}
          height={500}
          alt="1600x500"
          src={img1}
        />
        <Carousel.Caption style={{ left: "14%" }}>
          <Title1>Foto 1</Title1>
          <Description>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Description>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ backgroundColor: "#f39c12", opacity: ".7" }}
          width={1600}
          height={500}
          alt="1600x500"
          src={img2}
        />
        <Carousel.Caption style={{ left: "14%" }}>
          <Title1>Foto 2</Title1>
          <Description>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Description>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ backgroundColor: "#f39c12", opacity: ".7" }}
          width={1600}
          height={500}
          alt="1500x500"
          src={img3}
        />
        <Carousel.Caption style={{ left: "14%" }}>
          <Title1>Foto 3</Title1>
          <Description>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Description>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </SectionMargin>
);

export default CarouselSection;

const SectionMargin = styled.section`
  position: relative;
  background-color: #212121;
  text-align: center;
  width: 102.05%;
`;
const Title1 = styled.h2`
  font-size: 100px;
  text-align: left;
  color: #fff;
  font-weight: 400;
  @media screen and (max-width: 850px) {
    font-size: 8 0px;
  }
  @media screen and (max-width: 800px) {
    font-size: 50px;
  }
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const Description = styled.p`
  font-size: 35px;
  text-align: left;
  width: 67%;
  @media screen and (max-width: 850px) {
    font-size: 25px;
    width: 70%;
  }
  @media screen and (max-width: 800px) {
    font-size: 18px;
    width: 70%;
  }
  @media screen and (max-width: 600px) {
    font-size: 15px;
    width: 80%;
  }
`;
