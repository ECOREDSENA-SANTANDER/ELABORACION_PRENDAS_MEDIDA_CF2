<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Los textiles  

    figure.mb-5
      img(src='@/assets/curso/tema4/img01.svg', alt='Texto que describa la imagen')

    #t_4_1.titulo-segundo
      h2 4.1  Fibras textiles

    p.mb-4 Es la materia sólida unitaria de cualquier estructura textil. La fibra es cada uno de los filamentos que componen las unidades fundamentales en la fabricación de hilos, textiles y telas; se considera filamento cuando la longitud de este es superior a su diámetro.
    
    .row.mb-5
      .col-1
      .col-10          
        figure
          p.BorTit 
            b Figura 14. 
            | Fibras textiles 
          img(src='@/assets/curso/tema4/img02.svg', alt='Texto que describa la imagen')
          figcaption Nota. Tomada de Pinterest(2021)
      .col-1

    #t_4_2.titulo-segundo
      h2 4.2 Clasificación de las fibras

    p.mb-4 Las fibras se clasifican, según su origen, en dos grandes grupos, las naturales y químicas y estas a su vez se subdividen en otros; en la siguiente tabla se observa esta clasificación.
    
    p.BorTit 
      b Tabla 2. 
      | Clasificación de las fibras
    .tabla-b.color-acento-contenido.mb-1     
      table.sin-fondo.border        
        tr.sin-fondo.border
          th.fondo-color-acento-contenido.texto-blanco.border.text-center(rowspan=7) 
            h4 Fibras naturales
          th.fondo-gris.border.text-center(rowspan=2) 
            h4 Animales
          td.border Procedentes de glándulas sedosas.
          td.border Seda, seda salvaje.
        tr.sin-fondo.border
          td.border Procedentes de folículos pilosos.
          td.border Pelo de alpaca, angora, buey, caballo, conejo, castor, camello, cachemira, cabra guanaco, llama, nutria, vicuña, yak.
        
        tr.sin-fondo.border
          th.border.text-center(rowspan=4) 
            h4 Vegetales
          td.border Procedentes de las semillas.
          td.border Algodón.
        tr.sin-fondor.border
          td.border Procedentes del tallo.
          td.border Lino, cáñamo, yute, ramio.
        tr.sin-fondo.border
          td.border Procedentes de la hoja.
          td.border Esparto, sisal.
        tr.sin-fondo.border
          td.border Procedentes del fruto.
          td.border Coco.

        tr.sin-fondo.border
          th.fondo-gris.border.text-center(rowspan=4) 
            h4 Minerales
          td.border(colspan=2) Asbestos, fibra de vidrio, fibra de carbono.          

    .tabla-b.color-acento-contenido.mb-5      
      table.sin-fondo.border
        caption Tomada de: el rincón de celestecielo (2015)
        tr.sin-fondo.border
          th.fondo-color-acento-contenido.texto-blanco.border.text-center(rowspan=6) 
            h4 Fibras químicas
          th.fondo-gris.border.text-center(rowspan=3) 
            h4 Artificiales
          td.border Base proteínica.
          td.border De la caseína de la leche (fibroína), de algas (alginato).
        tr.sin-fondo.border         
          td.border Base celulósica.
          td.border Rayones (viscosa, cupro, acetato).
        tr.sin-fondo.border         
          td.border Base metálica.
          td.border Oro, plata, cobre.

        tr.sin-fondo.border          
          th.border.text-center(rowspan=3) 
            h4 Sintéticas
          td.border Por polimerización.
          td.border Polivinilo, poliacrílicos.
        tr.sin-fondo.border         
          td.border Por condensación.
          td.border Poliéster (tergal), poliamida (Nylon).
        tr.sin-fondo.border         
          td.border Por poliadición.
          td.border Poliuretano, poliespano.
         
    #t_4_3.titulo-segundo
      h2 4.3 Hilos e hilatura

    p.mb-4 Se denomina hilo al conjunto de fibras textiles, continuas o discontinuas, que se tuercen juntas alcanzando una gran longitud y que es directamente empleado para la fabricación de tejidos; a su vez, hilatura es el arte de hilar los filamentos para obtener un conjunto de hebras preparadas para el proceso de construcción de hilos y tejidos. 

    .row.mb-5
      .col-3
      .col-6       
        figure
          p.BorTit 
            b Figura 15. 
            | Hilaturas
          img(src='@/assets/curso/tema4/img03.png', alt='Texto que describa la imagen')
          figcaption Nota. Tomada de Pinterest (2021).
      .col-3

    #t_4_4.titulo-segundo
      h2 4.4 Tejidos

    p.mb-4 Es el manufacturado de fibras o hilos que tienen una relación sustancial entre su longitud, área y su espesor con suficiente resistencia mecánica para otorgarle una cohesión. Los tejidos tienen una clasificación que se da en dos grupos, tejidos planos y de punto, también se contemplan aquellas no tejidas en las que diversas técnicas a nivel tecnológico permiten su impresión, en el siguiente esquema permite observar esta clasificación:

    p.BorTit 
      b Tabla 3. 
      | Clasificación de tejidos
    .tabla-b.color-acento-contenido.mb-1     
      table.sin-fondo.border        
        tr.sin-fondo.border
          th.fondo-color-acento-contenido.texto-blanco.border.text-center(rowspan=6) 
            h4 Telas tejidas
          th.fondo-gris.border.text-center(rowspan=3) 
            h4 Plano
          td.border Ligamentos fundamentales.
          td.border 
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Tafetán.
              li 
                i.lista-ul__vineta
                | Sarga (diagonal).
              li 
                i.lista-ul__vineta
                | Raso.
        tr.sin-fondo.border
          td.border Ligamentos derivados.
          td.border
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Esterilla /panamá/ Canastra.
              li 
                i.lista-ul__vineta
                | Espina / Espiga.
              li 
                i.lista-ul__vineta
                | Sarga interrumpida (Broken Twill).          
        tr.sin-fondo.border
          td.border Otros
          td.border 
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Dobby, jacquard, riso, afelpados, etc.        
        tr.sin-fondo.border
          th.border.text-center(rowspan=2) 
            h4 Punto
          td.border Por trama.
          td.border
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Sencillo (jersey, lacoste). 
              li 
                i.lista-ul__vineta
                | Doble (rib o resortado, interlock, piqué).
        tr.sin-fondor.border
          td.border Por urdimbre.
          td.border
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Tricot.
              li 
                i.lista-ul__vineta
                | Raschell.               
    .tabla-b.color-acento-contenido.mb-4   
      table.sin-fondo.border       
        tr.sin-fondo.border
          th.fondo-color-acento-contenido.texto-blanco.border.text-center 
            h4 Telas no tejidas
          td.sin-fondo.border(colspan=4) Interlones - Guatas - Entretelas 
          
    p.mb-4 Las caracterizaciones de los textiles se organizan en función de su comportamiento, están relacionadas con el peso del material desde su estructura, fluidez, expansión y comprensión; a continuación, se relacionan los aspectos más relevantes de cada una.
     
    TabsA.otrotab.color-acento-contenido.mb-4
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Estructura")
        p.mb-4 Las telas estructuradas proporcionan el cuerpo de la prenda, dan forma por sí mismas. La caída de la tela ha de mantenerse en su lugar y no caer cuando se le suelta. Combinar telas en una misma prenda permite generar textura y volumen, es importante tener en cuenta por ello la estructura.
        figure.mb-4.px-4
          img(src='@/assets/curso/tema4/img04.png', alt='Texto que describa la imagen')
        figure.mb-4.px-4
          img(src='@/assets/curso/tema4/img05.png', alt='Texto que describa la imagen')
        figure.px-4
          img(src='@/assets/curso/tema4/img06.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Fluidez")
        p.mb-4 Estas telas son suaves y con caída, no son capaces de aguantar su propio peso, la fluidez está directamente relacionada con el tipo de hilo utilizado en su fabricación, son hilos muy torsionados tanto de hebras hiladas como de multifilamento. La caída que da sobre el cuerpo suele ser ligeras y de peso medio.
        figure.mb-4.px-4
          img(src='@/assets/curso/tema4/img07.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Expansión")
        p.mb-4 En este grupo se incluye el concepto del plisado, este efecto permite expandir la silueta. El concepto de acolchado se incluye en esta categoría, este es un método natural para crear calidez mediante la combinación de capas de tela, se puede aplicar el acolchado medio y acolchado grueso.
        figure.mb-4.px-4
          img(src='@/assets/curso/tema4/img08.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Compresión")
        p.mb-4 El objetivo de este grupo es crear ajuste perfecto a la silueta humana. El grado de elasticidad, dependerá del tipo y cantidad de hilos elásticos. Suelen encontrarse textiles con combinaciones de expandes, licra y acetato.
        figure.mb-4.px-4
          img(src='@/assets/curso/tema4/img09.png', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Entretelas")
        p.mb-4 Son la estructura de la ropa que sostienen y refuerzan áreas críticas. Existen varios tipos de entretela y se usan para determinar el tacto, la forma y la durabilidad de la prenda. Entre ellas se encuentra:
        ul.lista-ul--color.mb-4
          li 
            i.far.fa-dot-circle    
            p <b>Tejidas: </b>pueden ser de algodón, rayón, lana, poliéster o mezclas de fibras. Se tejen de la misma forma que las telas de tejido plano. Pueden cortarse al sesgo para tener elasticidad con ángulo de 45°.
          li 
            i.far.fa-dot-circle    
            p <b>No tejidas: </b>por lo general son hechas de poliéster, rayón, nylon o una mezcla de diferentes fibras, estas son distribuidas al azar y juntadas por acción química o térmica dado que no tienen una dirección de hilo, no se desmecha y pueden ser cortadas en cualquier dirección o ángulo.
          li 
            i.far.fa-dot-circle    
            p <b>De punto: </b>se encuentran las de nylon, tienen estiramiento a lo ancho y estabilidad a lo largo, le añade forma y cuerpo a prácticamente cualquier tela tejida o de punto.
            
        figure.mb-4.px-4
          img(src='@/assets/curso/tema4/img10.svg', alt='Texto que describa la imagen')
        
    br
    br
    p.mb-4 <b style="font-size:20px">Procesos textiles: </b>los procesos textiles hacen referencia al proceso realizado sobre la fibra, el hilo, la tela o la prenda con el fin de modificar alguna de sus características como la apariencia, el tacto y el comportamiento. Siendo así, los procesos tienen gran importancia para los acabados textiles puesto que permiten eliminar o minimizar algunas cualidades que no se desean como parte del producto final ya sea en apariencia, tacto o comportamiento, por lo anterior se tienen en cuenta ciertos tipos de operaciones, entre los cuales están:
    .row.mb-4
      .col-1
      .col-6.d-flex.align-items-center
        div
          .row.mb-4.pt-4.pb-0(style="border-top: 2px solid #F8F5E5; ")
            .col-2.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema4/img11.svg', alt='Texto que describa la imagen')
            .col-10.d-flex.align-items-center
              div
                h4 Aprestos
                p Es cuando los efectos se consiguen a partir de productos o bases químicas aplicadas al textil, logrando aspectos como rigidez, estabilidad, tactosidad, antifluido, peso del textil.
          .row.pt-4.pb-2(style="border-top: 2px solid #F8F5E5; border-bottom: 2px solid #F8F5E5;")
            .col-2.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema4/img12.svg', alt='Texto que describa la imagen')
            .col-10.d-flex.align-items-center
              div
                h4 Acabados
                p se logran efectos con la aplicabilidad de procesos físicos, mecánicos, entre ellos calor, presión, humedad, a manera de ejemplo, aquí se encuentran los plisados.

      .col-4.d-flex.align-items-center.justify-content-center
        figure
          img(src='@/assets/curso/tema4/img13.svg', alt='Texto que describa la imagen')
      .col-1
    .row.mb-4
      .col-1
      .col-10
        p Estos dos procesos pueden llegar a combinarse y siempre dependerá de la idea inicial que se tenga respecto a la prenda que se pretende realizar.
      .col-1
 
    p.BorTit 
      b Tabla 4. 
      | Clasificación de los acabados
    .tabla-b.color-acento-contenido.mb-1     
      table.sin-fondo.border        
        tr.sin-fondo.border
          th.fondo-color-acento-contenido.texto-blanco.border.text-center(rowspan=3) 
            h4 Acción que lo origina / modifica Característica
          th.fondo-gris.border.text-center
            h4 Físico /estético
          td.border No modifica la estructura interna de la fibra, solo su apariencia.

        tr.sin-fondo.border          
          th.sin-fondo.border.text-center
            h4 Químico / funcional
          td.border Modifica propiedades estéticas y/o funcionales de la estructura interna de la fibra.
          
        tr.sin-fondo.border          
          th.fondo-gris.border(colspan=2)
            h4 Químico – físico / estético – funcional
        
    .tabla-b.color-acento-contenido.mb-4 
      table.sin-fondo.border        
        tr.sin-fondo.border
          th.fondo-color-acento-contenido.texto-blanco.border.text-center(rowspan=3) 
            h4 Duración
          th.fondo-gris.border.text-center
            h4 Temporal
          td.border Algunas lavadas.

        tr.sin-fondo.border          
          th.sin-fondo.border.text-center
            h4 Permanente
          td.border Acabados físicos, vida útil de la prenda.
          
        tr.sin-fondo.border          
          th.sin-fondo.border.text-center
            h4 Renovable
          td.border Puede renovarse en el hogar o necesita de tintorería.

    p.text-center.mb-4 <b>Dentro de esta clasificación se encuentran cuatro (4) procesos a tener en cuenta y dependiendo del acabado que se quiera lograr:</b>
     
    .row.mb-4
      .col-2
      .col-8
        figure
          p.BorTit 
            b Figura 17. 
            | Procesos generales para los acabados textiles
          img(src='@/assets/curso/tema4/img14.png', alt='Texto que describa la imagen')
      .col-2
    br
    .row.mb-4
      .col-1
      .col-1.d-flex.align-items-center.justify-content-center.py-3(style="border-top: 2px solid #F8F5E5; ")
        figure.w-75
          img(src='@/assets/curso/tema4/img15.svg', alt='Texto que describa la imagen')
      .col-9.d-flex.align-items-center.py-3(style="border-top: 2px solid #F8F5E5; ")
        .div
          h3 Limpieza
          ul.lista-ul--color
            li 
              i.far.fa-dot-circle    
              | Desgomado de la seda (ejemplo textil).
            li 
              i.far.fa-dot-circle    
              | Descrudado del algodón (dependerá del acabado final).
            li 
              i.far.fa-dot-circle    
              | Lavado de la lana (proceso originado desde la obtención de la fibra).
      .col-1

    .row.mb-4
      .col-1
      .col-1.d-flex.align-items-center.justify-content-center.py-3(style="border-top: 2px solid #F8F5E5; ")
        figure.w-75
          img(src='@/assets/curso/tema4/img16.svg', alt='Texto que describa la imagen')
      .col-9.d-flex.align-items-center.py-3(style="border-top: 2px solid #F8F5E5; ")
        .div
          h3 Diseño y color
          p Referente al uso de tintes en los textiles y que permean las fibras de la tela o hilo como teñido de fibras, hilos, o directamente sobre el textil o en piezas ya hechas. En diseño se encuentran técnicas de estampado para generar grafías en los textiles entre los cuales están el rotativo, serigrafía, sublimación, transfer y digital.
    .col-1

    .row.mb-4
      .col-2
      .col-8.d-flex.align-items-center.justify-content-center
        figure.w-75
          p.BorTit 
            b Figura 18. 
            | Métodos de diseño y color en textiles
          img(src='@/assets/curso/tema4/img17.svg', alt='Texto que describa la imagen')
      .col-2

    .row.mb-4
      .col-2
      .col-8.d-flex.align-items-center.justify-content-center
        figure.w-75
          p.BorTit 
            b Figura 19. 
            | Estampados en los textiles
          img(src='@/assets/curso/tema4/img18.svg', alt='Texto que describa la imagen')
      .col-2

    .row.mb-4
      .col-1
      .col-1.d-flex.align-items-center.justify-content-center.py-3(style="border-top: 2px solid #F8F5E5; ")
        figure.w-75
          img(src='@/assets/curso/tema4/img19.svg', alt='Texto que describa la imagen')
      .col-9.d-flex.align-items-center.py-3(style="border-top: 2px solid #F8F5E5; ")
        .div
          h3 Textura
          p Para generar acabados que al tacto juegue con las sensaciones (terciopelo, afelpados, glaseado, satinados, mercerizados, reducción de brillos, grabados, gofrados moiré, entre otros).
    .col-1

    .row.mb-4
      .col-2
      .col-8
        figure
          p.BorTit 
            b Figura 20. 
            | Textura en los textiles
          img(src='@/assets/curso/tema4/img20.svg', alt='Texto que describa la imagen')
      .col-2
    
    .row.mb-4
      .col-1
      .col-1.d-flex.align-items-center.justify-content-center.py-3(style="border-top: 2px solid #F8F5E5; ")
        figure.w-75
          img(src='@/assets/curso/tema4/img21.svg', alt='Texto que describa la imagen')
      .col-9.d-flex.align-items-center.py-3(style="border-top: 2px solid #F8F5E5; ")
        .div
          h3 Desempeño
          p Utilizado para mejorar el desempeño y la utilidad del textil, entre estos se encuentran la resistencia a pliegues y arrugas, planchado durable, repelentes al agua, control de encogimiento y resistencia a la suciedad, antiestática, antibacterial, resistencia a polillas, al moho e ignición retardada. En la siguiente figura se podrá apreciar el proceso general de los textiles.
    .col-1

    .row.mb-4
      .col-3
      .col-6
        figure
          p.BorTit 
            b Figura 21. 
            | Proceso general de textiles
          img(src='@/assets/curso/tema4/img22.svg', alt='Texto que describa la imagen')
      .col-3
    
    //.justify-content-center
    //.align-items-center
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({}),
}
</script>

<style lang="sass" scoped></style>
