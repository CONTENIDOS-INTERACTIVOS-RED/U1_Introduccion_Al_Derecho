<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:titulo="'Unidad 1. Conceptos fundamentales del Derecho'" :subTitulo="'2. El Derecho como sistema normativo'")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5.pb-0.overflow-hidden
    .bg-color-4.mb-5(data-aos="fade-up" style="background-color: #efeadd ")
      .row.justify-content-center.align-items-center
        .col-lg.order-2
          .p-4
            p.mb-0(data-aos="fade-up")  El Derecho, como sistema normativo, es una de las concepciones más fundamentales dentro del estudio de la ciencia jurídica. Esta visión sostiene que el Derecho está compuesto por un conjunto de normas o reglas que regulan la conducta de los individuos, en la sociedad. Estas normas no son simplemente sugerencias o recomendaciones, sino que tienen un carácter obligatorio y coercitivo, lo que significa que su incumplimiento puede generar sanciones por parte del Estado u otras instituciones encargadas de hacer cumplir el Derecho.
        .col-lg-auto
          figure
            img(src='@/assets/curso/temas/7.png', alt='')
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        p.mb-4 En términos generales:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/temas/8.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2.text-center ¿Qué es un sistema normativo?
                p.mb-0.text-center Un sistema normativo es un conjunto estructurado de reglas que busca regular ciertos comportamientos o acciones dentro de un grupo social. En el caso del Derecho, estas normas están diseñadas para garantizar el orden, la justicia y la convivencia pacífica entre las personas. 
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/temas/9.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2.text-center ¿Qué distingue al Derecho de otros sistemas normativos?
                p.mb-0.text-center Lo que distingue al Derecho de otros sistemas normativos, como la Moral o las reglas de etiqueta, es su carácter coercitivo y su dependencia del Estado. Es decir, el Derecho no solo establece lo que las personas deben o no deben hacer, sino que, además, prevé mecanismos para hacer cumplir esas normas mediante sanciones que pueden incluir multas, penas privativas de la libertad o el uso de la fuerza pública.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p.mb-4 Dicho de otra manera, el Derecho no es un conjunto desorganizado de reglas, sino que funciona de manera jerárquica y coordinada. A nivel normativo, existe una jerarquía de normas donde la Constitución de cada país ocupa el lugar más alto, seguida de leyes, reglamentos, decretos y otras disposiciones normativas de menor rango. Esta estructura jerárquica permite que las normas de rango inferior, no puedan contradecir las de rango superior, lo que garantiza la coherencia interna del sistema jurídico. 
        .bg-color-1.p-4.mb-4(data-aos="fade-left" style="background-color: #fbf8e2")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Por ejemplo, en el caso colombiano, la Constitución Política es la norma suprema, y todas las demás leyes y reglamentos deben ajustarse a los principios y derechos consagrados en ella. Así, el sistema normativo del Derecho, funciona bajo el principio de unidad y coherencia: todas las normas están interrelacionadas y deben ajustarse a un marco legal que garantice su armonía y aplicabilidad. 
        p.mb-0 Ahora bien, dentro del Derecho las normas pueden clasificarse de diferentes maneras:
      .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/11.png', alt='')
    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Normas sustantivas" :icon="require('@/assets/curso/temas/12.svg')" style="background-color: #f3f3f3" )
        .row
          .col-lg-4.col-7.mb-lg-0.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/13.png', alt='') 
          .col-lg-8
            h4 Normas sustantivas
            p Son aquellas que regulan directamente los derechos y deberes de las personas, como el derecho a la propiedad o la obligación de cumplir un contrato.
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Normas adjetivas" :icon="require('@/assets/curso/temas/12.svg')" style="background-color: #f3f3f3" )
        .row
          .col-lg-4.col-7.mb-lg-0.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/14.png', alt='') 
          .col-lg-8
            h4 Normas adjetivas
            p Son aquellas que establecen los procedimientos para hacer efectivos esos derechos, como las normas procesales que regulan cómo se debe llevar a cabo un juicio o cómo se deben presentar pruebas.
    
    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        p.mb-4.fw-bold Asimismo, las normas pueden ser:
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/temas/15.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2.text-center Imperativas
                p.mb-0.text-center Son aquellas que no permiten a las partes, modificarlas por acuerdo privado, como las leyes penales que establecen qué conductas son delitos y qué sanciones corresponden a cada uno 
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card.h-100
              img.custom-image-card__image(src="@/assets/curso/temas/16.png" alt="")
              .custom-image-card__text.p-4
                h4.mb-2.text-center Dispositivas
                p.mb-0.text-center  Son aquellas que las personas pueden modificar mediante acuerdos privados, siempre que no contravengan el orden público, como ciertos aspectos de los contratos. 
    p.mb-4 Es por ello que una de las características más relevantes del sistema normativo jurídico, es que tiende a funcionar como un sistema cerrado, es decir, las soluciones a los problemas jurídicos deben buscarse dentro del propio sistema normativo. Esto significa que cualquier vacío o ambigüedad en una norma, debe resolverse aplicando otras normas del mismo sistema, sin recurrir a fuentes externas. Este principio, sin embargo, no excluye la posibilidad que los jueces utilicen principios generales del Derecho, doctrina o jurisprudencia, para llenar los vacíos legales cuando las normas específicas no son suficientes. 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .p-5.mb-4(style="background-color: #efeadd ") 
          p.mb-0 El jurista Hans Kelsen, en su Teoría Pura del Derecho, planteó que el Derecho debe ser visto como un sistema normativo autónomo y cerrado, donde cada norma se sustenta en una norma superior, y todas se subordinan a una norma fundamental que, en la mayoría de los casos, sería la Constitución. Para Kelsen, el sistema normativo es como una pirámide, en la que cada norma obtiene su validez de la norma que está por encima de ella. 
        p.mb-0 Resulta entonces válido decir que el objetivo principal del Derecho como sistema normativo, es el de proporcionar un marco regulador que permita la convivencia pacífica y el respeto mutuo dentro de una sociedad. El Derecho garantiza el cumplimiento de las obligaciones y el ejercicio de los derechos a través de normas que se imponen a todos los individuos, asegurando que haya consecuencias para aquellos que no las respeten. Esto no solo garantiza la justicia y el orden social, sino que también ofrece seguridad jurídica, es decir, la certeza que las normas se aplicarán de manera previsible y uniforme.
          br
          br
          |#[b Antes de concluir este acápite, resulta pertinente señalar que:]
      .col-lg-5.col-7: img(src='@/assets/curso/temas/17.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/18.png', alt='')
      .col-lg-7(data-aos="fade-left")
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="El Derecho como sistema normativo")
            p.mb-0 Es una estructura compleja y organizada de normas que regulan las conductas de las personas, en una sociedad.
          div(titulo="Función del Derecho como sistema normativo")
            p.mb-0 Garantizar el orden, la justicia y la convivencia pacífica, mediante la imposición de reglas de comportamiento que son coercibles.
          div(titulo="El Derecho como garante de la seguridad jurídica")
            p.mb-0 Es jerárquico, coherente y, en muchos casos, cerrado, lo que asegura que las normas sean aplicadas de manera sistemática y respeten una estructura legal, que tiene como norma suprema, la Constitución.
              br
              br
              |Permite que las personas interactúen dentro de un marco de previsibilidad y protección de derechos.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] El Derecho y su relación con otras ciencias

    .row.align-items-center.mb-5
      .col-lg-auto.order-2
        img(src="@/assets/curso/temas/19.svg", style="max-width: 150px").mx-auto
      .col-lg-10
        p.mb-0 El Derecho, como una de las ciencias sociales más relevantes, no puede ser estudiado ni comprendido en aislamiento de otras disciplinas. Debido a que el Derecho regula las interacciones humanas dentro de un grupo social, su análisis requiere de una interacción constante con otras ciencias, que también se enfocan en el estudio de la conducta humana y social. #[b Entre estas disciplinas se encuentran la Moral, la Sociología, la Economía, la Psicología, y la Historia, todas con relaciones importantes que enriquecen y complementan el estudio y la práctica jurídica:]
    
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo='b')
          .row.p-5.bg-white
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/20.png', alt='')
            .col-lg-7
              h4 Derecho y Moral
              p.mb-0 La Moral y el Derecho son disciplinas normativas; es decir, ambas establecen reglas de conducta para los individuos que viven en sociedad. Sin embargo, aunque persiguen el mismo objetivo de orientar el comportamiento humano, son ciencias autónomas y con objetos diferentes. Mientras que la Moral  regula la conducta interna del individuo y busca su perfeccionamiento personal, el Derecho se ocupa de las relaciones interpersonales y regula la conducta externa, imponiendo reglas de convivencia y asegurando la justicia. Según Radbruch (1955), el Derecho se concentra en las consecuencias externas de los actos humanos, mientras que la Moral  valora las intenciones detrás de esas acciones. Además, el Derecho es coercible, lo que significa que sus normas pueden imponerse por la fuerza, mientras que la Moral no lo es, dependiendo únicamente de la conciencia del individuo y su disposición para cumplir con sus preceptos (Durkheim, 1922).
          .row.p-5.bg-white
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/21.png', alt='')
            .col-lg-7
              h4 Derecho y Sociología
              p.mb-0 La Sociología es la ciencia que estudia los fenómenos sociales y las interacciones entre los individuos en una sociedad. Al igual que el Derecho, la Sociología se enfoca en la realidad social, aunque lo hace desde una perspectiva más descriptiva y analítica. La Sociología analiza los hechos sociales y trata de descubrir las leyes que los rigen, mientras que el Derecho busca establecer normas que regulen esos hechos para garantizar el orden social. El sociólogo Émile Durkheim, definía la Sociología como el estudio de los hechos sociales como cosas, analizando sus causas y consecuencias, mientras que el jurista se enfoca en construir un sistema normativo que se adapte a las realidades sociales descubiertas por el sociólogo (Comte, 1875).
          .row.p-5.bg-white
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/22.png', alt='')
            .col-lg-7
              h4 Derecho y Economía
              p.mb-0 La Economía y el Derecho están profundamente interrelacionados, debido a que muchas normas jurídicas tienen como objetivo regular  la producción, distribución y consumo de bienes. La Economía estudia cómo los individuos y las sociedades utilizan los recursos escasos para satisfacer sus necesidades, y el Derecho proporciona el marco normativo que regula estas actividades económicas. Según la teoría marxista, el Derecho es una superestructura derivada de la base económica, es decir, que las normas jurídicas están determinadas en última instancia, por las condiciones económicas de la sociedad. Aunque esta postura ha sido matizada con el tiempo, es innegable que los sistemas jurídicos deben adaptarse a las realidades económicas para ser efectivos. Las relaciones entre el Derecho y la Economía, son evidentes en campos como el Derecho comercial, laboral y tributario, donde las normas jurídicas se estructuran para facilitar y regular las transacciones económicas.
          .row.p-5.bg-white
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/23.png', alt='')
            .col-lg-7
              h4 Derecho y Psicología
              p.mb-0 La Psicología estudia los fenómenos psíquicos y las motivaciones humanas, por lo que es fundamental para el Derecho en el análisis de comportamientos individuales en situaciones legales. Muchos aspectos del Derecho, como la responsabilidad penal y la capacidad para realizar actos jurídicos, se basan en la comprensión de los estados mentales y emocionales de los individuos. Por ejemplo, la Psicología juega un papel crucial en el análisis de eximentes como el estado de necesidad o la legítima defensa, en los cuales la conducta del individuo está influenciada por factores psicológicos, como el miedo o el estrés (Fingerman, 1973).
          .row.p-5.bg-white
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/24.png', alt='')
            .col-lg-7
              h4 Derecho e Historia
              p.mb-0 La Historia del Derecho analiza cómo han surgido y evolucionado los sistemas jurídicos a lo largo del tiempo. Esto es crucial para comprender el Derecho contemporáneo, puesto que muchas normas actuales son el resultado de procesos históricos que responden a las necesidades y cambios sociales. Según Radbruch (1955), el estudio del Derecho a lo largo de su historia, permite a los juristas extraer lecciones valiosas sobre la aplicación y la efectividad de las normas en diferentes contextos sociales. Además, el Derecho Comparado, que analiza los sistemas jurídicos de diferentes países y épocas, permite a los legisladores y juristas, adoptar las mejores prácticas para mejorar su propio sistema jurídico.
          .row.p-5.bg-white
            .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/25.png', alt='')
            .col-lg-7
              h4 Otras ciencias
              p.mb-0 El Derecho también interactúa con otras ciencias más allá de las sociales. Ciencias como la Biología, la Química, la Física, la Lógica y las Matemáticas, colaboran en campos específicos del Derecho, como el Derecho Penal y la Criminalística, proporcionando herramientas y métodos para el análisis de pruebas y la resolución de casos. Por ejemplo, la Toxicología y la Balística son fundamentales en las investigaciones criminales para determinar las causas de muerte o la trayectoria de una bala, respectivamente.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg-color-1.p-4(data-aos="fade-left" style="background-color: #efeadd")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/26.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Podemos concluir entonces que el estudio del Derecho está intrínsecamente ligado al conocimiento de otras ciencias. Sin una comprensión adecuada de disciplinas como la Moral, la Sociología, la Economía, la Psicología y la Historia, el Derecho, sería incapaz de adaptarse a las complejas realidades sociales a las que debe dar respuesta. De hecho, muchos de los avances más importantes en el desarrollo del Derecho, han surgido de la interacción con estas otras disciplinas, lo que ha permitido crear sistemas jurídicos más justos, eficaces y adaptados a las necesidades de la sociedad. Como lo menciona Bodenheimer (1994), el Derecho no puede ser un sistema cerrado; necesita nutrirse del conocimiento proporcionado por otras ciencias, para cumplir adecuadamente su función como regulador de la vida social.  

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2 MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/53460?col_q=ingenier%C3%ADa__4.0&col_code=ELC034&prev=col" target="_blank" rel="noopener noreferrer") Zapatero, V (2008) El derecho como proceso normativo: lecciones de teoría del derecho. Editorial Universidad de Alcalá. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/FhJhQK8IlB4?si=mxIS_AO-4N9ElIsy" target="_blank" rel="noopener noreferrer") BCN Chile (20 de abril 2017) Acceso a la Información Jurídica, Certeza Jurídica y Ejercicio de Derechos
              
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
