import { motion } from "framer-motion";

// 🔥 IMPORT IMAGES
import coupeImg from "../images/coupe.png";
import barbeImg from "../images/barbe.png";
import comboImg from "../images/coupebarbe.png";
import fadeImg from "../images/fade.png";

export default function Services({ t }) {
  // 🔥 on prend les traductions
  const services = t.services.items;

  // 🔥 on associe les images dans le même ordre
  const images = [coupeImg, barbeImg, comboImg, fadeImg];

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
              cursor: "pointer",
              transition: "0.3s",
            }}
            // 🔥 HOVER
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 25px rgba(212,175,55,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 15px rgba(0,0,0,0.5)";
            }}
          >
            {/* 📸 IMAGE */}
            <img
              src={images[index]}
              alt={item.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "contain",
                background: "#000",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />

            {/* 📝 TEXTE */}
            <h3 style={{ color: "#d4af37" }}>{item.title}</h3>
            <p style={{ color: "#ccc" }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
