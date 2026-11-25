import { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import ProjectSidebar from "../components/ProjectSidebar";
import Footer from "../components/Footer";

export default function ProjectsView() {
  const { projects, setSelectedProject } = usePortfolio();

  // Estados de los 2 filtros (1 selector + 1 búsqueda libre)
  const [techInput, setTechInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [appliedFilters, setAppliedFilters] = useState({ tech: "", search: "" });

  // Paginación: 10 proyectos por página
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const handleApplyFilters = (e) => {
    e.preventDefault();
    setAppliedFilters({ tech: techInput, search: searchInput });
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setTechInput("");
    setSearchInput("");
    setAppliedFilters({ tech: "", search: "" });
    setCurrentPage(1);
  };

  const filteredProjects = projects.filter((proj) => {
    const matchesTech = appliedFilters.tech
      ? proj.mainTech === appliedFilters.tech
      : true;
    const matchesSearch = appliedFilters.search
      ? proj.title.toLowerCase().includes(appliedFilters.search.toLowerCase()) ||
        proj.category.toLowerCase().includes(appliedFilters.search.toLowerCase())
      : true;
    return matchesTech && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div>
      <h1>Catálogo de Proyectos Backend y Sistemas</h1>
      <p style={{ color: "#94a3b8" }}>
        Mostrando {paginatedProjects.length} de {filteredProjects.length} proyectos (10 por página). Selecciona un proyecto para ver sus 8 atributos técnicos.
      </p>

      {/* Sección de Filtros (2 atributos + Botón Filtrar + Botón Limpiar) */}
      <form onSubmit={handleApplyFilters} style={styles.filterBar}>
        {/* Filtro 1: Selector obligatorio */}
        <select
          value={techInput}
          onChange={(e) => setTechInput(e.target.value)}
          style={styles.input}
        >
          <option value="">Todas las tecnologías</option>
          <option value="C#">C#</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="PHP / Laravel">PHP / Laravel</option>
          <option value="Next.js">Next.js</option>
          <option value="Bases de Datos Relacionales">Bases de Datos Relacionales</option>
        </select>

        {/* Filtro 2: Libre elección (Búsqueda por nombre o categoría) */}
        <input
          type="text"
          placeholder="Filtrar por nombre o categoría..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.filterBtn}>
          Filtrar
        </button>
        <button type="button" onClick={handleClearFilters} style={styles.clearBtn}>
          Limpiar Filtros
        </button>
      </form>

      {/* Grid de Tarjetas (5 propiedades obligatorias visibles en cada tarjeta) */}
      <div style={styles.grid}>
        {paginatedProjects.map((project) => (
          <article key={project.id} style={styles.card}>
            <div style={styles.cardTop}>
              {/* Atributo 1: ID */}
              <span style={styles.badge}>#{project.id}</span>
              {/* Atributo 2: Tecnología Principal */}
              <span style={styles.techTag}>{project.mainTech}</span>
            </div>

            {/* Atributo 3: Título */}
            <h3 style={styles.cardTitle}>{project.title}</h3>

            {/* Atributo 4: Categoría */}
            <p style={styles.category}>{project.category}</p>

            {/* Atributo 5: Descripción Corta */}
            <p style={styles.desc}>{project.shortDescription}</p>

            <button
              onClick={() => setSelectedProject(project)}
              style={styles.detailBtn}
            >
              Ver Detalle (8 atributos)
            </button>
          </article>
        ))}
      </div>

      {/* Controles de Paginación */}
      <div style={styles.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          style={styles.pageBtn}
        >
          ← Anterior
        </button>
        <span>
          Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          style={styles.pageBtn}
        >
          Siguiente →
        </button>
      </div>

      {/* Sidebar con los 8 atributos */}
      <ProjectSidebar />
      <Footer />
    </div>
  );
}

const styles = {
  filterBar: {
    display: "flex",
    gap: "0.75rem",
    margin: "1.5rem 0",
    flexWrap: "wrap",
    backgroundColor: "#1e293b",
    padding: "1rem",
    borderRadius: "10px"
  },
  input: {
    padding: "0.6rem 0.9rem",
    borderRadius: "6px",
    border: "1px solid #475569",
    backgroundColor: "#0f172a",
    color: "#f8fafc",
    minWidth: "210px"
  },
  filterBtn: {
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "0.6rem 1.2rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  clearBtn: {
    backgroundColor: "#475569",
    color: "#fff",
    border: "none",
    padding: "0.6rem 1.2rem",
    borderRadius: "6px",
    cursor: "pointer"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.2rem"
  },
  card: {
    backgroundColor: "#1e293b",
    color: "#f8fafc",
    padding: "1.25rem",
    borderRadius: "10px",
    border: "1px solid #334155",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem"
  },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  badge: { fontFamily: "monospace", color: "#94a3b8" },
  techTag: {
    backgroundColor: "#0f172a",
    color: "#38bdf8",
    padding: "0.2rem 0.6rem",
    borderRadius: "6px",
    fontSize: "0.8rem",
    fontWeight: "bold"
  },
  cardTitle: { margin: "0.3rem 0 0", fontSize: "1.1rem" },
  category: { color: "#94a3b8", fontSize: "0.85rem", margin: 0 },
  desc: { fontSize: "0.9rem", color: "#cbd5e1", flexGrow: 1 },
  detailBtn: {
    marginTop: "0.75rem",
    backgroundColor: "#0284c7",
    color: "#fff",
    border: "none",
    padding: "0.6rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600"
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.25rem",
    marginTop: "2rem"
  },
  pageBtn: {
    backgroundColor: "#1e293b",
    color: "#f8fafc",
    border: "1px solid #475569",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    cursor: "pointer"
  }
};