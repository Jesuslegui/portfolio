import { usePortfolio } from "../context/PortfolioContext";

export default function ProjectSidebar() {
  const { selectedProject, setSelectedProject } = usePortfolio();

  if (!selectedProject) return null;

  return (
    <aside style={styles.overlay}>
      <div style={styles.sidebar}>
        <div style={styles.top}>
          <span style={styles.idTag}>ID #{selectedProject.id}</span>
          <button onClick={() => setSelectedProject(null)} style={styles.closeBtn}>
            ✕ Cerrar
          </button>
        </div>

        <h2>{selectedProject.title}</h2>
        <p style={styles.meta}>
          <strong>Categoría:</strong> {selectedProject.category} |{" "}
          <strong>Tecnología Principal:</strong> {selectedProject.mainTech}
        </p>

        <div style={styles.box}>
          <h4>Resumen Ejecutivo</h4>
          <p>{selectedProject.shortDescription}</p>
        </div>

        <div style={styles.box}>
          <h4>Arquitectura y Detalle Técnico</h4>
          <p>{selectedProject.fullDescription}</p>
        </div>

        <div style={styles.box}>
          <h4>Componentes Clave Implementados</h4>
          <p>{selectedProject.architectureHighlights}</p>
        </div>

        <section style={styles.box} aria-labelledby="project-challenges-heading">
          <h4 id="project-challenges-heading">
            Desafíos Técnicos e Implicaciones Arquitectónicas
          </h4>
          <ul style={styles.challengeList}>
            {selectedProject.technicalChallenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </section>

        <section style={styles.preview} aria-labelledby="project-preview-heading">
          <div style={styles.previewHeading}>
            <h4 id="project-preview-heading">Vista Previa / Simulador de Ejecución</h4>
            <span style={styles.simulatedTag}>SIMULACIÓN</span>
          </div>
          <code style={styles.command}>{selectedProject.preview.endpoint}</code>
          <p style={styles.status}>
            <span style={styles.statusDot} aria-hidden="true" />
            {selectedProject.preview.status}
          </p>
          <pre style={styles.output}>{selectedProject.preview.output}</pre>
          <div style={styles.toolBadges} aria-label="Herramientas utilizadas">
            {selectedProject.preview.tools.map((tool) => (
              <span key={tool} style={styles.toolBadge}>{tool}</span>
            ))}
          </div>
        </section>

        <a
          href={selectedProject.repoUrl}
          target="_blank"
          rel="noreferrer"
          style={styles.repoBtn}
        >
          Ver Código en GitHub ↗
        </a>
      </div>
    </aside>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 1000
  },
  sidebar: {
    width: "100%",
    maxWidth: "460px",
    backgroundColor: "#0f172a",
    color: "#f8fafc",
    padding: "2rem",
    overflowY: "auto",
    borderLeft: "2px solid #38bdf8",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  },
  top: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  idTag: {
    backgroundColor: "#1e293b",
    color: "#38bdf8",
    padding: "0.25rem 0.6rem",
    borderRadius: "4px",
    fontFamily: "monospace"
  },
  closeBtn: {
    backgroundColor: "#ef4444",
    color: "#fff",
    border: "none",
    padding: "0.4rem 0.8rem",
    borderRadius: "6px",
    cursor: "pointer"
  },
  meta: { color: "#94a3b8", fontSize: "0.9rem" },
  box: {
    backgroundColor: "#1e293b",
    padding: "1rem",
    borderRadius: "8px",
    fontSize: "0.95rem",
    lineHeight: 1.5
  },
  challengeList: {
    margin: "0.65rem 0 0",
    paddingLeft: "1.25rem",
    display: "grid",
    gap: "0.55rem"
  },
  preview: {
    background: "linear-gradient(145deg, #111827, #0b1220)",
    border: "1px solid #334155",
    padding: "1rem",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem"
  },
  previewHeading: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "0.5rem"
  },
  simulatedTag: {
    flex: "0 0 auto",
    color: "#7dd3fc",
    backgroundColor: "rgba(14, 165, 233, 0.14)",
    border: "1px solid rgba(56, 189, 248, 0.3)",
    borderRadius: "999px",
    padding: "0.15rem 0.45rem",
    fontSize: "0.65rem",
    fontWeight: 700,
    letterSpacing: "0.04em"
  },
  command: {
    display: "block",
    overflowWrap: "anywhere",
    color: "#bae6fd",
    backgroundColor: "#020617",
    padding: "0.65rem",
    borderRadius: "6px",
    fontSize: "0.8rem"
  },
  status: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    margin: 0,
    color: "#86efac",
    fontSize: "0.85rem"
  },
  statusDot: {
    width: "0.5rem",
    height: "0.5rem",
    borderRadius: "50%",
    backgroundColor: "#4ade80",
    boxShadow: "0 0 10px rgba(74, 222, 128, 0.5)"
  },
  output: {
    margin: 0,
    padding: "0.75rem",
    borderRadius: "6px",
    overflowX: "auto",
    whiteSpace: "pre-wrap",
    overflowWrap: "anywhere",
    backgroundColor: "#020617",
    color: "#cbd5e1",
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace",
    fontSize: "0.78rem",
    lineHeight: 1.5
  },
  toolBadges: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem"
  },
  toolBadge: {
    padding: "0.2rem 0.55rem",
    border: "1px solid #475569",
    borderRadius: "999px",
    color: "#cbd5e1",
    backgroundColor: "rgba(51, 65, 85, 0.55)",
    fontSize: "0.72rem"
  },
  repoBtn: {
    marginTop: "auto",
    textAlign: "center",
    backgroundColor: "#2563eb",
    color: "#fff",
    padding: "0.85rem",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold"
  }
};