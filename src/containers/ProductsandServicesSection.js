import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import wheel from '../img/homePage_servicesSection_img1_temporal.png'; 
import battery from '../img/homePage_servicesSection_img3_temporal.png';
import balance from '../img/homePage_servicesSection_img2_temporal.png';
import maintenance from '../img/homePage_servicesSection_img8_temporal.png';
import suspensions from '../img/homePage_servicesSection_img7_temporal.png';
import '../css/ProductsAndServices.css';

const ProductsandServicesSection = () => (
  <SectionMargin>
    <Grid bsClass="container">
      <Row>
        <Col lg={6} md={6} sm={6} >
            <div className="appimgwrapper">
              <a  className="appimglink" > 
                  <img  src={wheel} width="480px" height="550px" className="img-responsive appimg" alt="App"/>
                  <div className="appimgtext">
                    <h2 className="apptitle" >Neum&aacute;ticos</h2>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                  </div>
                  
              </a>
            </div>
        </Col>
        <Col lg={6} md={6} sm={6} >
              <Title >Nuestros productos y servicios</Title>
        </Col>
      </Row>
      <br/>
      <Row >
        <Col lg={6} md={6} sm={6}  >
            <div className="appimgwrapper">
                  <a  className="appimglink" > 
                      <img  src={balance} width="480px" height="550px" className="img-responsive appimg alineacion" alt="App"/>
                      <div className="appimgtext">
                        <h2 className="apptitle" >Alineaci&oacute;n y balanceo</h2>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                      </div>
                      
                  </a>
            </div>
        </Col>
        <br/>
        <Col lg={6} md={6} sm={6}  className="columna">
            <div className="appimgwrapper">
                  <a  className="appimglink" > 
                      <img  src={battery} width="480px" height="550px" className="img-responsive appimg" alt="App"/>
                      <div className="appimgtext">
                        <h2 className="apptitle" >Bater&iacute;as</h2>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                      </div>
                      
                  </a>
            </div>
        </Col>
      </Row>

       <br/>
      <Row >
        <Col lg={6} md={6} sm={6}  >
            <div className="appimgwrapper">
                  <a  className="appimglink" > 
                      <img  src={maintenance} width="480px" height="550px" className="img-responsive appimg alineacion" alt="App"/>
                      <div className="appimgtext">
                        <h2 className="apptitle" >Mantenciones</h2>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                      </div>
                      
                  </a>
            </div>
        </Col>
        <br/>
        <Col lg={6} md={6} sm={6}  className="columna">
            <div className="appimgwrapper">
                  <a  className="appimglink" > 
                      <img  src={suspensions} width="480px" height="550px" className="img-responsive appimg" alt="App"/>
                      <div className="appimgtext">
                        <h2 className="apptitle" >Suspensi&oacute;n</h2>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                      </div>
                      
                  </a>
            </div>
        </Col>
      </Row>

    </Grid>
  </SectionMargin>
);

export default ProductsandServicesSection;

const SectionMargin = styled.section`
  position: relative;
  padding-top: 220px;
  padding-bottom: 175px;
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
const Title = styled.h1`
  font-size: 100px;
  color: #1d1919de;
  font-weight: bold;
  margin-top:auto;
  margin-bottom:auto;
  @media screen and (max-width: 850px) {
    text-align: center;
    font-size: 70px;
  }
  @media screen and (max-width: 800px) {
    text-align: center;
    font-size: 50px;
  }
`;

