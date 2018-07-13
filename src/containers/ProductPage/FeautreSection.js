import React from "react";
import { Row, Col, Grid } from "react-bootstrap";
import styled from "styled-components";
import "../../css/FeatureSection.css";

const FeatureSection = () => (
  <SectionMargin>
    <Grid bsClass="container">
      <Row>
        <Col lg={4} md={4} sm={12} xs={12}>
          <div className="contenedor">
            <h3 className="titleh3">Feature 1</h3>
            <p className="parra">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis
            </p>
          </div>
        </Col>

        <Col lg={4} md={4} sm={12} xs={12}>
          <div className="contenedor">
            <h3 className="titleh3">Feature 2</h3>
            <p className="parra">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis
            </p>
          </div>
        </Col>

        <Col lg={4} md={4} sm={12} xs={12}>
          <div className="contenedor">
            <h3 className="titleh3">Feature 3</h3>
            <p className="parra">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis
            </p>
          </div>
        </Col>
      </Row>
    </Grid>
  </SectionMargin>
);

export default FeatureSection;

const SectionMargin = styled.section`
  position: relative;
  padding: 75px 0;
  width: 102.05%;
  background-color: #292929;
  text-align: center;
`;
