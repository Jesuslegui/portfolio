export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>
        <strong>Jesús David Leguizamo Velasco</strong> — Desarrollador Backend (C# · JavaScript · Python · PHP · SQL)
      </p>
      <p style={styles.sub}>
        Proyecto Final de Desarrollo de Software · Arquitectura React + Context API + Integración IA · 2026
      </p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "3rem",
    padding: "1.5rem 2rem",
    backgroundColor: "#0f172a",
    color: "#94a3b8",
    textAlign: "center",
    borderTop: "1px solid #1e293b"
  },
  sub: { fontSize: "0.85rem", marginTop: "0.3rem" }
};