<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-4
      .col-7
        p.mb-4 Las prendas de vestir deben guardar coherencia con las necesidades del consumidor y para ello se debe tener en cuenta conceptos como el color, las tendencias, las ocasiones y la caracterización de los textiles.
        p.mb-4 Apropiarse de conceptos y metodologías permitirá que se conozca la fundamentación de la moda para realizar un vestuario sobre medida y a partir de las últimas tendencias.
        p.mb-4 La moda contempla líneas y gamas de mercado que posibilitan la creación y circulación de diversos productos que dan respuesta a las necesidades de los consumidores que, una vez agrupados, son identificados por estilos e inclinaciones que permiten visibilizar la aplicabilidad de las tendencias de moda.        
      .col-5
        figure
          img(src='@/assets/curso/introduccion/img01.svg', alt='Texto que describa la imagen', style='object-fit: none')
    
    p.mb-4 El consumidor es aquel agente activo que hace transformar todo un modelo de negocio, contrario a lo que a veces se piensa, pues es él quien posee el poder de compra, razón por la cual debe ser estudiado y analizado en torno a aquellas necesidades que busca suplir para que las marcas o personas que trabajan en el sector puedan identificarlas y abastecerlas.
    
    .cajon.color-primario.fondo-a.p-4.mb-5
      p Es por lo anterior que el presente componente abarca los conceptos que permitan viabilizar su aplicabilidad dentro de los procesos que se llevan a cabo en la materialización de producto, en este caso la producción de vestuario sobre medida.
    

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
