<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.m-4 La moda contempla líneas y gamas de mercado que posibilitan la creación y circulación de diversos productos que dan respuesta a las necesidades de los consumidores que, una vez agrupados, son identificados por estilos e inclinaciones que permiten visibilizar la aplicabilidad de las tendencias de moda.
    p.m-4 El consumidor es aquel agente activo que hace transformar todo un modelo de negocio, contrario a lo que a veces se piensa, pues es él quien posee el poder de compra, razón por la cual debe ser estudiado y analizado en torno a aquellas necesidades que busca suplir para que las marcas o personas que trabajan en el sector puedan identificarlas y abastecerlas.
    p.m-4 Es por lo anterior que el presente componente abarca los conceptos que permitan viabilizar su aplicabilidad dentro de los procesos que se llevan a cabo en la materialización de producto, en este caso la producción de vestuario sobre medida.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
