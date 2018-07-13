import React from "react";
import { ThemeProvider } from "styled-components";

import ChatBot from "../lib/index";
import ApiConection from "./ApiConection";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#ff3333",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#ff3333",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a"
};

const steps = [
  {
    id: "1",
    message: "¡Hola! Me llamo Ubot. ¿En qué puedo ayudarte?",
    trigger: "pregunta"
  },
  {
    id: "pregunta",
    user: true,
    trigger: "3"
  },
  {
    id: "3",
    component: <ApiConection />,
    asMessage: true,
    trigger: "pregunta"
  }
];

const Bot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot floating steps={steps} />
  </ThemeProvider>
);

export default Bot;
