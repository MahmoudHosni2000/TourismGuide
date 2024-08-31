import { useEffect } from "react";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import ScrollToTop from "./components/ScrollToTop.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Chatbot from "./components/Chatbot.jsx";
import AppRoutes from "./routes.js";


function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.body.style.textAlign = i18n.language === "ar" ? "right" : "left";
    
    const elements = document.querySelectorAll('.my-specific-class');
    elements.forEach(element => {
      element.style.textAlign = i18n.language === "ar" ? "right" : "left";
    })

  }, [i18n.language]);

  return (
    <div >
      <Chatbot />
      <Header />
      <ScrollToTop />
      <AppRoutes />
    </div>
  );
}

export default App;
