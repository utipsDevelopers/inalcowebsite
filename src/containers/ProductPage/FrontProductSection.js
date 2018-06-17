import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-bootstrap';
import img from '../../img/03-19-Firestone-Engineer-Spin-Std.jpg';


const FrontProductSection = () => (
  <SuperContainer>
    <Grid bsClass="container">
      <Row className="show-grid">
        <Col lg={7}>
          <FrontContent>
            <Title1>Nuestros </Title1>
            <Title1>productos</Title1>
            
          </FrontContent>
        </Col>
        
      </Row>
    </Grid>
  </SuperContainer>
);

export default FrontProductSection;

const SuperContainer = styled.header`
  position: relative;
  width: 102.05%;
  padding-top: 146px;
  padding-bottom: 10px;
  color: white;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkWAoAAKsAp32KgSgAAAAASUVORK5CYII=),url(${img});
  background-size: cover;
  

`;
const FrontContent = styled.div`
  max-width: 500px;
  margin-bottom: 84px;
  text-align: center;
`;
const Title1 = styled.h2`
  font-size: 120px;
  text-align: left;
  color: #fff;
  font-weight: bold;

  @media screen and (max-width: 850px) {
    font-size: 60px;
  }
  @media screen and (max-width: 800px) {
    font-size: 60px;
  }
`;

