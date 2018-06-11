import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { Grid, Row, Col,Carousel,Paragraph } from 'react-bootstrap';
import prod1 from '../img/homePagelastProductsSection_img1_temporal.png';
import prod2 from '../img/homePagelastProductsSection_img2_temporal.png';
import prod3 from '../img/homePagelastProductsSection_img3_temporal.png';
import prod4 from '../img/homePagelastProductsSection_img4_temporal.png';
import '../css/MostSoldSection.css';

const MostSoldSection = () => (
  <SuperContainer>
    <Grid bsClass="container">
      <Row>
        <Col lg={12}>
          <Title>Lo m&aacute;s vendido</Title>
        </Col>
      </Row>
      <Row>
      <Carousel className="carrousel-products">
        <Carousel.Item>
          <Row>
            <Col lg={9} style={{float: "none", margin: "0 auto"}}>
              <Col lg={3} md={3} sm={3}>
                <img  src={prod1} alt="Producto" width="200px" height="300px"/>
                <h3 className="car-title-product"> Lorem ipsum  </h3>
                <p className="car-par-product">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod 
                </p>
              </Col>
              <Col lg={3} md={3} sm={3}>
                <img  src={prod2} alt="Producto" width="200px" height="300px"/>
                <h3 className="car-title-product"> Lorem ipsum  </h3>
                <p className="car-par-product">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod 
                </p>
              </Col>
              <Col lg={3} md={3} sm={3}>
                <img  src={prod3} alt="Producto" width="200px" height="300px"/>
                <h3 className="car-title-product"> Lorem ipsum  </h3>
                <p className="car-par-product">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod 
                </p>
              </Col>
              <Col lg={3} md={3} sm={3}>
                <img  src={prod4} alt="Producto" width="200px" height="300px"/>
                <h3 className="car-title-product"> Lorem ipsum  </h3>
                <p className="car-par-product">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod 
                </p>
              </Col>
            </Col>

            </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col lg={9} style={{float: "none", margin: "0 auto"}}>
              <Col lg={3} md={3} sm={3}>
                <img  src={prod1} alt="Club Palestino AceMatch" width="200px" height="300px"/>
                <h3 className="car-title-product"> Lorem ipsum  </h3>
                <p className="car-par-product">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod 
                </p>
              </Col>
              <Col lg={3} md={3} sm={3}>
                <img  src={prod2} alt="Club Sirio AceMatch" width="200px" height="300px"/>
                <h3 className="car-title-product"> Lorem ipsum  </h3>
                <p className="car-par-product">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod 
                </p>
              </Col>
              <Col lg={3} md={3} sm={3}>
                <img  src={prod3} alt="Club Sirio AceMatch" width="200px" height="300px"/>
                <h3 className="car-title-product"> Lorem ipsum  </h3>
                <p className="car-par-product">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod 
                </p>
              </Col>
              <Col lg={3} md={3} sm={3}>
                <img  src={prod4} alt="Club Sirio AceMatch" width="200px" height="300px"/>
                <h3 className="car-title-product"> Lorem ipsum  </h3>
                <p className="car-par-product">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod 
                </p>
              </Col>
            </Col>

            </Row>
        </Carousel.Item>
      </Carousel>
      </Row>
    </Grid>
  </SuperContainer>
);

export default MostSoldSection;

const SuperContainer = styled.header`
  position: relative;
  width: 100%;
  padding-bottom: 100px;
  background: #fff;
`;
const Title = styled.h1`
font-size: 76px;
text-align: center;
margin-top: 100px;
margin-bottom: 80px;
font-weight: 600;
  @media screen and (max-width: 850px) {
    font-size: 70px;
  }
  @media screen and (max-width: 800px) {
    font-size: 50px;
  }
`;
const SubTitle = styled.h3`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
`;
const SuperItem = styled(FontAwesome)`
  display: block;
  background: -webkit-linear-gradient(to left, #7b4397, #dc2430);
  background: linear-gradient(to left, #7b4397, #dc2430);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


