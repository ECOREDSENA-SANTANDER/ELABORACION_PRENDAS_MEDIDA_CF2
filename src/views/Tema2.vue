<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Tendencias      

    .row.mb-4
      .col-7.d-flex.align-items-center
        div
          p Una tendencia hace referencia a una inclinación o disposición (tangible o intangible) que tiene un grupo, comunidad o sociedad hacia un elemento o grupos de elementos, por lo que una tendencia puede originar gustos por elementos de diferentes áreas, incluso generar coincidencia o adaptación de ideas y hasta corrientes que surgen de una sociedad. 
          p Como se ha mencionado anteriormente, las tendencias tienden a nacer de múltiples factores que se representan en el sistema moda, funcionando a su vez como respuesta a un fenómeno cargado de simbolismos en el vestuario lo cual produce que se masifique dicha tendencia.  En el sector de la moda las tendencias están unidas a su vez a los estilos de los consumidores, es por ello que es importante entenderlas para comprender el porqué de su aplicabilidad en el sector.
      .col-5.d-flex.align-items-center.justify-content-center
        figure
          img(src='@/assets/curso/tema2/img01.svg', alt='Texto que describa la imagen')

    .row.mb-4
      .col-6.d-flex
        .cajon.color-primario.fondo-a.p-4.mb-4        
          Strong ¿De dónde nacen las tendencias de moda?
          p Hay varios aspectos y sucesos que permiten el nacimiento de tendencias las cuales son tomadas por la moda para su expresión en el vestuario, estas pueden tener su origen en:
          .row
            .col-1
            .col-11
              ul.lista-ul--color
                li 
                  i(style="color: #EDE3B7").far.fa-dot-circle
                  p Las macrotendencias.
                li 
                  i(style="color: #EDE3B7").far.fa-dot-circle
                  p Las pasarelas de los grandes diseñadores del mundo.
                li 
                  i(style="color: #EDE3B7").far.fa-dot-circle
                  p El análisis y conocimiento del consumidor.
                li 
                  i(style="color: #EDE3B7").far.fa-dot-circle
                  p Los referentes influyentes en la sociedad, como los grandes personajes que son seguidos por millones de individuos.

      .col-6
        .cajon.color-acento-contenido.fondo-b.p-4.mb-4        
          Strong ¿Las tendencias son impuestas?
          p No, porque estas nacen de un contexto histórico, social, cultural, político, religioso y lingüístico, es decir, es una construcción colectiva de todos los seres humanos porque nacen de la sociedad misma y de su evolución en cuanto a sus demandas con el mundo. Sus principales características son:
          .row
            .col-1
            .col-11
              ul.lista-ul--color
                li 
                  i.far.fa-dot-circle
                  strong.me-1 Ritmo:
                  | forma en la que sucede y se alternan una serie de dinámicas, conceptos y sentires que componen la tendencia
                li 
                  i.far.fa-dot-circle
                  strong.me-1 Información:
                  | toda la variedad de información que pueden complementar el concepto de la tendencia.
                li 
                  i.far.fa-dot-circle
                  strong.me-1 Diversificación:
                  | diferentes variables en donde se puede manifestar la tendencia, sus conceptos e historias.
                li 
                  i.far.fa-dot-circle
                  strong.me-1 Tecnología:
                  | medios por los cuales se revela la información y su implementación.                
    
    figure.mb-5
      .video
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/zqxRNVjvi8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    

    p.mb-4.text-center 
      strong De acuerdo con la información anterior, las tendencias de moda se pueden clasificar en: 
      
    TabsA.color-acento-contenido.mb-4
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Macrotendencias")
        .row
          .col-10.d-flex.align-items-center
            p Tendencias donde se involucran muchas áreas, sistemas productivos y aspectos emocionales que no solo toca a un país, sino que hace mover al mundo entero; un ejemplo de ello es la sostenibilidad en pro del cuidado del medioambiente, otro puede ser la importancia de la salud y hábitos saludables, generando fenómenos a gran escala como el vegano.
          .col-2.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema2/img02.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Metatendencias")
        .row
          .col-10.d-flex.align-items-center
            p Enfocadas hacia un cambio multidimensional, por oposición a un cambio lineal o secuencial. Son los cambios sustanciales en la estructura socioeconómica (Novik, 2020), hay autores que afirman que las metatendencias son determinantes para la formación de las macrotendencias.
          .col-2.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema2/img03.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Microtendencias")
        .row
          .col-10.d-flex.align-items-center
            p Son originadas por las macrotendencias, pero son pasajeras, cambian cada temporada, revolucionan el mercado, abren un abanico de posibilidades y promueven el consumo masivo.
          .col-2.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema2/img04.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Difusión de tendencias")
        .row
          .col-10.d-flex.align-items-center
            p La moda posibilita el hecho de que se difundan las tendencias que generan el mismo fenómeno “adaptación por las masas al uso de algo”. Si bien la moda se basa en ellas, hay que tener presente que para muchos la moda es distinción y en muchas ocasiones las personas se vuelven imitadoras de sus referentes, de ahí que sean influyentes en la creación de tendencias de moda.
          .col-2.d-flex.align-items-center.justify-content-center
            figure
              img(src='@/assets/curso/tema2/img05.svg', alt='Texto que describa la imagen')
        

    .row.fondo-a.mb-5
      .col-md-1
      .col-md-3.py-5
        figure
          img(src='@/assets/curso/tema2/img14.svg', alt='Texto que describa la imagen')
      .col-md-1
      .col-md-6.d-flex.align-items-center
        div
          .titulo-segundo
            h2 Clasificación de las tendencias de moda
          p De acuerdo con la información anterior, las tendencias de moda se pueden clasificar en 4 grupos. 
          a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/Infografia tendencias de moda +.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
      .col-md-1

    //.justify-content-center
    //.align-items-center

    //- Desde aca comentario
    
    //- Hasta aca comentario
    p.mb-3.text-center
      strong Así, para la comprensión de la difusión de tendencias es necesario comprender las siguientes teorías:

    .row
      .col-1
      .col-10
        hr(style="color:#FFAD54")    
      .col-1
    .row
      .col-1
      .col-1.d-flex.align-items-center.justify-content-center
        figure.w-75
          img(src='@/assets/curso/tema2/img06.svg', alt='Texto que describa la imagen')
      .col-9.d-flex.align-items-center
        div
          p.mb-2
            strong Trickle Down o transmisión vertical hacia abajo
          p Propuesta por George Simmel en 1905, enfocada en que la difusión es impuesta por las clases altas en un afán de distinción y muestra a toda la sociedad, esto incluye clases sociales bajas; es decir, la moda se impone bajo un modelo de imitación y es aquí donde las clases bajas toman estos referentes y los apropian.
      .col-1
    .row
      .col-1
      .col-10
        hr(style="color:#FFAD54")    
      .col-1
    .row
      .col-1
      .col-1.d-flex.align-items-center.justify-content-center
        figure.w-75
          img(src='@/assets/curso/tema2/img07.svg', alt='Texto que describa la imagen')
      .col-9.d-flex.align-items-center
        div
          p.mb-2
            strong Trickle Across o transmisión horizontal
          p Planteada por Charles W. King en 1963, en la que influyen factores tanto sociales y culturales como ambientes sociales en constante evolución, el impacto que los medios de comunicación ejercen en el público e incluye a todas las clases sociales; aquí la mercadotecnia está enfocada en las diversas estrategias para su distribución, no necesita validación externa y surge de las clases sociales altas.
      .col-1
    .row
      .col-1
      .col-10
        hr(style="color:#FFAD54")    
      .col-1
    .row.mb-4
      .col-1
      .col-1.d-flex.align-items-center.justify-content-center
        figure.w-75
          img(src='@/assets/curso/tema2/img08.svg', alt='Texto que describa la imagen')
      .col-9.d-flex.align-items-center
        div
          p.mb-2
            strong Trickle Up o transmisión vertical hacia arriba
          p Formulada por George A. Fiel en 1970, similar a la primera, afirma que no necesariamente la clase alta impone o difunde las tendencias, sino que también funciona desde las clases inferiores hacia arriba, esto es generado por fenómenos como la apropiación de culturas, estilos y estéticas.
      .col-1

    .row.mb-4
      .col-1
      .col-10.d-flex
        .cajon.color-primario.fondo-a.p-4   
          p Fenómenos como la globalización ha generado que las sociedades y culturas se apropien de otras en cuanto a estilos, esto para muchos diseñadores ha servido como fuente de inspiración para la creación de colecciones.
      .col-1
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
}
</script>

<style lang="sass" scoped></style>
