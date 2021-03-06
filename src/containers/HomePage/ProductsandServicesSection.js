import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import wheel from "../../img/homePage_servicesSection_img1_temporal.png";
import battery from "../../img/homePage_servicesSection_img3_temporal.png";
import balance from "../../img/homePage_servicesSection_img2_temporal.png";
import maintenance from "../../img/homePage_servicesSection_img8_temporal.png";
import suspensions from "../../img/homePage_servicesSection_img7_temporal.png";
import breaks from "../../img/brakes_img.png";
import "../../css/ProductsAndServices.css";

const ProductsandServicesSection = () => (
  <SectionMargin>
    <Grid bsClass="container">
      <Row>
        <div className="divHidden">
          <Flip bottom>
            <TitleHidden>Nuestros productos y servicios</TitleHidden>
          </Flip>
        </div>
        <Col lg={6} md={6} sm={6}>
          <Fade left>
            <div className="appimgwrapper">
              <a className="appimglink">
                <img
                  src={wheel}
                  width="480px"
                  height="550px"
                  className="img-responsive appimg"
                  alt="App"
                />
                <div className="appimgtext">
                  <h2 className="apptitle">Neum&aacute;ticos</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
              </a>
            </div>
          </Fade>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <Flip bottom>
            <Title xsHidden smHidden>
              Nuestros productos y servicios
            </Title>
          </Flip>
          <br />
          <Fade right>
            <div className="appimgwrapper">
              <a className="appimglink">
                <img
                  src={battery}
                  width="480px"
                  height="250px"
                  className="img-responsive appimg"
                  alt="App"
                />
                <div className="appimgtext">
                  <h2 className="apptitle">Bater&iacute;as</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
              </a>
            </div>
          </Fade>
        </Col>
      </Row>
      <br />
      <Row>
        <Col lg={6} md={6} sm={6} className="columna">
          <Fade left>
            <div className="appimgwrapper">
              <a className="appimglink">
                <img
                  src={balance}
                  width="480px"
                  height="550px"
                  className="img-responsive appimg alineacion"
                  alt="App"
                />
                <div className="appimgtext">
                  <h2 className="apptitle">Alineaci&oacute;n y balanceo</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
              </a>
            </div>
          </Fade>
        </Col>
        <br />
        <Col lg={6} md={6} sm={6}>
          <Fade right>
            <div className="appimgwrapper">
              <a className="appimglink">
                <img
                  src={suspensions}
                  width="480px"
                  height="550px"
                  className="img-responsive appimg"
                  alt="App"
                />
                <div className="appimgtext">
                  <h2 className="apptitle">Suspensi&oacute;n</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
              </a>
            </div>
          </Fade>
        </Col>
      </Row>
      <br />
      <Row>
        <Col lg={6} md={6} sm={6} className="columna">
          <Fade left> 
            <div className="appimgwrapper">
              <a className="appimglink">
                <img
                  src={maintenance}
                  width="480px"
                  height="550px"
                  className="img-responsive appimg alineacion"
                  alt="App"
                />
                <div className="appimgtext">
                  <h2 className="apptitle">Mantenciones</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
              </a>        
            </div>
          </Fade>
          <Flip bottom>
            <Title xsHidden smHidden>
              Nuestros productos y servicios
            </Title>
          </Flip>
        </Col>
        
        <Col lg={6} md={6} sm={6}>
          <Fade right>
            <div className="appimgwrapper">  
              <a className="appimglink">
                <img
                  src={breaks}
                  width="480px"
                  height="550px"
                  className="img-responsive appimg"
                  alt="App"
                />
                <div className="appimgtext">
                  <h2 className="apptitle">Frenos</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                </div>
              </a>
            </div>
          </Fade>
        </Col>
      </Row>
    </Grid>
  </SectionMargin>
);

export default ProductsandServicesSection;

const SectionMargin = styled.section`
  position: relative;
  padding-top: 220px;
  padding-bottom: 105px;
  text-align: left;
  width: 102.05%;
  background-color: #ffffff;
  @media screen and (max-width: 850px) {
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;
const TitleHidden = styled.h1`
  text-align: center;
  color: #1d1919de;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
  display: none;
  @media screen and (max-width: 1200px) {
    display: initial;
    font-size: 100px;
  }
  @media screen and (max-width: 880px) {
    font-size: 70px;
  }
  @media screen and (max-width: 850px) {
    font-size: 60px;
  }
  @media screen and (max-width: 800px) {
    font-size: 50px;
  }
`;
const Title = styled.h1`
  font-size: 100px;
  color: #1d1919de;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
  display: initial;
  @media screen and (max-width: 945px) {
    text-align: center;
    font-size: 83px;
  }
  @media screen and (max-width: 850px) {
    text-align: center;
    font-size: 70px;
  }
  @media screen and (max-width: 800px) {
    text-align: center;
    font-size: 50px;
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

