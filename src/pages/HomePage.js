import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";
import { Navbar, Nav, NavItem, Image,MenuItem, NavDropdown } from "react-bootstrap";
import logo from "../img/Logo-carservice-2018-blanco.jpg";
import "../css/Navbar.css";
import FrontSection from "../containers/HomePage/FrontSection";
import IntroSection from "../containers/HomePage/IntroSection";
import SponsorSection from "../containers/HomePage/SponsorSection";
import CarouselSection from "../containers/HomePage/CarouselSection";
import ProductsandServicesSection from "../containers/HomePage/ProductsandServicesSection";
import LastProductsSection from "../containers/HomePage/LastProductsSection";
import MostSoldSection from "../containers/HomePage/MostSoldSection";
import ContactSection from "../containers/HomePage/ContactSection";
import Footer from "../components/Footer";
import LoadingScreen from "react-loading-screen";
import logo2 from "../img/Logo-carservice-2018.png";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    // fake promise
    setTimeout(() => this.setState({ loading: false }), 1500);
  }
  render() {
    const { loading } = this.state;

    return (
      <LoadingScreen
        loading={loading}
        bgColor="#fff"
        spinnerColor="a0201d"
        textColor="#676767"
        logoSrc={logo2}
      >
        <div>
          <SuperNavBar collapseOnSelect fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <AnchorLink href="#frontsection">
                  <Image
                    src={logo}
                    style={{
                      height: "50px",
                      width: "110px",
                      maxWidth: "100%",
                      marginTop: "-18px",
                      marginBottom: "-10px"
                    }}
                  />
                </AnchorLink>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <li className="supercss">
                  <AnchorLink className="anchorcss" href="#frontsection" autofocus>
                    Inicio
                  </AnchorLink>
                </li>
                <NavDropdown
                  className="supercss"
                  eventKey={2}
                  title="Productos"
                  id="basic-nav-dropdown"
                >
                  <MenuItem eventKey={2.1} className="anchorcss" href="/products">
                      <TitleNavDropdown> B 381 </TitleNavDropdown>
                  </MenuItem>
                  <MenuItem eventKey={2.2}  className="anchorcss" href="/products">
                      <TitleNavDropdown> F 570 </TitleNavDropdown>
                  </MenuItem>
                  <MenuItem eventKey={2.3}  className="anchorcss" href="/products">
                      <TitleNavDropdown> F 580 </TitleNavDropdown>
                  </MenuItem>
                  <MenuItem eventKey={2.4}  className="anchorcss" href="/products">
                      <TitleNavDropdown> F 590 </TitleNavDropdown>
                  </MenuItem>
                  <MenuItem eventKey={2.5}  className="anchorcss" href="/products">
                      <TitleNavDropdown> F 77 </TitleNavDropdown>
                  </MenuItem>
                  <MenuItem eventKey={2.6}  className="anchorcss" href="/products">
                      <TitleNavDropdown> FireHawk 700 </TitleNavDropdown>
                  </MenuItem>
                  <MenuItem eventKey={2.7}  className="anchorcss" href="/products">
                      <TitleNavDropdown> FireHawk 900 </TitleNavDropdown>
                  </MenuItem>
                  <MenuItem eventKey={2.8}  className="anchorcss" href="/products">
                      <TitleNavDropdown> WinterForce </TitleNavDropdown>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={2.9}  className="anchorcss" href="/products">
                      <TitleNavDropdown> ACDelco </TitleNavDropdown>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={2.10}  className="anchorcss" href="/products">
                      <TitleNavDropdown> Frenos </TitleNavDropdown>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={2.11}  className="anchorcss" href="/products">
                      <TitleNavDropdown> Suspensión </TitleNavDropdown>
                  </MenuItem>
                </NavDropdown>

                <NavDropdown
                  className="supercss"
                  eventKey={2}
                  title="Servicios"
                  id="basic-nav-dropdown"
                >
                  <MenuItem eventKey={2.1} className="anchorcss" href="/services">
                      <TitleNavDropdown>
                        {" "}
                        Alineaci&oacute;n y balanceo{" "}
                      </TitleNavDropdown>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={2.2} className="anchorcss" href="/services">
                      <TitleNavDropdown> Cambio de Aceite </TitleNavDropdown>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={2.3} className="anchorcss" href="/services">
                      <TitleNavDropdown> Mantenci&oacute;n </TitleNavDropdown>
                  </MenuItem>
                </NavDropdown>
                <SuperNavItem className="supercss" eventKey={4} href="#">
                  Cotización
                </SuperNavItem>
                <SuperNavItem className="supercss" eventKey={5} href="#">
                  Tips
                </SuperNavItem>
                <li className="supercss">
                  <AnchorLink className="anchorcss" href="#contactsection">
                    Contacto
                  </AnchorLink>
                </li>
              </Nav>
            </Navbar.Collapse>
          </SuperNavBar>

          <section id="frontsection">
            <FrontSection />
          </section>
          <section id="introsection">
            <IntroSection />
          </section>
          <section id="sponsorsection">
            <SponsorSection />
          </section>
          <section id="carouselsection">
            <CarouselSection />
          </section>
          <section id="productandservicesection">
            <ProductsandServicesSection />
          </section>
          <section id="lastproductsection">
            <LastProductsSection />
          </section>
          <section id="mostsoldsection">
            <MostSoldSection />
          </section>
          <section id="contactsection">
            <ContactSection />
          </section>
          <section id="footer">
            <Footer />
          </section>
        </div>
      </LoadingScreen>
    );
  }
}

export default HomePage;

const SuperNavBar = styled(Navbar)`
  border-color: rgba(34, 34, 34, 0.05);
  background-color: black !important;
  letter-spacing: 1px;
`;
const SuperNavItem = styled(NavItem)`
  color: white;
  font-size: 50px;
`;
const TitleNavDropdown = styled.p`
  font-weight: 100;
  letter-spacing: 2px;
  font-size: 12px;
  text-transform: capitalize;
`;