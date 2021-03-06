import React, { Component } from "react";
import { FormErrors } from "./FormErrors";
import { Grid, Row, Col, FormGroup } from "react-bootstrap";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import "../../css/FormSection.css";

class ContactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      fono: "",
      nombre: "",
      formErrors: { email: "", nombre: "", fono: "" },
      emailValid: false,
      fonoValid: false,
      nombreValid: false,
      formValid: false
    };
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let fonoValid = this.state.fonoValid;
    let nombreValid = this.state.nombreValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " es incorrecto";
        break;
      case "fono":
        fonoValid = value.match(/^(0|[1-9][0-9]*)$/i);
        fieldValidationErrors.fono = fonoValid
          ? ""
          : " es incorrecto, deben ser numeros";
        break;
      case "nombre":
        nombreValid = value.match(/[A-Za-z]/i);
        fieldValidationErrors.nombre = nombreValid
          ? ""
          : "es incorrecto, deben ser letras";
        break;
      default:
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        fonoValid: fonoValid,
        nombreValid: nombreValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid && this.state.fonoValid && this.state.nombreValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }
  render() {
    return (
      <SectionMargin>
        <Grid bsClass="container">
          <Row>
            <Col lg={6}>
              <Fade left>
                <Title>Contacto</Title>
              </Fade>
              <br />
              <Flip top cascade>
                <FormGroup>
                  <textarea
                    className="form-group textareaForm"
                    componentClass="textarea"
                    placeholder="Tu Mensaje"
                  />
                </FormGroup>
              </Flip>
            </Col>
            <Col lg={6}>
              <br />
              <br />
              <Flip top cascade>
                <form className="demoForm">
                  <div>
                    <FormErrors
                      className="errForm-message"
                      formErrors={this.state.formErrors}
                    />
                  </div>
                  <div
                    className={`form-group ${this.errorClass(
                      this.state.formErrors.nombre
                    )}`}
                  >
                    <input
                      type="text"
                      required
                      className="form-control inputForm"
                      name="nombre"
                      placeholder="Tu Nombre"
                      value={this.state.nombre}
                      onChange={this.handleUserInput}
                    />
                  </div>
                  <div
                    className={`form-group ${this.errorClass(
                      this.state.formErrors.email
                    )}`}
                  >
                    <input
                      type="email"
                      required
                      className="form-control inputForm"
                      name="email"
                      placeholder="Tu Email"
                      value={this.state.email}
                      onChange={this.handleUserInput}
                    />
                  </div>
                  <div
                    className={`form-group ${this.errorClass(
                      this.state.formErrors.fono
                    )}`}
                  >
                    <input
                      type="text"
                      className="form-control inputForm"
                      name="fono"
                      placeholder="Tu Telefono"
                      value={this.state.fono}
                      onChange={this.handleUserInput}
                    />
                  </div>
                  <br />

                  <div className="divbutton">
                    <button
                      type="submit"
                      className="btn btn-primary enviarForm"
                      disabled={!this.state.formValid}
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </Flip>
            </Col>
          </Row>
        </Grid>
      </SectionMargin>
    );
  }
}

export default ContactSection;

const SectionMargin = styled.section`
  position: relative;
  padding-top: 180px;
  padding-bottom: 220px;
  background: #262626;
  width: 102.05%;
  text-align: right;
  @media screen and (max-width: 850px) {
    text-align: center;
  }
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 100px;
  color: #fff;
  text-align: left;
  font-weight: 600;
  margin-top: auto;
  margin-bottom: auto;
  @media screen and (max-width: 850px) {
    text-align: center;
    font-size: 100px;
  }
  @media screen and (max-width: 800px) {
    text-align: center;
    font-size: 70px;
  }
  @media screen and (max-width: 350px) {
    text-align: center;
    font-size: 50px;
  }
`;
