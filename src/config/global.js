export default {
  global: {
    componenteFormativo: '',
    descripcionCurso: '',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        unidad: 'UNIDAD 1.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 1.',
        numero: '1',
        titulo: 'Definición de Derecho: naturaleza y objetivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Naturaleza del Derecho',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 1.',
        numero: '2',
        titulo: 'El Derecho como sistema normativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'El Derecho y su relación con otras ciencias',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 1.',
        numero: '3',
        titulo: 'Elementos esenciales del Derecho',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Objetos jurídicos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Los sujetos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Prestación y garantía',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 1.',
        numero: '',
        titulo: 'Síntesis',
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
      // {
      //   icono: 'far fa-registered',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
    ],
  },
  referencias: [
    {
      referencia:
        'Buenaga Ceballos, O. (2017). Introducción al derecho y a las ciencias jurídicas: ( ed.). Dykinson.',
      link: 'https://elbro.net/es/lc/tecnologicadeloriente/titulos/58991',
    },
    {
      referencia:
        'Nino, C. S. (2004). Introducción al análisis del derecho: (10 ed.). Editorial Ariel.',
      link: 'https://elbro.net/es/lc/tecnologicadeloriente/titulos/100166',
    },
    {
      referencia:
        'Fernández, I (2018) Manual de Fundamentos de Derecho público y privado. Editorial: Difusora Larousse - Editorial Tecnos',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/123161?col_q=ingenier%C3%ADa__4.0&col_code=ELC034&prev=col',
    },
  ],
  glosario: [
    {
      termino: 'Acto Jurídico',
      significado:
        'manifestación de voluntad que produce efectos jurídicos, como la creación de derechos y obligaciones en un contrato.',
    },
    {
      termino: 'Capacidad Jurídica',
      significado:
        'aptitud de una persona o entidad para adquirir y ejercer derechos, así como para asumir obligaciones.',
    },
    {
      termino: 'Coerción',
      significado:
        'fuerza o poder que obliga a una persona a cumplir con las normas jurídicas, asegurando su cumplimiento.',
    },
    {
      termino: 'Derecho',
      significado:
        'conjunto de normas obligatorias que regulan las relaciones humanas en sociedad, asegurando la justicia y el orden social.',
    },
    {
      termino: 'Derecho Natural',
      significado:
        'conjunto de normas universales y eternas que surgen de la naturaleza humana y que son descubiertas por la razón.',
    },
    {
      termino: 'Derecho Positivo',
      significado:
        'normas establecidas por una autoridad legítima que regulan las conductas en una sociedad específica.',
    },
    {
      termino: 'Garantía',
      significado:
        'elemento del Derecho que asegura el cumplimiento de una norma jurídica mediante coerción o sanciones.',
    },
    {
      termino: 'Hecho Jurídico',
      significado:
        'acontecimiento que produce efectos legales independientemente de la voluntad de las personas, como el nacimiento o la muerte.',
    },
    {
      termino: 'Norma Jurídica',
      significado:
        'regla obligatoria que regula la conducta de los individuos en sociedad, cuyo incumplimiento puede generar sanciones.',
    },
    {
      termino: 'Objeto Jurídico',
      significado:
        'cosa, bien, acción o conducta sobre la cual recaen los derechos y obligaciones de los sujetos jurídicos',
    },
    {
      termino: 'Prestación',
      significado:
        'acción, abstención o entrega que el sujeto pasivo debe realizar en favor del sujeto activo dentro de una relación jurídica.',
    },
    {
      termino: 'Sanción',
      significado:
        'consecuencia desfavorable impuesta a quien incumple una norma jurídica, como multas o penas de cárcel.',
    },
    {
      termino: 'Sujeto Activo',
      significado:
        'persona que tiene el derecho o la facultad de exigir algo de otra persona dentro de una relación jurídica.',
    },
    {
      termino: 'Sujeto Pasivo',
      significado:
        'persona obligada a cumplir una prestación en favor del sujeto activo.',
    },
  ],
  complementario: [],
  creditos: [],
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
