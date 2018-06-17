import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Image } from 'react-bootstrap';
import logo from '../img/inalcoSummarizedLogo_black.png';
import '../css/Navbar.css';
import FrontServiceSection from '../containers/ServicePage/FrontServiceSection';
import FeatureSection from '../containers/ServicePage/FeautreSection';
import BalanceSection from '../containers/ServicePage/BalanceSection';
import OilSection from '../containers/ServicePage/OilSection';
import MaintenanceSection from '../containers/ServicePage/MaintenanceSection';

import ContactSection from '../containers/HomePage/ContactSection';
import Footer from '../components/Footer';

const ServicePage = () => (
  <div>
     <SuperNavBar  collapseOnSelect fixedTop>
    <Navbar.Header>
        <Navbar.Brand  >
          <AnchorLink  href='#frontsection'>
            <Image src={logo} style={{ 
                height: '50px',
                width: '110px', 
                maxWidth: '100%',
                marginTop:"-18px",
                marginBottom: '-10px'}}  />
          </AnchorLink>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav pullRight>
            <li className="supercss">
              <a href="/" className="anchorcss">
                 Inicio
              </a>  
            </li>
            <SuperNavItem className="supercss" eventKey={4} href="/products">
              Productos
            </SuperNavItem>
            <NavDropdown  className="supercss" eventKey={2}  title="Servicios" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}>
                <AnchorLink className="anchorcss" href='#balanceo'>
                  <TitleNavDropdown> Alineaci&oacute;n y balanceo </TitleNavDropdown>
                </AnchorLink>  
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={2.2}>
                <AnchorLink className="anchorcss" href='#cambioaceite'>
                    <TitleNavDropdown> Cambio de Aceite </TitleNavDropdown>
                </AnchorLink >
              </MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={2.3}>
                <AnchorLink className="anchorcss" href='#mantencion'>
                  <TitleNavDropdown> Mantenci&oacute;n </TitleNavDropdown>
                </AnchorLink >
              </MenuItem>
            </NavDropdown>
           
            <SuperNavItem className="supercss" eventKey={4} href="#">
              Cotización
            </SuperNavItem>
            <SuperNavItem className="supercss" eventKey={5} href="#">
              Tips
            </SuperNavItem>
            <SuperNavItem className="supercss" eventKey={6} href="#">
              Encuentra tu tienda
            </SuperNavItem>
            <li className="supercss">
              <AnchorLink className="anchorcss" href='#contactsection'>
                  Contacto
              </AnchorLink>
            </li>
            
        </Nav>
    </Navbar.Collapse>
    </SuperNavBar>
    
    
 
    <section >
       <FrontServiceSection />
    </section>
    <section >
       <FeatureSection />
    </section>
    <section id="balanceo">
      <BalanceSection />
    </section>
    <section id="cambioaceite">
      <OilSection />
    </section>
    <section id="mantencion">
      <MaintenanceSection />
    </section>
     <section id='contactsection'>
      <ContactSection/>
    </section>
    <section id='footer'>
      <Footer />
    </section>
  </div>
);

export default ServicePage;

const SuperNavBar = styled(Navbar)`
    border-color: rgba(34, 34, 34, 0.05);
    background-color: black !important;
    letter-spacing: 1px;
    font-size: 12px;
    color: white !important;
    
`;
const SuperNavItem = styled(NavItem)`
    color: white;
`;

const TitleNavDropdown = styled.p`
  font-weight: 100;
  letter-spacing: 2px;
  font-size: 12px;
  text-transform: capitalize;
`;