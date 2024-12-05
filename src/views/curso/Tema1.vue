<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 1. Conceptos fundamentales del Derecho'" :subTitulo="'1. Teorías y enfoques para la resolución pacífica de conflictos'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-0.pt-md-0.pb-0.overflow-hidden
    .bg-full-width.bg-color-2.mb-5(style="background-color: #efeadd ")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Concepto de Derecho
            p.mb-4(data-aos="fade-right") El Derecho, entendido como un sistema normativo que regula la conducta humana y garantiza la justicia en la sociedad, ha sido objeto de múltiples interpretaciones a lo largo de la historia. Desde su origen etimológico en el latín directus, que significa "enderezar" o "conducir", se evidencia su función orientadora hacia lo correcto y lo justo. Diversos filósofos y juristas, como Kant y Celso, han aportado visiones que resaltan tanto su carácter normativo como su dimensión coercitiva, subrayando su papel esencial en la protección de derechos y la imposición de deberes. A continuación, en el PDF Concepto de Derecho,  se profundiza en estas perspectivas para ofrecer una comprensión integral del Derecho y su relevancia en la organización social.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Concepto de Derecho.

          .col-lg-5.col-7.mb-lg-0.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/4.png', alt='')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Naturaleza del Derecho

    p.mb-4 La naturaleza del Derecho ha sido  objeto de múltiples debates, y diversas escuelas han tratado de explicar su origen y características fundamentales. Estas escuelas son:
    .row.justify-content-center.mb-4
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Iusnaturalismo, o Escuela del Derecho Natural")
            p.mb-0 Tiene sus raíces en la teoría aristotélica y alcanzó su apogeo a principios del siglo XVIII. Esta corriente sostiene que el Derecho Natural es un conjunto de normas universales que surgen de la naturaleza humana y que son descubiertas por la razón y la conciencia. Estas normas son superiores a las leyes creadas por los seres humanos y aplicables a todos los pueblos en cualquier época. Sócrates y Aristóteles ya vislumbraban un orden natural accesible mediante la razón, distinto de las volubles leyes humanas. El Estoicismo griego, por su parte, sostenía que el Derecho Natural residía en la naturaleza cósmica y que la razón, como fuerza universal, fundamentaba el Derecho y la Justicia (Bodenheimer, 1994).
              br
              br
              |Durante la Edad Media, el Derecho Natural fue reinterpretado desde una perspectiva teológica, siendo visto como una ley divina que emanaba de la razón de Dios. En la Edad Moderna, pensadores como Hugo Grocio y Samuel Pufendorf, desvincularon el Derecho Natural de la religión, afirmando que su fundamento residía en la naturaleza humana misma, sin la necesidad de una intervención divina directa. Los iusnaturalistas contemporáneos, como el Neotomismo, defienden los principios del Derecho Natural como normas eternas y universales, pero con un enfoque en el bien común, más que en los intereses individuales.
              br
              br
              |Dentro del Iusnaturalismo se pueden identificar cuatro concepciones principales: 
              br
              |a. La teológica, que vincula el Derecho Natural con la voluntad divina y lo considera inmutable.
              br
              br
              |b. La racionalista, que lo interpreta como un conjunto de derechos inherentes a la naturaleza humana y descubiertos por la razón.
              br
              |c. La antiintelectualista, que critica el racionalismo.
              br
              |d. La contemporánea, que ve el Derecho Natural como un sistema de principios generales y flexibles que orientan al legislador.
          div(titulo="Historicismo")
            p.mb-0 Surge en oposición a las concepciones racionalistas del Derecho. En el siglo XIX, pensadores como Savigny y Puchta argumentaron que el Derecho no puede ser producto de la razón abstracta, sino que es el resultado de un proceso histórico. Según esta escuela, cada pueblo crea su propio Derecho como parte de su evolución cultural y social, de manera similar a cómo se desarrolla el lenguaje. El Derecho, por tanto, es una manifestación del "espíritu del pueblo" (Volksgeist) y está profundamente enraizado en la historia, las costumbres y las tradiciones de cada sociedad (Radbruch, 1955).
              br
              br
              |El Historicismo rechaza la idea de un Derecho universal y sostiene que las leyes deben entenderse en su contexto histórico. Las normas jurídicas, según esta corriente, no son estáticas, sino que evolucionan con el tiempo. Savigny, uno de sus máximos exponentes, criticaba la idea de que el Derecho pudiera ser creado arbitrariamente por los legisladores, pues consideraba que las leyes debían surgir de las costumbres y convicciones del pueblo.
          div(titulo="Positivismo")
            p.mb-0 El Positivismo Jurídico es una corriente que está estrechamente ligada al Positivismo filosófico de Auguste Comte. Según el Positivismo, el Derecho no debe buscar sus fundamentos en la moral, la religión o la metafísica, sino que debe centrarse exclusivamente, en las normas promulgadas por la autoridad legítima de un Estado. Para los positivistas, el Derecho es lo que el legislador establece, y la validez de una norma, depende únicamente de su procedencia formal, no de su contenido moral o ético (Kelsen, 1960).
              br
              br
              |Dentro de esta corriente, Hans Kelsen, con su Teoría Pura del Derecho, argumentó que el Derecho debe estudiarse de manera autónoma, sin la interferencia de otros campos como la ética o la sociología. Para Kelsen, el Derecho es un sistema normativo que regula la conducta humana a través de normas coercitivas, y su validez depende de una norma fundamental que otorga autoridad a las demás. El Derecho es un "deber ser", que no se confunde con la realidad de lo que sucede en la práctica (Kelsen, 1960).
          div(titulo="Marxismo")
            p.mb-0 Ofrece una visión crítica del Derecho, considerándolo como un instrumento de la clase dominante, para mantener su poder. Para los pensadores marxistas, el Derecho es parte de la superestructura ideológica que refleja las relaciones de producción de una sociedad. Así, el Derecho no es un conjunto de normas universales o imparciales, sino un medio para perpetuar las desigualdades de clase y proteger los intereses de los poderosos. Karl Marx y Friedrich Engels, argumentaron que, en una sociedad comunista, donde no existirían clases sociales, el Derecho desaparecería junto con el Estado (Marx & Engels, 1848).
      .col-lg-5.col-7: img(src='@/assets/curso/temas/5.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #e5f0f6")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En conclusión, la naturaleza del Derecho ha sido abordada desde múltiples perspectivas, a lo largo de la historia. El Iusnaturalismo defiende la existencia de un Derecho universal basado en la naturaleza humana, mientras que el Historicismo y el Positivismo, ofrecen enfoques más contextuales y formales, respectivamente. Por último, el Marxismo considera al Derecho como un reflejo de las estructuras de poder y explotación en la sociedad. Cada una de estas escuelas ha contribuido de manera significativa a la comprensión del Derecho, mostrando la riqueza y complejidad de esta disciplina.     

    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass"></style>
