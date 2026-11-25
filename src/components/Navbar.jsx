import { usePortfolio } from "../context/PortfolioContext";

const navigationItems = [
  { id: "bio", label: "Perfil" },
  { id: "projects", label: "Proyectos" },
  { id: "stack", label: "Stack & estudios" },
  { id: "value", label: "Propuesta de valor" },
  { id: "chat", label: "Contacto / IA" }
];

export default function Navbar() {
  const { activeView, setActiveView } = usePortfolio();

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegación principal">
        <button
          className="navbar-brand"
          type="button"
          onClick={() => setActiveView("bio")}
          aria-label="Ir al perfil"
        >
          <span className="navbar-mark" aria-hidden="true">&lt;/&gt;</span>
          <span>Jesús David Leguizamo</span>
        </button>
        <div className="navbar-links">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              className={`navbar-link${activeView === item.id ? " is-active" : ""}`}
              type="button"
              onClick={() => setActiveView(item.id)}
              aria-current={activeView === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
