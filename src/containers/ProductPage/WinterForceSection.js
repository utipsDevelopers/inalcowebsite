import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import battery from '../../img/homePage_servicesSection_img3_temporal.png';
import suspensions from '../../img/homePage_servicesSection_img1_temporal.png';
import '../../css/LeftProductsSection.css';



const WinterforceSection = () => (
  <SuperContainer>
    <Grid bsClass="container">
      <Row className="show-grid">
       
        <Col lg={6} md={6} sm={6} xs={12} >
          <Title1>Winterforce </Title1>
          <br/> 
          <br/> 
          <div className="contenedordiv">
            <Paragraph>
              Lorem ipsum dolor sit amet
              consectetur adipiscing elit
              bibendum neque dictum
              lobortis ridiculus lectus, non
              porta quis vehicula tempor leo
              pulvinar magna elementum
            </Paragraph>
          </div>
        </Col>
        <Col lg={6} md={6} sm={6} xsHidden>
          <div class="parent">
            <img src={suspensions} width="380px" height="450px" className="image1570"  />
            <img src={battery} width="400px" height="450px" className="image2570"  />
          </div>
        </Col>
        
      </Row>
    </Grid>
  </SuperContainer>
);

export default WinterforceSection;

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
  text-align: left;
  margin-right: 28px;
`;

const Title1 = styled.h2`
  font-size: 65px;
  text-align: left;
  color: black;
  border-bottom-style: solid;
  border-width: 2px;
  border-color: #adabab;
  margin-right: 105px;
  font-weight: bold;
  padding-bottom: 26px;

  @media screen and (max-width: 990px) {
    font-size: 60px;
    margin-right: 0px;
  }
  

  @media screen and (max-width: 850px) {
    font-size: 60px;
    margin-right: 0px;
  }
  @media screen and (max-width: 800px) {
    font-size: 50px;
  }
`;

