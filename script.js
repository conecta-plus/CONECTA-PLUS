import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

 

import {

  getAuth,

  createUserWithEmailAndPassword,

  signInWithEmailAndPassword,

  sendPasswordResetEmail,

  updateProfile as updateAuthProfile,

  onAuthStateChanged,

  signOut

} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

 

import {

  getFirestore,

  doc,

  setDoc,

  getDoc

} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

 

// ========================================

// 1. CONFIGURACIÓN DE FIREBASE

// ========================================

 

const firebaseConfig = {

  apiKey: "AIzaSyDVfxsCbiLMW-NzDxUInbrPK6CDdp-2Qic",

  authDomain: "conecta-plus-2b7c2.firebaseapp.com",

  projectId: "conecta-plus-2b7c2",

  storageBucket: "conecta-plus-2b7c2.firebasestorage.app",

  messagingSenderId: "84068496875",

  appId: "1:84068496875:web:6f2789ee93dfed8f1515ae",

  measurementId: "G-7EQL2VTTNB"

};

 

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const db = getFirestore(firebaseApp);

 

// ========================================

// 2. CONTENIDO EDUCATIVO

// ========================================

 

const modules = [

  {

    id: 1,

    title: "Seguridad digital",

    description: "Aprende a proteger tus datos, reconocer riesgos y navegar de manera segura.",

    icon: "🔐",

    color: "#f0efff",

    lessons: [

      {

        title: "La importancia de la seguridad digital",

        duration: "5 min",

        content: `

          <p>La seguridad digital comprende las medidas y hábitos que permiten proteger nuestros dispositivos, cuentas e información personal cuando utilizamos internet.</p>

          <h3>¿Por qué es importante?</h3>

          <p>En nuestra vida cotidiana compartimos información, utilizamos aplicaciones y nos comunicamos mediante plataformas digitales. Por eso debemos aprender a reconocer posibles riesgos.</p>

          <ul>

            <li>Protege tus datos personales.</li>

            <li>Evita compartir contraseñas.</li>

            <li>Utiliza sitios y aplicaciones confiables.</li>

            <li>Mantén tus dispositivos actualizados.</li>

          </ul>

          <div class="lesson-callout">Recuerda: proteger tu información es una responsabilidad que comienza con tus decisiones.</div>

        `

      },

      {

        title: "Contraseñas seguras",

        duration: "4 min",

        content: `

          <p>Las contraseñas permiten controlar el acceso a nuestras cuentas y ayudan a proteger nuestra identidad digital.</p>

          <h3>Características de una contraseña segura</h3>

          <ul>

            <li>Debe ser larga y difícil de adivinar.</li>

            <li>Combina diferentes tipos de caracteres.</li>

            <li>No debe incluir información personal fácil de conocer.</li>

            <li>No utilices la misma contraseña en todas tus cuentas.</li>

          </ul>

          <h3>Buenas prácticas</h3>

          <p>Utiliza un administrador de contraseñas confiable y activa la verificación en dos pasos cuando esté disponible.</p>

          <div class="lesson-callout">Nunca compartas tus contraseñas, ni siquiera con personas que conoces en internet.</div>

        `

      },

      {

        title: "Privacidad y datos personales",

        duration: "5 min",

        content: `

          <p>Los datos personales son aquellos que permiten identificar o conocer aspectos de una persona, como su nombre, dirección, fotografías o número de teléfono.</p>

          <h3>¿Cómo cuidar tu privacidad?</h3>

          <ul>

            <li>Revisa la configuración de privacidad de tus redes.</li>

            <li>Evita publicar información sensible.</li>

            <li>Piensa antes de compartir fotografías o ubicaciones.</li>

            <li>Desconfía de solicitudes de información innecesarias.</li>

          </ul>

          <div class="lesson-callout">Antes de publicar algo, pregúntate si realmente es necesario que otras personas lo conozcan.</div>

        `

      }

    ]

  },

  {

    id: 2,

    title: "Ciudadanía digital",

    description: "Participa en internet con respeto, responsabilidad y pensamiento crítico.",

    icon: "🌐",

    color: "#eaf4ff",

    lessons: [

      {

        title: "¿Qué es la ciudadanía digital?",

        duration: "5 min",

        content: `

          <p>La ciudadanía digital es la participación responsable, segura y respetuosa de las personas en los espacios digitales.</p>

          <h3>Un ciudadano digital responsable</h3>

          <ul>

            <li>Respeta las opiniones de los demás.</li>

            <li>Protege su identidad y privacidad.</li>

            <li>Verifica la información antes de compartirla.</li>

            <li>Utiliza la tecnología para aprender y colaborar.</li>

          </ul>

          <div class="lesson-callout">Ser responsable en internet también significa recordar que detrás de cada pantalla hay personas.</div>

        `

      },

      {

        title: "Respeto y convivencia en línea",

        duration: "4 min",

        content: `

          <p>La convivencia digital se basa en el respeto, la empatía y la comunicación adecuada en redes sociales, videojuegos, foros y otros espacios.</p>

          <h3>Acciones positivas</h3>

          <ul>

            <li>Evita insultos y comentarios ofensivos.</li>

            <li>Respeta las diferencias.</li>

            <li>No difundas fotografías de otras personas sin permiso.</li>

            <li>Comunica los problemas de manera respetuosa.</li>

          </ul>

          <p>El respeto no debe desaparecer cuando nos comunicamos mediante una pantalla.</p>

        `

      },

      {

        title: "Huella digital",

        duration: "5 min",

        content: `

          <p>La huella digital es el rastro de información que dejamos al utilizar internet, por ejemplo, publicaciones, comentarios, fotografías e interacciones.</p>

          <h3>¿Por qué debemos cuidarla?</h3>

          <p>Lo que compartimos puede permanecer disponible durante mucho tiempo y afectar nuestra reputación digital.</p>

          <ul>

            <li>Publica con responsabilidad.</li>

            <li>Evita compartir contenido perjudicial.</li>

            <li>Revisa tus publicaciones anteriores.</li>

            <li>Respeta la privacidad de los demás.</li>

          </ul>

          <div class="lesson-callout">Tu comportamiento digital también comunica quién eres.</div>

        `

      }

    ]

  },

  {

    id: 3,

    title: "Bienestar digital",

    description: "Construye hábitos saludables y mantén un equilibrio con la tecnología.",

    icon: "🧠",

    color: "#e9f8f1",

    lessons: [

      {

        title: "Equilibrio en el uso de la tecnología",

        duration: "4 min",

        content: `

          <p>El bienestar digital consiste en mantener una relación saludable con los dispositivos y servicios tecnológicos.</p>

          <h3>Hábitos recomendados</h3>

          <ul>

            <li>Organiza tus horarios de estudio y descanso.</li>

            <li>Realiza pausas durante el uso de pantallas.</li>

            <li>Dedica tiempo a actividades fuera de internet.</li>

            <li>Evita las distracciones digitales durante tus responsabilidades.</li>

          </ul>

          <div class="lesson-callout">La tecnología debe ayudarte a vivir mejor, no impedirte disfrutar de otras actividades.</div>

        `

      },

      {

        title: "Redes sociales y emociones",

        duration: "5 min",

        content: `

          <p>Las redes sociales permiten comunicarnos y compartir experiencias, pero también pueden influir en nuestras emociones y en la manera de percibir nuestro entorno.</p>

          <h3>Uso consciente</h3>

          <ul>

            <li>No compares tu vida con las publicaciones de otras personas.</li>

            <li>Selecciona contenido que aporte algo positivo.</li>

            <li>Reconoce cuándo necesitas desconectarte.</li>

            <li>Busca apoyo de personas de confianza si una experiencia digital te preocupa.</li>

          </ul>

        `

      },

      {

        title: "Prevención del ciberacoso",

        duration: "5 min",

        content: `

          <p>El ciberacoso es una forma de hostigamiento que ocurre mediante tecnologías digitales y puede presentarse en redes sociales, juegos o servicios de mensajería.</p>

          <h3>¿Cómo actuar?</h3>

          <ul>

            <li>No participes en burlas o ataques digitales.</li>

            <li>Guarda información relevante para comunicar lo ocurrido a un adulto de confianza.</li>

            <li>Utiliza las herramientas de bloqueo y denuncia.</li>

            <li>Busca apoyo de familiares, docentes u orientadores.</li>

          </ul>

          <div class="lesson-callout">No estás obligado a enfrentar una situación de acoso sin apoyo. Pedir ayuda es una decisión responsable.</div>

        `

      }

    ]

  },

  {

    id: 4,

    title: "Información e inteligencia artificial",

    description: "Identifica información confiable y utiliza la inteligencia artificial responsablemente.",

    icon: "🤖",

    color: "#fff3e7",

    lessons: [

      {

        title: "Cómo reconocer información falsa",

        duration: "5 min",

        content: `

          <p>En internet circula información de diferentes fuentes. No todo lo que aparece publicado es verdadero o confiable.</p>

          <h3>Antes de compartir una noticia</h3>

          <ul>

            <li>Comprueba quién publicó la información.</li>

            <li>Busca la fecha de publicación.</li>

            <li>Compara con otras fuentes confiables.</li>

            <li>Lee más allá del titular.</li>

          </ul>

          <div class="lesson-callout">Compartir información sin verificarla puede contribuir a la desinformación.</div>

        `

      },

      {

        title: "Pensamiento crítico en internet",

        duration: "4 min",

        content: `

          <p>El pensamiento crítico permite analizar la información, evaluar argumentos y formar opiniones basadas en evidencias.</p>

          <h3>Preguntas que puedes hacerte</h3>

          <ul>

            <li>¿Quién proporciona esta información?</li>

            <li>¿Presenta pruebas verificables?</li>

            <li>¿Existen otras fuentes que confirmen lo mismo?</li>

            <li>¿El contenido intenta manipular mis emociones?</li>

          </ul>

        `

      },

      {

        title: "Uso responsable de la inteligencia artificial",

        duration: "5 min",

        content: `

          <p>La inteligencia artificial permite desarrollar herramientas capaces de realizar tareas como analizar información, generar textos y reconocer patrones.</p>

          <h3>Utilízala responsablemente</h3>

          <ul>

            <li>Comprueba la información que produce.</li>

            <li>No compartas datos personales o confidenciales.</li>

            <li>Reconoce cuándo has utilizado herramientas de IA.</li>

            <li>Utilízala como apoyo para aprender, no para sustituir tu propio razonamiento.</li>

          </ul>

          <div class="lesson-callout">La inteligencia artificial es una herramienta de apoyo. El pensamiento crítico sigue siendo fundamental.</div>

        `

      }

    ]

  }

];

 

const libraryItems = [

  {

    title: "Seguridad en internet",

    category: "Seguridad",

    description: "Conceptos fundamentales para navegar y proteger tu información.",

    icon: "🔐",

    color: "#f0efff",

    search: "seguridad digital consejos para estudiantes"

  },

  {

    title: "Privacidad en redes sociales",

    category: "Privacidad",

    description: "Aprende a controlar lo que compartes y quién puede verlo.",

    icon: "👤",

    color: "#eaf4ff",

    search: "privacidad en redes sociales"

  },

  {

    title: "Ciudadanía digital",

    category: "Convivencia",

    description: "Conoce tus derechos y responsabilidades en los espacios digitales.",

    icon: "🌐",

    color: "#e9f8f1",

    search: "ciudadanía digital educación"

  },

  {

    title: "Prevención del ciberacoso",

    category: "Bienestar",

    description: "Reconoce situaciones de acoso y conoce cómo actuar.",

    icon: "🤝",

    color: "#fff0f1",

    search: "prevención del ciberacoso"

  },

  {

    title: "Información falsa",

    category: "Pensamiento crítico",

    description: "Desarrolla habilidades para verificar noticias y publicaciones.",

    icon: "🔎",

    color: "#fff3e7",

    search: "cómo identificar noticias falsas"

  },

  {

    title: "Inteligencia artificial",

    category: "Tecnología",

    description: "Descubre sus posibilidades y aprende a utilizarla responsablemente.",

    icon: "🤖",

    color: "#f0efff",

    search: "inteligencia artificial educación uso responsable"

  }

];

 

// ========================================

// 3. IMÁGENES DE LA PLATAFORMA

// ========================================

 

const visualImages = {

  modules: {

    1: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=85",

    2: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85",

    3: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1000&q=85",

    4: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=85"

  },

  library: [

    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",

    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",

    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85",

    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",

    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=85",

    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85"

  ],

  levels: [

    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",

    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=85",

    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85"

  ]

};

 

// ========================================

// 4. JUEGOS Y EVALUACIONES

// ========================================

 

const gameLevels = [

  {

    title: "Nivel 1 · Principiante",

    icon: "🌱",

    description: "Comienza con situaciones básicas de seguridad digital.",

    questions: [

      {

        question: "¿Qué debes hacer antes de compartir una noticia?",

        options: ["Compartirla inmediatamente", "Verificar su fuente", "Cambiar su título"],

        correct: 1,

        explanation: "Verificar la fuente ayuda a evitar la difusión de información falsa."

      },

      {

        question: "¿Cuál es una buena práctica para proteger tus cuentas?",

        options: ["Compartir tu contraseña", "Usar la misma clave siempre", "Crear contraseñas seguras"],

        correct: 2,

        explanation: "Las contraseñas seguras y diferentes ayudan a proteger tus cuentas."

      },

      {

        question: "¿Qué debes hacer si recibes un enlace sospechoso?",

        options: ["Abrirlo rápidamente", "Evitar abrirlo y verificarlo", "Compartirlo con todos"],

        correct: 1,

        explanation: "Evitar enlaces sospechosos reduce el riesgo de acceder a páginas peligrosas."

      }

    ]

  },

  {

    title: "Nivel 2 · Intermedio",

    icon: "🚀",

    description: "Analiza situaciones y toma decisiones responsables.",

    questions: [

      {

        question: "Un desconocido te pide información personal por internet. ¿Qué haces?",

        options: ["Se la envío", "No la comparto", "Le envío una fotografía"],

        correct: 1,

        explanation: "No debes compartir información personal con desconocidos."

      },

      {

        question: "¿Qué representa la huella digital?",

        options: ["El rastro que dejamos en internet", "Una contraseña", "Un programa antivirus"],

        correct: 0,

        explanation: "La huella digital comprende los rastros de actividad que dejamos en internet."

      },

      {

        question: "¿Cómo puedes actuar ante una publicación ofensiva?",

        options: ["Responder con insultos", "Difundirla", "Reportarla y buscar apoyo"],

        correct: 2,

        explanation: "Reportar el contenido y buscar apoyo son acciones responsables."

      }

    ]

  },

  {

    title: "Nivel 3 · Experto",

    icon: "🏆",

    description: "Demuestra tu criterio ante desafíos digitales.",

    questions: [

      {

        question: "Una herramienta de IA ofrece una respuesta. ¿Qué debes hacer?",

        options: ["Creer todo automáticamente", "Verificar la información", "Compartirla sin leer"],

        correct: 1,

        explanation: "Las respuestas de IA pueden contener errores y deben verificarse."

      },

      {

        question: "¿Qué caracteriza a un ciudadano digital responsable?",

        options: ["Respeta y participa responsablemente", "Publica cualquier información", "Ignora la privacidad"],

        correct: 0,

        explanation: "La ciudadanía digital requiere respeto, responsabilidad y pensamiento crítico."

      },

      {

        question: "¿Qué debes hacer si una aplicación solicita permisos innecesarios?",

        options: ["Aceptar todos", "Revisar y limitar permisos", "Compartir tu cuenta"],

        correct: 1,

        explanation: "Revisar los permisos permite controlar el acceso a tus datos."

      }

    ]

  }

];

 

const quizQuestions = [

  {

    question: "¿Qué es la seguridad digital?",

    options: ["Una red social", "La protección de información y dispositivos", "Un videojuego"],

    correct: 1

  },

  {

    question: "¿Cuál es una característica de una contraseña segura?",

    options: ["Es fácil de adivinar", "Contiene únicamente tu nombre", "Es larga y difícil de predecir"],

    correct: 2

  },

  {

    question: "¿Qué es la ciudadanía digital?",

    options: ["Participar responsablemente en espacios digitales", "Utilizar internet sin reglas", "Publicar constantemente"],

    correct: 0

  },

  {

    question: "¿Qué es la huella digital?",

    options: ["Una aplicación", "El rastro que dejamos en internet", "Un tipo de contraseña"],

    correct: 1

  },

  {

    question: "¿Qué debes hacer ante una noticia dudosa?",

    options: ["Compartirla", "Ignorar todas las noticias", "Verificar la información"],

    correct: 2

  },

  {

    question: "¿Qué acción ayuda a prevenir el ciberacoso?",

    options: ["Participar en burlas", "Respetar y denunciar conductas dañinas", "Difundir mensajes ofensivos"],

    correct: 1

  },

  {

    question: "¿Cómo debemos utilizar la inteligencia artificial?",

    options: ["Como apoyo y verificando sus respuestas", "Sin pensar ni revisar", "Compartiendo datos privados"],

    correct: 0

  },

  {

    question: "¿Qué es una buena práctica de bienestar digital?",

    options: ["No descansar nunca", "Evitar todas las actividades físicas", "Organizar el tiempo y realizar pausas"],

    correct: 2

  }

];

 

// ========================================

// 5. LOGROS

// ========================================

 

const badges = [

  {

    id: "first",

    title: "Primer paso",

    icon: "🌟",

    description: "Completa tu primera lección.",

    condition: s => s.completedLessons.length >= 1

  },

  {

    id: "reader",

    title: "Explorador",

    icon: "📚",

    description: "Completa 4 lecciones.",

    condition: s => s.completedLessons.length >= 4

  },

  {

    id: "scholar",

    title: "Conocedor digital",

    icon: "🎓",

    description: "Completa 8 lecciones.",

    condition: s => s.completedLessons.length >= 8

  },

  {

    id: "player",

    title: "Jugador",

    icon: "🎮",

    description: "Completa tu primer juego.",

    condition: s => s.completedGames.length >= 1

  },

  {

    id: "expert",

    title: "Desafío superado",

    icon: "🏆",

    description: "Completa los 3 niveles.",

    condition: s => s.completedGames.length >= 3

  },

  {

    id: "exam",

    title: "Mente preparada",

    icon: "🧠",

    description: "Obtén al menos 75% en una evaluación.",

    condition: s => s.bestQuiz >= 75

  },

  {

    id: "complete",

    title: "Conecta+",

    icon: "💎",

    description: "Completa todas las lecciones.",

    condition: s => s.completedLessons.length >= 12

  }

];

 

// ========================================

// 6. ESTADO Y ALMACENAMIENTO

// ========================================

 

const STORAGE_KEY = "conectaPlusState";

 

function profilePhotoStorageKey(uid) {

  return `conectaPlusProfilePhoto:${uid}`;

}

 

function loadLocalProfilePhoto(uid) {

  try {

    return localStorage.getItem(profilePhotoStorageKey(uid)) || null;

  } catch (error) {

    console.error("No se pudo leer la fotografía local:", error);

    return null;

  }

}

 

function defaultState() {

  return {

    completedLessons: [],

    completedGames: [],

    quizAttempts: 0,

    bestQuiz: 0,

    bestGame: 0

  };

}

 

let state = defaultState();

let currentUser = null;

let profilePhotoUrl = null;

let selectedProfileFile = null;

let profilePreviewUrl = null;

let currentGame = null;

let currentGameQuestion = 0;

let gameScore = 0;

let quizIndex = 0;

let quizScore = 0;

let currentQuizAnswer = null;

let selectedGameAnswer = null;

let toastTimeout = null;

 

function loadLocalState() {

  try {

    const saved = localStorage.getItem(STORAGE_KEY);

 

    if (!saved) return defaultState();

 

    const parsed = JSON.parse(saved);

 

    return {

      ...defaultState(),

      ...parsed,

      completedLessons: Array.isArray(parsed.completedLessons)

        ? parsed.completedLessons

        : [],

      completedGames: Array.isArray(parsed.completedGames)

        ? parsed.completedGames

        : []

    };

  } catch (error) {

    console.error("Error leyendo progreso local:", error);

    return defaultState();

  }

}

 

function saveLocalState() {

  try {

    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

  } catch (error) {

    console.error("Error guardando progreso local:", error);

  }

}

 

async function saveUserState() {

  saveLocalState();

 

  if (!currentUser) return;

 

  try {

    await setDoc(

      doc(db, "users", currentUser.uid),

      {

        name: currentUser.displayName || "Usuario",

        email: currentUser.email || "",

        progress: state,

        updatedAt: new Date().toISOString()

      },

      { merge: true }

    );

  } catch (error) {

    console.error("Error guardando progreso:", error);

    showToast("No se pudo sincronizar el progreso. Se conserva en este dispositivo.");

  }

}

 

async function loadUserState(user) {

  const local = loadLocalState();

 

  try {

    const reference = doc(db, "users", user.uid);

    const snapshot = await getDoc(reference);

 

    if (snapshot.exists()) {

      const data = snapshot.data();

      profilePhotoUrl = loadLocalProfilePhoto(user.uid) || user.photoURL || null;

      const cloud = data.progress || defaultState();

 

      state = {

        ...defaultState(),

        ...cloud,

        completedLessons: Array.isArray(cloud.completedLessons)

          ? cloud.completedLessons

          : [],

        completedGames: Array.isArray(cloud.completedGames)

          ? cloud.completedGames

          : []

      };

 

      state.completedLessons = [...new Set([

        ...state.completedLessons,

        ...local.completedLessons

      ])];

 

      state.completedGames = [...new Set([

        ...state.completedGames,

        ...local.completedGames

      ])];

 

      state.bestQuiz = Math.max(state.bestQuiz, local.bestQuiz);

      state.bestGame = Math.max(state.bestGame, local.bestGame);

      state.quizAttempts = Math.max(state.quizAttempts, local.quizAttempts);

    } else {

      state = local;

      profilePhotoUrl = loadLocalProfilePhoto(user.uid) || user.photoURL || null;

    }

 

    updateProfile();

    await saveUserState();

  } catch (error) {

    console.error("Error cargando progreso:", error);

    state = local;

    showToast("No se pudo sincronizar con la nube. Se usará el progreso local.");

  }

}

 

// ========================================

// 7. ELEMENTOS DEL DOM

// ========================================

 

const $ = selector => document.querySelector(selector);

const $$ = selector => [...document.querySelectorAll(selector)];

 

const authScreen = $("#authScreen");

const appShell = $("#appShell");

const authMessage = $("#authMessage");

 

function showToast(message) {

  const toast = $("#toast");

  if (!toast) return;

 

  toast.textContent = message;

  toast.classList.add("show");

 

  clearTimeout(toastTimeout);

 

  toastTimeout = setTimeout(() => {

    toast.classList.remove("show");

  }, 3000);

}

 

function setAuthMessage(message, success = false) {

  if (!authMessage) return;

 

  authMessage.textContent = message;

  authMessage.classList.toggle("success", success);

}

 

function showApp() {

  if (!authScreen || !appShell) return;

 

  authScreen.classList.add("hidden");

  appShell.classList.remove("hidden");

 

  updateProfile();

  renderAll();

}

 

function showAuth() {

  if (!authScreen || !appShell) return;

 

  appShell.classList.add("hidden");

  authScreen.classList.remove("hidden");

}

 

function updateProfile() {

  const name = currentUser?.displayName || "Invitado";

 

  if ($("#userName")) {

    $("#userName").textContent = name;

  }

 

  const avatar = $("#userAvatar");

  if (avatar) {

    if (profilePhotoUrl) {

      const image = document.createElement("img");

      image.src = profilePhotoUrl;

      image.alt = `Foto de perfil de ${name}`;

      image.className = "cp-avatar-image";

      avatar.replaceChildren(image);

    } else {

      avatar.textContent = name.substring(0, 2).toUpperCase();

    }

  }

}

 

// ========================================

// 8. REGISTRO E INICIO DE SESIÓN

// ========================================

 

function setAuthTab(tab) {

  $$(".auth-tab").forEach(button => {

    button.classList.toggle("active", button.dataset.authTab === tab);

  });

 

  const registering = tab === "register";

 

  $("#loginForm").classList.toggle("hidden", registering);

  $("#registerForm").classList.toggle("hidden", !registering);

 

  $("#authTitle").textContent = registering ? "Crea tu cuenta" : "¡Bienvenido!";

 

  $("#authDescription").textContent = registering

    ? "Comienza tu experiencia de aprendizaje."

    : "Aprende, descubre y conecta de forma segura.";

 

  setAuthMessage("");

}

 

$$("[data-auth-tab]").forEach(button => {

  button.addEventListener("click", () => {

    setAuthTab(button.dataset.authTab);

  });

});

 

$("#registerForm").addEventListener("submit", async event => {

  event.preventDefault();

  setAuthMessage("");

 

  const name = $("#registerName").value.trim();

  const email = $("#registerEmail").value.trim();

  const password = $("#registerPassword").value;

  const confirm = $("#registerConfirm").value;

 

  if (name.length < 2) {

    setAuthMessage("Escribe un nombre válido.");

    return;

  }

 

  if (password.length < 6) {

    setAuthMessage("La contraseña debe tener al menos 6 caracteres.");

    return;

  }

 

  if (password !== confirm) {

    setAuthMessage("Las contraseñas no coinciden.");

    return;

  }

 

  const button = event.submitter;

 

  if (!button) return;

 

  button.disabled = true;

  button.textContent = "Creando cuenta...";

 

  try {

    const credential = await createUserWithEmailAndPassword(

      auth,

      email,

      password

    );

 

    await updateAuthProfile(credential.user, {

      displayName: name

    });

 

    currentUser = credential.user;

    state = loadLocalState();

 

    await setDoc(doc(db, "users", credential.user.uid), {

      name,

      email,

      progress: state,

      createdAt: new Date().toISOString()

    });

 

    updateProfile();

    showApp();

 

    showToast("¡Tu cuenta se creó correctamente!");

  } catch (error) {

    console.error("Error de registro:", error);

    setAuthMessage(getFriendlyError(error));

  } finally {

    button.disabled = false;

    button.innerHTML = 'Crear mi cuenta <span>→</span>';

  }

});

 

$("#loginForm").addEventListener("submit", async event => {

  event.preventDefault();

  setAuthMessage("");

 

  const email = $("#loginEmail").value.trim();

  const password = $("#loginPassword").value;

  const button = event.submitter;

 

  if (!button) return;

 

  button.disabled = true;

  button.textContent = "Ingresando...";

 

  try {

    const credential = await signInWithEmailAndPassword(

      auth,

      email,

      password

    );

 

    currentUser = credential.user;

 

    await loadUserState(currentUser);

 

    showApp();

    showToast("¡Bienvenido nuevamente!");

  } catch (error) {

    console.error("Error de inicio de sesión:", error);

    setAuthMessage(getFriendlyError(error));

  } finally {

    button.disabled = false;

    button.innerHTML = 'Iniciar sesión <span>→</span>';

  }

});

 

$("#forgotPassword").addEventListener("click", async () => {

  const email = $("#loginEmail").value.trim();

 

  if (!email) {

    setAuthMessage("Primero escribe tu correo electrónico.");

    $("#loginEmail").focus();

    return;

  }

 

  try {

    await sendPasswordResetEmail(auth, email);

 

    setAuthMessage(

      "Si el correo está registrado, recibirás instrucciones para recuperar tu contraseña.",

      true

    );

  } catch (error) {

    setAuthMessage(getFriendlyError(error));

  }

});

 

$("#guestButton").addEventListener("click", () => {

  currentUser = null;

  profilePhotoUrl = null;

  state = loadLocalState();

 

  showApp();

  showToast("Estás explorando como invitado.");

});

 

$("#logoutButton").addEventListener("click", async () => {

  try {

    if (currentUser) {

      await signOut(auth);

    }

 

    currentUser = null;

    profilePhotoUrl = null;

    state = loadLocalState();

 

    showAuth();

    showToast("Sesión cerrada.");

  } catch (error) {

    console.error(error);

    showToast("No se pudo cerrar la sesión.");

  }

});

 

function getFriendlyError(error) {

  const code = error?.code || "";

 

  const messages = {

    "auth/email-already-in-use": "Este correo ya tiene una cuenta.",

    "auth/invalid-email": "El correo electrónico no es válido.",

    "auth/weak-password": "La contraseña es demasiado sencilla.",

    "auth/user-not-found": "No encontramos una cuenta con ese correo.",

    "auth/wrong-password": "La contraseña no es correcta.",

    "auth/invalid-credential": "El correo o la contraseña son incorrectos.",

    "auth/too-many-requests": "Demasiados intentos. Espera un momento.",

    "auth/network-request-failed": "Revisa tu conexión a internet.",

    "auth/operation-not-allowed": "Activa el método Correo electrónico/Contraseña en Firebase Authentication.",

    "permission-denied": "Firebase no permite guardar los datos. Revisa las reglas de Firestore."

  };

 

  if (

    code === "auth/invalid-api-key" ||

    code === "auth/api-key-not-valid.-please-pass-a-valid-api-key."

  ) {

    return "Firebase rechaza la clave API. Revisa la configuración de Firebase y Google Cloud.";

  }

 

  if (

    code === "permission-denied" ||

    error?.message?.includes("Missing or insufficient permissions")

  ) {

    return messages["permission-denied"];

  }

 

  return messages[code] ||

    "No se pudo completar la operación. Revisa tu conexión y la configuración de Firebase.";

}

 

// ========================================

// 9. NAVEGACIÓN

// ========================================

 

const pageNames = {

  inicio: "Inicio",

  modulos: "Módulos",

  biblioteca: "Biblioteca",

  juegos: "Juegos",

  evaluacion: "Evaluación",

  logros: "Mis logros"

};

 

function navigate(page) {

  if (!pageNames[page]) return;

 

  $$(".page").forEach(section => {

    section.classList.toggle(

      "active",

      section.id === `page-${page}`

    );

  });

 

  $$(".nav-item[data-page]").forEach(button => {

    button.classList.toggle(

      "active",

      button.dataset.page === page

    );

  });

 

  if ($("#breadcrumbPage")) {

    $("#breadcrumbPage").textContent = pageNames[page];

  }

 

  $("#sidebar")?.classList.remove("open");

 

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}

 

$$("[data-page]").forEach(button => {

  button.addEventListener("click", () => {

    navigate(button.dataset.page);

  });

});

 

$$("[data-go]").forEach(button => {

  button.addEventListener("click", () => {

    navigate(button.dataset.go);

  });

});

 

$("#menuToggle")?.addEventListener("click", () => {

  $("#sidebar")?.classList.add("open");

});

 

$("#closeSidebar")?.addEventListener("click", () => {

  $("#sidebar")?.classList.remove("open");

});

 

// ========================================

// PERFIL Y FOTO DE PERFIL

// ========================================

 

function createProfileDialog() {

  if ($("#profileDialog")) return;

 

  const styles = document.createElement("style");

  styles.textContent = `

    .cp-profile-overlay{position:fixed;inset:0;z-index:9999;display:none;place-items:center;padding:20px;background:rgba(15,23,42,.58);backdrop-filter:blur(5px)}

    .cp-profile-overlay.open{display:grid}

    .cp-profile-dialog{width:min(100%,430px);background:#fff;color:#182338;border-radius:22px;padding:26px;box-shadow:0 24px 70px rgba(15,23,42,.25);position:relative}

    .cp-profile-close{position:absolute;right:16px;top:14px;border:0;background:#f1f3f8;border-radius:50%;width:34px;height:34px;font-size:20px;cursor:pointer}

    .cp-profile-dialog h2{font-size:22px;margin:0 40px 7px 0}

    .cp-profile-subtitle{color:#778197;font-size:14px;margin:0 0 22px}

    .cp-profile-preview{width:112px;height:112px;border-radius:50%;margin:0 auto 16px;background:#f0efff;color:#6254d9;display:grid;place-items:center;font-size:30px;font-weight:800;overflow:hidden;border:4px solid #fff;box-shadow:0 0 0 1px #e5e7ef}

    .cp-profile-preview img{width:100%;height:100%;object-fit:cover}

    .cp-profile-name{text-align:center;font-weight:750;margin-bottom:4px}

    .cp-profile-email{text-align:center;color:#778197;font-size:13px;margin-bottom:20px;overflow-wrap:anywhere}

    .cp-profile-actions{display:grid;gap:10px}

    .cp-profile-actions button{border:0;border-radius:12px;padding:12px 16px;font:inherit;font-weight:700;cursor:pointer}

    .cp-profile-primary{background:#6254d9;color:white}

    .cp-profile-secondary{background:#f1f3f8;color:#263248}

    .cp-profile-danger{background:#fff0f0;color:#b42318}

    .cp-profile-note{font-size:12px;color:#778197;line-height:1.5;text-align:center;margin:16px 0 0}

    .cp-avatar-image{width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block}

    @media(max-width:480px){.cp-profile-dialog{padding:22px 18px;border-radius:18px}}

  `;

  document.head.appendChild(styles);

 

  document.body.insertAdjacentHTML("beforeend", `

    <div class="cp-profile-overlay" id="profileDialog" aria-hidden="true">

      <section class="cp-profile-dialog" role="dialog" aria-modal="true" aria-labelledby="cpProfileTitle">

        <button class="cp-profile-close" id="closeProfileDialog" type="button" aria-label="Cerrar">×</button>

        <h2 id="cpProfileTitle">Mi perfil</h2>

        <p class="cp-profile-subtitle">Personaliza tu cuenta de CONECTA+</p>

        <div class="cp-profile-preview" id="profilePreview">C+</div>

        <div class="cp-profile-name" id="profileDialogName">Invitado</div>

        <div class="cp-profile-email" id="profileDialogEmail">Modo de invitado</div>

        <div class="cp-profile-actions">

          <input id="profilePhotoInput" type="file" accept="image/png,image/jpeg,image/webp" hidden>

          <button class="cp-profile-primary" id="chooseProfilePhoto" type="button">Elegir fotografía</button>

          <button class="cp-profile-secondary" id="saveProfilePhoto" type="button" disabled>Guardar fotografía</button>

          <button class="cp-profile-danger" id="removeProfilePhoto" type="button">Quitar fotografía</button>

        </div>

        <p class="cp-profile-note" id="profileDialogNote">Usa una imagen JPG, PNG o WEBP de máximo 5 MB.</p>

      </section>

    </div>

  `);

 

  $("#closeProfileDialog").addEventListener("click", closeProfileDialog);

  $("#profileDialog").addEventListener("click", event => {

    if (event.target.id === "profileDialog") closeProfileDialog();

  });

  $("#chooseProfilePhoto").addEventListener("click", () => {

    if (!currentUser) {

      showToast("Inicia sesión para añadir una fotografía de perfil.");

      return;

    }

    $("#profilePhotoInput").click();

  });

  $("#profilePhotoInput").addEventListener("change", handleProfilePhotoSelection);

  $("#saveProfilePhoto").addEventListener("click", saveProfilePhoto);

  $("#removeProfilePhoto").addEventListener("click", removeProfilePhoto);

}

 

function openProfileDialog() {

  createProfileDialog();

  selectedProfileFile = null;

  if (profilePreviewUrl) {

    URL.revokeObjectURL(profilePreviewUrl);

    profilePreviewUrl = null;

  }

 

  const preview = $("#profilePreview");

  preview.replaceChildren();

  if (profilePhotoUrl) {

    const image = document.createElement("img");

    image.src = profilePhotoUrl;

    image.alt = "Fotografía de perfil";

    preview.appendChild(image);

  } else {

    preview.textContent = (currentUser?.displayName || "C+").substring(0, 2).toUpperCase();

  }

 

  $("#profileDialogName").textContent = currentUser?.displayName || "Invitado";

  $("#profileDialogEmail").textContent = currentUser?.email || "Modo de invitado";

  $("#profilePhotoInput").value = "";

  $("#saveProfilePhoto").disabled = true;

  $("#removeProfilePhoto").disabled = !profilePhotoUrl;

  $("#profileDialogNote").textContent = currentUser

    ? "Usa una imagen JPG, PNG o WEBP de máximo 5 MB."

    : "Inicia sesión para guardar una fotografía de perfil.";

 

  $("#profileDialog").classList.add("open");

  $("#profileDialog").setAttribute("aria-hidden", "false");

}

 

function closeProfileDialog() {

  const dialog = $("#profileDialog");

  if (!dialog) return;

  dialog.classList.remove("open");

  dialog.setAttribute("aria-hidden", "true");

  selectedProfileFile = null;

  if (profilePreviewUrl) {

    URL.revokeObjectURL(profilePreviewUrl);

    profilePreviewUrl = null;

  }

}

 

function handleProfilePhotoSelection(event) {

  const file = event.target.files?.[0];

  if (!file) return;

 

  if (!file.type.startsWith("image/")) {

    showToast("Selecciona un archivo de imagen válido.");

    event.target.value = "";

    return;

  }

 

  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {

    showToast("Formato no compatible. Usa JPG, PNG o WEBP.");

    event.target.value = "";

    return;

  }

 

  if (file.size > 5 * 1024 * 1024) {

    showToast("La fotografía no debe superar los 5 MB.");

    event.target.value = "";

    return;

  }

 

  selectedProfileFile = file;

  if (profilePreviewUrl) URL.revokeObjectURL(profilePreviewUrl);

  profilePreviewUrl = URL.createObjectURL(file);

 

  const preview = $("#profilePreview");

  const image = document.createElement("img");

  image.src = profilePreviewUrl;

  image.alt = "Vista previa de la fotografía";

  preview.replaceChildren(image);

  $("#saveProfilePhoto").disabled = false;

  $("#profileDialogNote").textContent = `${file.name} · ${(file.size / 1024 / 1024).toFixed(2)} MB. Pulsa Guardar fotografía para aplicar el cambio.`;

}

 

async function compressProfilePhoto(file) {

  return new Promise((resolve, reject) => {

    const reader = new FileReader();

    reader.onerror = () => reject(new Error("No se pudo leer la imagen."));

    reader.onload = () => {

      const image = new Image();

      image.onerror = () => reject(new Error("El archivo no es una imagen válida."));

      image.onload = () => {

        const maxSide = 512;

        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));

        const canvas = document.createElement("canvas");

        canvas.width = Math.max(1, Math.round(image.width * scale));

        canvas.height = Math.max(1, Math.round(image.height * scale));

        const context = canvas.getContext("2d");

        if (!context) {

          reject(new Error("No se pudo procesar la imagen."));

          return;

        }

        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        resolve(canvas.toDataURL("image/jpeg", 0.78));

      };

      image.src = reader.result;

    };

    reader.readAsDataURL(file);

  });

}

 

async function saveProfilePhoto() {

  if (!currentUser) {

    showToast("Inicia sesión para guardar tu fotografía.");

    return;

  }

  if (!selectedProfileFile) {

    showToast("Primero selecciona una fotografía.");

    return;

  }

 

  const saveButton = $("#saveProfilePhoto");

  saveButton.disabled = true;

  saveButton.textContent = "Guardando...";

 

  try {

    const compressedPhoto = await compressProfilePhoto(selectedProfileFile);

    localStorage.setItem(profilePhotoStorageKey(currentUser.uid), compressedPhoto);

    profilePhotoUrl = compressedPhoto;

    updateProfile();

    showToast("¡Fotografía guardada en este dispositivo!");

    closeProfileDialog();

  } catch (error) {

    console.error("Error guardando fotografía local:", error);

    showToast("No se pudo guardar la fotografía. Prueba con otra imagen.");

  } finally {

    saveButton.disabled = !selectedProfileFile;

    saveButton.textContent = "Guardar fotografía";

  }

}

 

async function removeProfilePhoto() {

  if (!currentUser || !profilePhotoUrl) {

    showToast("No hay una fotografía guardada para quitar.");

    return;

  }

 

  const removeButton = $("#removeProfilePhoto");

  removeButton.disabled = true;

  removeButton.textContent = "Quitando...";

 

  try {

    localStorage.removeItem(profilePhotoStorageKey(currentUser.uid));

    profilePhotoUrl = null;

    updateProfile();

    showToast("Fotografía eliminada de este dispositivo.");

    closeProfileDialog();

  } catch (error) {

    console.error("Error quitando fotografía local:", error);

    showToast("No se pudo quitar la fotografía.");

  } finally {

    removeButton.disabled = !profilePhotoUrl;

    removeButton.textContent = "Quitar fotografía";

  }

}

 

$("#profileButton")?.addEventListener("click", openProfileDialog);

 

// ========================================

// 10. MÓDULOS

// ========================================

 

function getLessonId(moduleId, lessonIndex) {

  return `${moduleId}-${lessonIndex}`;

}

 

function isLessonComplete(moduleId, lessonIndex) {

  return state.completedLessons.includes(

    getLessonId(moduleId, lessonIndex)

  );

}

 

function renderHomeModules() {

  $("#homeModules").innerHTML = modules.map(module => {

    const completed = module.lessons.filter((_, index) =>

      isLessonComplete(module.id, index)

    ).length;

 

    return `

      <div class="home-module">

        <img

          class="home-module-image"

          src="${visualImages.modules[module.id]}"

          alt="${module.title}"

          loading="lazy"

        >

 

        <div class="home-module-info">

          <strong>${module.title}</strong>

          <small>${completed} de ${module.lessons.length} lecciones completadas</small>

        </div>

 

        <button data-open-module="${module.id}">

          Explorar

        </button>

      </div>

    `;

  }).join("");

 

  $$("[data-open-module]").forEach(button => {

    button.addEventListener("click", () => {

      openModule(Number(button.dataset.openModule));

    });

  });

}

 

function renderAllModules() {

  $("#allModules").innerHTML = modules.map(module => {

    const completed = module.lessons.filter((_, index) =>

      isLessonComplete(module.id, index)

    ).length;

 

    return `

      <article class="module-card visual-module-card">

 

        <div class="module-card-image">

          <img

            src="${visualImages.modules[module.id]}"

            alt="${module.title}"

            loading="lazy"

          >

          <span class="module-number">MÓDULO 0${module.id}</span>

        </div>

 

        <div class="module-card-content">

          <h2>${module.title}</h2>

          <p>${module.description}</p>

 

          <div class="module-card-footer">

            <span>

              ${completed}/${module.lessons.length} lecciones ·

              ${module.lessons.length * 5} min aprox.

            </span>

 

            <button data-open-module="${module.id}">

              Ver contenido →

            </button>

          </div>

        </div>

 

      </article>

    `;

  }).join("");

 

  $$("[data-open-module]").forEach(button => {

    button.addEventListener("click", () => {

      openModule(Number(button.dataset.openModule));

    });

  });

}

 

function openModule(moduleId) {

  const module = modules.find(item => item.id === moduleId);

  if (!module) return;

 

  $("#lessonContent").innerHTML = `

    <span class="lesson-tag">

      ${module.icon} MÓDULO 0${module.id}

    </span>

 

    <h2 class="lesson-title">${module.title}</h2>

 

    <p class="lesson-body">${module.description}</p>

 

    <h3>Contenido del módulo</h3>

 

    <div class="lesson-list">

      ${module.lessons.map((lesson, index) => `

        <button class="lesson-entry" data-open-lesson="${index}">

          <span>

            ${isLessonComplete(module.id, index) ? "✓" : "○"}

          </span>

 

          <span>

            ${lesson.title}

            <small>${lesson.duration}</small>

          </span>

 

          <span>→</span>

        </button>

      `).join("")}

    </div>

  `;

 

  $$("#lessonContent [data-open-lesson]").forEach(button => {

    button.addEventListener("click", () => {

      openLesson(moduleId, Number(button.dataset.openLesson));

    });

  });

 

  $("#lessonModal").classList.remove("hidden");

}

 

function openLesson(moduleId, lessonIndex) {

  const module = modules.find(item => item.id === moduleId);

  const lesson = module?.lessons[lessonIndex];

 

  if (!lesson) return;

 

  const complete = isLessonComplete(moduleId, lessonIndex);

 

  $("#lessonContent").innerHTML = `

    <span class="lesson-tag">

      ${module.icon} ${module.title}

    </span>

 

    <h2 class="lesson-title">${lesson.title}</h2>

 

    <div class="lesson-body">

      <p>

        <strong>Duración estimada:</strong>

        ${lesson.duration}

      </p>

 

      ${lesson.content}

    </div>

 

    <div class="lesson-actions">

      <button

        class="primary-button"

        id="completeLesson"

        ${complete ? "disabled" : ""}

      >

        ${complete ? "✓ Lección completada" : "Marcar como completada"}

      </button>

    </div>

  `;

 

  $("#completeLesson").addEventListener("click", async () => {

    const id = getLessonId(moduleId, lessonIndex);

 

    if (!state.completedLessons.includes(id)) {

      state.completedLessons.push(id);

 

      await saveUserState();

      renderAll();

 

      showToast("¡Lección completada! Has avanzado un paso más.");

    }

 

    openLesson(moduleId, lessonIndex);

  });

}

 

$("#closeLesson")?.addEventListener("click", () => {

  $("#lessonModal").classList.add("hidden");

});

 

$("#lessonModal")?.addEventListener("click", event => {

  if (event.target.id === "lessonModal") {

    $("#lessonModal").classList.add("hidden");

  }

});

 

// ========================================

// 11. BIBLIOTECA

// ========================================

 

function renderLibrary(filter = "") {

  const query = filter.toLowerCase().trim();

 

  const items = libraryItems.filter(item =>

    `${item.title} ${item.category} ${item.description}`

      .toLowerCase()

      .includes(query)

  );

 

  $("#videoGrid").innerHTML = items.length

    ? items.map(item => {

        const index = libraryItems.indexOf(item);

 

        return `

          <article class="library-card">

 

            <div class="library-art">

              <img

                src="${visualImages.library[index]}"

                alt="${item.title}"

                loading="lazy"

              >

 

              <span>${item.category}</span>

            </div>

 

            <div class="library-card-content">

              <h3>${item.title}</h3>

 

              <p>${item.description}</p>

 

              <a

                href="https://www.youtube.com/results?search_query=${encodeURIComponent(item.search)}"

                target="_blank"

                rel="noopener noreferrer"

              >

                Buscar recursos →

              </a>

            </div>

 

          </article>

        `;

      }).join("")

    : `

      <div class="panel">

        <p>No se encontraron recursos con ese término.</p>

      </div>

    `;

}

 

$("#librarySearch")?.addEventListener("input", event => {

  renderLibrary(event.target.value);

});

 

// ========================================

// 12. JUEGOS

// ========================================

 

function renderLevels() {

  $("#levelsGrid").innerHTML = gameLevels.map((level, index) => {

    const completed = state.completedGames.includes(index);

 

    return `

      <article class="level-card visual-level-card">

 

        <div class="level-image">

          <img

            src="${visualImages.levels[index]}"

            alt="${level.title}"

            loading="lazy"

          >

        </div>

 

        <div class="level-content">

          <h3>${level.title}</h3>

 

          <p>${level.description}</p>

 

          <button data-start-game="${index}">

            ${completed ? "Jugar nuevamente" : "Comenzar nivel →"}

          </button>

        </div>

 

      </article>

    `;

  }).join("");

 

  $$("[data-start-game]").forEach(button => {

    button.addEventListener("click", () => {

      startGame(Number(button.dataset.startGame));

    });

  });

}

 

function startGame(levelIndex) {

  if (!gameLevels[levelIndex]) return;

 

  currentGame = levelIndex;

  currentGameQuestion = 0;

  gameScore = 0;

  selectedGameAnswer = null;

 

  $("#gamePanel").classList.remove("hidden");

 

  $("#gamePanel").scrollIntoView({

    behavior: "smooth",

    block: "start"

  });

 

  renderGameQuestion();

}

 

function renderGameQuestion() {

  const level = gameLevels[currentGame];

  const question = level.questions[currentGameQuestion];

 

  $("#gamePanel").innerHTML = `

    <span class="eyebrow">

      ${level.title.toUpperCase()}

    </span>

 

    <p class="muted">

      Pregunta ${currentGameQuestion + 1} de ${level.questions.length}

    </p>

 

    <div class="quiz-progress">

      <span style="width:${(currentGameQuestion / level.questions.length) * 100}%"></span>

    </div>

 

    <h2 class="game-question">

      ${question.question}

    </h2>

 

    <div class="answer-options">

      ${question.options.map((option, index) => `

        <button class="answer-option" data-game-answer="${index}">

          ${option}

        </button>

      `).join("")}

    </div>

 

    <div id="gameFeedback"></div>

 

    <button class="primary-button" id="submitGameAnswer">

      Comprobar respuesta

    </button>

  `;

 

  $$("[data-game-answer]").forEach(button => {

    button.addEventListener("click", () => {

      selectedGameAnswer = Number(button.dataset.gameAnswer);

 

      $$("[data-game-answer]").forEach(item => {

        item.classList.remove("selected");

      });

 

      button.classList.add("selected");

    });

  });

 

  $("#submitGameAnswer").addEventListener("click", checkGameAnswer);

}

 

function checkGameAnswer() {

  if (selectedGameAnswer === null) {

    showToast("Selecciona una respuesta primero.");

    return;

  }

 

  const level = gameLevels[currentGame];

  const question = level.questions[currentGameQuestion];

 

  const correct = selectedGameAnswer === question.correct;

 

  if (correct) gameScore++;

 

  $$("[data-game-answer]").forEach((button, index) => {

    button.disabled = true;

 

    if (index === question.correct) {

      button.classList.add("correct");

    }

 

    if (index === selectedGameAnswer && !correct) {

      button.classList.add("incorrect");

    }

  });

 

  $("#gameFeedback").innerHTML = `

    <div class="feedback ${correct ? "good" : "bad"}">

      <strong>

        ${correct ? "¡Muy bien!" : "Respuesta incorrecta"}

      </strong>

      <br>

      ${question.explanation}

    </div>

  `;

 

  const button = $("#submitGameAnswer");

 

  button.textContent =

    currentGameQuestion === level.questions.length - 1

      ? "Ver resultado"

      : "Siguiente pregunta";

 

  button.onclick = nextGameQuestion;

}

 

async function nextGameQuestion() {

  const level = gameLevels[currentGame];

 

  if (currentGameQuestion < level.questions.length - 1) {

    currentGameQuestion++;

    selectedGameAnswer = null;

 

    renderGameQuestion();

    return;

  }

 

  const percent = Math.round(

    (gameScore / level.questions.length) * 100

  );

 

  if (!state.completedGames.includes(currentGame)) {

    state.completedGames.push(currentGame);

  }

 

  state.bestGame = Math.max(state.bestGame, percent);

 

  await saveUserState();

 

  $("#gamePanel").innerHTML = `

    <div class="quiz-start-icon">🏆</div>

 

    <span class="eyebrow">RESULTADO DEL NIVEL</span>

 

    <h2>¡Desafío completado!</h2>

 

    <p>

      Respondiste correctamente ${gameScore}

      de ${level.questions.length} preguntas.

    </p>

 

    <h2>${percent}%</h2>

 

    <button class="primary-button" id="playAgain">

      Volver a jugar

    </button>

 

    <button class="secondary-button" id="closeGame">

      Cerrar

    </button>

  `;

 

  $("#playAgain").addEventListener("click", () => {

    startGame(currentGame);

  });

 

  $("#closeGame").addEventListener("click", () => {

    $("#gamePanel").classList.add("hidden");

  });

 

  renderAll();

}

 

// ========================================

// 13. EVALUACIÓN GENERAL

// ========================================

 

$("#startQuiz")?.addEventListener("click", startQuiz);

 

function startQuiz() {

  quizIndex = 0;

  quizScore = 0;

  currentQuizAnswer = null;

 

  renderQuizQuestion();

}

 

function renderQuizQuestion() {

  const question = quizQuestions[quizIndex];

 

  $("#quizPanel").innerHTML = `

    <span class="eyebrow">EVALUACIÓN GENERAL</span>

 

    <p class="muted">

      Pregunta ${quizIndex + 1} de ${quizQuestions.length}

    </p>

 

    <div class="quiz-progress">

      <span style="width:${(quizIndex / quizQuestions.length) * 100}%"></span>

    </div>

 

    <h2 class="quiz-question">

      ${question.question}

    </h2>

 

    <div class="answer-options">

      ${question.options.map((option, index) => `

        <button class="answer-option" data-quiz-answer="${index}">

          ${option}

        </button>

      `).join("")}

    </div>

 

    <button class="primary-button" id="nextQuiz">

      Siguiente pregunta →

    </button>

  `;

 

  $$("[data-quiz-answer]").forEach(button => {

    button.addEventListener("click", () => {

      currentQuizAnswer = Number(button.dataset.quizAnswer);

 

      $$("[data-quiz-answer]").forEach(item => {

        item.classList.remove("selected");

      });

 

      button.classList.add("selected");

    });

  });

 

  $("#nextQuiz").addEventListener("click", nextQuizQuestion);

}

 

function nextQuizQuestion() {

  if (currentQuizAnswer === null) {

    showToast("Selecciona una respuesta.");

    return;

  }

 

  if (currentQuizAnswer === quizQuestions[quizIndex].correct) {

    quizScore++;

  }

 

  quizIndex++;

  currentQuizAnswer = null;

 

  if (quizIndex < quizQuestions.length) {

    renderQuizQuestion();

  } else {

    finishQuiz();

  }

}

 

async function finishQuiz() {

  const percent = Math.round(

    (quizScore / quizQuestions.length) * 100

  );

 

  state.quizAttempts++;

  state.bestQuiz = Math.max(state.bestQuiz, percent);

 

  await saveUserState();

 

  $("#quizPanel").innerHTML = `

    <div class="quiz-start-icon">

      ${percent >= 75 ? "🏆" : "✓"}

    </div>

 

    <span class="eyebrow">RESULTADO FINAL</span>

 

    <h2>

      ${percent >= 75 ? "¡Excelente trabajo!" : "¡Evaluación completada!"}

    </h2>

 

    <h2 style="font-size:42px;color:var(--primary)">

      ${percent}%

    </h2>

 

    <p>

      Obtuviste ${quizScore} respuestas correctas

      de ${quizQuestions.length} preguntas.

    </p>

 

    <p>

      ${percent >= 75

        ? "Has demostrado un buen dominio de los contenidos."

        : "Puedes repasar los módulos y volver a intentarlo."}

    </p>

 

    <button class="primary-button" id="retryQuiz">

      Volver a evaluar

    </button>

  `;

 

  $("#retryQuiz").addEventListener("click", startQuiz);

 

  renderAll();

}

 

// ========================================

// 14. LOGROS

// ========================================

 

function renderBadges() {

  const obtained = badges.filter(badge => badge.condition(state));

 

  $("#achievementCount").textContent =

    `${obtained.length} de ${badges.length} logros obtenidos`;

 

  const percent = Math.round(

    (obtained.length / badges.length) * 100

  );

 

  $("#achievementPercent").textContent = `${percent}%`;

  $("#achievementBar").style.width = `${percent}%`;

 

  $("#badgesGrid").innerHTML = badges.map(badge => {

    const unlocked = badge.condition(state);

 

    return `

      <article class="badge-card ${unlocked ? "" : "locked"}">

 

        <div class="badge-symbol">

          ${unlocked ? badge.icon : "🔒"}

        </div>

 

        <h3>${badge.title}</h3>

 

        <p>${badge.description}</p>

 

        <span class="badge-status">

          ${unlocked ? "✓ OBTENIDO" : "POR DESBLOQUEAR"}

        </span>

 

      </article>

    `;

  }).join("");

}

 

// ========================================

// 15. ESTADÍSTICAS Y PROGRESO

// ========================================

 

function renderStats() {

  const completedLessons = state.completedLessons.length;

  const completedGames = state.completedGames.length;

 

  const totalLessons = modules.reduce(

    (sum, module) => sum + module.lessons.length,

    0

  );

 

  const percent = Math.round(

    (completedLessons / totalLessons) * 100

  );

 

  $("#statLessons").textContent = completedLessons;

  $("#statGames").textContent = completedGames;

 

  $("#statQuiz").textContent = state.quizAttempts

    ? `${state.bestQuiz}%`

    : "—";

 

  $("#statBadges").textContent =

    badges.filter(badge => badge.condition(state)).length;

 

  $("#progressPercent").textContent = `${percent}%`;

 

  $("#progressRing").style.background = `

    conic-gradient(

      var(--primary) ${percent}%,

      #eeeff6 ${percent}%

    )

  `;

 

  $("#progressMessage").textContent =

    percent === 100

      ? "¡Has completado todas las lecciones! Excelente trabajo."

      : percent > 0

        ? "¡Vas por buen camino! Sigue aprendiendo."

        : "Comienza tu primera lección para registrar tu progreso.";

}

 

// ========================================

// 16. ACTUALIZACIÓN GENERAL

// ========================================

 

function renderAll() {

  renderHomeModules();

  renderAllModules();

  renderLibrary($("#librarySearch")?.value || "");

  renderLevels();

  renderBadges();

  renderStats();

}

 

// ========================================

// 17. INICIALIZACIÓN Y SESIÓN

// ========================================

 

onAuthStateChanged(auth, async user => {

  if (user) {

    currentUser = user;

    profilePhotoUrl = loadLocalProfilePhoto(user.uid) || user.photoURL || null;

 

    await loadUserState(user);

 

    showApp();

  } else {

    currentUser = null;

    profilePhotoUrl = null;

    state = loadLocalState();

 

    showAuth();

  }

});

 

console.log("CONECTA+ iniciado correctamente.");
// REGISTRO DE LA APLICACIÓN INSTALABLE CONECTA+
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() => {
        console.log("CONECTA+ está lista para instalarse.");
      })
      .catch(error => {
        console.error("Error al registrar la aplicación:", error);
      });
  });
}