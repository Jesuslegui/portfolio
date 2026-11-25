import {
  techStackList,
  aiToolsList,
  experienceTimeline
} from "../data/portfolioData";
import Footer from "../components/Footer";

export default function StackStudiesView() {
  return (
    <div>
      <h1>Stack Tecnológico, Herramientas IA y Trayectoria</h1>

      {/* Mínimo 3 tarjetas con imágenes */}
      <section style={styles.section}>
        <h2>Stack Tecnológico Principal (Backend & Datos)</h2>
        <div style={styles.grid}>
          {techStackList.map((tech) => (
            <article key={tech.id} style={styles.card}>
              <img src={tech.image} alt={tech.name} style={styles.icon} />
              <span style={styles.tag}>{tech.category}</span>
              <h3>{tech.name}</h3>
              <p style={styles.text}>{tech.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Mínimo 2 herramientas de IA */}
      <section style={styles.section}>
        <h2>Herramientas de Inteligencia Artificial Aplicadas</h2>
        <div style={styles.grid}>
          {aiToolsList.map((tool) => (
            <article key={tool.id} style={styles.aiCard}>
              <h3>🤖 {tool.name}</h3>
              <p style={styles.text}>{tool.usage}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Timeline con 3 experiencias */}
      <section style={styles.section}>
        <h2>Timeline de Experiencia y Formación</h2>
        <div style={styles.timeline}>
          {experienceTimeline.map((exp) => (
            <div key={exp.id} style={styles.timelineItem}>
              <span style={styles.period}>{exp.period}</span>
              <h3>{exp.role}</h3>
              <h4 style={styles.org}>{exp.organization}</h4>
              <p style={styles.text}>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  section: { marginTop: "2rem" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.2rem",
    marginTop: "1rem"
  },
  card: {
    backgroundColor: "#1e293b",
    color: "#f8fafc",
    padding: "1.5rem",
    borderRadius: "10px",
    border: "1px solid #334155",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.5rem"
  },
  icon: { width: "48px", height: "48px" },
  tag: {
    backgroundColor: "#0f172a",
    color: "#38bdf8",
    padding: "0.2rem 0.6rem",
    borderRadius: "4px",
    fontSize: "0.8rem"
  },
  aiCard: {
    backgroundColor: "#0f172a",
    color: "#f8fafc",
    padding: "1.5rem",
    borderRadius: "10px",
    border: "1px solid #2563eb"
  },
  text: { color: "#cbd5e1", lineHeight: 1.5, margin: 0 },
  timeline: {
    borderLeft: "3px solid #38bdf8",
    paddingLeft: "1.5rem",
    marginTop: "1.2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  },
  timelineItem: {
    backgroundColor: "#1e293b",
    padding: "1.25rem",
    borderRadius: "8px",
    color: "#f8fafc"
  },
  period: { color: "#38bdf8", fontWeight: "bold", fontSize: "0.85rem" },
  org: { color: "#94a3b8", margin: "0.2rem 0 0.6rem" }
};