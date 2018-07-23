import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-bootstrap";
import Fade from 'react-reveal/Fade';
import img1 from "../../img/homePage_servicesSection_img3_temporal.png";
import img2 from "../../img/homePage_servicesSection_img1_temporal.png";
import "../../css/RightProductsSection.css";

const B381Section = () => (
  <SuperContainer>
    <Grid bsClass="container">
      <Row className="show-grid">
        <Fade left>
          <Col lg={6} md={6} sm={6} xsHidden>
            <div class="parent">
              <img
                src={img2}
                width="380px"
                height="450px"
                className="image1"
                alt=""
              />
              <img
                src={img1}
                width="400px"
                height="450px"
                className="image2"
                alt=""
              />
            </div>
          </Col>
        </Fade>  
        <Fade right>
          <Col lg={6} md={6} sm={6} xs={12}>
            <Title1>B 381 </Title1>
            <br />
            <br />
            <div className="contenedordiv">
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum
                neque dictum lobortis ridiculus lectus, non porta quis vehicula
                tempor leo pulvinar magna elementum
              </Paragraph>
            </div>
          </Col>
        </Fade>
      </Row>
    </Grid>
  </SuperContainer>
);

export default B381Section;

const SuperContainer = styled.header`
  position: relative;
  width: 102.05%;
  padding-top: 146px;
  padding-bottom: 200px;
`;
const Paragraph = styled.p`
  font-size: 26px;
  font-weight: 300;
  color: #717171;
  margin-bottom: 40px;
  text-align: right;
  margin-left: 28px;
`;

const Title1 = styled.h2`
  font-size: 65px;
  text-align: right;
  color: black;
  border-bottom-style: solid;
  border-width: 2px;
  border-color: #adabab;
  margin-left: 269px;
  font-weight: bold;
  padding-bottom: 26px;

  @media screen and (max-width: 990px) {
    font-size: 60px;
    margin-left: 0px;
  }

  @media screen and (max-width: 850px) {
    font-size: 60px;
    margin-left: 0px;
  }
  @media screen and (max-width: 800px) {
    font-size: 50px;
  }
`;
