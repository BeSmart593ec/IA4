import { useState } from 'react';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-white/90 text-sm font-medium">100% Gratuito • Sin tarjeta de crédito • Solo tu cuenta de Google</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          De <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">Consumidor</span> a{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">Creador Digital</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
          Curso intensivo de <strong className="text-white">2 semanas</strong> para jóvenes de zonas vulnerables. 
          Aprende a usar <strong className="text-yellow-300">Inteligencia Artificial gratuita</strong> para generar ingresos, 
          ayudar a tu comunidad y construir tu futuro digital.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#inscripcion" className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-xl text-lg hover:scale-105 transition-transform shadow-lg shadow-orange-500/30">
            🚀 Inscríbete Gratis
          </a>
          <a href="#programa" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl text-lg hover:bg-white/20 transition-all">
            📋 Ver Programa Completo
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { number: '2', label: 'Semanas', icon: '📅' },
            { number: '10', label: 'Sesiones', icon: '🎯' },
            { number: '2h', label: 'Por sesión', icon: '⏰' },
            { number: '$0', label: 'Costo total', icon: '💰' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-black text-white">{stat.number}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Nuestra Misión</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Democratizar el progreso con IA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            No necesitas una computadora potente ni dinero. Solo necesitas tu smartphone, tu cuenta de Google y tus ganas de salir adelante.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🧠',
              title: 'Mentalidad de Creador',
              description: 'Transformamos la mentalidad de "consumir tecnología" a "crear con tecnología". Cada estudiante se convierte en un micro-emprendedor digital.',
              color: 'from-purple-500 to-indigo-500'
            },
            {
              icon: '🤝',
              title: 'Impacto Comunitario',
              description: 'Los servicios que aprendes a crear benefician directamente a tu comunidad: páginas web para negocios locales, menús digitales, catálogos con IA.',
              color: 'from-pink-500 to-rose-500'
            },
            {
              icon: '💸',
              title: 'Monetización Real',
              description: 'Desde la primera semana puedes empezar a cobrar por tus servicios: $20-$40 por una página web, $10-$20 por un catálogo digital, y más.',
              color: 'from-green-500 to-emerald-500'
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolsSection() {
  const tools = [
    {
      category: 'Textos y Copywriting',
      icon: '✍️',
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-700',
      items: [
        { name: 'Qwen (Alibaba)', desc: 'Asistente IA gratuito para redacción, ideas de negocio y atención al cliente', url: 'https://chat.qwen.ai' },
        { name: 'Google Gemini', desc: 'Generación de textos, estrategias de marketing y contenido para redes sociales', url: 'https://gemini.google.com' },
        { name: 'ChatGPT Free', desc: 'Redacción de textos publicitarios, emails y contenido comercial', url: 'https://chat.openai.com' },
      ]
    },
    {
      category: 'Imágenes y Diseño',
      icon: '🎨',
      color: 'bg-pink-50 border-pink-200',
      textColor: 'text-pink-700',
      items: [
        { name: 'Microsoft Designer', desc: 'Crear logotipos, banners, posts para redes sociales y material publicitario', url: 'https://designer.microsoft.com' },
        { name: 'Canva Free', desc: 'Diseño de catálogos, menús digitales, tarjetas de presentación', url: 'https://canva.com' },
        { name: 'Leonardo.AI (Free)', desc: 'Generación de imágenes profesionales para productos y publicidad', url: 'https://leonardo.ai' },
      ]
    },
    {
      category: 'Páginas Web',
      icon: '🌐',
      color: 'bg-green-50 border-green-200',
      textColor: 'text-green-700',
      items: [
        { name: 'Kimi Build', desc: 'Crear páginas web completas con IA en minutos, sin saber programar', url: 'https://kimi.ai' },
        { name: 'Carrd.co', desc: 'Landing pages profesionales gratuitas, perfectas para negocios locales', url: 'https://carrd.co' },
        { name: 'Gamma App', desc: 'Presentaciones y sitios web generados automáticamente con IA', url: 'https://gamma.app' },
      ]
    },
    {
      category: 'Programación con IA',
      icon: '💻',
      color: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-700',
      items: [
        { name: 'Replit (Starter)', desc: 'Programar y publicar apps desde el navegador, con IA asistente', url: 'https://replit.com' },
        { name: 'GitHub Copilot Free', desc: 'Asistente de código gratuito para estudiantes', url: 'https://github.com/education' },
        { name: 'v0.dev (Vercel)', desc: 'Generar interfaces y componentes con IA, plan gratuito disponible', url: 'https://v0.dev' },
      ]
    },
  ];

  return (
    <section className="py-20 bg-white" id="herramientas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-green-600 uppercase tracking-wider">100% Gratuitas</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Tu Arsenal de Herramientas IA
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Todas funcionan sin tarjeta de crédito. Solo necesitas una cuenta de Google/Gmail y acceso a internet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((category, i) => (
            <div key={i} className={`${category.color} border rounded-2xl p-6 sm:p-8`}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className={`text-xl font-bold ${category.textColor}`}>{category.category}</h3>
              </div>
              <div className="space-y-4">
                {category.items.map((tool, j) => (
                  <div key={j} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-gray-900">{tool.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{tool.desc}</p>
                      </div>
                      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-blue-600 hover:text-blue-800 whitespace-nowrap mt-1">
                        Abrir →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CurriculumSection() {
  const [activeWeek, setActiveWeek] = useState(1);

  const week1 = [
    {
      session: 1,
      title: 'Mentalidad de Emprendedor Digital e Introducción a la IA',
      duration: '2 horas',
      topics: [
        '¿Qué es la IA y por qué cambia todo? (Demo en vivo)',
        'Mentalidad: de consumidor a creador digital',
        'Creación de cuenta de Google y configuración de herramientas',
        'Primer contacto con Qwen/Gemini: tu asistente personal gratuito',
        'Ejercicio: Pide a la IA que analice un negocio de tu barrio',
      ],
      deliverable: '📝 Tu primer análisis de negocio asistido por IA',
      color: 'border-l-purple-500'
    },
    {
      session: 2,
      title: 'Creación de Marcas y Diseños con IA',
      duration: '2 horas',
      topics: [
        'Fundamentos de identidad visual: logo, colores, tipografía',
        'Crear logotipos profesionales con Microsoft Designer',
        'Generar imágenes de productos con IA (Leonardo.AI)',
        'Diseñar posts para redes sociales en Canva Free',
        'Ejercicio: Crear la identidad visual completa de un negocio local',
      ],
      deliverable: '🎨 Kit de marca completo (logo + 3 posts + banner)',
      color: 'border-l-pink-500'
    },
    {
      session: 3,
      title: 'Redacción Publicitaria y Estrategia para Negocios',
      duration: '2 horas',
      topics: [
        'Copywriting con IA: textos que venden',
        'Estrategias de contenido para redes sociales locales',
        'Crear descripciones de productos irresistibles',
        'Emails y mensajes de WhatsApp Business con IA',
        'Ejercicio: Escribir 10 textos publicitarios para un negocio real',
      ],
      deliverable: '✍️ Pack de 10 textos publicitarios listos para usar',
      color: 'border-l-blue-500'
    },
    {
      session: 4,
      title: 'Creación de Páginas Web Rápidas con IA',
      duration: '2 horas',
      topics: [
        'Qué es una landing page y por qué todo negocio necesita una',
        'Crear tu primera web con Carrd.co (sin código)',
        'Usar Kimi Build para generar sitios completos con un prompt',
        'Publicar tu página web en internet (gratis)',
        'Ejercicio: Construir la web de un negocio del barrio en 30 min',
      ],
      deliverable: '🌐 Primera página web publicada en internet',
      color: 'border-l-green-500'
    },
    {
      session: 5,
      title: 'Taller Práctico: Mi Primera Web para un Negocio Real',
      duration: '2 horas',
      topics: [
        'Elegir un negocio real de tu comunidad como "cliente"',
        'Entrevistar al dueño: ¿qué necesita? (guía incluida)',
        'Crear: logo + textos + página web completa',
        'Presentar el trabajo al dueño del negocio',
        'Definir tu precio y cobrar tu primer servicio',
      ],
      deliverable: '💰 ¡Tu primer cliente real y primer ingreso digital!',
      color: 'border-l-yellow-500'
    },
  ];

  const week2 = [
    {
      session: 6,
      title: 'Introducción a la Programación con IA',
      duration: '2 horas',
      topics: [
        'La IA como tu programador personal: describe lo que quieres',
        'Usar Replit para crear apps desde el navegador',
        'v0.dev: generar interfaces con lenguaje natural',
        'Tu primera mini-app: una calculadora de precios',
        'Ejercicio: Crear una app simple describiéndola en español',
      ],
      deliverable: '📱 Tu primera aplicación funcionando',
      color: 'border-l-purple-500'
    },
    {
      session: 7,
      title: 'Herramientas Digitales para tu Comunidad',
      duration: '2 horas',
      topics: [
        'Crear menús digitales interactivos para restaurantes',
        'Catálogos de productos con fotos generadas por IA',
        'Calculadoras de costos y presupuestos',
        'Sistemas de pedidos por WhatsApp automatizados',
        'Ejercicio: Crear un menú digital completo para una fonda local',
      ],
      deliverable: '📋 Menú/Catálogo digital profesional publicado',
      color: 'border-l-orange-500'
    },
    {
      session: 8,
      title: 'Cómo Vender tus Servicios y Definir Precios',
      duration: '2 horas',
      topics: [
        'Tabla de precios: cuánto cobrar por cada servicio',
        'Cómo acercarte a negocios de tu zona (guiones incluidos)',
        'Portafolio digital: mostrar tu trabajo en una web',
        'Gestión de clientes y cobro (transferencias, efectivo)',
        'Ejercicio: Crear tu portafolio y practicar tu pitch de venta',
      ],
      deliverable: '💼 Tu portafolio profesional y tabla de precios',
      color: 'border-l-green-500'
    },
    {
      session: 9,
      title: 'Pitch Day: Presentación de Proyectos',
      duration: '2 horas',
      topics: [
        'Cada estudiante presenta su proyecto real ante la clase',
        'Demo en vivo del sitio web/app creada',
        'Feedback constructivo de compañeros e instructores',
        'Presentación con Gamma App (creada con IA)',
        'Votación del mejor proyecto con premio especial',
      ],
      deliverable: '🏆 Presentación profesional de tu proyecto',
      color: 'border-l-red-500'
    },
    {
      session: 10,
      title: 'Modelo de Negocio, Escalabilidad y Graduación',
      duration: '2 horas',
      topics: [
        'Cómo escalar: de 1 cliente a 10 clientes al mes',
        'Crear una "micro-agencia digital" con compañeros',
        'Planes a 3, 6 y 12 meses: tu camino emprendedor',
        'Recursos gratuitos para seguir aprendiendo',
        '🎓 Ceremonia de graduación y entrega de certificados',
      ],
      deliverable: '🎓 Certificado + Plan de negocio personalizado',
      color: 'border-l-yellow-500'
    },
  ];

  const sessions = activeWeek === 1 ? week1 : week2;

  return (
    <section className="py-20 bg-gray-50" id="programa">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">Plan de Estudios</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            10 Sesiones que Cambiarán tu Vida
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Cada sesión es práctica. Al terminar cada clase, tienes algo real para mostrar y cobrar.
          </p>
        </div>

        {/* Week tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveWeek(1)}
            className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
              activeWeek === 1
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-300'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300'
            }`}
          >
            📗 Semana 1: Contenido y Web
          </button>
          <button
            onClick={() => setActiveWeek(2)}
            className={`px-6 py-3 rounded-xl font-bold text-lg transition-all ${
              activeWeek === 2
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-300'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300'
            }`}
          >
            📘 Semana 2: Apps y Negocio
          </button>
        </div>

        {/* Sessions */}
        <div className="space-y-6">
          {sessions.map((session, i) => (
            <div key={i} className={`bg-white rounded-2xl shadow-md border-l-4 ${session.color} overflow-hidden hover:shadow-lg transition-shadow`}>
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center font-black text-gray-700 text-lg">
                    {session.session}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        Sesión {session.session}: {session.title}
                      </h3>
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                        ⏰ {session.duration}
                      </span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {session.topics.map((topic, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-600">
                          <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl px-4 py-3">
                      <span className="font-bold text-green-800">Entregable: </span>
                      <span className="text-green-700">{session.deliverable}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MonetizationSection() {
  const services = [
    {
      title: 'Página Web para Negocio Local',
      price: '$20 - $40',
      time: '2-3 horas',
      tools: 'Carrd + Qwen + Canva',
      description: 'Landing page con información, horarios, ubicación y fotos del negocio',
      icon: '🌐'
    },
    {
      title: 'Menú Digital / Catálogo',
      price: '$10 - $25',
      time: '1-2 horas',
      tools: 'Canva + Qwen + Leonardo.AI',
      description: 'Menú o catálogo con fotos generadas por IA, precios y descripciones',
      icon: '📱'
    },
    {
      title: 'Pack Redes Sociales',
      price: '$15 - $30/mes',
      time: '3-4 horas/mes',
      tools: 'Canva + Qwen + Microsoft Designer',
      description: '10-15 posts mensuales con textos e imágenes para Instagram/Facebook',
      icon: '📸'
    },
    {
      title: 'Logo + Identidad Visual',
      price: '$10 - $20',
      time: '1 hora',
      tools: 'Microsoft Designer + Leonardo.AI',
      description: 'Logo profesional + paleta de colores + 3 variaciones',
      icon: '🎨'
    },
    {
      title: 'App/Calculadora Simple',
      price: '$30 - $60',
      time: '3-5 horas',
      tools: 'Replit + v0.dev + Qwen',
      description: 'Mini aplicación web personalizada (calculadora, formulario, etc.)',
      icon: '💻'
    },
    {
      title: 'Gestión Completa Digital',
      price: '$50 - $100/mes',
      time: '8-10 horas/mes',
      tools: 'Todas las herramientas',
      description: 'Web + redes sociales + menús + atención de mensajes con IA',
      icon: '🚀'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">Genera Ingresos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            ¿Cuánto Puedes Ganar?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Precios de referencia para tu comunidad. Puedes empezar a cobrar desde la Semana 1.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-indigo-200 transition-all group">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">💰 Precio:</span>
                  <span className="font-bold text-green-700 bg-green-50 px-2 py-1 rounded">{service.price}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">⏱️ Tiempo:</span>
                  <span className="font-medium text-gray-700">{service.time}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">🛠️ Herramientas:</span>
                  <span className="font-medium text-gray-700 text-right text-xs">{service.tools}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">💡 Potencial de Ingresos Mensuales</h3>
          <p className="text-lg text-white/80 mb-4">
            Con solo 4-5 clientes al mes, puedes generar entre <strong className="text-yellow-300">$100 y $300 USD mensuales</strong>
          </p>
          <p className="text-sm text-white/60">
            *Basado en precios promedio para comunidades. En zonas urbanas los precios pueden ser mayores.
          </p>
        </div>
      </div>
    </section>
  );
}

function RequirementsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">Requisitos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mt-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            ¿Qué Necesitas?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-green-200">
            <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center gap-2">
              <span className="text-2xl">✅</span> Lo que SÍ necesitas
            </h3>
            <ul className="space-y-4">
              {[
                'Una cuenta de Gmail/Google (gratuita)',
                'Smartphone o computadora con acceso a internet',
                'Navegador web (Chrome, Firefox, Edge)',
                'Ganas de aprender y emprender',
                'Compromiso con las 10 sesiones',
                'Cuaderno y lápiz para tomar notas',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md border border-red-200">
            <h3 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-2">
              <span className="text-2xl">❌</span> Lo que NO necesitas
            </h3>
            <ul className="space-y-4">
              {[
                'Tarjeta de crédito o débito',
                'Computadora de última generación',
                'Saber programar o diseñar',
                'Pagar por ningún software o herramienta',
                'Experiencia previa en tecnología',
                'Tener un negocio propio (aprenderás a ayudar a otros)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">✗</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Realmente todo es gratis? ¿No hay costos ocultos?',
      answer: 'Sí, 100% gratuito. Todas las herramientas que enseñamos tienen planes gratuitos permanentes que no requieren tarjeta de crédito. Solo necesitas una cuenta de Google/Gmail. No comprarás nada.'
    },
    {
      question: '¿Puedo tomar el curso solo con mi celular?',
      answer: '¡Sí! La mayoría de las herramientas funcionan en navegador móvil. Sin embargo, para crear páginas web y programar, una computadora (aunque sea básica) facilita mucho el trabajo. Si solo tienes celular, puedes hacer el 80% del curso sin problema.'
    },
    {
      question: '¿No sé nada de tecnología, puedo participar?',
      answer: '¡Claro que sí! El curso está diseñado desde cero. No necesitas saber programar, diseñar ni nada técnico. La IA hace el trabajo pesado, tú solo necesitas describir lo que quieres en español.'
    },
    {
      question: '¿Cuánto puedo ganar realmente?',
      answer: 'Depende de tu dedicación y zona. Un estudiante comprometido puede generar $50-$200 USD en su primer mes atendiendo 3-5 negocios locales. Con el tiempo y más clientes, puedes escalar a $300+ mensuales.'
    },
    {
      question: '¿Recibiré un certificado?',
      answer: 'Sí, al completar las 10 sesiones recibirás un certificado digital de "Emprendedor Digital con IA" que podrás compartir en redes sociales y mostrar a posibles clientes.'
    },
    {
      question: '¿Qué pasa si me pierdo una sesión?',
      answer: 'Todas las sesiones quedan grabadas y compartidas en un grupo de WhatsApp/Telegram. Además, cada clase tiene una guía paso a paso que puedes seguir a tu ritmo.'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">Preguntas Frecuentes</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            ¿Tienes Dudas?
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className={`text-xl transition-transform flex-shrink-0 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 relative overflow-hidden" id="inscripcion">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Tu Futuro Digital Empieza Hoy
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          No esperes a tener la computadora perfecta o el momento ideal. 
          Empieza con lo que tienes, donde estás. La IA democratiza las oportunidades.
        </p>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-lg mx-auto mb-10">
          <h3 className="text-xl font-bold text-white mb-4">📋 Próximo Curso</h3>
          <div className="space-y-3 text-white/80">
            <p><strong className="text-white">Duración:</strong> 2 semanas (10 sesiones)</p>
            <p><strong className="text-white">Horario:</strong> 2 horas diarias, Lunes a Viernes</p>
            <p><strong className="text-white">Modalidad:</strong> Presencial / Híbrida / Virtual</p>
            <p><strong className="text-white">Costo:</strong> <span className="text-green-400 font-bold">GRATIS</span></p>
            <p><strong className="text-white">Requisito:</strong> Solo una cuenta de Gmail</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold rounded-xl text-lg hover:scale-105 transition-transform shadow-lg">
            💬 Inscribirme por WhatsApp
          </a>
          <a href="mailto:contacto@iaparatodos.org" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl text-lg hover:bg-white/20 transition-all">
            ✉️ Contactar por Email
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              🚀 IA Para Todos
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Programa de formación en emprendimiento digital con Inteligencia Artificial para jóvenes de zonas vulnerables. 
              100% gratuito, 100% práctico, 100% transformador.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#programa" className="hover:text-white transition-colors">📋 Programa del Curso</a></li>
              <li><a href="#herramientas" className="hover:text-white transition-colors">🛠️ Herramientas Gratuitas</a></li>
              <li><a href="#inscripcion" className="hover:text-white transition-colors">🚀 Inscripción</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Herramientas del Curso</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>✍️ Qwen / Google Gemini / ChatGPT</li>
              <li>🎨 Microsoft Designer / Canva / Leonardo.AI</li>
              <li>🌐 Carrd / Kimi Build / Gamma App</li>
              <li>💻 Replit / v0.dev / GitHub</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>Hecho con ❤️ para la comunidad • Todas las herramientas son 100% gratuitas</p>
          <p className="mt-2">© 2025 IA Para Todos - Programa de Emprendimiento Digital Juvenil</p>
        </div>
      </div>
    </footer>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            🚀 IA Para Todos
          </a>
          
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#programa" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Programa</a>
            <a href="#herramientas" className="text-white/70 hover:text-white text-sm font-medium transition-colors">Herramientas</a>
            <a href="#inscripcion" className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-lg text-sm hover:scale-105 transition-transform">
              Inscríbete
            </a>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-3">
              <a href="#programa" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white text-sm font-medium transition-colors py-2">Programa</a>
              <a href="#herramientas" onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white text-sm font-medium transition-colors py-2">Herramientas</a>
              <a href="#inscripcion" onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-lg text-sm text-center">
                Inscríbete Gratis
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: 'María, 17 años',
      role: 'Estudiante',
      text: 'En la primera semana le hice la página web a la tienda de doña Rosa. Me pagó $25 y ahora me pide que le haga los posts para Facebook cada mes.',
      avatar: '👩‍🦱'
    },
    {
      name: 'Carlos, 19 años',
      role: 'Estudiante',
      text: 'No sabía nada de computación. Ahora hago menús digitales para las fondas de mi barrio. Ya tengo 3 clientes fijos que me pagan cada mes.',
      avatar: '👨'
    },
    {
      name: 'Ana, 16 años',
      role: 'Estudiante',
      text: 'Lo mejor es que todo es gratis. Solo uso mi celular y la IA hace el trabajo difícil. Ya llevo $80 ganados en dos semanas.',
      avatar: '👩'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Historias Reales</span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Voces de Nuestros Estudiantes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center text-2xl">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <HeroSection />
      <MissionSection />
      <ToolsSection />
      <CurriculumSection />
      <MonetizationSection />
      <TestimonialsSection />
      <RequirementsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
