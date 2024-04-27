<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Tipologías de prendas   

    p.mb-4 Una tipología es el estudio de los tipos o modelos que se usan para clasificar diversos elementos; en lo referente a la moda, las tipologías de prendas permitirán basarse en la división del cuerpo para prendas inferiores y prendas superiores tal como se observa en la siguiente imagen.  
    
    .row.justify-content-center.align-items-center
      .col-lg-4
        figure
        .titulo-quinto.color-acento-contenido
          h4 Figura 10
            p Figurín
        img(src='@/assets/curso/tema3/img09.svg', alt='En la imagen se presenta el bosquejo dibujado de dos cuerpos humanos desnudos, uno mirando hacia adelante, y la otra mirando hacia atrás')
        figcaption Nota. Tomada de Pinterest (2021).

      .py-4
      .row.align-items-center.justify-content-center(data-aos="flip-up")
        .col-lg-10 
          .tarjeta.tarjeta-descarga.color-verde.p-4.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/pdf.svg")  
              .col 
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.text-small #[b Anexo.] Perfil del consumidor. 
                    .text-small Conoce la información relacionada con las prendas superiores, prendas inferiores, tipología de cuellos y complementos.
                  .col-sm-auto
                    a.boton.color-secundario.texto-blanco(:href="obtenerLink('/downloads/CF2_Anexo3_Perfil_Consumidor.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-download

        .col-lg-10 
          .tarjeta.tarjeta-descarga.color-verde.p-4.mb-5
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/pdf.svg")  
              .col 
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    p.text-small #[b Anexo.] Cuadro metamórfico.
                    .text-small Conocer cómo se logra variedad de diseños rápidamente, facilita la realización de evoluciones y modificaciones de diseño en una colección sin que se pierda la coherencia conceptual.
                  .col-sm-auto
                    a.boton.color-secundario.texto-blanco(:href="obtenerLink('/downloads/CF2_Anexo4_Moodboard_Tableros_Creativos.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-download

    .py-2
    p.mb-4 Para conocer las bases del cuadro metamórfico se debe: 

    div.mb-4.px-5
        ul.lista-ul--color
          li 
            i.far.fa-dot-circle            
            | Determinar las tipologías que se van a trabajar, por ejemplo: solo camisas, chaquetas, faldas, etc.
          li 
            i.far.fa-dot-circle            
            | Definir el tipo de silueta de la prenda, por ejemplo: camisas rectas, faldas holgadas, chaquetas ajustadas, etc.
          li 
            i.far.fa-dot-circle            
            | Visualizar las partes de las prendas por separado, por ejemplo, de la camisa, el cuello, la botonera, la manga, el puño, los bolsillos y así sucesivamente con las prendas a trabajar, este punto es importantísimo.
    .py-3
    .row.mb-5
      .col-lg-4    
        figure
        .titulo-quinto.color-acento-botones
          h4 Figura 11
            p Cuadro metamórfico
        img(src='@/assets/curso/tema2/img10.png', alt='Texto que describa la imagen')
        .text-small.py-2 Un cuadro que presenta las diferentes secciones que se deben tener en cuenta al momento de elegir detalles de una prenda de vestir.
      .col-lg-8     
        figure
        .titulo-quinto.color-acento-botones
          h4 Figura 12
            p Prendas por separado     
        img(src='@/assets/curso/tema2/img11.png', alt='Texto que describa la imagen')
        .text-small.py-2 Cuadro que enuncia individualmente las diferentes partes de las prendas:  cuellos, escotes, bolsillos. sistema de cierre mangas y sistema de ajuste.

    p.mb-4 Una vez establecidos los tres puntos anteriores se organiza la información de las ideas utilizando un esquema tipo tabla para generar varias opciones de cada una de esas partes (estas deben estar en coherencia con lo que se pretende generar y lo que le brinde pertenencia al consumidor al cual va dirigido).

    
    .row.mb-4
      .col-3
      .col-6        
        figure
        .titulo-quinto.color-acento-botones
          h4 Figura 13
            p Ejemplo de un cuadro metamórfico de prendas  
        img(src='@/assets/curso/tema2/img12.png', alt='Texto que describa la imagen')
        .text-small.py-2 La imagen es una cuadricula donde se presentan varias opciones para: la silueta de la prenda, el cuello, las mangas, el bolsillo, el sistema de cierre y el puño.
      .col-3
    
    p.mb-4 A continuación, se presenta el cuadro metamórfico de una prenda tipo blazer.
    
    .row.align-items-center.justify-content-center(data-aos="flip-up")
      .col-lg-10     
        figure
        .titulo-quinto.color-acento-botones 
          h4 Figura 14. 
            p Tipología blazer
        img(src='@/assets/curso/tema2/img13.png', alt='Texto que describa la imagen')
        p.py-4 La imagen presenta un cuadro metamórfico de un blazer, donde se elige una opción por cada fila y luego se evidencia el resultado final que es el blazer.
      .col-3

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
}
</script>

<style lang="sass" scoped></style>
