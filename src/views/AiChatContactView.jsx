import { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import { sendMessageToAI } from "../services/aiService";
import Footer from "../components/Footer";

export default function AiChatContactView() {
  const { chatHistory, addChatMessage } = usePortfolio();

  // Estado del Chat IA
  const [promptInput, setPromptInput] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);

  // Estado del Formulario de Contacto
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    telefono: "",
    descripcion: ""
  });
  const [errors, setErrors] = useState({});
  const [submittedMsg, setSubmittedMsg] = useState("");

  // Envío al modelo de IA
  const handleSendChat = async (e) => {
    e.preventDefault();
    if (!promptInput.trim() || loadingAI) return;

    const userText = promptInput.trim();
    addChatMessage("user", userText);
    setPromptInput("");
    setLoadingAI(true);

    try {
      const reply = await sendMessageToAI(userText, chatHistory);
      addChatMessage("ai", reply);
    } catch (error) {
      addChatMessage("ai", "Error al conectar con el modelo de IA. Verifica tu API Key.");
    } finally {
      setLoadingAI(false);
    }
  };

  // Control estricto de inputs en tiempo real
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "nombre" || name === "apellidos") {
      // Solo letras (incluye tildes y ñ) y espacios, máximo 20 caracteres
      const onlyLetters = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "").slice(0, 20);
      setFormData({ ...formData, [name]: onlyLetters });
      return;
    }

    if (name === "telefono") {
      // Solo números
      const onlyNumbers = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: onlyNumbers });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio (solo letras, máx 20).";
    if (!formData.apellidos.trim()) newErrors.apellidos = "Los apellidos son obligatorios (solo letras, máx 20).";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.correo)) {
      newErrors.correo = "Ingresa un correo electrónico válido.";
    }

    if (!formData.telefono || formData.telefono.length < 7) {
      newErrors.telefono = "Ingresa un número de teléfono válido (solo dígitos).";
    }

    if (!formData.descripcion.trim()) {
      newErrors.descripcion = "La descripción del proyecto es obligatoria.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmittedMsg(
      `¡Gracias ${formData.nombre} ${formData.apellidos}! Tu solicitud de proyecto fue registrada correctamente. Te contactaré pronto al correo ${formData.correo}.`
    );
    setFormData({ nombre: "", apellidos: "", correo: "", telefono: "", descripcion: "" });
    setErrors({});
  };

  return (
    <div>
      <h1>Asistente IA & Contacto Directo</h1>
      <div style={styles.splitGrid}>
        {/* Columna 1: Chat de Conversación con IA */}
        <section style={styles.panel}>
          <h2>Chat con Asistente Backend (IA)</h2>
          <p style={styles.hint}>
            Implementa Prompt Engineering, optimización de contexto (últimos 4 turnos) e historial persistente.
          </p>

          <div style={styles.chatBox}>
            {chatHistory.map((msg) => (
              <div
                key={msg.id}
                style={{
                  ...styles.bubble,
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.sender === "user" ? "#2563eb" : "#0f172a"
                }}
              >
                <strong>{msg.sender === "user" ? "Tú" : "IA Backend"}:</strong>
                <p style={{ margin: "0.3rem 0 0" }}>{msg.text}</p>
              </div>
            ))}
            {loadingAI && <p style={{ color: "#38bdf8" }}>Consultando modelo de IA...</p>}
          </div>

          <form onSubmit={handleSendChat} style={styles.chatForm}>
            <input
              type="text"
              placeholder="Pregunta sobre C#, Python, Laravel o repositorios..."
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              style={styles.input}
            />
            <button type="submit" style={styles.btn} disabled={loadingAI}>
              Enviar
            </button>
          </form>
        </section>

        {/* Columna 2: Formulario de Contacto Validado */}
        <section style={styles.panel}>
          <h2>Formulario de Solicitud de Proyecto</h2>
          <form onSubmit={handleContactSubmit} style={styles.contactForm} noValidate>
            <div>
              <label>Nombre (Solo letras, máx. 20 caracteres) *</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                style={styles.inputFull}
                placeholder="Ej: Carlos"
              />
              {errors.nombre && <span style={styles.error}>{errors.nombre}</span>}
            </div>

            <div>
              <label>Apellidos (Solo letras, máx. 20 caracteres) *</label>
              <input
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleInputChange}
                style={styles.inputFull}
                placeholder="Ej: Pérez Gómez"
              />
              {errors.apellidos && <span style={styles.error}>{errors.apellidos}</span>}
            </div>

            <div>
              <label>Correo Electrónico *</label>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                style={styles.inputFull}
                placeholder="cliente@empresa.com"
              />
              {errors.correo && <span style={styles.error}>{errors.correo}</span>}
            </div>

            <div>
              <label>Teléfono (Solo números) *</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                style={styles.inputFull}
                placeholder="3001234567"
              />
              {errors.telefono && <span style={styles.error}>{errors.telefono}</span>}
            </div>

            <div>
              <label>Descripción del Proyecto *</label>
              <textarea
                name="descripcion"
                rows="4"
                value={formData.descripcion}
                onChange={handleInputChange}
                style={styles.inputFull}
                placeholder="Describe la API, base de datos o sistema que necesitas..."
              />
              {errors.descripcion && <span style={styles.error}>{errors.descripcion}</span>}
            </div>

            <button type="submit" style={styles.btn}>
              Enviar Información
            </button>

            {submittedMsg && <div style={styles.successBox}>{submittedMsg}</div>}
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}

const styles = {
  splitGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: "1.5rem",
    marginTop: "1.5rem"
  },
  panel: {
    backgroundColor: "#1e293b",
    color: "#f8fafc",
    padding: "1.5rem",
    borderRadius: "12px",
    border: "1px solid #334155",
    display: "flex",
    flexDirection: "column"
  },
  hint: { fontSize: "0.85rem", color: "#94a3b8", marginBottom: "1rem" },
  chatBox: {
    height: "340px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    padding: "1rem",
    backgroundColor: "#020617",
    borderRadius: "8px",
    marginBottom: "1rem"
  },
  bubble: {
    padding: "0.75rem 1rem",
    borderRadius: "10px",
    maxWidth: "82%",
    fontSize: "0.9rem",
    lineHeight: 1.4
  },
  chatForm: { display: "flex", gap: "0.5rem" },
  contactForm: { display: "flex", flexDirection: "column", gap: "0.9rem" },
  input: {
    flex: 1,
    padding: "0.65rem",
    borderRadius: "6px",
    border: "1px solid #475569",
    backgroundColor: "#0f172a",
    color: "#fff"
  },
  inputFull: {
    width: "100%",
    boxSizing: "border-box",
    marginTop: "0.3rem",
    padding: "0.65rem",
    borderRadius: "6px",
    border: "1px solid #475569",
    backgroundColor: "#0f172a",
    color: "#fff"
  },
  btn: {
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.25rem",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  error: { color: "#f87171", fontSize: "0.8rem", display: "block", marginTop: "0.2rem" },
  successBox: {
    backgroundColor: "#065f46",
    color: "#d1fae5",
    padding: "0.9rem",
    borderRadius: "8px",
    fontSize: "0.9rem"
  }
};