/**
 * AV8R SCHOOL (AVIA8TR-3) — CONTENIDO MODULAR (RUTA, PROGRAMAS, FAQ Y CHAT)
 */

export const ROUTE = [
  {
    n: '01',
    es: ['Diagnóstico + inglés', 'Revisamos edad, inglés, experiencia, país y objetivo. Nivelamos lo que falte antes de entrar a teoría.'],
    en: ['Diagnosis + English', 'We review age, English, experience, country, and goal. We level what is missing before theory.'],
    out: { es: 'Plan personal', en: 'Personal plan' }
  },
  {
    n: '02',
    es: ['A&P General', 'Fundamentos, regulaciones, matemáticas, física, materiales y seguridad. Base para todos los ratings.'],
    en: ['A&P General', 'Fundamentals, regulations, math, physics, materials, and safety. Base for every rating.'],
    out: { es: 'Examen General', en: 'General test' }
  },
  {
    n: '03',
    es: ['Airframe + Powerplant', 'Estructuras, sistemas, motores y hélices. Teoría en Skool con práctica y proyectos.'],
    en: ['Airframe + Powerplant', 'Structures, systems, engines, and propellers. Skool theory with hands-on projects.'],
    out: { es: 'Proyectos y mocks', en: 'Projects & mocks' }
  },
  {
    n: '04',
    es: ['Práctica + Testing', 'Partner Part 147/145, logbook, PSI written y DME oral/practical. Sin simular lo oficial.'],
    en: ['Practice + Testing', 'Part 147/145 partner, logbook, PSI written, and DME oral/practical. No faking the official.'],
    out: { es: 'Readiness real', en: 'Real readiness' }
  },
  {
    n: '05',
    es: ['OEM + Empleo', 'Aviación ejecutiva, portafolio, entrevistas y alianzas con empleadores. La visa se gestiona aparte.'],
    en: ['OEM + Employment', 'Business aviation, portfolio, interviews, and employer alliances. Visa handled separately.'],
    out: { es: 'Carrera', en: 'Career' }
  }
];

export const PROGRAMS = [
  { cat: 'ap', tag: { es: 'A&P · Nivel 1', en: 'A&P · Level 1' }, title: { es: 'A&P General', en: 'A&P General' }, desc: { es: 'Fundamentos, regulaciones, matemáticas, física, materiales y seguridad.', en: 'Fundamentals, regulations, math, physics, materials, and safety.' }, meta: { es: 'Skool · mentoría · quiz', en: 'Skool · mentor · quiz' } },
  { cat: 'ap', tag: { es: 'A&P · Nivel 2', en: 'A&P · Level 2' }, title: { es: 'Airframe', en: 'Airframe' }, desc: { es: 'Estructuras, hidráulica, neumática, eléctrico y sistemas de la aeronave.', en: 'Structures, hydraulics, pneumatics, electrical, and aircraft systems.' }, meta: { es: 'Video · práctica · mock', en: 'Video · practice · mock' } },
  { cat: 'ap', tag: { es: 'A&P · Nivel 3', en: 'A&P · Level 3' }, title: { es: 'Powerplant', en: 'Powerplant' }, desc: { es: 'Motores, hélices, combustible, ignición y sistemas de potencia.', en: 'Engines, propellers, fuel, ignition, and powerplant systems.' }, meta: { es: 'Video · práctica · mock', en: 'Video · practice · mock' } },
  { cat: 'ap', tag: { es: 'A&P · Examen', en: 'A&P · Exam' }, title: { es: 'Exam Sprint', en: 'Exam Sprint' }, desc: { es: 'Mock written, oral y practical; rúbricas y preparación para DME.', en: 'Mock written, oral, and practical; rubrics and DME preparation.' }, meta: { es: 'Comunidad · feedback', en: 'Community · feedback' } },
  { cat: 'english', tag: { es: 'Inglés', en: 'English' }, title: { es: 'Aviation English', en: 'Aviation English' }, desc: { es: 'Vocabulario técnico, lectura de manuales, entrevistas y comunicación de taller.', en: 'Technical vocabulary, manual reading, interviews, and shop communication.' }, meta: { es: 'Online · speaking', en: 'Online · speaking' } },
  { cat: 'oem', tag: { es: 'OEM · Aviación ejecutiva', en: 'OEM · Business aviation' }, title: { es: 'Business Jet OEM', en: 'Business Jet OEM' }, desc: { es: 'Orientación a Gulfstream, Bombardier, Dassault, Embraer y Textron.', en: 'Orientation to Gulfstream, Bombardier, Dassault, Embraer, and Textron.' }, meta: { es: 'Especialización', en: 'Specialization' } },
  { cat: 'oem', tag: { es: 'Aviónica', en: 'Avionics' }, title: { es: 'Avionics & Troubleshooting', en: 'Avionics & Troubleshooting' }, desc: { es: 'Sistemas, wiring, diagnóstico y aviónica de cabina ejecutiva.', en: 'Systems, wiring, troubleshooting, and executive cabin avionics.' }, meta: { es: 'Video · casos', en: 'Video · cases' } },
  { cat: 'career', tag: { es: 'Empleo', en: 'Career' }, title: { es: 'Career Accelerator', en: 'Career Accelerator' }, desc: { es: 'CV técnico, entrevistas, portafolio, herramientas y preparación para empleadores.', en: 'Technical CV, interviews, portfolio, tools, and employer readiness.' }, meta: { es: 'Mentoría · comunidad', en: 'Mentor · community' } }
];

export const FAQ = [
  { q: { es: '¿Cómo entro a los cursos y la comunidad?', en: 'How do I join the courses and community?' }, a: { es: 'Todo nuestro ecosistema educativo actual (cursos, materiales, guías FAST TRACK y comunidad) está activo en https://skool.com/av8rschool.', en: 'Our entire active educational ecosystem (courses, study guides, FAST TRACK materials, and community) is hosted at https://skool.com/av8rschool.' } },
  { q: { es: '¿Dónde puedo ver clases y transmisiones en vivo?', en: 'Where can I watch classes and live streams?' }, a: { es: 'En nuestros dos canales oficiales de YouTube: @av8rschool (academia) y @thereal_n3570r (canal personal de Nestor Cadena).', en: 'On both of our official YouTube channels: @av8rschool (academy) and @thereal_n3570r (Nestor Cadena’s personal channel).' } },
  { q: { es: '¿Cuándo abre la tienda de gorras y camisetas?', en: 'When does the merch store open?' }, a: { es: 'La tienda oficial está en desarrollo mediante Shopify y muy pronto estará disponible en www.av8rschool.com/store.', en: 'Our official Shopify store (caps, shirts, mugs, and gear) is currently in development and will launch soon at www.av8rschool.com/store.' } },
  { q: { es: '¿Necesito experiencia previa para empezar la ruta?', en: 'Do I need previous experience to start?' }, a: { es: 'No para empezar a aprender. Para certificarte, la FAA exige 18 meses por rating o 30 meses para A&P, o graduarte de una escuela Part 147.', en: 'Not to start learning. To certify, the FAA requires 18 months per rating or 30 months for A&P, or graduation from a Part 147 school.' } },
  { q: { es: '¿AV8R certifica al técnico o da visa de trabajo?', en: 'Does AV8R certify mechanics or sponsor visas?' }, a: { es: 'No. AV8R prepara y acompaña; la FAA emite exclusivamente el certificado A&P. El certificado tampoco otorga visa ni autorización de trabajo.', en: 'No. AV8R prepares and guides; the FAA exclusively issues the A&P certificate. The certificate does not grant a visa or work authorization.' } },
  { q: { es: '¿Qué novedades vienen en el portal?', en: 'What new features are coming to the portal?' }, a: { es: 'Trabajamos paso a paso para sumar al Profesor N3570R (asistente IA educativo), biblioteca de recursos, noticias y sistema de reservas conectado con Zoom.', en: 'We are rolling out upgrades step by step: Profesor N3570R (AI educational assistant), resource library, news, and a Zoom-connected booking system.' } }
];

export const CHAT_DATA = {
  es: {
    quick: [
      { label: 'Ir a Skool', prompt: '¿Cómo entro a Skool?' },
      { label: 'Canales YouTube', prompt: '¿Cuáles son los canales de YouTube?' },
      { label: 'Tienda /store', prompt: '¿Cuándo abre la tienda?' },
      { label: 'Ruta FAA', prompt: '¿Cuál es la ruta FAA A&P?' }
    ],
    fallback: 'Puedo orientarte sobre Skool (skool.com/av8rschool), nuestros canales de YouTube, la tienda (/store) y la ruta FAA A&P. También puedes escribir a aognestor@gmail.com o WhatsApp +1 (561) 715-8036.',
    intents: [
      { keys: ['skool', 'comunidad', 'curso', 'programa', 'aulas'], reply: 'Nuestra comunidad y aulas virtuales están activas en https://skool.com/av8rschool. Ahí encuentras cursos, guías FAST TRACK EN/ES, materiales y mentoría.' },
      { keys: ['youtube', 'video', 'clase', 'vivo', 'n3570r', 'canal'], reply: 'Tenemos dos canales en YouTube:\n• AV8R School: https://www.youtube.com/@av8rschool\n• Nestor Cadena: https://www.youtube.com/@thereal_n3570r' },
      { keys: ['tienda', 'store', 'shopify', 'gorra', 'camiseta', 'taza', 'comprar'], reply: 'Nuestra tienda en Shopify (gorras, camisetas, tazas y más) está en preparación y pronto abrirá en www.av8rschool.com/store.' },
      { keys: ['visa', 'trabajo', 'autorizacion', 'migratorio'], reply: 'Importante: el certificado FAA A&P NO otorga visa ni permiso de trabajo en EE. UU. Cualquier trámite migratorio debe revisarse con un abogado de inmigración.' },
      { keys: ['faa', 'ruta', 'empezar', 'cero', 'requisito', '147'], reply: 'La ruta AV8R sigue 5 etapas: 01 Diagnóstico + inglés → 02 A&P General → 03 Airframe + Powerplant → 04 Práctica + Testing (PSI/DME) → 05 OEM + Empleo. La FAA certifica; AV8R te prepara.' },
      { keys: ['humano', 'nestor', 'whatsapp', 'correo', 'contacto', 'zoom', 'profesor'], reply: 'Puedes contactar directamente a Nestor Cadena:\n• Skool: https://skool.com/av8rschool\n• WhatsApp: +1 (561) 715-8036\n• Correo: aognestor@gmail.com\nPronto sumaremos también al Profesor N3570R y reservas por Zoom.' }
    ]
  },
  en: {
    quick: [
      { label: 'Join Skool', prompt: 'How do I join Skool?' },
      { label: 'YouTube Channels', prompt: 'What are the YouTube channels?' },
      { label: 'Store (/store)', prompt: 'When does the store open?' },
      { label: 'FAA Path', prompt: 'What is the FAA A&P path?' }
    ],
    fallback: 'I can guide you on Skool (skool.com/av8rschool), our YouTube channels, the upcoming Shopify store (/store), and the FAA A&P path. You can also reach aognestor@gmail.com or WhatsApp +1 (561) 715-8036.',
    intents: [
      { keys: ['skool', 'community', 'course', 'program', 'classroom'], reply: 'Our virtual classrooms and community are live at https://skool.com/av8rschool — featuring courses, bilingual FAST TRACK guides, and mentorship.' },
      { keys: ['youtube', 'video', 'class', 'live', 'n3570r', 'channel'], reply: 'Follow both official YouTube channels:\n• AV8R School: https://www.youtube.com/@av8rschool\n• Nestor Cadena: https://www.youtube.com/@thereal_n3570r' },
      { keys: ['store', 'shop', 'shopify', 'merch', 'shirt', 'cap', 'mug', 'buy'], reply: 'Our official Shopify store (caps, t-shirts, mugs, and gear) is in development and will launch soon at www.av8rschool.com/store.' },
      { keys: ['visa', 'work authorization', 'immigration', 'green card'], reply: 'Important: an FAA A&P certificate does NOT grant a U.S. visa or work authorization. Immigration matters must be handled with a qualified attorney.' },
      { keys: ['faa', 'path', 'start', 'zero', 'requirement', '147'], reply: 'The 5-stage AV8R pathway: 01 Diagnosis + English → 02 A&P General → 03 Airframe + Powerplant → 04 Practice + Testing (PSI/DME) → 05 OEM + Employment.' },
      { keys: ['human', 'nestor', 'whatsapp', 'email', 'contact', 'zoom', 'profesor'], reply: 'Reach Nestor Cadena directly:\n• Skool: https://skool.com/av8rschool\n• WhatsApp: +1 (561) 715-8036\n• Email: aognestor@gmail.com\nProfesor N3570R AI and Zoom bookings are coming soon.' }
    ]
  }
};
