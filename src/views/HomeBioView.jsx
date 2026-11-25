import { developerProfile } from "../data/portfolioData";
import { usePortfolio } from "../context/PortfolioContext";
import Footer from "../components/Footer";

export default function HomeBioView() {
  const { setActiveView } = usePortfolio();

  return (
    <div>
      <section style={styles.banner}>
        <img
          src={developerProfile.avatar}
          alt={developerProfile.fullName}
          style={styles.avatar}
        />
        <div>
          <span style={styles.pill}>Disponible para proyectos Backend</span>
          <h1 style={styles.title}>{developerProfile.fullName}</h1>
          <h2 style={styles.subtitle}>
            {developerProfile.role} · {developerProfile.age} años
          </h2>
          <p style={styles.desc}>{developerProfile.tagline}</p>

          {/* 2 Botones Call To Action obligatorios */}
          <div style={styles.ctaGroup}>
            <button
              style={styles.primaryCta}
              onClick={() => setActiveView("projects")}
            >
              Explorar Proyectos (15)
            </button>
            <button
              style={styles.secondaryCta}
              onClick={() => setActiveView("chat")}
            >
              Contactar / Hablar con mi IA
            </button>
          </div>
        </div>
      </section>

      {/* Sección Biografía (3 elementos) */}
      <section style={styles.section}>
        <h2>Biografía y Perfil Profesional</h2>
        <div style={styles.grid}>
          {developerProfile.bioItems.map((item, idx) => (
            <article key={idx} style={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Sección Redes Sociales (mínimo 2) */}
      <section style={styles.section}>
        <h2>Redes Profesionales y Repositorios</h2>
        <div style={styles.socialRow}>
          <a
            href={developerProfile.githubUrl}
            target="_blank"
            rel="noreferrer"
            style={styles.socialLink}
          >
            GitHub (@Jesuslegui) ↗
          </a>
          <a
            href={developerProfile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            style={styles.socialLink}
          >
            LinkedIn Profesional ↗
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  banner: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    padding: "3rem 2rem",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    color: "#f8fafc",
    borderRadius: "12px",
    flexWrap: "wrap"
  },
  avatar: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    border: "3px solid #38bdf8",
    objectFit: "cover"
  },
  pill: {
    backgroundColor: "#1d4ed8",
    padding: "0.25rem 0.75rem",
    borderRadius: "999px",
    fontSize: "0.8rem"
  },
  title: { fontSize: "2rem", margin: "0.5rem 0 0.2rem" },
  subtitle: { fontSize: "1.15rem", color: "#38bdf8", margin: "0 0 0.75rem" },
  desc: { maxWidth: "650px", color: "#cbd5e1", lineHeight: 1.5 },
  ctaGroup: { display: "flex", gap: "1rem", marginTop: "1.25rem", flexWrap: "wrap" },
  primaryCta: {
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.25rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  secondaryCta: {
    backgroundColor: "transparent",
    color: "#38bdf8",
    border: "1px solid #38bdf8",
    padding: "0.75rem 1.25rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  section: { marginTop: "2.5rem" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1rem",
    marginTop: "1rem"
  },
  card: {
    backgroundColor: "#1e293b",
    color: "#f8fafc",
    padding: "1.25rem",
    borderRadius: "10px",
    border: "1px solid #334155"
  },
  socialRow: { display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" },
  socialLink: {
    backgroundColor: "#0f172a",
    color: "#38bdf8",
    padding: "0.75rem 1.25rem",
    borderRadius: "8px",
    textDecoration: "none",
    border: "1px solid #334155",
    fontWeight: "600"
  }
};