<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Esquemas de color

    p.mb-5 Los esquemas de color son un terminado y concepto incluido dentro de la teoría de color y hace referencia a las gamas y paletas que se establecen en el color a partir de análisis de círculos cromáticos; en este apartado se abordarán las paletas y técnicas para lograr la combinación ideal ligada al vestuario. Cuando se habla de color en términos generales, esto es aplicable a cualquier área, pues es universal, así que dependerá del aprendiz su uso y aplicabilidad de acuerdo con la propuesta y producto esperado. Por lo anterior, se plasmarán cuáles son los esquemas básicos de color.
    
    SlyderB.mb-4(:datos="datosSlyder")

    //.justify-content-center
    //.align-items-center
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Esquemas básicos',
        texto:
          'Son vistos dentro de la clasificación de color de acuerdo con su luz y la perspectiva de la persona que mira el color. La clasificación son: acromáticos, análogos, de choque, complementarios, monocromáticos, neutrales y complementarios divididos, también los esquemas primarios, secundarios y terciarios.',
        imagen: require('@/assets/curso/tema5/img01.svg'),
      },
      {
        titulo: 'Esquema acromático',
        texto:
          'Es aquel esquema sin color, en el que solo se encuentra el negro, el blanco y escala de grises.',
        imagen: require('@/assets/curso/tema5/img02.svg'),
      },
      {
        titulo: 'Esquema análogo',
        texto:
          'Utiliza cualquiera de los tres tonos consecutivos o cualquiera de sus tintes y matices del círculo cromático.',
        imagen: require('@/assets/curso/tema5/img03.svg'),
      },
      {
        titulo: 'Esquema de choque',
        texto:
          'Combina un color con el tono que está a la derecha o a la izquierda de su complemento en el círculo cromático.',
        imagen: require('@/assets/curso/tema5/img04.svg'),
      },
      {
        titulo: 'Esquema complementario',
        texto: 'Son los opuestos directos del círculo complementario.',
        imagen: require('@/assets/curso/tema5/img05.svg'),
      },
      {
        titulo: 'Esquema monocromático',
        texto:
          'Utiliza un tono en combinación con cualquiera de sus tintes y matices o con todos los presentes.',
        imagen: require('@/assets/curso/tema5/img06.svg'),
      },
      {
        titulo: 'Esquema neutral',
        texto:
          'Utiliza un tono que se ha disminuido o neutralizado con el agregado de su complemento o del negro, es decir de claros a oscuros de una misma gama.',
        imagen: require('@/assets/curso/tema5/img07.svg'),
      },
      {
        titulo: 'Esquema complementario dividido',
        texto:
          'Consta de un tono y los dos tonos a ambos lados de su complemento dentro del círculo cromático.',
        imagen: require('@/assets/curso/tema5/img08.svg'),
      },
      {
        titulo: 'Esquema primario',
        texto: 'Son todos los tonos puros del rojo, amarillo y azul.',
        imagen: require('@/assets/curso/tema5/img09.svg'),
      },
      {
        titulo: 'Esquema secundario',
        texto:
          'Surge de la combinación de los tonos primarios para obtenerse el verde, violeta y naranja.',
        imagen: require('@/assets/curso/tema5/img10.svg'),
      },
      {
        titulo: 'Esquema de triada terciario',
        texto:
          'Surge de una de dos combinaciones: naranja rojizo, verde amarillento y violeta azulado o verde azulado, naranja amarillento y violeta rojizo; todos los equidistantes uno del otro en el círculo cromático.',
        imagen: require('@/assets/curso/tema5/img11.svg'),
      },
      {
        titulo: 'Tétradas',
        texto:
          'Están formados por dos pares de colores complementarios para que en total sea una combinación de cuatro colores, con esta combinación se logran resultados muy llamativos.',
        imagen: require('@/assets/curso/tema5/img12.svg'),
      },
      {
        titulo: 'Colores complejos',
        texto:
          'Son aquellos colores que combinados representan cambio de textura o matiz, entre ellos se encuentran los metalizados o color fluorescentes.',
        imagen: require('@/assets/curso/tema5/img13.svg'),
      },
      {
        titulo: 'Discordancia y disonancia',
        texto:
          'En este punto es el que se puede jugar con las combinaciones en las que no necesariamente esté guiada según la regla de combinación, en el sector de la moda suele verse mucho para generar una estructura visual que se integre en el vestuario y genere una unidad visual llamativa.',
        imagen: require('@/assets/curso/tema5/img14.png'),
      },
      {
        titulo: 'Paletas según temperatura de color',
        texto:
          'Dentro de las paletas según la temperatura se encuentran los fríos y los cálidos.',
        imagen: require('@/assets/curso/tema5/img15.svg'),
      },
      {
        titulo: 'Paletas según temperatura de color',
        texto:
          'Dentro de las paletas según la temperatura se encuentran los fríos y los cálidos',
        imagen: require('@/assets/curso/tema5/img16.svg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
