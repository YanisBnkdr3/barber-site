import { motion } from "framer-motion";
import img1 from "../images/barber1.png";
import img2 from "../images/barber2.png";
import img3 from "../images/barber3.png";

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
          gap: "40px",
        }}
      >
        {/* 🔥 IMAGES */}
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <motion.img
            src={img1}
            alt="barber1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{
              width: "260px",
              height: "320px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <motion.img
              src={img2}
              alt="barber2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <motion.img
              src={img3}
              alt="barber3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                width: "150px",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>

        {/* 📝 TEXTE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: "500px" }}
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
