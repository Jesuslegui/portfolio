# Portafolio profesional — Jesús David Leguizamo Velasco

Aplicación web de portafolio construida con React y Vite para presentar perfil, proyectos backend, tecnologías, experiencia, contacto y una propuesta de valor. Incluye navegación entre cinco vistas, catálogo filtrable y paginado, detalle de proyectos y un asistente conversacional conectado con Gemini API.

## Requisitos

- Node.js compatible con Vite 8.
- npm.
- Una clave de Gemini API para habilitar respuestas del modelo. Sin ella, el chat ofrece respuestas locales de demostración.

## Instalación y ejecución

```bash
npm ci
npm run dev
```

Para validar o compilar la aplicación:

```bash
npm run lint
npm run build
npm run preview
```

Para conectar Gemini, crea `.env.local` en la raíz y configura:

```env
VITE_GEMINI_API_KEY=tu_clave_de_gemini
```

Reinicia Vite después de modificar variables de entorno. Las variables `VITE_*` se incluyen en el bundle del navegador: esta integración directa es apropiada para demostración local, pero no se debe publicar una clave privilegiada en una aplicación pública. Para producción, se recomienda consumir Gemini desde un backend propio que proteja la clave y aplique controles de acceso y uso.

## Arquitectura

La aplicación es una SPA de React. `src/main.jsx` monta `App` dentro de `StrictMode`; `App.jsx` provee `PortfolioContext` y selecciona una de las cinco vistas según `activeView`. La navegación cambia el estado de React, no la URL.

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProjectSidebar.jsx
├── context/
│   └── PortfolioContext.jsx
├── data/
│   └── portfolioData.js
├── services/
│   └── aiService.js
├── views/
│   ├── HomeBioView.jsx
│   ├── ProjectsView.jsx
│   ├── StackStudiesView.jsx
│   ├── AiChatContactView.jsx
│   └── ValuePropView.jsx
├── App.jsx
├── App.css
└── index.css
```

### Estado y hooks

- **`useContext`** expone el estado compartido mediante `usePortfolio`: vista activa, proyectos, proyecto seleccionado e historial del chat, junto con sus acciones.
- **`useState`** administra el estado global del portafolio y los estados locales de filtros, paginación, formulario, carga del chat y carrusel.
- **`useEffect`** inicia la carga asíncrona de proyectos al montar el proveedor.
- **Promesas y `async`/`await`**: el proveedor simula una carga de datos asíncrona con una Promesa; el servicio de IA realiza el `fetch` asíncrono a Gemini y procesa la respuesta o propaga errores al componente de chat.

## Vistas y funcionalidades

1. **Presentación y biografía** (`HomeBioView.jsx`): banner con avatar de GitHub, perfil con tres elementos, enlaces a GitHub y LinkedIn, dos botones de acción y footer.
2. **Proyectos** (`ProjectsView.jsx`): 15 proyectos, tarjetas con cinco atributos, filtro por tecnología, búsqueda libre por nombre/categoría, botones Filtrar/Limpiar y paginación de 10 elementos. La acción de detalle selecciona un proyecto en el contexto.
3. **Detalle de proyecto** (`ProjectSidebar.jsx`): presenta los ocho atributos requeridos —ID, título, categoría, tecnología principal, descripción corta, descripción completa, URL del repositorio y aspectos arquitectónicos—, además de desafíos técnicos y un simulador visual.
4. **Stack y estudios** (`StackStudiesView.jsx`): tarjetas de tecnologías con iconos, herramientas de IA y timeline de tres experiencias.
5. **Chat y contacto** (`AiChatContactView.jsx`): formulario validado y conversación con historial compartido. El servicio ofrece fallback local cuando no se configura la clave.
6. **Propuesta de valor** (`ValuePropView.jsx`): carrusel de pilares profesionales, secciones sobre el proceso de trabajo y acceso al contacto.

El catálogo combina siete proyectos con repositorio específico y ocho proyectos complementarios de demostración. Cada registro conserva los ocho campos de la rúbrica y añade desafíos técnicos y datos para su vista previa simulada.

## AI Engineering

`src/services/aiService.js` integra Gemini mediante `fetch` con `async`/`await`.

- **Prompt Engineering:** envía una instrucción de sistema delimitada al perfil, tecnologías y proyectos del portafolio. Orienta al modelo a responder de forma breve y profesional y a no inventar experiencia.
- **Token Optimization:** conserva como máximo las cuatro entradas más recientes del historial enviado al servicio y limita cada texto a 400 caracteres. Configura `maxOutputTokens: 250` y una temperatura de `0.4`.
- **Historial:** los mensajes se mantienen en `PortfolioContext` durante la sesión y aparecen en la interfaz del chat.
- **Fallback y errores:** sin clave, responde con mensajes locales de demostración; ante un error HTTP, el servicio lanza un error y la vista informa al usuario.

## Tecnologías

React, Vite, JavaScript/JSX, CSS, Context API, Gemini API, C#, PHP/Laravel, Next.js, Python, JavaScript/Node.js y bases de datos relacionales.
