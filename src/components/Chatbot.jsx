import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import steps from "./steps.json";

// جميع الخصائص المتاحة
const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

export default function Chatbot() {
  return (
    <ThemeProvider theme={theme}>
      <div className="absolute bottom-0 right-0 m-5 z-30">
        <ChatBot steps={steps} floating={true} />
      </div>
    </ThemeProvider>
  );
}
