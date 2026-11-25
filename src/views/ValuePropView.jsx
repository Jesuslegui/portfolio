import { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import Footer from "../components/Footer";

const carouselSlides = [
  {
    title: "1. Arquitectura Escalable y Limpia",
    subtitle: "Código mantenible desde el día uno",
    description:
      "Diseño sistemas desacoplados en C#, Laravel y Python aplicando principios SOLID, separación de capas y control de calidad continuo para que tu negocio crezca sin deuda técnica."
  },
  {
    title: "2. Seguridad e Integridad de Datos",
    subtitle: "Protección en cada transacción",
    description:
      "Implementación de autenticación multifactor (2FA), tokens JWT, encriptación de credenciales y bases de datos relacionales normalizadas con respaldo y auditoría."
  },
  {
    title: "3. Integración Inteligente con IA y APIs",
    subtitle: "Automatización moderna y eficiente",
    description:
      "Conecto tus plataformas con servicios RESTful de alto rendimiento y modelos de Inteligencia Artificial optimizados en consumo de tokens y tiempos de respuesta."
  }
];

export default function ValuePropView() {
  const [slideIndex, setSlideIndex] = useState(0);
  const { setActiveView } = usePortfolio();

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % carouselSlides.length);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);

  const current = carouselSlides[slideIndex];

  return (
    <div>
      <h1>Propuesta de Valor en Ingeniería Backend</h1>

      {/* Sección Principal Abierta: Carrusel de Información */}
      <section style={styles.carouselBox}>
        <span style={styles.step}>
          Pilar {slideIndex + 1} de {carouselSlides.length}
        </span>
        <h2 style={styles.slideTitle}>{current.title}</h2>
        <h4 style={styles.slideSub}>{current.subtitle}</h4>
        <p style={styles.slideDesc}>{current.description}</p>

        <div style={styles.controls}>
          <button onClick={prevSlide} style={styles.navBtn}>
            ← Anterior
          </button>
          <div style={styles.dots}>
            {carouselSlides.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setSlideIndex(idx)}
                style={{
                  ...styles.dot,
                  backgroundColor: idx === slideIndex ? "#38bdf8" : "#475569"
                }}
              />
            ))}
          </div>
          <button onClick={nextSlide} style={styles.navBtn}>
            Siguiente →
          </button>
        </div>
      </section>

      {/* Sección Secundaria Abierta: Proceso de Entrega */}
      <section style={styles.secondarySection}>
        <h2>¿Cómo transformo tus requerimientos en software funcional?</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Fase 1: Modelado de Datos</h3>
            <p>Análisis de reglas de negocio, diseño de entidades y normalización SQL antes de escribir la primera línea de código.</p>
          </div>
          <div style={styles.card}>
            <h3>Fase 2: Construcción de API & Lógica</h3>
            <p>Desarrollo modular en C#, PHP/Laravel, Python o JS con manejo de excepciones y pruebas de endpoints.</p>
          </div>
          <div style={styles.card}>
            <h3>Fase 3: Despliegue y Documentación</h3>
            <p>Entrega con repositorios estructurados en GitHub, documentación clara y métricas de rendimiento.</p>
          </div>
        </div>

        <button onClick={() => setActiveView("chat")} style={styles.cta}>
          Solicitar Propuesta Técnica →
        </button>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  carouselBox: {
    background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
    color: "#f8fafc",
    padding: "2.5rem",
    borderRadius: "12px",
    marginTop: "1.5rem",
    textAlign: "center"
  },
  step: {
    backgroundColor: "rgba(56, 189, 248, 0.2)",
    color: "#38bdf8",
    padding: "0.3rem 0.8rem",
    borderRadius: "999px",
    fontSize: "0.85rem"
  },
  slideTitle: { fontSize: "1.8rem", margin: "1rem 0 0.3rem" },
  slideSub: { color: "#93c5fd", margin: "0 0 1rem" },
  slideDesc: { maxWidth: "700px", margin: "0 auto 1.5rem", lineHeight: 1.6 },
  controls: { display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem" },
  navBtn: {
    backgroundColor: "#0f172a",
    color: "#fff",
    border: "1px solid #38bdf8",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    cursor: "pointer"
  },
  dots: { display: "flex", gap: "0.5rem" },
  dot: { width: "12px", height: "12px", borderRadius: "50%", cursor: "pointer" },
  secondarySection: { marginTop: "2.5rem" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1rem",
    margin: "1rem 0 1.5rem"
  },
  card: {
    backgroundColor: "#1e293b",
    color: "#f8fafc",
    padding: "1.25rem",
    borderRadius: "10px",
    border: "1px solid #334155"
  },
  cta: {
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "0.85rem 1.5rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};