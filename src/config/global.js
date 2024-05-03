export default {
  global: {
    componenteFormativo: 'Historia y conceptos de diseño del videojuego',
    descripcionCurso:
      'Breve reseña de la historia de los videojuegos en la que se dará a conocer los tipos de videojuegos. Se desarrollará la idea base del videojuego, realizando el guion narrativo y técnico, con el  storyboard, las mecánicas de juego y los niveles de juego.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Historia del videojuego',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<i>Pipeline</i> del videojuego',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Antecedentes del videojuego en Colombia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de videojuegos y plataformas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Idea general del videojuego',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Personajes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Narración',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Teoría básica luces y sombras',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Guion técnico',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: '<i>Storyboard</i>',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Objetivos del videojuego',
            hash: 't_2_6',
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
      //{
      //  nombreRuta: 'complementario',
      //  icono: 'far fa-folder-open',
      //  titulo: 'Material complementario',
      //},
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: 'https://www.google.com/',
    },
    {
      tema: '',
      referencia: '',
      tipo: '',
      descarga: '/downloads/prueba.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Abstracto',
      significado:
        'Son diseños simples, basados en figuras geométricas, pueden ser figurativas, como círculos, cuadrados y triángulos que conforman la imagen.',
    },
    {
      termino: 'Antagonistas',
      significado:
        'Son los personajes que hacen parte de la historia y que, por lo general, son el enemigo del protagonista principal. En su gran mayoría son el malo de la historia.',
    },
    {
      termino: '<em>Background</em>',
      significado:
        'Es el fondo que complementa una escena. Puede ser un paisaje, un color totalmente limpio.',
    },
    {
      termino: '<em>Cell shading</em>',
      significado:
        'Proceso de renderizado estilo de dibujo animado, que utiliza los colores planos.',
    },
    {
      termino: 'Contraluz',
      significado:
        'Se genera cuando la luz está detrás del objeto y la cámara frente a este, lo que genera una silueta totalmente negra.',
    },
    {
      termino: 'Exponencial',
      significado:
        'Se entiende por exponencial como dicho de un crecimiento o desarrollo de un ritmo, cadencia o proporción que incrementa o aumenta cada vez más rápidamente y de manera notoria.',
    },
    {
      termino: 'Interacción',
      significado:
        'Es la acción que se tiene sobre un objeto y este responde ante ese estímulo.',
    },
    {
      termino: 'Mecánicas',
      significado:
        'Acciones que el jugador realiza mediante la interacción con mandos, lo que genera una orden que cumple un objeto.',
    },
    {
      termino: '<em>Pixel art</em>',
      significado:
        'El Pixel Art, como bien su nombre lo indica, es el arte generado por pixeles. Consiste en la unión de varios pixeles para crear una imagen en concreto. Esta técnica se ha empleado, en su mayor parte, en videojuegos antiguos o retro, ya sea para consolas, PC o teléfonos móviles.',
    },
    {
      termino: 'Portabilidad',
      significado:
        'La noción de portabilidad alude a la condición de portable. Este adjetivo (portable), en tanto, refiere a lo portátil: es decir, que resulta movible o que se puede trasladar con facilidad. ',
    },
    {
      termino: '<em>Score</em>',
      significado:
        'Es el puntaje que se genera en una partida, este se va actualizando durante el progreso del juego.',
    },
    {
      termino: '<em>Streaming</em>',
      significado:
        'Archivos multimedia, como audio, video o imágenes, que no hay necesidad de descargarlos, sino que se ejecutan desde el servidor o página web.',
    },
    {
      termino: '<em>Thumbnails</em>',
      significado:
        'Son imágenes en miniatura realizadas antes de los bocetos. Estas se hacen de forma simplificada a partir de siluetas. ',
    },
    {
      termino: 'Trama',
      significado:
        'Son sucesos cronológicos que se conectan entre sí para generar una historia.',
    },
    {
      termino: 'Vista cenital',
      significado:
        'El plano cenital es obtener una imagen en la que la cámara se sitúa en la parte superior y mira hacia abajo. Correspondería a una vista en planta y también se le llama plano cenital.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acedo, R. (2021). Proceso de Diseño y creación de Personajes para Videojuegos. Notodoanimacion.',
      link:
        'https://www.notodoanimacion.es/diseno-y-creacion-de-personajes-para-videojuegos/',
    },
    {
      referencia:
        'Arteneo. (2019, Junio 18). El storyboard en diseño de videojuegos. Arteneo.',
      link:
        'https://www.arteneo.com/blog/storyboard-videojuegos-escuela-madrid/',
    },
    {
      referencia:
        'Avedon, E. (2015). The Study of the Games. Editorial Ishi Press.',
    },
    {
      referencia:
        'El primer video juego de la historia. (2020, 18 octubre). Social Futuro.',
      link:
        'https://www.socialfuturo.com/tal-dia-como-hoy/el-primer-video-juego-de-la-historia/#:%7E:text=El%2018%20de%20octubre%20de,Model%2030%20utilizando%20un%20osciloscopio',
    },
    {
      referencia: 'Ferrer, S. (2014). Los videojuegos. La Ardilla Digital. ',
      link:
        'http://ardilladigital.com/DOCUMENTOS/TECNOLOGIA%20EDUCATIVA/TICs/T8%20VIDEOJUEGOS/08%20LOS%20VIDEOJUEGOS.pdf',
    },
    {
      referencia:
        'Franch, A. (s. f.). Introducción al diseño de videojuegos. UOC. ',
      link:
        'http://openaccess.uoc.edu/webapps/o2/bitstream/10609/26941/2/atejedaf_TFG_0114.pdf',
    },
    {
      referencia:
        'García, H. (2013). Iluminación en ilustración y en el arte. Ilustrando en la escuela de arte. ',
      link:
        'http://ilustrandoenlaescueladearte.blogspot.com/2013/03/iluminacion-en-ilustracion-y-el-arte.html',
    },
    {
      referencia: 'Leguizamon, A. (2012). Storyboard. Slideshare.',
      link:
        'https://www.slideshare.net/AndyLeguizamon/storyboard-12282909?from_action=save',
    },
    {
      referencia:
        'Mateos, C. y Herrero, F. (2016). La pantalla insomne (2.a ed.). Sociedad Latina de Comunicación Social.',
    },
    {
      referencia:
        'Nallar, D. (2015). Diseño de juegos en América Latina: Estructura lúdica: Game Design paso a paso. CreateSpace Independent Publishing Platform.',
    },
    {
      referencia:
        'Romero, S. (2020). Consolas o móviles: pasado, presente y futuro de la industria gaming. Impacto TIC. ',
      link:
        'https://impactotic.co/consolas-o-moviles-pasado-presente-y-futuro-de-la-industria-gaming/',
    },
    {
      referencia:
        'Tokio School. (2020, 21 enero). Mecánicas de juego más habituales en los videojuegos.',
      link:
        'https://www.tokioschool.com/noticias/mecanicas-de-juego-habituales-en-videojuegos/',
    },
    {
      referencia:
        'Universidad de Palermo. (2013). Storyboard en los videojuegos. Blog del docente del Área en la Facultad de Diseño y Comunicación. ',
      link:
        'http://fido.palermo.edu/servicios_dyc/blog/docentes/detalle_tp.php?id_docente=80946&id_blog=10682',
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
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Fabián Andrés Gómez Pico',
          cargo: 'Experto temático 3D',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Johnier Felipe Perafán Ledezma',
          cargo: 'Experto temático 3D',
          centro:
            'Centro de Servicios y Gestión Empresarial - Regional Antioquia',
        },
        {
          nombre: 'Luz Aída Quintero Velásquez',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Oscar Absalón Guevara',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Uriel Darío González Montoya',
          cargo: 'Revisión y corrección de estilo',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuadora instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodólogo para la formación virtual - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Anllelo Andres Reina Montañez',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñador de contenidos digitales - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy Maria Ruiz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios -  Regional Tolima',
        },
        {
          nombre: 'Sergio Omar Camacho Orduz',
          cargo: 'Desarrollo front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Jhon Jairo Urueta Alvarez',
          cargo: 'Desarrollador full-stack - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jenny Paola Montillo Gélvez',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validadora de recursos digitales - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validador de recursos digitales - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
