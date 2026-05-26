import { motion } from "framer-motion";

export default function Hero({ t }) {
  return (
    <div
      id="home"
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Overlay sombre */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.65)",
        }}
      />

      {/* Contenu */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          padding: "20px",
        }}
      >
        {/* TITRE */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            color: "#d4af37",
            fontSize: "60px",
            margin: 0,
            letterSpacing: "3px",
          }}
        >
          {t.hero.title}
        </motion.h1>

        {/* SLOGAN */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontSize: "20px",
            marginTop: "15px",
            color: "white",
          }}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* BOUTON */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            marginTop: "25px",
            padding: "12px 25px",
            background: "#d4af37",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
          onClick={() => {
            document
              .getElementById("services")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          {t.hero.button}
        </motion.button>
      </div>
    </div>
  );
}
