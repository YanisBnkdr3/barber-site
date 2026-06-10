import { motion } from "framer-motion";

import img1 from "../images/barber5.png";
import img2 from "../images/barber4.png";
import img3 from "../images/barber7.png";

export default function Gallery() {
  const images = [img1, img2, img3];

  return (
    <div
      id="gallery"
      style={{
        padding: "80px 20px",
        background: "#0b0b0b",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#d4af37", marginBottom: "40px" }}>Gallery</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="gallery"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            style={{
              width: "300px",
              height: "300px",
              objectFit: "cover",
              borderRadius: "10px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            //  hover zoom
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
        ))}
      </div>
    </div>
  );
}
