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
        <span style={{ color: "#d4af37", fontWeight: "bold" }}>
          Yanis Benkeder
        </span>
      </p>
    </div>
  );
}
