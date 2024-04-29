export default {
  global: {
    componenteFormativo:
      'El modisto, la moda y el cliente                                              ',
    descripcionCurso:
      'Las características de las prendas tienen coherencia con las necesidades del consumidor porque implican una integración de conceptos en los que el color, consumidor o cliente, tendencias, universos, ocasiones, textiles, entre otros, tienen gran incidencia. Esto lleva a que la apropiación de conceptos y metodologías esquematicen fundamentos dentro del sector de la moda.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/decorativos/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/decorativos/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/decorativos/banner-principal-decorativo-3.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la moda',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sistema moda',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Gamas de mercado en el sistema moda',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Factores que influyen en la moda',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Universos de vestuario',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Clasificación de universos de vestuario',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tendencias',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tipologías de prendas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Los textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fibras textiles',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Clasificación de las fibras',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Hilos e hilatura',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Tejidos',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Esquemas de color',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'sintesis',
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
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
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila García Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Ledy Johana Velásquez Hernández',
        cargo: 'Experta temática',
        centro: 'Diseño, Confección y Moda',
        regional: 'Regional Antioquia',
      },
      {
        nombre: 'Paola Angélica Castro Salazar',
        cargo: 'Experta temática',
        centro: 'Diseño, Confección y Moda',
        regional: 'Regional Antioquia',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: [
          'Wilson Andrés Arenales Caceres',
          'Gilberto Junior Rodriguez Rodriguez',
          'Maria Carolina Tamayo',
          'Lina Perez',
          'Adriana Suarez',
          'Adriana Ariza',
          'Maria Camila Ovalle',
        ],
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortes García',
        cargo: 'Desarrollo front-end',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Dearing, J. W. (2009). Applying Diffusion of Innovation Theory to Intervention Development. Research on Social Work Practice, 19(5), 503-518. ',
      link: 'https://doi.org/10.1177/1049731509335569',
    },
    {
      referencia:
        'El rincón de Celeste Cielo. (2021). Historia de las fibras textiles. ',
      link:
        'https://elrincondecelestecielo.blogspot.com/2015/04/historia-de-las-fibras-textiles-y-los.html#:~:text=Se%20clasifican%20en%20dos%20grandes,fibras%20animales%2C%20vegetales%20y%20minerales.',
    },
    {
      referencia: 'Frogx3. (2021). Pantone Food. ',
      link: 'https://www.frogx3.com/2017/07/11/pantone-food-arte/',
    },
    {
      referencia: 'Hobeika, G. (2018). George Hobeika. ',
      link: 'http://es.orientpalms.com/Georges-Hobeika-7004',
    },
    {
      referencia: 'Inexmoda. (2021). Fashion snoops. Inexmoda. ',
    },
    {
      referencia:
        'King, W. (1965). Fashion adoption: a rebuttal to the trickle down ttheory. ',
      link:
        'https://www.econbiz.de/Record/fashion-adoption-a-rebuttal-to-the-trickle-down-theory-king-charles/10002208542',
    },
    {
      referencia:
        'Mujer. (2020). Cómo adaptar la moda de las pasarelas a la decoración de espacios. ',
      link:
        'http://www.mujer.com.pa/deco-hogar/como-adaptar-la-moda-de-las-pasarelas-la-decoracion-de-espacios',
    },
    {
      referencia: 'Novik, L. (2020). Blink Design. ',
      link: 'https://www.blinkdg.com/',
    },
    {
      referencia: 'Phelps, N. (2020). Dolce & Gabbana. ',
      link:
        'https://www.vogue.com/fashion-shows/spring-2021-ready-to-wear/dolce-gabbana',
    },
    {
      referencia: 'Pinterest. (2021). Imagen. ',
      link: 'https://co.pinterest.com/pin/687573068104655218/',
    },
    {
      referencia: 'Pinterest. (2021). Imagen. ',
      link: 'https://co.pinterest.com/pin/765049055450738064/',
    },
    {
      referencia: 'Pinterest. (2021). Imagen. ',
      link: 'https://www.pinterest.es/pin/6122149483400316/',
    },
    {
      referencia: 'Pinterest. (2021). Imagen. ',
      link: 'https://www.pinterest.es/pin/741264419910091019/',
    },
    {
      referencia: 'Pinterest. (2021). Imagen. ',
      link: 'https://www.pinterest.es/pin/815010863817269466/',
    },
    {
      referencia: 'PlayBoy. (2020). Imagen. ',
      link:
        'https://www.playboy.com.mx/guia-playboy/moda-inspirada-en-obras-de-arte/',
    },
    {
      referencia:
        'Salinas, R. (1994). Color harmony 2. La armonía en el color, nuevas tendencias, guía para la combinación creativa de colores. Editorial La Armonía del Color.',
    },
    {
      referencia: 'Sayonara. (2021). Movimiento slow moda. ',
      link:
        'https://sayonaravintage.com/2015/01/movimiento-slow-moda-sostenible-comercio-justo/',
    },
    {
      referencia: 'SENA. (2020). Cliente. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=4WIq433jNMA',
    },
    {
      referencia: 'SENA. (2020). Servicio al cliente. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=dB6FOVF-wWs',
    },
    {
      referencia: 'SENA. (2020). Tipos de clientes. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=FxVNkf957tw&t=26s',
    },
    {
      referencia: 'SENA. (2021). Los acabados textiles. SENA.',
    },
    {
      referencia: 'SENA. (2021). Moodboard tableros creativos. SENA. ',
    },
    {
      referencia: 'Simmel, G. (1904). Fashion. ',
      link:
        'https://sites.middlebury.edu/individualandthesociety/files/2010/09/Simmel.fashion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Alta costura',
      significado:
        'vestuario hecho sobre medida creado por los diseñadores líderes que, usualmente forma parte de una colección para una estación específica, la cual es determinante en la moda en general. La alta costura fue fundada por Charles Frederick Worth en París en la segunda mitad del siglo XIX; a principios del siglo XX fue dominada por Paul Poiret y después por Coco Chanel durante y después de la primera guerra mundial. ',
    },
    {
      termino: 'Atelier',
      significado: 'taller de creación de moda. ',
    },
    {
      termino: 'Bidimensional ',
      significado:
        'que se representa según su altura y su anchura, y no su profundidad. ',
    },
    {
      termino: 'Coolhunter',
      significado:
        'persona que se dedica a la recolección de información sobre tendencias de moda. ',
    },
    {
      termino: 'Corsé',
      significado:
        'prenda femenina que ciñe el cuerpo desde el pecho hasta las caderas mediante una estructura que se ata fuertemente a la espalda. ',
    },
    {
      termino: 'Diseño',
      significado:
        'actividad creativa orientada a soluciones idóneas a ciertas problemáticas. ',
    },
    {
      termino: 'Estilo ',
      significado:
        'manifestación personal de cada individuo según las características propias y su comunicación a través de su actitud y su vestuario. En el estilo se manifiesta la identidad de la persona que está fundamentada en la unidad que se refleja a partir de la relación existente entre el ser y su aspecto exterior o la apariencia.',
    },
    {
      termino: 'Moda ',
      significado:
        'hábito repetitivo que identifica a una persona, una especie de presión social, que debe consumir, utilizar o hacer.',
    },
    {
      termino: 'Outfit',
      significado:
        'conjunto de prendas combinadas de una manera determinada. Designa un atuendo concreto, pero su uso se ha popularizado hasta el punto de emplearse como sinónimo del término genérico conjunto. ',
    },
    {
      termino: 'Oversize',
      significado:
        'dicho de una prenda de vestir, la que es de mayor talla que la necesaria. También se utiliza para definir el estilo derivado de vestir este tipo de prendas. ',
    },
    {
      termino: 'Street style ',
      significado:
        'estilo de ropa que se lleva para ir por la calle. También se llaman así las fotos espontáneas que muestran el estilo que llevan determinadas personas por la calle, y los blogs en los que se publican estas fotos. ',
    },
    {
      termino: 'Style ',
      significado: 'estilo de una prenda; manera o modo de vestir. ',
    },
    {
      termino: 'Tail hem (corte asimétrico) ',
      significado:
        'estructura de las prendas, más cortas por delante que por detrás, con la que se consigue el llamado “efecto cola” en faldas y vestidos. ',
    },
    {
      termino: 'Tipología',
      significado:
        'estudio de los tipos o modelos que se usan para clasificar en diversas ciencias o disciplinas ',
    },
    {
      termino: 'T-shirt',
      significado: 'camiseta.',
    },
    {
      termino: 'Total look (coordinado)',
      significado:
        'atuendo conjuntado con el mismo estilo, el mismo color o incluso la misma marca. La coordinación puede llegar a incluir los zapatos, los adornos y el bolso. ',
    },
    {
      termino: 'Trendsetter',
      significado:
        'persona que pone de moda una manera de vestir o una prenda. ',
    },
    {
      termino: 'Trendy',
      significado:
        'dicho de una persona, de un estilo o una prenda de vestir: a la última, moderna. ',
    },
    {
      termino: 'Vintage',
      significado:
        'tendencia estética que consiste en rescatar prendas u objetos diseñados o fabricados en las épocas en las que estaban de moda. Suele aplicarse también a las propias prendas y objetos de grandes diseñadores que se conservan en buen estado, por lo que siguen teniendo un alto valor económico. ',
    },
  ],
  complementario: [
    {
      texto: 'SENA. (2020). Fundamentación de moda.',
      tipo: 'PDF con presentación.',
      descarga: '/downloads/CF2_Anexo1_Fundamentacion_Moda.pdf',
    },
    {
      texto:
        'SENA. (2020). Universos del vestuario. Gamas de mercado. Ocasiones de uso.',
      tipo: 'PDF con presentación.',
      descarga: '/downloads/CF2_Anexo2_Universos_Vestuarios_Ocasiones_Uso.pdf',
    },
    {
      texto: 'SENA. (2020). Perfiles del consumidor.',
      tipo: 'PDF con presentación.',
      descarga: '/downloads/CF2_Anexo3_Perfil_Consumidor.pdf',
    },
    {
      texto: 'SENA. (2020). Moodboard. Tableros creativos.',
      tipo: 'PDF con presentación.',
      descarga: '/downloads/CF2_Anexo4_Moodboard_Tableros_Creativos.pdf',
    },
    {
      texto: 'SENA. (2020). Tendencias de moda.',
      tipo: 'PDF con presentación.',
      descarga: '/downloads/CF2_Anexo5_Tendencias_Moda.pdf',
    },
    {
      texto: 'SENA. (2020). Identificación de fibras.',
      tipo: 'PDF con presentación.',
      descarga: '/downloads/CF2_Anexo6_IdentificacionFibras.pdf',
    },
    {
      texto: 'SENA. (2020). Fibras textiles.',
      tipo: 'PDF con presentación.',
      descarga: '/downloads/CF2_Anexo7_Clasificacion_Fibras_Textiles.pdf',
    },
    {
      texto: 'SENA. (2020). Los textiles.',
      tipo: 'PDF con presentación.',
      descarga: '/downloads/CF2_Anexo8_Los_Tejidos.pdf',
    },
    {
      texto: 'SENA. (2020). Caracterización de los textiles.',
      tipo: 'PDF con presentación.',
      descarga: '/downloads/CF2_Anexo9_Caracterizacion_Textiles.pdf',
    },
    {
      texto: 'SENA. (2020). Los acabados y procesos textiles.',
      tipo: 'PDF con presentación.',
      descarga: '/downloads/CF2_Anexo10_Acabado_Procesos_Textiles.pdf',
    },
    {
      texto: 'SENA. (2020). Categorías de prendas.',
      tipo: 'PDF con presentación.',
      descarga: '/downloads/CF2_Anexo11_Categorias_Prendas.pdf',
    },
    {
      texto:
        'Simmel, G. (1904). Fashion. The American Journal of Sociology, 65(6), 541-558.',
      tipo: 'Artículo de lectura',
      link:
        'https://sites.middlebury.edu/individualandthesociety/files/2010/09/Simmel.fashion.pdf ',
    },
    {
      texto:
        'Dearing, J. W. (2009). Applying Diffusion of Innovation Theory to Intervention Development. Research on Social Work Practice, 19(5), 503–518. ',
      tipo: 'Artículo de lectura',
      link: 'https://doi.org/10.1177/1049731509335569 ',
    },
    {
      texto:
        'King, W. (1965). Fashion Adoption: a Rebuttal to the Trickle Down Theory. Appleton-Century-Crofts.',
      tipo: 'Artículo de lectura',
      link:
        'https://www.econbiz.de/Record/fashion-adoption-a-rebuttal-to-the-trickle-down-theory-king-charles/10002208542 ',
    },
  ],
}
