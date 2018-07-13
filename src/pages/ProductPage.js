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
import logo from "../img/inalcoSummarizedLogo_black.png";
import "../css/Navbar.css";
import FrontProductSection from "../containers/ProductPage/FrontProductSection";
import FeatureSection from "../containers/ProductPage/FeautreSection";
import B381Section from "../containers/ProductPage/B381Section";
import F570Section from "../containers/ProductPage/F570Section";
import F580Section from "../containers/ProductPage/F580Section";
import F590Section from "../containers/ProductPage/F590Section";
import F77Section from "../containers/ProductPage/F77Section";
import FireHawk700Section from "../containers/ProductPage/FireHawk700Section";
import FireHawk900Section from "../containers/ProductPage/FireHawk900Section";
import WinterforceSection from "../containers/ProductPage/WinterForceSection";
import ACDelcoSection from "../containers/ProductPage/ACDelcoSection";
import Breaksection from "../containers/ProductPage/BreaksSection";
import SuspentionsSection from "../containers/ProductPage/SuspentionsSection";
import ContactSection from "../containers/HomePage/ContactSection";
import Footer from "../components/Footer";
import LoadingScreen from "react-loading-screen";
import logo2 from "../img/inalcoFullLogo_white.png";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    // fake promise
    setTimeout(() => this.setState({ loading: false }), 1000);
  }
  render() {
    const { loading } = this.state;

    return (
      <LoadingScreen
        loading={loading}
        bgColor="#e8e8e8f0"
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
                  <MenuItem eventKey={2.1}>
                    <AnchorLink className="anchorcss" href="#b381">
                      <TitleNavDropdown> B 381 </TitleNavDropdown>
                    </AnchorLink>
                  </MenuItem>
                  <MenuItem eventKey={2.2}>
                    <AnchorLink className="anchorcss" href="#f570">
                      <TitleNavDropdown> F 570 </TitleNavDropdown>
                    </AnchorLink>
                  </MenuItem>
                  <MenuItem eventKey={2.3}>
                    <AnchorLink className="anchorcss" href="#f580">
                      <TitleNavDropdown> F 580 </TitleNavDropdown>
                    </AnchorLink>
                  </MenuItem>
                  <MenuItem eventKey={2.4}>
                    <AnchorLink className="anchorcss" href="#f590">
                      <TitleNavDropdown> F 590 </TitleNavDropdown>
                    </AnchorLink>
                  </MenuItem>
                  <MenuItem eventKey={2.5}>
                    <AnchorLink className="anchorcss" href="#f77">
                      <TitleNavDropdown> F 77 </TitleNavDropdown>
                    </AnchorLink>
                  </MenuItem>
                  <MenuItem eventKey={2.6}>
                    <AnchorLink className="anchorcss" href="#firehawk">
                      <TitleNavDropdown> FireHawk 700 </TitleNavDropdown>
                    </AnchorLink>
                  </MenuItem>
                  <MenuItem eventKey={2.7}>
                    <AnchorLink className="anchorcss" href="#firehawk2">
                      <TitleNavDropdown> FireHawk 900 </TitleNavDropdown>
                    </AnchorLink>
                  </MenuItem>
                  <MenuItem eventKey={2.8}>
                    <AnchorLink className="anchorcss" href="#winterforce">
                      <TitleNavDropdown> WinterForce </TitleNavDropdown>
                    </AnchorLink>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={2.9}>
                    <AnchorLink className="anchorcss" href="#acdelco">
                      <TitleNavDropdown> ACDelco </TitleNavDropdown>
                    </AnchorLink>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={2.1}>
                    <AnchorLink className="anchorcss" href="#frenos">
                      <TitleNavDropdown> Frenos </TitleNavDropdown>
                    </AnchorLink>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={2.11}>
                    <AnchorLink className="anchorcss" href="#suspension">
                      <TitleNavDropdown> Suspensión </TitleNavDropdown>
                    </AnchorLink>
                  </MenuItem>
                </NavDropdown>
                <SuperNavItem
                  className="supercss"
                  eventKey={4}
                  href="/services"
                >
                  Servicios
                </SuperNavItem>
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
            <FrontProductSection />
          </section>
          <section>
            <FeatureSection />
          </section>
          <section id="b381">
            <B381Section />
          </section>
          <section id="f570">
            <F570Section />
          </section>
          <section id="f580">
            <F580Section />
          </section>
          <section id="f590">
            <F590Section />
          </section>
          <section id="f77">
            <F77Section />
          </section>
          <section id="firehawk">
            <FireHawk700Section />
          </section>
          <section id="firehawk2">
            <FireHawk900Section />
          </section>
          <section id="winterforce">
            <WinterforceSection />
          </section>
          <section id="acdelco">
            <ACDelcoSection />
          </section>
          <section id="frenos">
            <Breaksection />
          </section>
          <section id="suspension">
            <SuspentionsSection />
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

export default ProductPage;

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
