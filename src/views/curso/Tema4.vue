<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'Unidad 1. Derecho Civil, General personas'" :subTitulo="'SINTESIS'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      
      p(data-aos="fade-up").mb-5 La Unidad 1: Conceptos fundamentales del Derecho, introduce los elementos clave para entender qué es el Derecho, su naturaleza y sus objetivos. Esta unidad proporciona una base sólida para comprender el papel del Derecho como sistema normativo que regula la conducta humana, garantizando el orden y la justicia en la sociedad. A través del análisis de diferentes perspectivas filosóficas y teóricas, se examina la evolución histórica del concepto de Derecho, destacando su función como mecanismo para proteger derechos y establecer deberes. Además, se profundiza en cómo el Derecho se estructura como un sistema interconectado y jerárquico que se distingue de otras formas de normas sociales. Esta comprensión integral permite a los estudiantes adquirir un marco conceptual robusto, esencial para su formación jurídica y futura práctica profesional.

      .row.justify-content-center
        .col-lg-12.mb-5
          figure.bg-color-sintesis.p-5.brounded
            img(src='@/assets/curso/temas/sintesis.svg', alt='')
  </template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>
