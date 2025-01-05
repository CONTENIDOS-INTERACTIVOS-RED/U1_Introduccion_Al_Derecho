<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 1. Conceptos fundamentales del Derecho'" :subTitulo="'3. Elementos esenciales del Derecho'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    p.mb-4 En los elementos esenciales del Derecho, encontramos los objetos jurídicos, los sujetos y la prestación y garantía. Conozcamos cada uno de ellos.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Objetos jurídicos

    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .p-4(style="background-color:#e5f0f6 ").h-100
          p.mb-0  Los objetos jurídicos son conceptos fundamentales dentro del Derecho, porque se refieren a sobre qué cosas o bienes, recaen esos derechos y obligaciones; estos conceptos son esenciales para entender cómo se estructuran las relaciones jurídicas y cómo se desarrollan las interacciones entre personas y las cosas o bienes, en el marco de la ley.
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/27.png', alt='')
      .col-lg-4
        .p-4(style="background-color:#efeadd ").h-100
          p.mb-0 Dentro de los ejemplos más notables en el caso colombiano, se destacan aquellos relacionados con el estado civil de las personas. También hay algunas modificaciones relacionadas a los bienes y obligaciones, imponiendo nuevas formas de regulación o de creaciones de registros. Los cambios y modificaciones al Código Civil son múltiples y permiten que hoy, esta rama del derecho, se regule acorde a las necesidades actuales de la sociedad.
    p.mb-4 Así las cosas, el objeto jurídico se refiere a la cosa, bien, acción o conducta, sobre los cuales recaen los derechos y obligaciones de los sujetos jurídicos. En otras palabras, es aquello con lo que se vinculan los derechos o deberes de los sujetos. 
      br
      br
      |#[b Los objetos jurídicos pueden ser:]
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/info.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-botones.p-3(x="29.7%" y="70%" numero="+")
        .h5.mb-2 Bienes
        p Los bienes son las cosas materiales o inmateriales que pueden ser objeto de derechos. En el ámbito jurídico, los bienes se dividen en varias categorías, entre ellas:
      .tarjeta.color-acento-botones.p-3(x="49%" y="20%" numero="+")
        .h5.mb-2 Hechos o Actos
        p Los hechos jurídicos son acontecimientos que pueden tener efectos jurídicos, independientemente de la voluntad de las personas. Por ejemplo, el nacimiento de una persona o la muerte de un individuo, son hechos jurídicos porque generan efectos legales, como el reconocimiento de la capacidad jurídica o la apertura de una sucesión.
          br
          br
          |Por otro lado, los actos jurídicos son manifestaciones de voluntad que tienen como finalidad producir efectos jurídicos. Un contrato, por ejemplo, es un acto jurídico porque las partes que lo suscriben lo hacen voluntariamente, con el fin de crear derechos y obligaciones recíprocas.
      .tarjeta.color-acento-botones.p-3(x="68%" y="70%" numero="+")
        .h5.mb-2 Conductas
        p Las conductas humanas también pueden ser objeto de derechos y obligaciones. Por ejemplo, un contrato de prestación de servicios, implica que una persona (sujeto pasivo) está obligada a realizar una tarea específica (prestación), mientras que la otra parte (sujeto activo) tiene el derecho de exigir que esa tarea sea realizada. Aquí, la conducta del sujeto pasivo es el objeto de la obligación.
      .tarjeta.color-acento-botones.p-3(x="9.8%" y="83%" numero="+")
        .h5.mb-2 Bienes muebles
        p Son aquellos que pueden ser movidos de un lugar a otro, sin alterar su naturaleza, como un automóvil, una computadora o una bicicleta.
      .tarjeta.color-acento-botones.p-3(x="31.8%" y="83%" numero="+")
        .h5.mb-2 Bienes inmuebles
        p Son aquellos que no pueden moverse, como terrenos, edificios o casas.
      .tarjeta.color-acento-botones.p-3(x="53.6%" y="83%" numero="+")
        .h5.mb-2 Bienes corporales
        p Son aquellos que tienen una existencia física, como una mesa o un libro.
      .tarjeta.color-acento-botones.p-3(x="75.7%" y="83%" numero="+")
        .h5.mb-2 Bienes incorporales
        p Son aquellos que no tienen una existencia física, pero que son reconocidos por la ley, como los derechos de autor, las patentes o las acciones en una empresa.
    p.mb-4 Los bienes inmuebles, por ejemplo, pueden ser objeto de diversos derechos, como la propiedad, el usufructo o la hipoteca. Mientras que los bienes incorporales pueden ser cedidos, vendidos o licenciados, como ocurre con los derechos de autor. 
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Los sujetos
    .bg-color-4.mb-5(data-aos="fade-up" style="background-color: #eef0f3 ")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up")   El Derecho no es solo un conjunto de normas abstractas, sino un sistema que busca regular nuestras acciones diarias y garantizar la convivencia pacífica en la sociedad. Para que este sistema funcione, debe apoyarse en algunos elementos clave que permitan que las normas sean comprensibles, aplicables y, lo más importante, efectivas. Estos elementos esenciales son como los pilares que sostienen cualquier norma jurídica y aseguran que cada persona sepa qué esperar de los demás y cómo debe actuar. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/28.png', alt='')
    h3 Sujetos Jurídicos
    p.mb-4 Los sujetos jurídicos son las personas o entidades que tienen la capacidad de ser titulares de derechos y obligaciones dentro del sistema jurídico. En otras palabras, los sujetos jurídicos son aquellos que pueden participar en una relación jurídica, ya sea exigiendo el cumplimiento de un derecho o asumiendo una obligación. Existen dos tipos principales de sujetos jurídicos:
    
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo='b').bg-white
          .row.p-5
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/29.png', alt='')
            .col-lg-7
              h4 Personas naturales
              p.mb-0 Las personas naturales son los seres humanos individuales. Desde el nacimiento y, en algunos casos, desde la concepción, las personas naturales son consideradas sujetos de derechos. Tienen la capacidad de adquirir derechos y obligaciones, lo que significa que pueden realizar actos jurídicos como firmar contratos, comprar bienes o demandar en un tribunal.
                br
                br
                |El derecho a la vida, la libertad personal, la propiedad privada y el derecho a la educación, son ejemplos de derechos que poseen las personas naturales. También tienen responsabilidades, como el deber de cumplir con las leyes, pagar impuestos o respetar los derechos de los demás.
          .row.p-5
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/30.png', alt='')
            .col-lg-7
              h4 Personas jurídicas
              p.mb-0 Las personas jurídicas son entidades creadas por el Derecho, para permitir que grupos de personas o instituciones actúen como un único sujeto jurídico. Estas entidades tienen una existencia legal separada de sus miembros, lo que les permite tener derechos y asumir obligaciones. Las personas jurídicas pueden ser:
              .row.justify-content-center.align-items-center.mb-3
                .col-auto
                  figure
                    img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
                .col
                  p.mb-0 Personas jurídicas de derecho público, como el Estado, los municipios o las entidades gubernamentales.
              .row.justify-content-center.align-items-center.mb-3
                .col-auto
                  figure
                    img(src='@/assets/curso/temas/flecha.svg' alt='' style="width: 20px;")
                .col
                  p.mb-0 Personas jurídicas de derecho privado, como las empresas, asociaciones, fundaciones, y organizaciones no gubernamentales (ONG).
    p.mb-4 Las personas jurídicas pueden realizar casi todas las acciones que las personas naturales pueden, como poseer bienes, contratar, demandar y ser demandadas, entre otras. Por ejemplo, una empresa puede ser propietaria de inmuebles, contratar empleados, y debe cumplir con sus obligaciones fiscales y contractuales. 
    h4 Capacidad jurídica
    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        p.mb-4 Tanto las personas naturales como las jurídicas, tienen capacidad jurídica, que es la facultad para ser titulares de derechos y obligaciones. Esta capacidad puede dividirse en dos tipos:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/temas/31.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2.text-center Capacidad de goce
                p.mb-0.text-center Es la aptitud para adquirir derechos y contraer obligaciones, y se obtiene automáticamente al nacer (o al constituirse en el caso de las personas jurídicas).
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/temas/32.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2.text-center Capacidad de ejercicio
                p.mb-0.text-center Es la facultad para ejercer los derechos y cumplir con las obligaciones, de manera autónoma. En el caso de las personas naturales, la capacidad de ejercicio generalmente se adquiere al alcanzar la mayoría de edad, mientras que las personas jurídicas la tienen desde el momento en que son legalmente constituidas.
    p.mb-4 Ahora bien, otros doctrinantes agrupan esta categoría en sujeto activo y pasivo, donde: 
    .row.justify-content-center.mb-4
      .col-lg-7.mb-lg-0.mb-3
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Sujeto activo")
            p.mb-0 El sujeto activo es la persona que tiene el derecho o la facultad de exigir algo de otra persona. Es como si fueras el titular de un derecho que te permite pedirle a alguien más que haga algo o se abstenga de hacerlo. Este sujeto puede ser tanto una persona natural (tú, yo, cualquier ciudadano) como una persona jurídica (una empresa, una institución, etc.).
              br
              br
              |Por ejemplo, imaginemos que tenemos un contrato de alquiler con una inmobiliaria. Nosotros, como arrendatarios, somos el sujeto activo al exigir que la vivienda se encuentre en buen estado o cuando solicitamos que se respete nuestro derecho a usarla, según el contrato. En este caso, la norma nos da un derecho que podemos hacer valer.
              br
              br
              |En términos más generales, si hablamos de derechos fundamentales, como el derecho a la educación, cada persona en el país es un sujeto activo. Tenemos el derecho de exigir acceso a la educación porque es un derecho garantizado por la ley.
          div(titulo="Sujeto pasivo")
            p.mb-0 El sujeto pasivo es quien está obligado a cumplir con lo que establece la norma, en favor del sujeto activo. Siguiendo con el ejemplo anterior del contrato de alquiler, la inmobiliaria o el propietario sería el sujeto pasivo, porque está obligado a garantizar que la vivienda se mantenga en condiciones habitables para nosotros. El sujeto pasivo, en términos sencillos, es quien tiene que hacer algo o abstenerse de hacer algo, porque así lo dice la ley o el acuerdo.
              br
              br
              |Un ejemplo claro de la vida cotidiana es cuando una persona contrae una deuda con el banco. En este caso, el deudor (quien pidió el préstamo) es el sujeto pasivo, porque está obligado a devolver el dinero en los términos pactados. El banco, por su parte, sería el sujeto activo, porque tiene el derecho de exigir el pago.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/33.png', alt='')

    p(data-aos="fade-up").mb-5 En el ámbito penal, la relación entre sujetos activos y pasivos, cambia. El sujeto activo sería quien comete el delito (por ejemplo, el autor de un robo), mientras que el sujeto pasivo, sería la persona afectada o la sociedad en su conjunto, dado que el delito no solo afecta a la víctima directa, sino también al orden social.

    h3 Relación entre sujeto y objeto 
    p.mb-4 La relación entre los sujetos y los objetos jurídicos es fundamental en el Derecho, puesto que la esencia de cualquier relación jurídica implica que un sujeto (activo) tiene el derecho de exigir una determinada conducta, prestación o abstención sobre un objeto, mientras que otro sujeto (pasivo) está obligado a cumplir con esa obligación.
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/34.png', alt='')
      .col-lg-7
        p.mb-4  Por ejemplo, en un contrato de compraventa, el sujeto activo (el comprador) tiene el derecho de exigir la entrega del objeto jurídico (el bien comprado), mientras que el sujeto pasivo (el vendedor) tiene la obligación de cumplir con la entrega. Asimismo, el vendedor tiene el derecho de exigir el pago del precio (otro objeto jurídico) y el comprador está obligado a realizarlo.
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .bg-color-1.p-4(data-aos="fade-left" style="background-color: #e5f0f6")
              .row
                .col-lg-auto
                  img(src="@/assets/curso/temas/35.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Los sujetos y objetos jurídicos, son las bases sobre las que se construye cualquier relación jurídica. Los sujetos son las personas o entidades que participan en el sistema legal, y los objetos son las cosas, bienes, acciones o conductas sobre las que recaen sus derechos y obligaciones. Entender la diferencia entre ambos conceptos es esencial para comprender cómo funciona el Derecho en la vida diaria, debido a que estas relaciones determinan cómo interactuamos legalmente con otras personas y con los bienes o acciones a los que tenemos acceso, o sobre los cuales tenemos responsabilidades.
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Prestación y garantía
    p.mb-4 El Derecho como sistema normativo, no solo busca establecer reglas, sino que estas reglas se apliquen de manera justa y coherente. Los cuatro elementos (sujeto activo, sujeto pasivo, prestación y garantía), trabajan en conjunto para que las personas sepan qué esperar de las demás, y para que, en caso de conflictos, existan mecanismos que permitan solucionarlos de manera pacífica y justa.
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="border: 2px solid #707070 ").h-100.bg-white
          p.mb-0 En la vida diaria, estos elementos están presentes en casi todas nuestras interacciones: desde contratos simples, como una compra en línea, hasta derechos fundamentales, como el derecho a la libertad o a la educación. Al entender cómo funciona este sistema normativo, podemos comprender mejor nuestros derechos y obligaciones, así como las consecuencias de no cumplir con las reglas que hacen posible la convivencia social.
      .col-lg-4.mb-lg-0.mb-3.col-7: img(src='@/assets/curso/temas/36.png', alt='')
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.p-4(style="border: 2px solid #707070 ").h-100.bg-white
          p.mb-0 Este enfoque del Derecho, nos muestra que no es una ciencia alejada de la realidad, sino una herramienta práctica que utilizamos todos los días para vivir en sociedad de manera ordenada y justa.
          .row.justify-content-end.mb-5
            .col-4: img(src='@/assets/curso/temas/37.svg', alt='')
    p.mb-4 La prestación es la acción o la abstención que el sujeto pasivo debe realizar en favor del sujeto activo. Esta prestación puede tomar diferentes formas, dependiendo del tipo de norma y situación. En el mundo del derecho, la prestación puede clasificarse de tres maneras:
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo='b')
          .row.p-5.bg-white
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/37.png', alt='')
            .col-lg-7
              h4 Prestación de dar
              p.mb-0 Ocurre cuando el sujeto pasivo está obligado a entregar algo. Un ejemplo cotidiano es cuando compramos un producto. La tienda está obligada a entregar el bien que adquirimos, y nosotros, como compradores, estamos obligados a pagar el precio acordado.
          .row.p-5.bg-white
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/38.png', alt='')
            .col-lg-7
              h4 Prestación de hacer
              p.mb-0 El sujeto pasivo debe realizar una acción específica. Imaginemos que contratamos a un pintor para que pinte nuestra casa. En este caso, la prestación del pintor sería pintar nuestra casa, una acción concreta que él debe cumplir en virtud del acuerdo.
          .row.p-5.bg-white
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/39.png', alt='')
            .col-lg-7
              h4 Prestación de no hacer
              p.mb-0 Se refiere a cuando alguien se compromete a abstenerse de realizar una acción. Por ejemplo, si firmamos un contrato con nuestro vecino para que no construya un muro que bloquee nuestra vista, la prestación del vecino sería no construir dicho muro. Es un compromiso de no hacer algo que podría afectar nuestros derechos.

    .bg-full-width.bg-fondo-4
      .px-4.px-md-5.pb-md-3
        p(data-aos="fade-up") Es importante que cualquier prestación cumpla con ciertos requisitos: 

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/temas/43.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Determinada
                p.mb-0.text-center Clara y precisa.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/temas/44.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Posible
                p.mb-0.text-center Algo que se pueda cumplir.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/temas/45.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Lícita
                p.mb-0.text-center No contraria a la ley y moralmente aceptable.


    p.mb-4 Así se garantiza que las obligaciones sean justas y realizables.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .bg-color-1.p-4.mb-4(data-aos="fade-left" style="background-color: #dfe2e9")
              .row
                .col-lg-auto
                  img(src="@/assets/curso/temas/40.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 El elemento de garantía es fundamental para que las normas jurídicas tengan efecto. Sin una garantía, las normas serían simples sugerencias que la gente podría ignorar sin consecuencias. La garantía es lo que asegura que, si alguien no cumple con su obligación, habrá una sanción o una medida que obligue a respetar la norma.  
        p.mb-0 Por ejemplo, si alguien no paga una deuda a tiempo, el acreedor (banco o prestamista) puede recurrir a la justicia para exigir el cumplimiento, lo que podría derivar en embargos o en otras medidas legales. Esta es una forma de coerción, un mecanismo que permite que el Derecho sea efectivo.
          br
          br
          |#[b Las sanciones que forman parte de la garantía pueden ser:]
      .col-lg-4.col-7: img(src='@/assets/curso/temas/41.png', alt='')
    .row.justify-content-center
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/42.png', alt='')
      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Preventivas")
            p.mb-0 Impiden que se viole la norma. Un ejemplo sería la presencia de policías en las calles, para evitar los delitos.
          div(titulo="Represivas")
            p.mb-0 Se aplican cuando ya se ha violado la norma. Un ejemplo sería la pena de cárcel, para alguien que ha cometido un delito.
    p.mb-5 También es importante mencionar que las sanciones pueden ser de tipo restitutivo, lo que significa que buscan restaurar el equilibrio alterado por la violación de la norma. Por ejemplo, si alguien daña nuestra propiedad, puede ser obligado a repararla o a compensarnos económicamente, por los daños. 

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/68974?col_q=ingenier%C3%ADa__4.0&col_code=ELC034&prev=col" target="_blank" rel="noopener noreferrer") Burbano C. (2016) Reflexiones del derecho penal, público y privado. Ediciones USTA 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/oZymX_64mFg?si=m3-RTlU0adNd63xe" target="_blank" rel="noopener noreferrer") Manrique E. (29 de abril de 2023) Introducción a Dominio Público y diferencias entre Derecho Publico/Derecho Privado 
              
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Sistemas numéricos y álgebra de Boole',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'El Derecho y la Economía están desconectados, ya que el Derecho no regula actividades económicas.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es la función principal de las tolerancias en los planos técnicos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes es una vista adicional en dibujo técnico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'La proyección caballera presenta el objeto en:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: 'Una sección parcial en dibujo técnico muestra:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
