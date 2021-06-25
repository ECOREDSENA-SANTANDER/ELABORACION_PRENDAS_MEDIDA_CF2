<template lang="pug">
.slyder-b
  ScrollHorizontal(v-if="datos.length" :selectedId="selected" item-full-width)
    .slyder-b__slyde(
      v-for="(item,index) in datos" 
      :key="'key-'+getId(index)"
      :id="getId(index)"
      style="overflow: hidden"
    )
      .row
        .col-lg-8.order-lg-2.mb-4.mb-lg-0
          .row.fondo-gris
            .col-2
            .col-8
              figure.slyder-b__img
                p.BorTit {{item.tituloImg}}
                img(:src='item.imagen', :alt='item.leyendaImagen')                
            .col-2
            figcaption.ms-0(v-if="item.leyendaImagen") {{item.leyendaImagen}}
          
        .col-lg-4.order-lg-1
          h3 {{item.titulo}}
          p.mb-3(v-html="item.texto")
          .slyder__action
            .slyder__pagination {{index+1}}/{{datos.length}}
            a.slyder__btn(v-if="index -1 >= 0" @click="selected = getId(index -1)")
              i.fas.fa-angle-left
            a.slyder__btn(
              v-if="index != datos.length -1"
              @click="selected = getId(index +1)"
              @mouseover="mostrarIndicador = false"
            )
              i.fas.fa-angle-right
              .indicador__container(v-if="mostrarIndicador && index === 0")
                .indicador--click.indicador--sm
</template>

<script>
import slyderMixins from '../../node_modules/ecored-base-pkg/src/mixins/slyderMixins'
import ScrollHorizontal from '../../node_modules/ecored-base-pkg/src/components/plantilla/ScrollHorizontal'
export default {
  name: 'SlyderTitulo',
  components: { ScrollHorizontal },
  mixins: [slyderMixins],
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.selected = this.getId(0)
  },
}
</script>

<style lang="sass"></style>
