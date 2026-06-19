import { motion } from "framer-motion";

import coupeImg from "../images/coupe.png";
import barbeImg from "../images/Buzzcut.png";
import comboImg from "../images/espanoel.png";
import fadeImg from "../images/fade.png";

export default function Services({ t }) {
  const services = t.services.items;
  const images = [coupeImg, barbeImg, comboImg, fadeImg];

  const bookingLink = "https://calendly.com/lounesoubouchou/30min";

  return (
    <div
      id="services"
      style={{
        padding: "80px 20px",
        background: "#111",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#d4af37", marginBottom: "40px" }}>
        {t.services.title}
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            style={{
              background: "#1a1a1a",
              padding: "20px",
              borderRadius: "10px",
              width: "260px",
              boxShadow: "0 0 15px rgba(0,0,0,0.5)",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 25px rgba(212,175,55,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 15px rgba(0,0,0,0.5)";
            }}
          >
            {/* IMAGE PRO */}
            <div
              style={{
                width: "100%",
                height: "180px",
                overflow: "hidden",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            >
              <img
                src={images[index]}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition:
                    index === 1
                      ? "100% 40%" // Buzz Cut
                      : index === 2
                        ? "100% 40%" // Espagnole
                        : "top", // autres images
                }}
              />
            </div>

            {/* TEXTE */}
            <h3 style={{ color: "#d4af37" }}>{item.title}</h3>
            <p style={{ color: "#ccc" }}>{item.desc}</p>
            <h4 style={{ marginTop: "10px", color: "white" }}>{item.price}</h4>

            {/* BOUTON */}
            <button
              onClick={() => window.open(bookingLink, "_blank")}
              style={{
                marginTop: "15px",
                padding: "12px",
                width: "100%",
                background: "#d4af37",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "15px",
                color: "#000",
                boxShadow: "0 4px 15px rgba(212,175,55,0.4)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#c19b2e")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#d4af37")
              }
            >
              {t.services.reserve}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
