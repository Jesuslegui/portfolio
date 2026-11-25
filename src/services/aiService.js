const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// 1. PROMPT ENGINEERING: System Instruction acotada al dominio del portafolio
const SYSTEM_PROMPT = `
Eres el asistente técnico oficial del portafolio de Jesús David Leguizamo Velasco (21 años, Desarrollador Backend).
Stack principal: C#, JavaScript, Python, PHP/Laravel y Bases de Datos Relacionales (MySQL, SQL Server).
Proyectos destacados: Proyecto Cachaleg (Laravel + 2FA), JesRad (C#), JiCpu (Python), Gestor de Gastos JD (JS), Flujo-calidad (PHP), Biblioteca API REST (JS) y Descargador de Videos (Estructuras de Datos en Python).
Reglas de respuesta:
- Responde de forma profesional, técnica y concisa (máximo 3 párrafos cortos).
- Si preguntan por contacto o cotizaciones, invítalos a llenar el formulario adjunto.
- No inventes experiencia fuera de su perfil backend.
`;

// 2. TOKEN OPTIMIZATION: Solo enviamos los últimos 4 turnos de conversación para ahorrar tokens de entrada
const optimizeHistoryTokens = (history) => {
  return history.slice(-4).map((msg) => ({
    role: msg.sender === "user" ? "user" : "model",
    parts: [{ text: msg.text.slice(0, 400) }] // Límite de caracteres por mensaje
  }));
};

// 3. CONEXIÓN API CON PROMESAS (Async/Await)
export const sendMessageToAI = async (userMessage, chatHistory) => {
  // Si no hay API Key configurada, usamos una Promesa simulada (Fallback seguro para demo)
  if (!GEMINI_API_KEY) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const lower = userMessage.toLowerCase();
        if (lower.includes("stack") || lower.includes("tecnolog") || lower.includes("lenguaje")) {
          resolve("Jesús David se especializa en desarrollo Backend con C#, PHP (Laravel), Python y JavaScript, además de diseño y optimización de Bases de Datos Relacionales (MySQL/SQL Server).");
        } else if (lower.includes("proyecto") || lower.includes("github")) {
          resolve("Entre sus proyectos reales destacan Proyecto Cachaleg (sistema de inventario en Laravel con 2FA), JesRad en C#, una API REST de Biblioteca y un gestor de descargas con estructuras de datos en Python. Puedes ver los 8 detalles de cada uno en la pestaña Proyectos.");
        } else {
          resolve("¡Hola! Soy el asistente IA de Jesús David Leguizamo. Puedo contarte sobre su arquitectura backend en C#, PHP, Python o JS, o puedes dejar tus datos en el formulario de contacto para iniciar un proyecto.");
        }
      }, 700);
    });
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  const payload = {
    system_instruction: {
      parts: [{ text: SYSTEM_PROMPT }]
    },
    contents: [
      ...optimizeHistoryTokens(chatHistory),
      { role: "user", parts: [{ text: userMessage }] }
    ],
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 250 // Optimización de tokens de salida
    }
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Error HTTP ${response.status} al conectar con Gemini API`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || "No se recibió respuesta del modelo.";
};