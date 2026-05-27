import { motion } from "framer-motion";
import img1 from "../images/logo2.png";

export default function About({ t }) {
  return (
    <div
      id="about"
      style={{
        padding: "80px 20px",
        background: "#0b0b0b",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {/* 🔥 IMAGE UNIQUE */}
        <motion.img
          src={img1}
          alt="barber"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            borderRadius: "15px",
            objectFit: "cover",
          }}
        />

        {/* 📝 TEXTE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#d4af37" }}>{t.about.title}</h2>

          <p style={{ lineHeight: "1.6", marginTop: "15px" }}>
            {t.about.text1}
          </p>

          <p style={{ lineHeight: "1.6", marginTop: "10px" }}>
            {t.about.text2}
          </p>

          <p style={{ lineHeight: "1.6", marginTop: "10px" }}>
            {t.about.text3}
          </p>

          <p style={{ lineHeight: "1.6", marginTop: "10px" }}>
            {t.about.text4}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
