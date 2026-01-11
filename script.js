// Language and currency data
const translations = {
  en: {
    title: "Project Pricing Calculator",
    projectName: "Project Name:",
    features: "Number of Features:",
    complexity: "Complexity:",
    timeline: "Timeline (weeks):",
    teamSize: "Team Size:",
    calculate: "Calculate Price",
    result: "Pricing Result",
    project: "Project:",
    totalPrice: "Total Price:",
    breakdown: "Breakdown:",
    low: "Low",
    medium: "Medium",
    high: "High",
    veryHigh: "Very High",
    person: "person",
    people: "people",
    installments: "Payment Options:",
    monthly: "monthly payments",
    technicalReqs: "Technical Requirements",
    frontend: "Frontend Development",
    backend: "Backend Development",
    database: "Database Design",
    api: "API Development",
    responsive: "Responsive Design",
    testing: "Testing (Unit/Integration)",
    deployment: "Deployment & Hosting Setup",
    documentation: "Documentation",
    maintenance: "3 Months Maintenance",
    support: "Technical Support",
    techStack: "Preferred Tech Stack:",
    hoursEstimate: "Estimated Hours:",
    estimatedHours: "Estimated Hours:",
    hasBackend: "Has Backend:",
    hasFrontend: "Has Frontend:",
    isFullStack: "Full Stack:",
    deadline: "Deadline:",
    enableTimeline: "Enable timeline",
    programmerLevel: "Programmer Level:",
    inexperienced: "Inexperienced",
    junior: "Junior",
    pleno: "Pleno",
    senior: "Senior",
    help: {
      "programmer-level": {
        title: "Programmer Level",
        content:
          "Select your experience level. This affects pricing: Inexperienced (entry-level, learning), Junior (1-2 years experience), Pleno (3-5 years experience), Senior (5+ years experience, expert level).",
      },
      "project-name": {
        title: "Project Name",
        content:
          "Enter a descriptive name for your project. This helps identify the project in quotes and communications.",
      },
      features: {
        title: "Number of Features",
        content:
          "Count each distinct functionality as a feature. Examples: user login, product catalog, shopping cart, admin panel, search functionality, user profile, payment processing, email notifications, etc.",
      },
      complexity: {
        title: "Complexity",
        content:
          "Low: Simple websites. Medium: Standard web apps. High: Complex applications. Very High: Enterprise-level applications.",
      },
      timeline: {
        title: "Timeline (Optional)",
        content:
          "How many weeks do you want the project to take? This is optional - shorter timelines may increase costs.",
      },
      "team-size": {
        title: "Team Size",
        content:
          "1 person: Solo developer. 2 people: Developer + designer. 3 people: Full small team. 4+ people: Large team.",
      },
    },
  },
  es: {
    title: "Calculadora de Precios de Proyecto",
    projectName: "Nombre del Proyecto:",
    features: "Número de Funcionalidades:",
    complexity: "Complejidad:",
    timeline: "Plazo (semanas):",
    teamSize: "Tamaño del Equipo:",
    calculate: "Calcular Precio",
    result: "Resultado de Precios",
    project: "Proyecto:",
    totalPrice: "Precio Total:",
    breakdown: "Desglose:",
    low: "Baja",
    medium: "Media",
    high: "Alta",
    veryHigh: "Muy Alta",
    person: "persona",
    people: "personas",
    installments: "Opciones de Pago:",
    monthly: "pagos mensuales",
    technicalReqs: "Requisitos Técnicos",
    frontend: "Desarrollo Frontend",
    backend: "Desarrollo Backend",
    database: "Diseño de Base de Datos",
    api: "Desarrollo de API",
    responsive: "Diseño Responsivo",
    testing: "Pruebas (Unitarias/Integración)",
    deployment: "Configuración de Despliegue y Hosting",
    documentation: "Documentación",
    maintenance: "Mantenimiento de 3 Meses",
    support: "Soporte Técnico",
    techStack: "Stack Tecnológico Preferido:",
    hoursEstimate: "Horas Estimadas:",
    estimatedHours: "Horas Estimadas:",
    hasBackend: "Tiene Backend:",
    hasFrontend: "Tiene Frontend:",
    isFullStack: "Full Stack:",
    deadline: "Plazo:",
    enableTimeline: "Habilitar plazo",
    programmerLevel: "Nivel del Programador:",
    inexperienced: "Inexperto",
    junior: "Junior",
    pleno: "Pleno",
    senior: "Senior",
    help: {
      "programmer-level": {
        title: "Nivel del Programador",
        content: "Selecciona tu nivel de experiencia. Esto afecta el precio: Inexperto (nivel inicial, aprendiendo), Junior (1-2 años de experiencia), Pleno (3-5 años de experiencia), Senior (5+ años de experiencia, nivel experto)."
      },
      "project-name": {
        title: "Nombre del Proyecto",
        content: "Ingresa un nombre descriptivo para tu proyecto. Esto ayuda a identificar el proyecto en presupuestos y comunicaciones."
      },
      features: {
        title: "Número de Funcionalidades",
        content: "Cuenta cada funcionalidad distinta como una característica. Ejemplos: inicio de sesión de usuario, catálogo de productos, carrito de compras, panel de administración, funcionalidad de búsqueda, perfil de usuario, procesamiento de pagos, notificaciones por email, etc."
      },
      complexity: {
        title: "Complejidad",
        content: "Baja: Sitios web simples con funcionalidad básica. Media: Aplicaciones web estándar con cuentas de usuario e interacciones básicas. Alta: Aplicaciones complejas con características avanzadas. Muy Alta: Aplicaciones de nivel empresarial con integraciones personalizadas, características en tiempo real o algoritmos avanzados."
      },
      timeline: {
        title: "Plazo (Opcional)",
        content: "¿Cuántas semanas quieres que tome el proyecto? Esto es opcional - si no se especifica, usaremos un plazo estándar basado en el tamaño del proyecto. Los plazos más cortos pueden aumentar los costos debido al trabajo urgente."
      },
      "team-size": {
        title: "Tamaño del Equipo",
        content: "1 persona: Desarrollador solo (bueno para proyectos pequeños). 2 personas: Desarrollador + diseñador o dos desarrolladores. 3 personas: Equipo pequeño completo. 4+ personas: Equipo grande para proyectos complejos."
      }
    }
  },
  pt: {
    title: "Calculadora de Preços de Projeto",
    projectName: "Nome do Projeto:",
    features: "Número de Funcionalidades:",
    complexity: "Complexidade:",
    timeline: "Prazo (semanas):",
    teamSize: "Tamanho da Equipe:",
    calculate: "Calcular Preço",
    result: "Resultado da Precificação",
    project: "Projeto:",
    totalPrice: "Preço Total:",
    breakdown: "Detalhamento:",
    low: "Baixa",
    medium: "Média",
    high: "Alta",
    veryHigh: "Muito Alta",
    person: "pessoa",
    people: "pessoas",
    installments: "Opções de Pagamento:",
    monthly: "parcelas mensais",
    technicalReqs: "Requisitos Técnicos",
    frontend: "Desenvolvimento Frontend",
    backend: "Desenvolvimento Backend",
    database: "Design de Banco de Dados",
    api: "Desenvolvimento de API",
    responsive: "Design Responsivo",
    testing: "Testes (Unitário/Integração)",
    deployment: "Setup de Deploy e Hosting",
    documentation: "Documentação",
    maintenance: "Manutenção de 3 Meses",
    support: "Suporte Técnico",
    techStack: "Stack Tecnológica Preferida:",
    hoursEstimate: "Horas Estimadas:",
    estimatedHours: "Horas Estimadas:",
    hasBackend: "Tem Backend:",
    hasFrontend: "Tem Frontend:",
    isFullStack: "Full Stack:",
    deadline: "Prazo:",
    enableTimeline: "Ativar prazo",
    programmerLevel: "Nível do Programador:",
    inexperienced: "Inexperiente",
    junior: "Junior",
    pleno: "Pleno",
    senior: "Senior",
    help: {
      "programmer-level": {
        title: "Nível do Programador",
        content:
          "Selecione seu nível de experiência. Isso afeta o preço: Inexperiente (nível inicial), Junior (1-2 anos), Pleno (3-5 anos), Senior (5+ anos, especialista).",
      },
      "project-name": {
        title: "Nome do Projeto",
        content:
          "Digite um nome descritivo para seu projeto. Isso ajuda a identificar o projeto em orçamentos.",
      },
      features: {
        title: "Número de Funcionalidades",
        content:
          "Conte cada funcionalidade distinta como uma feature. Exemplos: login, catálogo, carrinho, painel admin, etc.",
      },
      complexity: {
        title: "Complexidade",
        content:
          "Baixa: Sites simples. Média: Apps web padrão. Alta: Aplicações complexas. Muito Alta: Aplicações enterprise.",
      },
      timeline: {
        title: "Prazo (Opcional)",
        content:
          "Quantas semanas você quer que o projeto leve? Isso é opcional - prazos mais curtos podem aumentar os custos.",
      },
      "team-size": {
        title: "Tamanho da Equipe",
        content:
          "1 pessoa: Desenvolvedor solo. 2 pessoas: Dev + designer. 3 pessoas: Equipe pequena. 4+ pessoas: Equipe grande.",
      },
    },
  },
};

const currencyRates = { USD: 1, BRL: 5.5, EUR: 0.85 };
let currentLanguage = "en";
let currentCurrency = "USD";
let currentTheme = "light";
let timelineEnabled = false;

// IndexedDB setup
const DB_NAME = "ProjectPricingDB";
const DB_VERSION = 1;
const STORE_NAME = "preferences";

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
}

async function savePreference(key, value) {
  try {
    const db = await openDB();
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    store.put(value, key);
  } catch (error) {
    console.error("Error saving preference:", error);
  }
}

async function loadPreference(key, defaultValue) {
  try {
    const db = await openDB();
    const transaction = db.transaction([STORE_NAME], "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(key);
    return new Promise((resolve) => {
      request.onsuccess = () =>
        resolve(request.result !== undefined ? request.result : defaultValue);
      request.onerror = () => resolve(defaultValue);
    });
  } catch (error) {
    return defaultValue;
  }
}

// Theme switching
document
  .getElementById("theme-toggle")
  .addEventListener("click", async function () {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", currentTheme);
    this.textContent = currentTheme === "light" ? "🌙" : "☀️";
    await savePreference("theme", currentTheme);
  });

// Load saved preferences
async function loadPreferences() {
  currentTheme = await loadPreference("theme", "light");
  currentLanguage = await loadPreference("language", "en");
  currentCurrency = await loadPreference("currency", "USD");
  timelineEnabled = await loadPreference("timelineEnabled", false);

  document.documentElement.setAttribute("data-theme", currentTheme);
  document.getElementById("theme-toggle").textContent =
    currentTheme === "light" ? "🌙" : "☀️";
  document.getElementById("language").value = currentLanguage;
  document.getElementById("currency").value = currentCurrency;
  document.getElementById("timeline-enabled").checked = timelineEnabled;
  document.getElementById("timeline").disabled = !timelineEnabled;
  document.getElementById("timeline").required = timelineEnabled;

  updateLanguage();
}

// Initialize preferences
loadPreferences();

// Particle effect
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
let mouse = { x: null, y: null };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  const particleCount = Math.min(window.innerWidth / 10, 100);
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    });
  }
}

function updateParticles() {
  particles.forEach((particle) => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    if (particle.x < 0) particle.x = canvas.width;
    if (particle.x > canvas.width) particle.x = 0;
    if (particle.y < 0) particle.y = canvas.height;
    if (particle.y > canvas.height) particle.y = 0;
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(102, 102, 102, ${particle.opacity})`;
    ctx.fill();
  });

  particles.forEach((particle, i) => {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particle.x - particles[j].x;
      const dy = particle.y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(102, 102, 102, ${(100 - distance) / 500})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    if (mouse.x !== null && mouse.y !== null) {
      const dx = particle.x - mouse.x;
      const dy = particle.y - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 150) {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(102, 102, 102, ${(150 - distance) / 600})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  });
}

function animate() {
  updateParticles();
  drawParticles();
  requestAnimationFrame(animate);
}

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

document.addEventListener("mouseleave", () => {
  mouse.x = null;
  mouse.y = null;
});

resizeCanvas();
createParticles();
animate();
window.addEventListener("resize", () => {
  resizeCanvas();
  createParticles();
});

// Timeline toggle
document
  .getElementById("timeline-enabled")
  .addEventListener("change", async function (e) {
    timelineEnabled = e.target.checked;
    const timelineInput = document.getElementById("timeline");
    timelineInput.disabled = !timelineEnabled;
    timelineInput.required = timelineEnabled;
    await savePreference("timelineEnabled", timelineEnabled);
  });

// Help modal
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("help-btn")) {
    e.preventDefault();
    const helpKey = e.target.getAttribute("data-help");
    showHelpModal(helpKey);
  }
});

document.addEventListener("click", function (e) {
  const modal = document.getElementById("help-modal");
  if (e.target === modal || e.target.classList.contains("close")) {
    modal.classList.add("hidden");
  }
});

function showHelpModal(helpKey) {
  const t = translations[currentLanguage];
  const helpData = t.help[helpKey];
  if (helpData) {
    document.getElementById("help-title").textContent = helpData.title;
    document.getElementById("help-content").textContent = helpData.content;
    document.getElementById("help-modal").classList.remove("hidden");
  }
}

// Language switching
document
  .getElementById("language")
  .addEventListener("change", async function (e) {
    currentLanguage = e.target.value;
    await savePreference("language", currentLanguage);
    updateLanguage();
  });

function updateLanguage() {
  const t = translations[currentLanguage];

  document.querySelector("h1").textContent = t.title;
  document.querySelector('label[for="project-name"]').textContent =
    t.projectName;
  document.querySelector('label[for="features"]').textContent = t.features;
  document.querySelector('label[for="complexity"]').textContent = t.complexity;
  document.querySelector('label[for="timeline"]').textContent = t.timeline;
  document.querySelector('label[for="programmer-level"]').textContent =
    t.programmerLevel;
  document.querySelector('label[for="team-size"]').textContent = t.teamSize;
  document.querySelector('label[for="tech-stack"]').textContent = t.techStack;
  document.querySelector('label[for="hours-estimate"]').textContent =
    t.hoursEstimate;
  document.querySelector('button[type="submit"]').textContent = t.calculate;

  const checkboxLabel = document.querySelector("label.checkbox-label");
  if (checkboxLabel) {
    const checkbox = checkboxLabel.querySelector('input[type="checkbox"]');
    checkboxLabel.textContent = t.enableTimeline;
    checkboxLabel.insertBefore(checkbox, checkboxLabel.firstChild);
  }

  document.querySelector(".technical-requirements h3").textContent =
    t.technicalReqs;

  const checkboxes = [
    "frontend",
    "backend",
    "database",
    "api",
    "responsive",
    "testing",
    "deployment",
    "documentation",
    "maintenance",
    "support",
  ];
  checkboxes.forEach((id) => {
    const label = document.querySelector(`label[for="${id}"]`);
    if (label) label.childNodes[1].textContent = t[id];
  });

  const complexitySelect = document.getElementById("complexity");
  complexitySelect.options[0].text = t.low;
  complexitySelect.options[1].text = t.medium;
  complexitySelect.options[2].text = t.high;
  complexitySelect.options[3].text = t.veryHigh;

  const programmerLevelSelect = document.getElementById("programmer-level");
  programmerLevelSelect.options[0].text = t.inexperienced;
  programmerLevelSelect.options[1].text = t.junior;
  programmerLevelSelect.options[2].text = t.pleno;
  programmerLevelSelect.options[3].text = t.senior;

  const teamSelect = document.getElementById("team-size");
  teamSelect.options[0].text = `1 ${t.person}`;
  teamSelect.options[1].text = `2 ${t.people}`;
  teamSelect.options[2].text = `3 ${t.people}`;
  teamSelect.options[3].text = `4+ ${t.people}`;
}

// Currency switching
document
  .getElementById("currency")
  .addEventListener("change", async function (e) {
    currentCurrency = e.target.value;
    await savePreference("currency", currentCurrency);
    const form = document.getElementById("pricing-form");
    if (form.checkValidity()) calculatePrice();
  });

// Initialize language
updateLanguage();

// Real-time hours calculation
function updateHoursEstimate() {
  const features = parseInt(document.getElementById("features").value) || 0;
  const complexity = parseInt(document.getElementById("complexity").value) || 1;
  const techStack = document.getElementById("tech-stack").value || "standard";

  const technicalReqs = {
    frontend: document.getElementById("frontend").checked,
    backend: document.getElementById("backend").checked,
    database: document.getElementById("database").checked,
    api: document.getElementById("api").checked,
    responsive: document.getElementById("responsive").checked,
    testing: document.getElementById("testing").checked,
    deployment: document.getElementById("deployment").checked,
    documentation: document.getElementById("documentation").checked,
    maintenance: document.getElementById("maintenance").checked,
    support: document.getElementById("support").checked,
  };

  let totalHours = features * 8;

  const hoursAdditions = {
    frontend: 20,
    backend: 30,
    database: 15,
    api: 25,
    responsive: 10,
    testing: 15,
    deployment: 8,
    documentation: 12,
    maintenance: 40,
    support: 20,
  };

  for (const [req, checked] of Object.entries(technicalReqs)) {
    if (checked) totalHours += hoursAdditions[req];
  }

  const complexityHoursMultiplier = { 1: 1.0, 2: 1.2, 3: 1.5, 4: 2.0 };
  totalHours *= complexityHoursMultiplier[complexity];

  const techStackMultiplier = {
    standard: 1.0,
    python: 1.15,
    react: 1.2,
    node: 1.2,
    fullstack: 1.25,
    mobile: 1.5,
  };

  totalHours *= techStackMultiplier[techStack];

  document.getElementById("hours-estimate").value = Math.round(totalHours);
}

// Event listeners for real-time updates
document
  .getElementById("features")
  .addEventListener("input", updateHoursEstimate);
document
  .getElementById("complexity")
  .addEventListener("change", updateHoursEstimate);
document
  .getElementById("tech-stack")
  .addEventListener("change", updateHoursEstimate);

const checkboxes = [
  "frontend",
  "backend",
  "database",
  "api",
  "responsive",
  "testing",
  "deployment",
  "documentation",
  "maintenance",
  "support",
];
checkboxes.forEach((id) => {
  document.getElementById(id).addEventListener("change", updateHoursEstimate);
});

document
  .getElementById("pricing-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    calculatePrice();
  });

function calculatePrice() {
  const projectName = document.getElementById("project-name").value;
  const features = parseInt(document.getElementById("features").value);
  const complexity = parseInt(document.getElementById("complexity").value);
  const timelineInput = document.getElementById("timeline").value;
  const timeline = timelineInput ? parseInt(timelineInput) : null;
  const programmerLevel = document.getElementById("programmer-level").value;
  const teamSize = parseInt(document.getElementById("team-size").value);
  const techStack = document.getElementById("tech-stack").value;

  const technicalReqs = {
    frontend: document.getElementById("frontend").checked,
    backend: document.getElementById("backend").checked,
    database: document.getElementById("database").checked,
    api: document.getElementById("api").checked,
    responsive: document.getElementById("responsive").checked,
    testing: document.getElementById("testing").checked,
    deployment: document.getElementById("deployment").checked,
    documentation: document.getElementById("documentation").checked,
    maintenance: document.getElementById("maintenance").checked,
    support: document.getElementById("support").checked,
  };

  /* =======================
     1️⃣ CÁLCULO DE HORAS
  ======================= */

  let totalHours = features * 8;

  const hoursAdditions = {
    frontend: 20,
    backend: 30,
    database: 15,
    api: 25,
    responsive: 10,
    testing: 15,
    deployment: 8,
    documentation: 12,
    maintenance: 40,
    support: 20,
  };

  let selectedRequirements = [];
  for (const [req, checked] of Object.entries(technicalReqs)) {
    if (checked) {
      totalHours += hoursAdditions[req];
      selectedRequirements.push(req);
    }
  }

  const complexityHoursMultiplier = {
    1: 1.0,
    2: 1.2,
    3: 1.5,
    4: 2.0,
  };
  totalHours *= complexityHoursMultiplier[complexity];

  const techStackMultiplier = {
    standard: 1.0,
    react: 1.3,
    node: 1.4,
    python: 1.3,
    fullstack: 1.8,
    mobile: 2.2,
  };
  totalHours *= techStackMultiplier[techStack];

  totalHours = Math.round(totalHours);
  document.getElementById("hours-estimate").value = totalHours;

  /* =======================
     2️⃣ VALOR / HORA POR NÍVEL
  ======================= */

  const hourlyRateByLevel = {
    inexperienced: 6, // ~R$30
    junior: 8, // ~R$40
    pleno: 12, // ~R$60
    senior: 18, // ~R$90
  };

  let hourlyRate = hourlyRateByLevel[programmerLevel];

  /* =======================
     3️⃣ PREÇO BASE
  ======================= */

  let basePriceUSD = totalHours * hourlyRate;

  /* =======================
     4️⃣ MULTIPLICADORES DE RISCO
  ======================= */

  let timelineMultiplier = 1.0;
  if (timeline !== null) {
    timelineMultiplier = timeline <= 2 ? 1.25 : timeline <= 4 ? 1.1 : 1.0;
  }
  basePriceUSD *= timelineMultiplier;

  const teamMultiplier = {
    1: 1.0,
    2: 1.05,
    3: 1.08,
    4: 1.1,
  };
  basePriceUSD *= teamMultiplier[teamSize];

  /* =======================
     5️⃣ CONVERSÃO DE MOEDA
  ======================= */

  const conversionRate = currencyRates[currentCurrency];
  const totalPrice = basePriceUSD * conversionRate;

  const formatCurrency = (value) => {
    const locales = { USD: "en-US", BRL: "pt-BR", EUR: "de-DE" };
    const currencies = { USD: "USD", BRL: "BRL", EUR: "EUR" };
    return new Intl.NumberFormat(locales[currentCurrency], {
      style: "currency",
      currency: currencies[currentCurrency],
    }).format(value);
  };

  /* =======================
     6️⃣ RESULTADO
  ======================= */

  const t = translations[currentLanguage];
  const complexityTexts = { 1: t.low, 2: t.medium, 3: t.high, 4: t.veryHigh };

  const hasBackend = technicalReqs.backend;
  const hasFrontend = technicalReqs.frontend;
  const isFullStack = hasBackend && hasFrontend;

  const timelineDisplay =
    timeline !== null ? `${timeline} weeks` : "Not specified";

  document.getElementById("project-result").innerHTML = `
    <strong>${t.project}</strong> ${projectName}<br>
    <strong>${t.hasFrontend}</strong> ${hasFrontend ? "Yes" : "No"}<br>
    <strong>${t.hasBackend}</strong> ${hasBackend ? "Yes" : "No"}<br>
    <strong>${t.isFullStack}</strong> ${isFullStack ? "Yes" : "No"}<br>
    <strong>${t.estimatedHours}</strong> ${totalHours} hours<br>
    <strong>${t.deadline}</strong> ${timelineDisplay}
  `;

  document.getElementById("price-result").textContent = `${
    t.totalPrice
  } ${formatCurrency(totalPrice)}`;

  /* =======================
     7️⃣ PARCELAS
  ======================= */

  const installmentsDiv = document.getElementById("installments");
  installmentsDiv.innerHTML = `<h3>${t.installments}</h3>`;

  const installmentOptions = [
    { months: 3, label: `3 ${t.monthly}` },
    { months: 6, label: `6 ${t.monthly}` },
    { months: 12, label: `12 ${t.monthly}` },
  ];

  installmentOptions.forEach((option) => {
    const installmentAmount = totalPrice / option.months;
    const installmentDiv = document.createElement("div");
    installmentDiv.className = "installment-option";
    installmentDiv.textContent = `${option.label}: ${formatCurrency(
      installmentAmount
    )}`;
    installmentsDiv.appendChild(installmentDiv);
  });

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("result").scrollIntoView({ behavior: "smooth" });
}
