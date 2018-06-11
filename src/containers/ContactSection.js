import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';



const ContactSection = () => (
  <SectionMargin>
    <Grid bsClass="container">
      <Row>
        <Col lg={6} lgPush={6}>
          <Row>
            <Title>Contacto</Title> 
          </Row>
        </Col>
        <Col lg={6} lgPull={6}>
            <ContactForm />
        </Col>
      </Row>
    </Grid>
  </SectionMargin>
);

export default ContactSection;

const SectionMargin = styled.section`
  position: relative;
  padding: 150px 0;
  background: #262626;
  text-align: right;
  @media screen and (max-width: 850px) {
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 120px;
  color: #fff;
  text-align: right;
  margin-top:auto;
  margin-bottom:auto;
  @media screen and (max-width: 850px) {
    text-align: center;
    font-size: 100px;
  }
  @media screen and (max-width: 800px) {
    text-align: center;
    font-size: 70px;
  }
`;
