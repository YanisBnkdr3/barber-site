import { Link } from "react-scroll";
import logo from "../images/logo2.png";

export default function Navbar({ t, lang, setLang }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        boxSizing: "border-box",
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
      }}
    >
      {/* LOGO */}
      <img
        src={logo}
        alt="logo"
        style={{
          height: "70px",
          objectFit: "contain",
        }}
      />

      {/* MENU */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link
          to="home"
          smooth
          duration={500}
          style={{ color: "white", cursor: "pointer" }}
        >
          {t.nav.home}
        </Link>

        <Link
          to="services"
          smooth
          duration={500}
          style={{ color: "white", cursor: "pointer" }}
        >
          {t.nav.services}
        </Link>

        <Link
          to="gallery"
          smooth
          duration={500}
          style={{ color: "white", cursor: "pointer" }}
        >
          {t.nav.gallery}
        </Link>

        <Link
          to="about"
          smooth
          duration={500}
          style={{ color: "white", cursor: "pointer" }}
        >
          {t.nav.about}
        </Link>

        <Link
          to="contact"
          smooth
          duration={500}
          style={{ color: "white", cursor: "pointer" }}
        >
          {t.nav.contact}
        </Link>

        {/* 🔥 Boutons langue */}
        <div style={{ display: "flex", gap: "5px", marginLeft: "20px" }}>
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
    </div>
  );
}
