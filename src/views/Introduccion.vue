<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:titulo="'Unidad 1. Conceptos fundamentales del Derecho'" :subTitulo="'INTRODUCCIÓN'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      p.mb-4 Bienvenidos al curso Introducción al derecho y, para iniciar, conozcamos tres aspectos importantes que estudiaremos: 
      .mn.bg-slyder.p-5
        SlyderA(tipo='b')
          .row.p-5.bg-white
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/1.png', alt='')
            .col-lg-7
              h4 Primer aspecto
              p.mb-0 La definición de Derecho, su naturaleza y objetivos, con lo que se ofrece al estudiante una visión global de lo que constituye el Derecho, su propósito para garantizar el orden social, proteger los derechos y establecer los deberes de las personas. Este conocimiento es esencial porque dota al estudiante, de un marco conceptual que le permite entender por qué la existencia de unas normas y su relevancia en la vida diaria.
          .row.p-5.bg-white
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/2.png', alt='')
            .col-lg-7
              h4 Segundo aspecto
              p.mb-0 El derecho como sistema normativo, introduce al estudiante en la estructura que sostiene al Derecho. Aquí se explica cómo las normas jurídicas se articulan dentro de un sistema coherente y cómo estas normas están respaldadas por la autoridad del Estado, diferenciándose de otros sistemas normativos, como la moral o la religión. Este enfoque permite que el estudiante entienda el Derecho no solo como una serie de disposiciones aisladas, sino como un sistema interconectado que busca regular la conducta social y resolver conflictos, asegurando el bienestar y la justicia en la sociedad.
          .row.p-5.bg-white
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/3.png', alt='')
            .col-lg-7
              h4 Tercer aspecto
              p.mb-0 Estudiar los elementos esenciales del Derecho, permite comprender cómo funciona en la práctica. A través del análisis de elementos como las normas jurídicas, la obligatoriedad de su cumplimiento, y el carácter coercitivo que garantiza su eficacia, el estudiante desarrolla una visión integral de cómo opera el sistema jurídico.
            
  

  
  </template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
