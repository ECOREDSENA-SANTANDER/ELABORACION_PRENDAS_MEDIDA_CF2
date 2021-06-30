<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Tipologías de prendas   

    p.mb-4 Una tipología es el estudio de los tipos o modelos que se usan para clasificar diversos elementos; en lo referente a la moda, las tipologías de prendas permitirán basarse en la división del cuerpo para prendas inferiores y prendas superiores tal como se observa en la siguiente imagen.  
    
    .row.mb-4
      .col-2
      .col-8
        figure
          p.BorTit 
            b Figura 10. 
            | Figurín
          img(src='@/assets/curso/tema2/img09.svg', alt='Texto que describa la imagen')
          figcaption Nota. Tomada de Pinterest (2021).
      .col-2

    .row.mb-4
      .col-2
      .col-8
        a.anexo.mb-1(:href="obtenerLink('/downloads/CF2_Anexo3_Perfil_Consumidor.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            strong Anexo.
            | Perfil del consumidor.
            p Conoce la información relacionada con las prendas superiores, prendas inferiores, tipología de cuellos y complementos.
        a.anexo.mb-1(:href="obtenerLink('/downloads/CF2_Anexo4_Moodboard_Tableros_Creativos.pdf')" target="_blank")          
          .anexo__texto
            strong Anexo.
            | Cuadro metamórfico.
            p Conocer cómo se logra variedad de diseños rápidamente, facilita la realización de evoluciones y modificaciones de diseño en una colección sin que se pierda la coherencia conceptual.

      .col-2

    .row.mb-5
      .col-4  
      .col-4        
        figure
          p.BorTit 
            b Figura 11. 
            | Cuadro metamórfico
          img(src='@/assets/curso/tema2/img10.png', alt='Texto que describa la imagen')
      .col-4

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

    .row.mb-4
      .col-2
      .col-8       
        figure
          p.BorTit 
            b Figura 12.
            | Prendas por separado
          img(src='@/assets/curso/tema2/img11.png', alt='Texto que describa la imagen')
      .col-2

    p.mb-4 Una vez establecidos los tres puntos anteriores se organiza la información de las ideas utilizando un esquema tipo tabla para generar varias opciones de cada una de esas partes (estas deben estar en coherencia con lo que se pretende generar y lo que le brinde pertenencia al consumidor al cual va dirigido).

    
    .row.mb-4
      .col-3
      .col-6        
        figure
          p.BorTit 
            b Figura 13. 
            | Ejemplo de un cuadro metamórfico de prendas
          img(src='@/assets/curso/tema2/img12.png', alt='Texto que describa la imagen')
      .col-3
    
    p.mb-4 A continuación, se presenta el cuadro metamórfico de una prenda tipo blazer.
    
    .row.mb-4
      .col-3
      .col-6       
        figure
          p.BorTit 
            b Figura 14. 
            | Tipología blazer
          img(src='@/assets/curso/tema2/img13.png', alt='Texto que describa la imagen')
      .col-3
    //.justify-content-center
    //.align-items-center
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
}
</script>

<style lang="sass" scoped></style>
