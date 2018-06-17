import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Image } from 'react-bootstrap';
import logo from '../img/inalcoSummarizedLogo_black.png';
import '../css/Navbar.css';
import FrontSection from '../containers/HomePage/FrontSection';
import IntroSection from '../containers/HomePage/IntroSection';
import SponsorSection from '../containers/HomePage/SponsorSection';
import CarouselSection from '../containers/HomePage/CarouselSection';
import ProductsandServicesSection from '../containers/HomePage/ProductsandServicesSection';
import LastProductsSection from '../containers/HomePage/LastProductsSection';
import MostSoldSection from '../containers/HomePage/MostSoldSection';
import ContactSection from '../containers/HomePage/ContactSection';
import Footer from '../components/Footer';


const HomePage = () => (
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
              <AnchorLink className="anchorcss" href='#frontsection'>
                  Inicio
              </AnchorLink>  
            </li>
            <SuperNavItem className="supercss" eventKey={2} href="/products">
              Productos
            </SuperNavItem>
           
            <NavDropdown  className="supercss" eventKey={3} title="Servicios" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}><TitleNavDropdown> Servicio1 </TitleNavDropdown></MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.2}><TitleNavDropdown> Servicio2 </TitleNavDropdown></MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}><TitleNavDropdown> Servicio3 </TitleNavDropdown></MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}><TitleNavDropdown> Servicio4 </TitleNavDropdown></MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}><TitleNavDropdown> Servicio5 </TitleNavDropdown></MenuItem>
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
    
    
 
    <section id='frontsection'>
       <FrontSection />
    </section>
    <section id='introsection'>
      <IntroSection />
    </section>
    <section id='sponsorsection'>
      <SponsorSection />
    </section>
    <section id='carouselsection'>
      <CarouselSection />
    </section>
    <section id='productandservicesection'>
      <ProductsandServicesSection />
    </section>
    <section id='lastproductsection'>
      <LastProductsSection />
    </section>
    <section id='mostsoldsection'>
      <MostSoldSection />
    </section>
    <section id='contactsection'>
      <ContactSection/>
    </section>
    <section id='footer'>
      <Footer />
    </section>
    
    
    
   
    
   
    
    
    
  </div>
);

export default HomePage;

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