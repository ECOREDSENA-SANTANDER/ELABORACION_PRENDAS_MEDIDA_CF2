<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Tendencias                   
    
    figure.mb-5
      .video
        iframe(width="1280" height="720" src="https://www.youtube.com/embed/zqxRNVjvi8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    

    .row.fondo-c.mb-5
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
          a.boton.color-secundario.me-3(:href="obtenerLink('downloads/Infografia_tendencias_de_moda.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
      .col-md-1

    //.justify-content-center
    //.align-items-center

    //- Desde aca comentario
    
    //- Hasta aca comentario
    p.mb-3.text-center.py-4
      strong Así, para la comprensión de la difusión de tendencias es necesario comprender las siguientes teorías:


    .row.mb-4.py-4
      .col-lg-4
        .tarjeta-avatar
              img(src='@/assets/curso/tema2/1.svg' alt='AvatarTop')
              .tarjeta.color-verde
                .p-4
                  h2.text-center #[em Trickle Down] o transmisión vertical hacia abajo:   
                  p.text-center.mb-0 Propuesta por George Simmel en 1905, enfocada en que la difusión es impuesta por las clases altas en un afán de distinción y muestra a toda la sociedad, esto incluye clases sociales bajas; es decir, la moda se impone bajo un modelo de imitación y es aquí donde las clases bajas toman estos referentes y los apropian.
      .col-lg-4
        .tarjeta-avatar
              img(src='@/assets/curso/tema2/2.svg' alt='AvatarTop')
              .tarjeta.color-verde
                .p-4
                  h2.text-center #[em Trickle Across] o  transmisión horizontal:   
                  p.text-center.mb-0 Planteada por Charles W. King en 1963, en la que influyen factores tanto sociales y culturales como ambientes sociales en constante evolución, el impacto que los medios de comunicación ejercen en el público e incluye a todas las clases sociales; aquí la mercadotecnia está enfocada en las diversas estrategias para su distribución, no necesita validación externa y surge de las clases sociales altas. 
      .col-lg-4
        .tarjeta-avatar
              img(src='@/assets/curso/tema2/3.svg' alt='AvatarTop')
              .tarjeta.color-verde
                .p-4
                  h2.text-center #[em Trickle Up] o transmisión vertical hacia arriba:   
                  p.text-center.mb-0 Formulada por George A. Fiel en 1970, similar a la primera, afirma que no necesariamente la clase alta impone o difunde las tendencias, sino que también funciona desde las clases inferiores hacia arriba, esto es generado por fenómenos como la apropiación de culturas, estilos y estéticas. 
    .row.mb-4.py-4
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
