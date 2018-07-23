import React from "react";
import { Row, Col, Grid } from "react-bootstrap";
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';
import FirestoneLogo from "../../img/firestone_logo.png";
import FuzionLogo from "../../img/fuzion_logo.png";
import BridgestoneLogo from "../../img/bridgestone_logo.png";
import "../../css/SponsorSection.css";

const SponsorSection = () => (
  <SectionMargin>
    <Grid bsClass="container">
      <Row>
        <Col lg={4} md={4} sm={4}>
          <Zoom cascade>
            <a href="https://www.bridgestone.cl/es" rel="noopener noreferrer"  target="_blank" >
              <img
                className="sponsorimg"
                src={BridgestoneLogo}
                alt="Bridgestone"
                width="200px"
                height="60px"
              />
            </a>
          </Zoom>
        </Col>

        <Col lg={4} md={4} sm={4}>
          <Zoom cascade>
            <a href="https://www.firestone.cl/es" rel="noopener noreferrer" target="_blank" >
              <img
                className="sponsorimg"
                src={FirestoneLogo}
                alt="Firestone"
                width="250px"
                height="60px"
              />
            </a>
          </Zoom>  
        </Col>

        <Col lg={4} md={4} sm={4}>
          <Zoom cascade>
            <a rel="noopener">
              <img
                className="sponsorimg"
                src={FuzionLogo}
                alt="Fuzion"
                width="200px"
                height="60px"
              />
            </a>
          </Zoom>
        </Col>
      </Row>
    </Grid>
  </SectionMargin>
);

export default SponsorSection;

const SectionMargin = styled.section`
  position: relative;
  padding: 76px 0;
  width: 102.05%;
  background-color: #f5f5f7;
  text-align: center;
`;
