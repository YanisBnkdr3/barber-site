import { useState } from "react";
import translations from "./components/translations";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const [lang, setLang] = useState("fr");

  const t = translations[lang];

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} />
      <Services t={t} />
      <Gallery />
      <About t={t} />
      <Contact t={t} />
      <Footer />
    </>
  );
}

export default App;
