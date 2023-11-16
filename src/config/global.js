export default {
  global: {
    componenteFormativo: 'Campaña de mercadeo',
    descripcionCurso:
      'El <i>marketing</i> digital se ha venido presentando en los últimos años como una herramienta fundamental en el mundo de las empresas que es utilizada para lanzar o relanzar un producto o servicio al mercado, teniendo en cuenta el momento más oportuno e implementando estrategias y recursos que contribuyan a la fidelización del cliente con lo que la compañía ofrece.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades de las campañas digitales de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de campañas digitales de mercadeo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Embudo de ventas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Segmentos de audiencias',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Métricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Generalidades de las métricas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis de la conversión',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Herramientas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Analítica <i>Social Media</i>',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '<i>Neuromarketing</i> en el turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Ventajas',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tecnología y consumidor',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Creación de contenido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Metodologías',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de contenido',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Cronograma de publicaciones por canal.',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Motores de búsqueda y posicionamiento web',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Search Engine Optimization',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Search Engine Marketing',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Recursos, costos y presupuesto de los canales digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Generalidades de los canales digitales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Características',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Clasificación',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Generalidades de las métricas',
      referencia:
        'Emprendedores DSC. (2022). <i>Mapa estratégico y sus cuatro perspectivas. Episodio 39 mapa estratégico para emprendedores.</i> [Pódcast]. Google Podcast.',
      tipo: 'Podcast',
      link:
        'https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuaXZvb3guY29tL3BvZGNhc3QtZW1wcmVuZGVkb3Jlcy1kc2NfZmdfZjExMjE0MzY0X2ZpbHRyb18xLnhtbA/episode/aHR0cHM6Ly93d3cuaXZvb3guY29tLzgwMzQyOTY4?sa=X&ved=0CAgQuIEEahcKEwiw7snmuOT3AhUAAAAAHQAAAAAQQA',
    },
    {
      tema: 'Cuadro de Mando del Marketing (CMMK)',
      referencia:
        'Ealde Business School (2018). Cómo elaborar un Cuadro de Mando en Marketing Digital [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/TsyyHiOalD0',
    },
    {
      tema: 'Cuadro de Mando del Marketing (CMMK)',
      referencia:
        'Cyberclick • Marketing Digital. (2020). <i>Métricas marketing digital: las más importantes explicadas.</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/R4ZMiTnBZuM',
    },
    {
      tema: 'Cuadro de Mando del Marketing (CMMK)',
      referencia:
        'El arte de ser empresario. (2018). <i>Indicadores de gestión ejemplos prácticos.</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/zffkymCxWfA',
    },
    {
      tema: 'Tecnología y consumidor',
      referencia:
        'Adobe Photoshop. (2021). <i>The world is your canvas. Adobe Photoshop.</i> [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/RGSN4S5jn4o',
    },
    {
      tema: 'Search Engine Marketing',
      referencia:
        'Club de la excelencia del servicio al cliente. (2017). <i>Increíble marketing sensorial - Pepsi.</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/RUnFnBhRzGc',
    },
    {
      tema: '<i>Neuromarketing</i>  en el turismo',
      referencia:
        'Heineken. (2020). <i>Ejemplo campaña neuromarketing.</i>  [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/iN3pKkuYqtM',
    },
    {
      tema: 'Cuadro de Mando del Marketing (CMMK)',
      referencia:
        'Juan Merodio. (2018). <i>Video: 25 Herramientas esenciales para trabajar el marketing digital.</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=y6BtdA_LDGA',
    },
    {
      tema: 'Motores de búsqueda y posicionamiento web',
      referencia:
        'Coffee Power. (2021). <i>Optimización en motores de búsqueda - SEO (Explicado) con Danny Sierra | Episodio #58</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cpNbfZhNSOw',
    },
    {
      tema: 'Cuadro de Mando del Marketing (CMMK)',
      referencia:
        'Elabs Consulting - Agencia de Marketing Digital (2021). <i>Cómo hacer un presupuesto de marketing digital - Ejemplos Reales.</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/QTQng2_wghc',
    },
    {
      tema: 'Tipos de conversiones',
      referencia:
        'InboundCycle - Marketing y ventas inbound. (2022). <i>Medios propios, pagados y ganados: ¿qué son y cómo podemos capitalizarlos?</i>  [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/c/InboundCycle',
    },
  ],
  glosario: [
    {
      termino: 'Analítica web',
      significado:
        'práctica relacionada con el análisis de sitios web para obtener toda la información relevante. En el mundo del <i>marketing</i> digital se utiliza para saber cómo se comportan los usuarios y ayudarles a tomar estrategias y decisiones en base a la información que reciben.',
    },
    {
      termino: 'B2B',
      significado:
        'concepto de <i>marketing</i> derivado del término entre empresas. Este es el nombre que se le da a una empresa que dirige sus servicios y productos a otras empresas, a diferencia del B2C y el negocio a consumidores donde la empresa trabaja directamente con el consumidor final.',
    },
    {
      termino: '<i>Buyer persona</i>',
      significado:
        'personaje ficticio que se crea con las características del público objetivo. Un prototipo de cliente ideal con rasgos tanto físicos como de personalidad.',
    },
    {
      termino: '<i>Lead</i>',
      significado:
        'oportunidades de negocio, es decir, los contactos que, por medio de una estrategia de <i>inbound marketing</i>, dejan su información clave para lograr identificar a los clientes potenciales y nutrirlos con contenidos relevantes hasta que estén listos para comprar.',
    },
    {
      termino: 'Embudo de ventas ',
      significado:
        'etapas por las que un usuario pasa antes de convertirse en cliente de una empresa, desde la comprensión de un problema hasta la consideración de compra y la decisión final.',
    },
    {
      termino: 'Conversión',
      significado:
        'término usado para representar el proceso de atraer usuarios a tu base de contactos y hacerlos llegar hasta el fondo del embudo de ventas.',
    },
    {
      termino: 'Marketing Qualified Leads (MLQ)',
      significado:
        'nombre utilizado para los leads que se encuentran en un proceso avanzado de calificación por parte del equipo de <i>marketing.</i>',
    },
  ],
  referencias: [
    {
      referencia:
        'Espacio digital. (2020). <i>¿Qué es un embudo de Marketing Digital y cómo elaborarlo exitosamente?</i>',
      link:
        'https://www.espaciodigital.com.co/blog/embudo-marketing-digital-como-elaborarlo-exitosamente/#Que_es_un_embudo_de_ventas',
    },
    {
      referencia:
        'García, A. (2020). ¿Cómo crear contenido para cada red social? Innovando digital. ',
      link:
        'https://innovandodigital.com/creacion-de-contenido/como-crear-contenido-para-cada-red-social/',
    },
    {
      referencia:
        'ISOTools. (2015). Las perspectivas del cuadro de mando integral. ISOTools.',
      link:
        'https://www.isotools.org/2015/08/08/las-perspectivas-del-cuadro-de-mando-integral/#:~:text=Las%20perspectivas%20del%20Cuadro%20de%20Mando%20Integral%20ayudan%20a%20organizar,determinado%20%C3%A1mbito%20de%20la%20organizaci%C3%B3n',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Comercio y Servicios',
        },
        {
          nombre: 'Gloria Alexandra Orejarena Barrios',
          cargo: 'Diseño instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesoría metodológica y pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo de desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría metodológica y pedagógica',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmín Rocío Figueroa Pacheco',
          cargo: 'Diseño web e ilustración',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Manuel Felipe Echavarría Orozco',
          cargo: 'Desarrollado Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        //{
        //nombre: 'Nombre',
        //cargo: 'Animador y Producción audiovisual',
        //centro:
        //'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
