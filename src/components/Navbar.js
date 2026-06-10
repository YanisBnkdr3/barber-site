import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../images/logo2.png";

export default function Navbar({ t, lang, setLang }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        padding: "15px 20px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        boxSizing: "border-box",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LOGO */}
        <img src={logo} alt="logo" style={{ height: "50px" }} />

        {/* ☰ MENU BUTTON */}
        <div
          onClick={() => setOpen(!open)}
          style={{
            fontSize: "28px",
            color: "white",
            cursor: "pointer",
          }}
        >
          ☰
        </div>
      </div>

      {/*  MENU MOBILE */}
      {open && (
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            textAlign: "center",
          }}
        >
          <Link
            to="home"
            smooth
            duration={500}
            onClick={() => setOpen(false)}
            style={{ color: "white" }}
          >
            {t.nav.home}
          </Link>

          <Link
            to="services"
            smooth
            duration={500}
            onClick={() => setOpen(false)}
            style={{ color: "white" }}
          >
            {t.nav.services}
          </Link>

          <Link
            to="gallery"
            smooth
            duration={500}
            onClick={() => setOpen(false)}
            style={{ color: "white" }}
          >
            {t.nav.gallery}
          </Link>

          <Link
            to="about"
            smooth
            duration={500}
            onClick={() => setOpen(false)}
            style={{ color: "white" }}
          >
            {t.nav.about}
          </Link>

          <Link
            to="contact"
            smooth
            duration={500}
            onClick={() => setOpen(false)}
            style={{ color: "white" }}
          >
            {t.nav.contact}
          </Link>

          {/* LANG */}
          <div
            style={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <button
              onClick={() => setLang("fr")}
              style={{
                background: lang === "fr" ? "#d4af37" : "gray",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              FR
            </button>

            <button
              onClick={() => setLang("en")}
              style={{
                background: lang === "en" ? "#d4af37" : "gray",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
