import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const IntroSection = () => (
  <SectionMargin>
    <Grid bsClass="container">
      <Row>
        <Col lg={7} md={7} mdPush={3}>
          <Title1>Lorem ipsum dolor sit amet</Title1>
          <Paragraph>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex
            ea commodi consequat. Quis aute iure reprehenderit in voluptate
          </Paragraph>
        </Col>
      </Row>
    </Grid>
  </SectionMargin>
);

export default IntroSection;

const SectionMargin = styled.section`
  position: relative;
  padding: 150px 0;
  width: 102.05%;
  background-color: #212121;
  text-align: center;
`;

const Title1 = styled.p`
  font-size: 40px;
  color: #ebebeb;
  text-align: center;
  font-weight: 900;
  @media screen and (max-width: 850px) {
    font-size: 20px;
  }
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  font-size: 30px;
  font-family: "Helvetica", "Arial", "sans-serif";
  font-weight: 300;
  color: #ebebeb;
  margin-bottom: 40px;
`;
