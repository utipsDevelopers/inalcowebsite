import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import img from '../img/homePage_introWallpaper_definitive.jpg';


const FrontSection = () => (
  <SuperContainer>
    <Grid bsClass="container">
      <Row className="show-grid">
        <Col lg={7}>
          <FrontContent>
            <Title1>Hola!</Title1>
            <Title2>Lorem ipsum dolor sit amet, consectetur adipiscing</Title2>
          </FrontContent>
        </Col>
        
      </Row>
    </Grid>
  </SuperContainer>
);

export default FrontSection;

const SuperContainer = styled.header`
  position: relative;
  width: 102.05%;
  padding-top: 150px;
  padding-bottom: 400px;
  color: white;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkiAQAAF8AW+qFhiYAAAAASUVORK5CYII=),url(${img});
  background-size: cover;
  

`;
const FrontContent = styled.div`
  max-width: 500px;
  margin-bottom: 100px;
  text-align: center;
`;
const Title1 = styled.h2`
  font-size: 250px;
  text-align: left;
  color: #fff;
  font-weight: 400;
  @media screen and (max-width: 850px) {
    font-size: 130px;
  }
  @media screen and (max-width: 800px) {
    font-size: 100px;
  }
`;

const Title2 = styled.p`
  font-size: 30px;
  text-align: left;
  @media screen and (max-width: 850px) {
    font-size: 20px;
  }
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;