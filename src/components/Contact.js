import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact({ t }) {
  return (
    <div
      id="contact"
      style={{
        padding: "80px 20px",
        background: "#111",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#d4af37", marginBottom: "30px" }}>
        {t.contact.title}
      </h2>

      {/* INFOS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ marginBottom: "30px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {/* Adresse */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaMapMarkerAlt color="#d4af37" />
            <a
              href="https://www.google.com/maps?q=215+rue+Milton+Montreal"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "white",
                textDecoration: "none",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              {t.contact.address}
            </a>
          </div>

          {/* Téléphone */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <FaPhone color="#d4af37" />
            <a
              href="tel:4387639625"
              style={{
                color: "white",
                textDecoration: "none",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              {t.contact.phone}
            </a>
          </div>
        </div>

        {/* RÉSEAUX */}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <a
            href="https://www.instagram.com/barber_lounes_/"
            target="_blank"
            rel="noreferrer"
            style={{ transition: "0.3s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <FaInstagram size={30} color="#d4af37" />
          </a>

          <a
            href="https://www.tiktok.com/@barberlounes4"
            target="_blank"
            rel="noreferrer"
            style={{ transition: "0.3s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <FaTiktok size={30} color="#d4af37" />
          </a>

          <a
            href="https://www.facebook.com/BARBERLOUNES/"
            target="_blank"
            rel="noreferrer"
            style={{ transition: "0.3s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.2)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <FaFacebook size={30} color="#d4af37" />
          </a>
        </div>
      </motion.div>

      {/* MAP */}
      <div style={{ marginTop: "40px" }}>
        <iframe
          title="map"
          src="https://www.google.com/maps?q=215+rue+Milton+Montreal&output=embed"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
