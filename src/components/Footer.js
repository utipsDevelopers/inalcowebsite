import React from "react";
import { Row, Col, Grid } from "react-bootstrap";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Inalcologo from "../img/inalcoFullLogo_white.png";
import { compose, withProps } from "recompose";
import "../css/Footer.css";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `350px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: -33.4854409, lng: -70.61551500000002 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: -33.4854409, lng: -70.61551500000002 }} />
    )}
  </GoogleMap>
));
const Footer = () => (
  <FooterStyle>
    <AvailableImgsContainer>
      <Grid bsClass="container">
        <Row>
          <Zoom cascade>
            <Col lg={2} md={2} sm={2} mdPush={3} smPush={3}>
              <a className="Icon">
                <SuperItem name="phone" size="5x" />
                <p style={{ marginTop: "10px", fontSize: "12px" }}>
                  +56 2283 49 101
                </p>
              </a>
            </Col>
          </Zoom>
          <Zoom cascade>
            <Col lg={2} md={2} sm={2} mdPush={3} smPush={3}>
              <a
                className="Icon"
                href="https://www.facebook.com/inalcocarservice/"
              >
                <SuperItem name="facebook-square" size="5x" />

                <p style={{ marginTop: "10px", fontSize: "12px" }}>
                  /inalcocarservice
                </p>
              </a>
            </Col>
          </Zoom>
          <Zoom cascade>
            <Col lg={2} md={2} sm={2} mdPush={3} smPush={3}>
              <a className="Icon">
                <SuperItem name="envelope" size="5x" />
                <p style={{ marginTop: "10px", fontSize: "12px" }}>
                  contacto@inalcocarservice.cl
                </p>
              </a>           
            </Col>
          </Zoom>  
        </Row>
      </Grid>

      <div style={{ width: "107.3%", marginTop: "50px", marginBottom: "50px" }}>
        <MyMapComponent isMarkerShown />
      </div>
      <Row>
        <Col lg={12} style={{ marginLeft: "24px" }}>
          <Flip top cascade>
            <img
              src={Inalcologo}
              className="logo"
              alt=""
              width="200px"
              height="90px"
            />
          </Flip>
        </Col>
      </Row>
    </AvailableImgsContainer>

    <FooterItems1>© 2018 Inalco Car Service.</FooterItems1>
    <FooterItems2>Powered by Utips </FooterItems2>
  </FooterStyle>
);

export default Footer;

const FooterStyle = styled.div`
  position: relative;
  bottom: 0;
  width: 95%;
`;

const AvailableImgsContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 10px;
`;

const FooterItems1 = styled.li`
  display: flex;
  justify-content: center;
  color: #595959;
  font-family: "Helvetica", "Arial", "sans-serif";
  font-weight: 100;
  font-size: 15px;
  margin-left: 48px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const FooterItems2 = styled.li`
  display: flex;
  justify-content: center;
  color: #595959;
  font-family: "Helvetica", "Arial", "sans-serif";
  font-weight: 100;
  font-size: 15px;
  margin-left: 48px;
  margin-bottom: 40px;
`;
const SuperItem = styled(FontAwesome)`
  display: block;
`;
