import type { Locale } from "./routes";

export const ui = {
  es: {
    meta: {
      defaultTitle: "Volta",
      defaultDescription: "",
    },
    header: {
      nav: {
        home: "Inicio",
        about: "Quiénes somos",
        projects: "Proyectos",
        investors: "Inversionistas",
        contact: "Contacto",
      },
      logoAlt: "Volta Capital",
      switchLabel: "Cambiar idioma a inglés",
      switchText: "EN",
    },
    footer: {
      tagline:
        "Impulsando el futuro energético de México con soluciones integrales y sostenibles.",
      companiesTitle: "Nuestras Empresas",
      navigationTitle: "Navegación",
      contactTitle: "Contacto",
      rights: "© VOLTA CAPITAL. Todos los derechos reservados.",
    },
    home: {
      hero: {
        title: "Soluciones energéticas integrales y de alto impacto",
        subtitle: "Impulsando el futuro energético de México",
        imageAlt: "Paneles solares en campo",
      },
      highlight: {
        imageAlt: "Instalación de paneles solares",
        items: [
          "Tres generaciones de experiencia en el sector energético.",
          "Líderes en financiamiento y generación de energías limpias en México.",
          "Soluciones integrales 360°: desde el diseño hasta la operación de proyectos, con excelencia operativa, visión sostenible y retornos confiables para nuestros socios.",
        ],
      },
      approach: {
        titleLines: ["Nuestro enfoque", "combina"],
        imageAlt: "Equipo de trabajo en planta solar",
        cards: [
          {
            title: "Análisis",
            description: "Análisis estratégico y gestión inteligente de riesgos.",
            alt: "Análisis",
          },
          {
            title: "Compromiso",
            description: "Compromiso con la cadena de valor.",
            alt: "Compromiso",
          },
          {
            title: "Inversión",
            description: "Inversiones en energías renovables.",
            alt: "Inversión",
          },
        ],
      },
      companies: {
        title: "Nuestras empresas, una sola visión",
        closeLabel: "Cerrar",
        websiteLabel: "Ir a su sitio web",
        bulletSymbol: "•",
        logoPrefix: "Logo",
        items: [
          {
            id: "sujio",
            description: "Energía a la medida de grandes consumidores",
            modalTitle: "SUJÍO",
            modalDescription: [
              "Suministro eléctrico a grandes consumidores y representación de centrales de generación exenta (<0.5 MW).",
            ],
            modalBullets: [
              "Precios competitivos",
              "Atención al cliente personalizada",
              "Flexibilidad contractual",
              "Asesoría especializada y transparencia",
            ],
          },
          {
            id: "sujio-generacion",
            description: "Representación de generadores",
            modalTitle: "SUJÍO GENERACIÓN",
            modalDescription: [
              "Representación y operación de centrales eléctricas en el MEM.",
            ],
            modalBullets: [
              "Asesoría especializada en la migración a LESE de Centrales Eléctricas",
              "Mejora en eficiencia Operativa",
              "Oportunidad de contratos a largo plazo",
              "Atención Especializada al Cliente",
            ],
          },
          {
            id: "industria",
            description: "Infraestructura eléctrica que conecta al país",
            modalTitle: "HHGM",
            modalDescription: [
              "Especialistas en construcción de infraestructura eléctrica y suministro de materiales a nivel nacional.",
              "Cumplimos con las regulaciones del MEM.",
            ],
          },
          {
            id: "regulus",
            description: "Comercialización con experiencia y visión",
            modalTitle: "REGULUS ENERGÍA",
            modalDescription: [
              "Comercializador con tres generaciones de experiencia en el Mercado Eléctrico Mayorista (MEM).",
            ],
            modalBullets: [
              "Comercialización de energía y potencia",
              "Importación y exportación de energía",
              "Certificados de Energía Limpia",
            ],
          },
        ],
      },
      differentiators: {
        title: "Lo que nos hace diferentes",
        imageAlt: "Infraestructura solar",
        paragraphs: [
          "En VOLTA integramos más de 80 años de experiencia en el sector energético con una estructura sólida que cubre toda la cadena de valor: desde la construcción de infraestructura hasta la comercialización y suministro de energía.",
          "Nuestra plataforma de inversión está diseñada para crecer junto a nuestros socios, garantizando retornos financieros atractivos y un estricto cumplimiento normativo en cada etapa.",
        ],
        cards: [
          {
            text: "Integración vertical gracias a la sinergia de nuestras empresas.",
            alt: "Integración",
          },
          { text: "Cumplimiento con la normatividad vigente.", alt: "Cumplimiento" },
          {
            text: "Soluciones energéticas hechas a la medida de cada socio.",
            alt: "Soluciones",
          },
          { text: "Sistema efectivo de gestión de proyectos.", alt: "Gestión" },
          { text: "Desarrollo de proyectos en zonas de interés.", alt: "Desarrollo" },
          {
            text: "Operación creativa mediante desarrollo de sistemas Machine Learning.",
            alt: "Operación",
          },
        ],
      },
      stats: {
        title: "Nuestra huella en números",
        items: [
          {
            value: "176 +",
            text: "180 GWh de generación y suministro registrados en todo México",
          },
          {
            icon: "factory",
            alt: "Operación",
            text: "Operación en centrales de generación distribuida en el MEM",
          },
          { value: "+70 mil", text: "Toneladas de CO₂." },
          {
            icon: "buildings",
            alt: "Presencia",
            text: "Presencia en CDMX, Bajío y Houston",
          },
        ],
      },
      certifications: {
        title: "Certificaciones que nos respaldan",
        prevLabel: "Anterior",
        nextLabel: "Siguiente",
        indicatorLabel: "Ir a la posición",
        logoAlt: "Certificación",
      },
      contact: {
        title: "Hablemos de energía renovable",
        description:
          "Queremos ser tu socio estratégico en proyectos de inversión y energía. Escríbenos y demos el siguiente paso juntos.",
      },
    },
    projects: {
      metaTitle: "Proyectos | Volta",
      title: "Proyectos que impulsan la transformación energética",
      description:
        "Conoce nuestras soluciones renovables a lo largo de la República Mexicana, con presencia principal en el noreste, Bajío, sureste y penínsulas.",
      items: [
        "Gestión de proyectos llave en mano",
        "Desarrollo y venta de proyectos en etapa <b>RTB y RTF</b>",
        "Desarrollo de proyectos a la medida <b>(DSA)</b>",
        "Sistemas fotovoltaicos de generación en sitio",
        "Sistemas de almacenamiento de energía",
        "Instalación de generadores de respaldo",
        "Proyectos de inversión en generación distribuida",
        "Proyectos de generación de venta total",
        "Soluciones y estrategias de descarbonización para sitios y cadenas de suministro",
      ],
    },
    about: {
      metaTitle: "Quiénes somos | Volta",
      hero: {
        title:
          "VOLTA: Impulsando la industria energética con soluciones responsables",
        description:
          "Somos una empresa dedicada al desarrollo de infraestructura eléctrica de alto impacto; con ello, buscamos potenciar los recursos de las empresas en el sector energético y desarrollar proyectos con energías renovables.",
        imageAlt: "Paneles solares en infraestructura energética",
      },
      strengths: [
        "Facilitamos el desarrollo de <b>proyectos de gran escala</b> que impulsen el crecimiento nacional y regional.",
        "Presencia <b>internacional</b> y una sólida operación en <b>México.</b>",
        "Promovemos prácticas que favorecen la <b>eficiencia energética.</b>",
        "Evaluamos el uso de <b>energías limpias</b> para brindar soluciones eficientes, <b>confiables y sostenibles.</b>",
        "Equipo con <b>+80 años de experiencia</b>",
      ],
      strategyLines: [
        "Nuestras estrategias promueven la <b>reducción de emisiones</b>, alineando nuestras acciones",
        "con los objetivos globales de <b>descarbonización</b>. De esta manera, contribuimos al desarrollo de infraestructura que respalda una <b>transición energética, realista y responsable.</b>",
      ],
      companiesHeading: "Quiénes conforman Grupo VOLTA",
      companiesDescription:
        "Regulus, Sujio, Sujio Generación y HHGM son marcas de VOLTA que brindan distintas soluciones en la industria energética.",
      companies: [
        {
          name: "Regulus Energia",
          description: "Comercializadora de energía limpia y potencia.",
          highlight: "¿Por qué Regulus?",
          bullets: [
            "Soluciones integrales para las necesidades del cliente.",
            "Transforma datos en análisis concretos.",
            "Asegurando rentabilidad.",
            "Brinda información estratégica que apoya la toma de decisiones.",
          ],
        },
        {
          name: "Sujio",
          description:
            "Ofrece servicios de suministro eléctrico a los grandes consumidores.",
          highlight: "¿Por qué Sujio?",
          bullets: [
            "Costos de energía más bajos para sus necesidades del cliente.",
            "Suministro eléctrico con garantía de generación limpia acreditada.",
            "Acompañamiento de la normatividad vigente en instalaciones eléctricas.",
          ],
        },
        {
          name: "Sujio Generación",
          description:
            "Construcción de infraestructura eléctrica y suministro de materiales.",
          highlight: "¿Por qué Sujio Generación?",
          bullets: [
            "Pioneros en servicios para el Mercado Eléctrico Mayorista y expertos en infraestructura eléctrica de punto a punto.",
            "Venta de servicios de ahorro de energía por medio de sustentos de generación de energía, eficiencia energética y reducción de pérdidas.",
            "Alianzas estratégicas con fabricantes de equipo eléctrico.",
          ],
        },
        {
          name: "HHGM",
          description:
            "Construcción de infraestructura eléctrica y suministro de materiales.",
          highlight: "¿Por qué HHGM?",
          bullets: [
            "Monitoreo en servicios para mercados eléctricos mayorista y centros de infraestructura eléctrica de punta.",
            "Venta de servicios de ahorro de energía por medio de soluciones de generación de energía eficiente, confiable y sostenible.",
            "Alianzas estratégicas con fabricantes de equipos eléctricos de México.",
          ],
        },
      ],
      clientsTitle: "Quiénes son nuestros clientes",
      clientSegments: [
        { title: "Manufacturas", description: "y empresas de transformación" },
        { title: "Sector Automotriz", description: "(proveedores Tier 1 y Tier 2)" },
        { title: "Industria alimentaria", description: "y agropecuaria" },
        { title: "Parques industriales", description: "y polos de desarrollo" },
        {
          title: "Proveedores de espacios logísticos",
          description: "de almacenamiento, incluidos centros de datos.",
        },
      ],
      eventsTitle: "Nuestra presencia en eventos nacionales e internacionales",
      eventImageAlt: "Equipo VOLTA en evento",
      eventPrevLabel: "Imagen anterior",
      eventNextLabel: "Imagen siguiente",
      events: [
        "México Infrastructure Project Forum, Monterrey, México",
        "10° Encuentro Latinoamericano de Energía, Cali, Colombia",
        "14° Congreso Conjunto de Asociaciones de Energía, CDMX",
        "Foro del Senado de la República",
        "C. R. Valenzuela",
      ],
      cta: {
        title: "Contáctanos para conocer cómo potenciar tus recursos energéticos",
        button: "Contáctanos",
      },
    },
    investors: {
      metaTitle: "Inversionistas | Volta",
      metaDescription: "Página de inversionistas",
      firstSection: {
        title: "Sé parte del futuro energético de México",
        columns: [
          {
            heading: "Clientes B2B",
            items: [
              "Empresas medianas y grandes que demandan un consumo eléctrico alto y buscan contratos a largo plazo con costos predecibles.",
              "Industrias manufactureras: automotriz, acero, alimentos, químicos.",
              "Centros comerciales, cadenas de retail, hospitales, universidades.",
              "Empresas de tecnología y centros de datos.",
            ],
          },
          {
            heading: "Socios Inversionistas",
            items: [
              "Fondos de inversión, family offices y private equity con interés en infraestructura energética y renovables.",
              "Bancos y fintechs especializados en financiamiento de proyectos.",
              "Inversionistas extranjeros que buscan entrar al mercado eléctrico mexicano con vehículos estructurados y bajo riesgo.",
            ],
          },
        ],
      },
      secondSection: {
        title: "¿Por qué asociarte con VOLTA?",
        columns: [
          {
            heading: "Clientes B2B",
            items: [
              "Consumo energético >500 kW.",
              "Certificados de energía limpia (CELs).",
              "Reducción de costos operativos y protección contra volatilidad del mercado eléctrico.",
              "Mejorar su huella de carbono y sus reportes ESG.",
            ],
          },
          {
            heading: "Socios Inversionistas",
            items: [
              "Buscan retornos superiores al promedio del mercado, ajustados por riesgo.",
              "Horizonte de inversión a mediano-largo plazo.",
              "Interés en proyectos con contratos PPA o modelos de venta asegurada.",
            ],
          },
        ],
      },
      cta: {
        title:
          "Escríbenos y comienza a aplicar soluciones que generen resultados confiables.",
        button: "Contáctanos",
      },
    },
    contact: {
      metaTitle: "Contacto | Volta Capital",
      title: "El futuro energético de tus <br class=\"hidden sm:block\" /> proyectos está en tus manos",
      description:
        "Contáctanos para conocer más detalles sobre nuestras soluciones energéticas.",
      imageAlt: "Paneles solares",
    },
    cta: {
      defaultTitle: "Contáctanos para conocer la solución ideal para tus necesidades.",
      defaultButton: "Contáctanos",
    },
  },
  en: {
    meta: {
      defaultTitle: "Volta",
      defaultDescription: "",
    },
    header: {
      nav: {
        home: "Home",
        about: "About us",
        projects: "Projects",
        investors: "Investors",
        contact: "Contact",
      },
      logoAlt: "Volta Capital",
      switchLabel: "Switch language to Spanish",
      switchText: "ES",
    },
    footer: {
      tagline:
        "Powering Mexico's energy future with comprehensive, sustainable solutions.",
      companiesTitle: "Our Companies",
      navigationTitle: "Navigation",
      contactTitle: "Contact",
      rights: "© VOLTA CAPITAL. All rights reserved.",
    },
    home: {
      hero: {
        title: "Comprehensive, high-impact energy solutions",
        subtitle: "Powering Mexico's energy future",
        imageAlt: "Solar panels in a field",
      },
      highlight: {
        imageAlt: "Solar panel installation",
        items: [
          "Three generations of experience in the energy sector.",
          "Leaders in financing and clean energy generation in Mexico.",
          "360° comprehensive solutions: from design to project operation, with operational excellence, sustainable vision, and reliable returns for our partners.",
        ],
      },
      approach: {
        titleLines: ["Our approach", "combines"],
        imageAlt: "Team working at a solar plant",
        cards: [
          {
            title: "Analysis",
            description: "Strategic analysis and intelligent risk management.",
            alt: "Analysis",
          },
          {
            title: "Commitment",
            description: "Commitment to the value chain.",
            alt: "Commitment",
          },
          {
            title: "Investment",
            description: "Investments in renewable energy.",
            alt: "Investment",
          },
        ],
      },
      companies: {
        title: "Our companies, one shared vision",
        closeLabel: "Close",
        websiteLabel: "Visit website",
        bulletSymbol: "•",
        logoPrefix: "Logo",
        items: [
          {
            id: "sujio",
            description: "Energy tailored for large consumers",
            modalTitle: "SUJÍO",
            modalDescription: [
              "Electricity supply for large consumers and representation of exempt generation plants (<0.5 MW).",
            ],
            modalBullets: [
              "Competitive prices",
              "Personalized customer service",
              "Contractual flexibility",
              "Specialized guidance and transparency",
            ],
          },
          {
            id: "sujio-generacion",
            description: "Generator representation",
            modalTitle: "SUJÍO GENERACIÓN",
            modalDescription: [
              "Representation and operation of power plants in the Wholesale Electricity Market.",
            ],
            modalBullets: [
              "Specialized guidance for migrating power plants to LESE",
              "Improved operational efficiency",
              "Long-term contract opportunities",
              "Specialized customer support",
            ],
          },
          {
            id: "industria",
            description: "Electrical infrastructure that connects the country",
            modalTitle: "HHGM",
            modalDescription: [
              "Specialists in electrical infrastructure construction and material supply nationwide.",
              "We comply with Wholesale Electricity Market regulations.",
            ],
          },
          {
            id: "regulus",
            description: "Commercialization with experience and vision",
            modalTitle: "REGULUS ENERGÍA",
            modalDescription: [
              "Energy marketer with three generations of experience in the Wholesale Electricity Market.",
            ],
            modalBullets: [
              "Energy and capacity commercialization",
              "Energy import and export",
              "Clean Energy Certificates",
            ],
          },
        ],
      },
      differentiators: {
        title: "What makes us different",
        imageAlt: "Solar infrastructure",
        paragraphs: [
          "At VOLTA, we bring together more than 80 years of experience in the energy sector with a solid structure that covers the entire value chain: from infrastructure construction to energy commercialization and supply.",
          "Our investment platform is designed to grow alongside our partners, ensuring attractive financial returns and strict regulatory compliance at every stage.",
        ],
        cards: [
          {
            text: "Vertical integration through the synergy of our companies.",
            alt: "Integration",
          },
          { text: "Compliance with current regulations.", alt: "Compliance" },
          {
            text: "Energy solutions tailored to each partner.",
            alt: "Solutions",
          },
          { text: "Effective project management system.", alt: "Management" },
          { text: "Project development in strategic areas.", alt: "Development" },
          {
            text: "Creative operations through Machine Learning system development.",
            alt: "Operations",
          },
        ],
      },
      stats: {
        title: "Our footprint in numbers",
        items: [
          {
            value: "176 +",
            text: "180 GWh of generation and supply registered across Mexico",
          },
          {
            icon: "factory",
            alt: "Operations",
            text: "Operations in distributed generation plants in the Wholesale Electricity Market",
          },
          { value: "+70K", text: "Tons of CO₂." },
          {
            icon: "buildings",
            alt: "Presence",
            text: "Presence in Mexico City, Bajío, and Houston",
          },
        ],
      },
      certifications: {
        title: "Certifications that support us",
        prevLabel: "Previous",
        nextLabel: "Next",
        indicatorLabel: "Go to position",
        logoAlt: "Certification",
      },
      contact: {
        title: "Let's talk about renewable energy",
        description:
          "We want to be your strategic partner in investment and energy projects. Write to us and let's take the next step together.",
      },
    },
    projects: {
      metaTitle: "Projects | Volta",
      title: "Projects driving the energy transformation",
      description:
        "Discover our renewable solutions throughout Mexico, with a primary presence in the northeast, Bajío, southeast, and peninsulas.",
      items: [
        "Turnkey project management",
        "Development and sale of projects at <b>RTB and RTF</b> stages",
        "Custom project development <b>(DSA)</b>",
        "On-site photovoltaic generation systems",
        "Energy storage systems",
        "Backup generator installation",
        "Distributed generation investment projects",
        "Total-sale generation projects",
        "Decarbonization solutions and strategies for sites and supply chains",
      ],
    },
    about: {
      metaTitle: "About us | Volta",
      hero: {
        title:
          "VOLTA: Driving the energy industry with responsible solutions",
        description:
          "We are a company dedicated to developing high-impact electrical infrastructure; through this, we seek to strengthen companies' resources in the energy sector and develop projects with renewable energy.",
        imageAlt: "Solar panels in energy infrastructure",
      },
      strengths: [
        "We facilitate the development of <b>large-scale projects</b> that drive national and regional growth.",
        "<b>International</b> presence and solid operations in <b>Mexico.</b>",
        "We promote practices that support <b>energy efficiency.</b>",
        "We evaluate the use of <b>clean energy</b> to provide efficient, <b>reliable, and sustainable solutions.</b>",
        "Team with <b>+80 years of experience</b>",
      ],
      strategyLines: [
        "Our strategies promote <b>emissions reduction</b>, aligning our actions",
        "with global <b>decarbonization</b> goals. In this way, we contribute to infrastructure development that supports a <b>realistic and responsible energy transition.</b>",
      ],
      companiesHeading: "Who makes up Grupo VOLTA",
      companiesDescription:
        "Regulus, Sujio, Sujio Generación, and HHGM are VOLTA brands that provide different solutions in the energy industry.",
      companies: [
        {
          name: "Regulus Energia",
          description: "Clean energy and capacity marketer.",
          highlight: "Why Regulus?",
          bullets: [
            "Comprehensive solutions for customer needs.",
            "Turns data into concrete analysis.",
            "Ensures profitability.",
            "Provides strategic information that supports decision-making.",
          ],
        },
        {
          name: "Sujio",
          description:
            "Provides electricity supply services to large consumers.",
          highlight: "Why Sujio?",
          bullets: [
            "Lower energy costs for customer needs.",
            "Electricity supply backed by accredited clean generation.",
            "Support with current regulations for electrical installations.",
          ],
        },
        {
          name: "Sujio Generación",
          description:
            "Electrical infrastructure construction and material supply.",
          highlight: "Why Sujio Generación?",
          bullets: [
            "Pioneers in services for the Wholesale Electricity Market and experts in point-to-point electrical infrastructure.",
            "Energy-saving services through generation support, energy efficiency, and loss reduction.",
            "Strategic alliances with electrical equipment manufacturers.",
          ],
        },
        {
          name: "HHGM",
          description:
            "Electrical infrastructure construction and material supply.",
          highlight: "Why HHGM?",
          bullets: [
            "Monitoring services for wholesale electricity markets and advanced electrical infrastructure centers.",
            "Energy-saving services through efficient, reliable, and sustainable generation solutions.",
            "Strategic alliances with electrical equipment manufacturers in Mexico.",
          ],
        },
      ],
      clientsTitle: "Who our clients are",
      clientSegments: [
        { title: "Manufacturers", description: "and transformation companies" },
        { title: "Automotive sector", description: "(Tier 1 and Tier 2 suppliers)" },
        { title: "Food industry", description: "and agribusiness" },
        { title: "Industrial parks", description: "and development hubs" },
        {
          title: "Logistics space providers",
          description: "for storage, including data centers.",
        },
      ],
      eventsTitle: "Our presence at national and international events",
      eventImageAlt: "VOLTA team at event",
      eventPrevLabel: "Previous image",
      eventNextLabel: "Next image",
      events: [
        "Mexico Infrastructure Project Forum, Monterrey, Mexico",
        "10th Latin American Energy Meeting, Cali, Colombia",
        "14th Joint Congress of Energy Associations, Mexico City",
        "Forum of the Senate of the Republic",
        "C. R. Valenzuela",
      ],
      cta: {
        title: "Contact us to learn how to strengthen your energy resources",
        button: "Contact us",
      },
    },
    investors: {
      metaTitle: "Investors | Volta",
      metaDescription: "Investors page",
      firstSection: {
        title: "Be part of Mexico's energy future",
        columns: [
          {
            heading: "B2B Clients",
            items: [
              "Medium and large companies with high electricity consumption seeking long-term contracts with predictable costs.",
              "Manufacturing industries: automotive, steel, food, chemicals.",
              "Shopping centers, retail chains, hospitals, universities.",
              "Technology companies and data centers.",
            ],
          },
          {
            heading: "Investment Partners",
            items: [
              "Investment funds, family offices, and private equity groups interested in energy and renewable infrastructure.",
              "Banks and fintechs specialized in project financing.",
              "Foreign investors seeking to enter the Mexican electricity market with structured, low-risk vehicles.",
            ],
          },
        ],
      },
      secondSection: {
        title: "Why partner with VOLTA?",
        columns: [
          {
            heading: "B2B Clients",
            items: [
              "Energy consumption >500 kW.",
              "Clean Energy Certificates (CELs).",
              "Reduced operating costs and protection against electricity market volatility.",
              "Improve carbon footprint and ESG reporting.",
            ],
          },
          {
            heading: "Investment Partners",
            items: [
              "Seek above-average market returns, adjusted for risk.",
              "Medium- to long-term investment horizon.",
              "Interest in projects with PPA contracts or secured-sale models.",
            ],
          },
        ],
      },
      cta: {
        title:
          "Write to us and start applying solutions that generate reliable results.",
        button: "Contact us",
      },
    },
    contact: {
      metaTitle: "Contact | Volta Capital",
      title: "The energy future of your <br class=\"hidden sm:block\" /> projects is in your hands",
      description:
        "Contact us to learn more about our energy solutions.",
      imageAlt: "Solar panels",
    },
    cta: {
      defaultTitle: "Contact us to learn about the ideal solution for your needs.",
      defaultButton: "Contact us",
    },
  },
} as const satisfies Record<Locale, Record<string, unknown>>;

export type UiDictionary = (typeof ui)[Locale];
