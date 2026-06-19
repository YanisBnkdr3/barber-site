export default function Footer() {
  return (
    <div
      style={{
        background: "#0b0b0b",
        color: "white",
        textAlign: "center",
        padding: "20px",
        borderTop: "1px solid #333",
        marginTop: "40px",
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Barber Lounes — Site réalisé par{" "}
        <a
          href="https://www.linkedin.com/in/yanis-benkeder-6a7bba334"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#d4af37",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Yanis Benkeder
        </a>
      </p>
    </div>
  );
}
