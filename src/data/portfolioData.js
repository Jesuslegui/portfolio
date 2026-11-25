export const developerProfile = {
  fullName: "Jesús David Leguizamo Velasco",
  age: 21,
  role: "Desarrollador Backend & Arquitecto de Software",
  tagline: "Construyendo APIs robustas, arquitecturas escalables y soluciones orientadas a datos.",
  avatar: "https://github.com/Jesuslegui.png",
  githubUrl: "https://github.com/Jesuslegui",
  linkedinUrl: "https://www.linkedin.com/in/jesus-david-leguizamo-velasco-3061b5314/",
  email: "jesus.leguizamo@ejemplo.com",
  bioItems: [
    {
      title: "Enfoque Backend & Datos",
      detail: "Desarrollador de 21 años especializado en lógica de servidor, diseño de bases de datos relacionales y construcción de APIs RESTful de alto rendimiento."
    },
    {
      title: "Formación Académica",
      detail: "Estudiante de Tecnología en Sistemas de Información en la Institución Universitaria Antonio José Camacho (Cali, Colombia), aplicando metodologías ágiles (Scrum/Jira)."
    },
    {
      title: "Resolución de Problemas Reales",
      detail: "Experiencia integrando seguridad (2FA, autenticación por tokens), estructuras de datos optimizadas y flujos de control de calidad en software empresarial."
    }
  ]
};

// Cada proyecto tiene 8 atributos obligatorios:
// 1. id, 2. title, 3. category, 4. mainTech, 5. shortDescription (5 visibles en tarjeta)
// 6. fullDescription, 7. repoUrl, 8. architectureHighlights (3 adicionales en Sidebar)
export const initialProjects = [
  {
    id: 1,
    title: "Proyecto Cachaleg (Gestión de Zapatería)",
    category: "Backend & Web Fullstack",
    mainTech: "PHP / Laravel",
    shortDescription: "Sistema integral de inventario, ventas y autenticación 2FA por correo para gestión comercial de calzado.",
    fullDescription: "Plataforma desarrollada en Laravel con base de datos MySQL (zapateria_db). Implementa migraciones estructuradas, seeders automatizados, control de stock en tiempo real y módulo de verificación en dos pasos (2FA) vía correo electrónico.",
    repoUrl: "https://github.com/Jesuslegui/Proyecto-cachaleg",
    architectureHighlights: "Patrón MVC, Eloquent ORM, Seguridad 2FA SMTP, MySQL.",
    technicalChallenges: ["Evitar inconsistencias de stock entre ventas concurrentes.", "Separar reglas de negocio, persistencia y presentación mediante MVC.", "Proteger el acceso con verificación 2FA y mantener la integridad transaccional."],
    preview: { endpoint: "POST /api/ventas", status: "201 Created · Venta registrada", output: '{ "ventaId": 1042, "estado": "confirmada", "stockActualizado": true }', tools: ["Laravel", "MySQL", "SMTP"] }
  },
  {
    id: 2,
    title: "JesRad - Sistema de Gestión",
    category: "Arquitectura Backend",
    mainTech: "C#",
    shortDescription: "Aplicación orientada a la gestión operativa y procesamiento estructurado de registros empresariales.",
    fullDescription: "Solución construida bajo el ecosistema .NET / C# aplicando programación orientada a objetos, separación de capas de negocio y acceso eficiente a datos para garantizar integridad transaccional.",
    repoUrl: "https://github.com/Jesuslegui/JesRad",
    architectureHighlights: "POO en C#, Arquitectura en Capas, Validación de Datos.",
    technicalChallenges: ["Mantener las reglas operativas independientes de la interfaz.", "Validar registros antes de persistirlos y comunicar errores accionables.", "Diseñar capas que permitan extender el sistema sin acoplar el acceso a datos."],
    preview: { endpoint: "dotnet run -- --listar-registros", status: "Proceso completado · exit 0", output: "Registros activos: 24\nValidación: correcta\nIntegridad: verificada", tools: ["C#", ".NET", "POO"] }
  },
  {
    id: 3,
    title: "JiCpu - Monitor & Arquitectura de Hardware",
    category: "Sistemas & Rendimiento",
    mainTech: "Python",
    shortDescription: "Herramienta para análisis, monitoreo de recursos del sistema y métricas de procesamiento.",
    fullDescription: "Proyecto enfocado en la lectura de parámetros de hardware, automatización de diagnósticos y evaluación de rendimiento de CPU y memoria mediante scripts modulares.",
    repoUrl: "https://github.com/Jesuslegui/JiCpu",
    architectureHighlights: "Scripting Modular, Telemetría de Sistema, Optimización.",
    technicalChallenges: ["Recopilar métricas sin bloquear el ciclo de muestreo.", "Aislar la lectura de recursos del formateo de resultados.", "Controlar lecturas no disponibles en distintas plataformas."],
    preview: { endpoint: "python jicpu.py --once --format json", status: "200 OK · Muestreo completado", output: '{ "cpu": "18%", "memory": "62%", "status": "healthy" }', tools: ["Python", "psutil", "JSON"] }
  },
  {
    id: 4,
    title: "Gestor de Gastos JD",
    category: "Finanzas & Bases de Datos",
    mainTech: "JavaScript",
    shortDescription: "Aplicación para control de ingresos, egresos personales y categorización de presupuestos.",
    fullDescription: "Sistema interactivo de finanzas personales que permite registrar transacciones, calcular balances dinámicos y persistir historial financiero con validaciones de negocio.",
    repoUrl: "https://github.com/Jesuslegui/gestor_gastos_JD",
    architectureHighlights: "Manipulación del DOM, Persistencia de Estado, Lógica Financiera.",
    technicalChallenges: ["Mantener balances consistentes al registrar, editar o eliminar movimientos.", "Validar importes y categorías antes de actualizar la vista.", "Persistir datos en el navegador sin perder sincronía con el estado de interfaz."],
    preview: { endpoint: "CLI: registrar-gasto --monto 45.50 --categoria transporte", status: "OK · Movimiento guardado", output: '{ "tipo": "egreso", "monto": 45.5, "balance": 954.5 }', tools: ["JavaScript", "LocalStorage", "DOM"] }
  },
  {
    id: 5,
    title: "Flujo de Calidad (QA & Procesos)",
    category: "Ingeniería de Software",
    mainTech: "PHP / Laravel",
    shortDescription: "Módulo de control de flujo y aseguramiento de calidad para procesos internos de desarrollo.",
    fullDescription: "Herramienta diseñada para estandarizar etapas de revisión, trazabilidad de incidencias y validación de entregables dentro de ciclos de desarrollo ágil.",
    repoUrl: "https://github.com/Jesuslegui/Flujo-calidad",
    architectureHighlights: "Trazabilidad QA, Flujos de Estado, Control de Versiones.",
    technicalChallenges: ["Representar transiciones válidas del flujo de calidad.", "Preservar trazabilidad entre incidencias, revisiones y entregables.", "Evitar que una entrega avance si no cumple sus criterios de validación."],
    preview: { endpoint: "php artisan qa:validate --workflow=release", status: "OK · Flujo validado", output: "Revisiones: 3/3\nIncidencias bloqueantes: 0\nRelease: aprobada", tools: ["PHP / Laravel", "Artisan", "Git"] }
  },
  {
    id: 6,
    title: "Biblioteca API REST (Módulo 3)",
    category: "APIs & Microservicios",
    mainTech: "JavaScript",
    shortDescription: "API RESTful para administración de catálogo bibliográfico, préstamos, autores y usuarios.",
    fullDescription: "Servicio backend que expone endpoints CRUD completos con manejo de códigos de estado HTTP, validación de payloads JSON y consultas relacionales optimizadas.",
    repoUrl: "https://github.com/Jesuslegui/-bibliotecaApimodulo-3",
    architectureHighlights: "RESTful API, JSON Payloads, Endpoints CRUD, Manejo de Promesas.",
    technicalChallenges: ["Definir contratos REST uniformes y códigos HTTP correctos.", "Validar payloads antes de ejecutar cambios en los recursos.", "Gestionar operaciones asíncronas y relaciones entre libros, autores y préstamos."],
    preview: { endpoint: "GET /api/libros?disponible=true", status: "200 OK · Respuesta simulada", output: '{ "total": 1, "items": [{ "id": 18, "titulo": "Clean Architecture", "disponible": true }] }', tools: ["JavaScript", "REST", "JSON"] }
  },
  {
    id: 7,
    title: "Descargador Multimedia (Estructuras de Datos)",
    category: "Algoritmos & Estructuras",
    mainTech: "Python",
    shortDescription: "Aplicación que implementa colas y estructuras de datos para gestionar descargas de video.",
    fullDescription: "Proyecto académico de Estructura de Datos que utiliza colas (FIFO), listas enlazadas y manejo asíncrono para encolar, priorizar y procesar descargas de contenido multimedia.",
    repoUrl: "https://github.com/Jesuslegui/Descargador-de-Videos-Para-Estructura-De-Datos",
    architectureHighlights: "Colas FIFO, Listas Enlazadas, Procesamiento por Lotes.",
    technicalChallenges: ["Procesar elementos en orden FIFO sin bloquear la aplicación.", "Coordinar cambios de estado durante tareas asíncronas.", "Gestionar errores de descarga para que no detengan el resto de la cola."],
    preview: { endpoint: "python downloader.py --queue demo.txt", status: "Proceso completado · 2/2 tareas", output: "[1] completada: clip-a.mp4\n[2] completada: clip-b.mp4\nCola: vacía", tools: ["Python", "FIFO", "Async"] }
  },
  // --- 8 Proyectos complementarios del mismo perfil Backend para completar 15 (Paginación 10 + 5) ---
  {
    id: 8,
    title: "AuthShield JWT & OAuth2 Service",
    category: "Seguridad Backend",
    mainTech: "C#",
    shortDescription: "Microservicio de autenticación centralizada con emisión de tokens JWT y Refresh Tokens.",
    fullDescription: "Servicio desarrollado en ASP.NET Core Web API para gestión de identidades, encriptación BCrypt, control de roles (RBAC) y protección contra ataques de fuerza bruta.",
    repoUrl: "https://github.com/Jesuslegui",
    architectureHighlights: "ASP.NET Core, JWT Bearer, RBAC, Hashing Seguro.",
    technicalChallenges: ["Separar autenticación de autorización y aplicar permisos por rol.", "Proteger credenciales con hashing y reducir el riesgo de fuerza bruta.", "Gestionar expiración y renovación de tokens sin ampliar su ventana de exposición."],
    preview: { endpoint: "POST /api/auth/token", status: "200 OK · Token emitido (simulado)", output: '{ "tokenType": "Bearer", "expiresIn": 900, "role": "operator" }', tools: ["C#", "ASP.NET Core", "JWT", "RBAC"] }
  },
  {
    id: 9,
    title: "QueryOptimizer SQL Analyzer",
    category: "Finanzas & Bases de Datos",
    mainTech: "Bases de Datos Relacionales",
    shortDescription: "Conjunto de procedimientos almacenados, triggers e índices para optimización de consultas.",
    fullDescription: "Diseño de esquemas normalizados hasta 3FN, creación de vistas materializadas, auditoría mediante triggers y análisis de planes de ejecución en MySQL y SQL Server.",
    repoUrl: "https://github.com/Jesuslegui",
    architectureHighlights: "Stored Procedures, Triggers, Normalización 3FN, Índices.",
    technicalChallenges: ["Reducir costo de consultas frecuentes mediante índices adecuados.", "Evitar anomalías de actualización con normalización hasta 3FN.", "Auditar cambios y validar el impacto con planes de ejecución."],
    preview: { endpoint: "EXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 42;", status: "Query OK · Plan optimizado", output: "Index Scan using idx_orders_customer\nEstimated rows: 4\nExecution time: 0.8 ms (simulado)", tools: ["SQL", "MySQL", "Índices"] }
  },
  {
    id: 10,
    title: "FastOrder API Gateway",
    category: "APIs & Microservicios",
    mainTech: "Python",
    shortDescription: "API de alto rendimiento con FastAPI para procesamiento de pedidos y webhooks de pago.",
    fullDescription: "Backend asíncrono construido con FastAPI y Pydantic para validación estricta de esquemas, documentación automática OpenAPI y manejo de colas de tareas.",
    repoUrl: "https://github.com/Jesuslegui",
    architectureHighlights: "FastAPI, Async/Await, Pydantic, Swagger/OpenAPI.",
    technicalChallenges: ["Validar contratos de entrada y salida con esquemas estrictos.", "Procesar solicitudes concurrentes sin bloquear tareas de I/O.", "Hacer idempotente la recepción de webhooks de pago."],
    preview: { endpoint: "POST /api/v1/orders", status: "202 Accepted · Pedido en cola", output: '{ "orderId": "ord_2048", "status": "processing", "webhook": "pending" }', tools: ["Python", "FastAPI", "Pydantic"] }
  },
  {
    id: 11,
    title: "InventorySync Cron Engine",
    category: "Arquitectura Backend",
    mainTech: "PHP / Laravel",
    shortDescription: "Motor de sincronización programada para actualización masiva de catálogos y precios.",
    fullDescription: "Implementación de Laravel Queues y Task Scheduling para procesar archivos CSV/JSON externos sin bloquear el hilo principal de la aplicación.",
    repoUrl: "https://github.com/Jesuslegui",
    architectureHighlights: "Laravel Queues, Cron Jobs, Procesamiento Asíncrono.",
    technicalChallenges: ["Procesar lotes grandes de manera asíncrona con memoria acotada.", "Asegurar que reintentos no dupliquen actualizaciones del catálogo.", "Registrar fallos por fila y permitir reanudar la sincronización."],
    preview: { endpoint: "php artisan catalog:sync --source=partner.csv", status: "OK · 240 registros procesados", output: "Actualizados: 236\nOmitidos: 4\nErrores: 0\nDuración: 8.4 s (simulada)", tools: ["PHP / Laravel", "Queues", "CSV"] }
  },
  {
    id: 12,
    title: "LogPulse Server Monitor",
    category: "Sistemas & Rendimiento",
    mainTech: "JavaScript",
    shortDescription: "Recolector y parser de logs de servidor en tiempo real con alertas por umbral de error.",
    fullDescription: "Servicio en Node.js que lee flujos de logs HTTP, clasifica errores 4xx/5xx y expone métricas consolidadas para auditoría de disponibilidad.",
    repoUrl: "https://github.com/Jesuslegui",
    architectureHighlights: "Node.js Streams, Regex Parsing, Alertas Automáticas.",
    technicalChallenges: ["Analizar flujos continuos de logs sin cargar archivos completos en memoria.", "Normalizar eventos y distinguir errores de cliente y servidor.", "Disparar alertas por umbrales con control de duplicados."],
    preview: { endpoint: "node logpulse.js --input ./logs/access.log", status: "OK · Stream finalizado", output: "Requests: 1280\n4xx: 17 · 5xx: 2\nAlertas emitidas: 1", tools: ["JavaScript", "Node.js Streams", "Regex"] }
  },
  {
    id: 13,
    title: "ClinicCore API de Citas",
    category: "APIs & Microservicios",
    mainTech: "C#",
    shortDescription: "Backend para agendamiento médico con prevención de cruce de horarios y notificaciones.",
    fullDescription: "API construida en C# con Entity Framework Core que gestiona disponibilidad de especialistas, historial clínico básico y transacciones ACID.",
    repoUrl: "https://github.com/Jesuslegui",
    architectureHighlights: "Entity Framework Core, Transacciones ACID, LINQ.",
    technicalChallenges: ["Evitar reservas superpuestas ante solicitudes concurrentes.", "Mantener la cita y su disponibilidad en una misma transacción.", "Aislar datos sensibles y limitar su exposición en respuestas API."],
    preview: { endpoint: "POST /api/appointments", status: "201 Created · Cita reservada", output: '{ "appointmentId": 318, "specialistId": 12, "status": "confirmed" }', tools: ["C#", "Entity Framework", "SQL"] }
  },
  {
    id: 14,
    title: "DataVault Backup Automator",
    category: "Finanzas & Bases de Datos",
    mainTech: "Python",
    shortDescription: "Script automatizado de respaldos incrementales y compresión para bases de datos relacionales.",
    fullDescription: "Herramienta CLI en Python que ejecuta volcados programados de MySQL/PostgreSQL, verifica integridad mediante checksums SHA-256 y rota copias antiguas.",
    repoUrl: "https://github.com/Jesuslegui",
    architectureHighlights: "CLI Python, Checksums SHA-256, Automatización DB.",
    technicalChallenges: ["Verificar integridad de cada respaldo mediante checksum.", "Evitar dejar archivos parciales si falla el proceso de volcado.", "Aplicar rotación de copias respetando la política de retención."],
    preview: { endpoint: "python backup.py --database portfolio --verify", status: "OK · Backup verificado", output: "Archivo: portfolio_2026-11-16.sql.gz\nSHA-256: válido\nRotación: 7 copias conservadas", tools: ["Python", "PostgreSQL", "SHA-256"] }
  },
  {
    id: 15,
    title: "AI Prompt Router Proxy",
    category: "Seguridad Backend",
    mainTech: "Next.js",
    shortDescription: "Proxy con rutas API para control de rate-limiting, caché de respuestas y optimización de tokens LLM.",
    fullDescription: "Aplicación Next.js con rutas API de servidor diseñada para reducir costos de consumo de APIs de Inteligencia Artificial mediante truncamiento de contexto y almacenamiento en caché de consultas frecuentes.",
    repoUrl: "https://github.com/Jesuslegui",
    architectureHighlights: "Next.js Route Handlers, Token Optimization, Rate Limiting, Caché en Memoria.",
    technicalChallenges: ["Limitar solicitudes por cliente sin interrumpir usos legítimos.", "Reducir tokens mediante truncamiento controlado y conservar instrucciones relevantes.", "Cachear consultas seguras evitando colisiones o reutilización de respuestas sensibles."],
    preview: { endpoint: "POST /api/ai/chat", status: "200 OK · Respuesta cacheada (simulada)", output: '{ "cached": true, "tokensSaved": 184, "response": "Solicitud procesada" }', tools: ["Next.js", "JavaScript", "Gemini API"] }
  }
];

export const techStackList = [
  {
    id: 1,
    name: "C# & .NET Ecosystem",
    category: "Backend Empresarial",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    description: "Desarrollo de APIs RESTful robustas, programación orientada a objetos, arquitectura en capas y manejo de datos con Entity Framework."
  },
  {
    id: 2,
    name: "JavaScript (ES6+ / Node.js / React)",
    category: "Fullstack & Asíncrono",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    description: "Programación asíncrona con Promesas y Async/Await, consumo de APIs, lógica del lado del servidor y construcción de interfaces reactivas."
  },
  {
    id: 3,
    name: "Python",
    category: "Scripting, Datos & Backend",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    description: "Implementación de estructuras de datos, automatización de procesos, análisis de rendimiento y desarrollo rápido de servicios backend."
  },
  {
    id: 4,
    name: "PHP & Laravel",
    category: "Desarrollo Web Backend",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    description: "Arquitectura MVC, migraciones, Eloquent ORM, autenticación segura (2FA) y sistemas transaccionales de gestión comercial."
  },
  {
    id: 5,
    name: "Bases de Datos Relacionales",
    category: "Persistencia & Modelado",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    description: "Diseño entidad-relación, normalización, consultas SQL optimizadas, integridad referencial y administración en MySQL y SQL Server."
  },
  {
    id: 6,
    name: "Next.js",
    category: "Frontend & Rutas API",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description: "Aplicaciones React con renderizado híbrido y Route Handlers para integrar interfaces con servicios backend."
  }
];

export const aiToolsList = [
  {
    id: 1,
    name: "Google Gemini API",
    usage: "Integración directa vía API REST para asistentes conversacionales, aplicando System Prompts estructurados y optimización de ventana de contexto."
  },
  {
    id: 2,
    name: "GitHub Copilot & ChatGPT",
    usage: "Aceleración de refactorización de código backend, generación de pruebas unitarias, depuración de consultas SQL y documentación técnica."
  }
];

export const experienceTimeline = [
  {
    id: 1,
    period: "2026 - Actualidad",
    role: "Desarrollador Backend & Proyectos de Ingeniería",
    organization: "Institución Universitaria Antonio José Camacho",
    description: "Arquitectura y desarrollo de sistemas como Proyecto Cachaleg (Laravel/MySQL con 2FA), APIs RESTful y aplicaciones de estructuras de datos bajo metodología Scrum."
  },
  {
    id: 2,
    period: "2025",
    role: "Desarrollador Junior / Inducción Técnica",
    organization: "OLSOFTWARE SAS",
    description: "Participación en procesos de onboarding técnico, estándares de calidad de software, control de versiones colaborativo y buenas prácticas de desarrollo empresarial."
  },
  {
    id: 3,
    period: "2024 - 2025",
    role: "Desarrollador Backend Freelance & Académico",
    organization: "Proyectos Independientes (JesRad, Gestor JD)",
    description: "Diseño de bases de datos relacionales, construcción de módulos de gestión financiera y herramientas de diagnóstico en C#, Python y JavaScript."
  }
];