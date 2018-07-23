import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Image
} from "react-bootstrap";
import logo from "../img/Logo-carservice-2018-blanco.jpg";
import "../css/Navbar.css";
import FrontServiceSection from "../containers/ServicePage/FrontServiceSection";
import FeatureSection from "../containers/ServicePage/FeautreSection";
import BalanceSection from "../containers/ServicePage/BalanceSection";
import OilSection from "../containers/ServicePage/OilSection";
import MaintenanceSection from "../containers/ServicePage/MaintenanceSection";
import Breaksection from "../containers/ServicePage/BreaksSection";
import ContactSection from "../containers/HomePage/ContactSection";
import Footer from "../components/Footer";
import LoadingScreen from "react-loading-screen";
import logo2 from "../img/Logo-carservice-2018.png";

class ServicePage extends React.Component {
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
                  <a href="/" className="anchorcss">
                    Inicio
                  </a>
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
                      <TitleNavDropdown> Suspensión </TitleNavDropdown>
                  </MenuItem>
                </NavDropdown>
                <NavDropdown
                  className="supercss"
                  eventKey={2}
                  title="Servicios"
                  id="basic-nav-dropdown"
                >
                  <MenuItem eventKey={2.1}>
                    <AnchorLink className="anchorcss" href="#balanceo">
                      <TitleNavDropdown>
                        {" "}
                        Alineaci&oacute;n y balanceo{" "}
                      </TitleNavDropdown>
                    </AnchorLink>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={2.2}>
                    <AnchorLink className="anchorcss" href="#cambioaceite">
                      <TitleNavDropdown> Cambio de Aceite </TitleNavDropdown>
                    </AnchorLink>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={2.3}>
                    <AnchorLink className="anchorcss" href="#frenos">
                      <TitleNavDropdown> Frenos </TitleNavDropdown>
                    </AnchorLink>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={2.4}>
                    <AnchorLink className="anchorcss" href="#mantencion">
                      <TitleNavDropdown> Mantenci&oacute;n </TitleNavDropdown>
                    </AnchorLink>
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

          <section>
            <FrontServiceSection />
          </section>
          <section>
            <FeatureSection />
          </section>
          <section id="balanceo">
            <BalanceSection />
          </section>
          <section id="cambioaceite">
            <OilSection />
          </section>
          <section id="frenos">
           <Breaksection/>
          </section>
          <section id="mantencion">
            <MaintenanceSection />
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
