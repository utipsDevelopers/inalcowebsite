import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

class ContactForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  
  render() {
    return (
        <form>
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Nombre completo"
          placeholder="Tu nombre"
        />
        <FieldGroup
          id="formControlsEmail"
          type="email"
          label="Email"
          placeholder="Tu email"
        />
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Mensaje</ControlLabel>
          <FormControl componentClass="textarea" placeholder="Tu mensaje" />
        </FormGroup>
        <Button type="submit">Enviar</Button>
        <FormGroup>
          <ControlLabel>
              Puedes hablar con Ace, nuestro asistente virtual, 
              para tus preguntas! Escríbele por el chat!
          </ControlLabel>
        </FormGroup>
      </form>
    );
  }
}

export default ContactForm;
