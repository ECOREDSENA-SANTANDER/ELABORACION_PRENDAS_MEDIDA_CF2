<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la moda

    .cajon.color-primario.fondo-a.p-4.mb-5
      p Los conceptos aquí planteados son los que originan, de forma general, la fundamentación en moda en la que el actor que trabaja en este sector deberá tener especial atención para la generación de productos que generen el impacto deseado en sus consumidores. Por ello, a continuación, se relacionarán los fundamentos que hacen posible tener una conceptualización sobre este indispensable tema.
    
    #t_1_1.titulo-segundo
      h2 1.1 Sistema moda

    //.justify-content-center
    //.align-items-center
    .row
      .col-6.d-flex
        div
          p.mb-4 Cuando se habla de sistema moda se concluye que la moda y las tendencias permean diversidad de áreas en las que el ser humano se desenvuelve, como el estilo de vida de un individuo, comunidad o sociedad, y dentro de estas se encuentran la gastronomía, música, política, conciencia ambiental, tecnología, estructuras familiares, arte, cosmética, cine, entre otras; por ello, es de suma importancia comprender y leer la moda de manera integral y no aislada en el vestuario y relacionándola directa y contextualmente con la cultura.
          p.mb-4 En relación con la cultura se puede entender esta como un concepto que abarca diversas manifestaciones del ser humano, además de ser un sistema de creencias y costumbres desarrolladas por un grupo, comunidad y sociedad en la que se integran símbolos y significados que le permiten a una persona sentirse parte de un grupo (ciudad, región, país).
          p Las siguientes imágenes pueden dar una visión integrada de la moda y sus tendencias en los escenarios del sistema moda, situando la moda en el campo del arte. 
      .col-6.d-flex.align-items-center
        SlyderC.mb-5(:datos="datosSlyder")

    .separador

    #t_1_2.titulo-segundo
      h2 1.2 Gamas de mercado en el sistema moda
    
    p.mb-4 Así como el sistema moda contempla áreas, esta también se clasifica de acuerdo con gamas o líneas de mercado dentro del sector de la moda; esta clasificación se puede observar en el siguiente esquema:
    
    .titulo-quinto.color-acento-contenido
      div
        h4.mb-0 Figura 4
        | Sistema de la moda en el mundo

    .row.mb-4
      .col-2
      .col-8
        figure
          img(src='@/assets/curso/tema1/img04.svg', alt='Texto que describa la imagen')
          figcaption Nota. Tomada de Inexmoda (2021).
      .col-2

    p.mb-4.text-center A partir de la anterior imagen se puede constatar lo siguiente:
    h2.mb-4.text-center Gamas de mercado en el sistema moda

    SlyderB.mb-4(:datos="datosSlyder2")

    .cajon.color-primario.fondo-a.p-4
      p Actualmente esta línea ha hecho impulsar fenómenos como el Slow Fashion en el que la sostenibilidad juega un rol importante en la generación de productos debido a las grandes cantidades de desechos textiles, lo que en últimas genera un altísimo impacto medioambiental en contra del planeta.

    .separador

    #t_1_3.titulo-segundo
      h2 1.3 Factores que influyen en la moda

    p.mb-4 Se ha mencionado que la moda se contempla como sistema, que la cultura está intrínsecamente relacionada con ella y que las diferentes gamas de mercado hacen surgir otras, todas siempre marcadas por el consumidor; teniendo en cuenta esto, los factores que posibilitan todo este evolucionar en la moda son los siguientes y permiten dar respuesta a: ¿por qué vestirse? 

    .row
      .col-1
      .col-10
        figure
          img(src='@/assets/curso/tema1/img10.svg', alt='Texto que describa la imagen')
      .col-1

    .separador

    #t_1_4.titulo-segundo
      h2 1.4 Universos de vestuario
  
    .row
      .col-8.d-flex.align-items-center
        .row.py-3.ps-3.relativo1.borde-redondo.fondo-color-primario
          .col-11
            div Son conceptos que responden a la necesidad de establecer categorías para agrupar productos de acuerdo con parámetros de afinidad y correlación. Estos universos están constituidos por conjuntos de prendas de vestir y accesorios con características similares, bajo los principios de la moda y articulados a las necesidades específicas del consumidor o público objetivo; además, agrupar las prendas por universos permite una categorización del producto.
          .col-1      
      .col-4.z-index-front
        figure
          img(src='@/assets/curso/tema1/img11.svg', alt='Texto que describa la imagen')

    .separador

    #t_1_5.titulo-segundo
      h2 1.5 Clasificación de universos de vestuario

    
      div.mb-4.p-3.tarjeta.tarjeta--gris(titulo="Grupo 1. Gala y formal")
        h3.text-center Grupo 1. Gala y formal
        SlyderB(:datos="datosSlyderGalayformal")
      div.mb-4.p-3.tarjeta.tarjeta--gris(titulo="Grupo 2. Casual")
        h3.text-center Grupo 2. Casual
        SlyderB(:datos="datosSlyderCasual")
      div.mb-4.p-3.tarjeta.tarjeta--gris(titulo="Grupo 3. Informal")
        h3.text-center Grupo 3. Informal
        SlyderB(:datos="datosSlyderInformal")
      div.mb-4.p-3.tarjeta.tarjeta--gris(titulo="Grupo 4. Intima")
        h3.text-center Grupo 4. Intima
        SlyderB(:datos="datosSlyderIntima")

    hr
    .row
      .col-1.d-flex.align-items-center.justify-content-center
        figure
          img(src='@/assets/curso/tema1/img23.svg', alt='Texto que describa la imagen')
      .col-4
        div
          h3 Ocasiones de uso
          p Contempla los distintos escenarios en los que una persona viste una prenda, esto permite que en los universos de vestuarios se permita segmentar aún más el producto. Dentro de estas ocasiones de uso se encuentra, protocolario (formal), multiocasión, informal y complementos. Para tener mayor claridad en la correspondencia de las ocasiones de uso con universos del vestuario, se debe tener presente el siguiente esquema:
      .col-7.d-flex.align-items-center.justify-content-center
        .tabla-a.color-acento-botones
          table           
            thead
              tr
                th(colspan=2) Ocasión de uso
                th(colspan=5) Universo de vestuario               
            tbody
              tr
                td(colspan=2) Protocolario
                td(colspan=5) Gala, Formal
              tr
                td(colspan=2) Multiocasión
                td(colspan=5) Casual
              tr
                td(colspan=2) Informal
                td(colspan=5) Kakiwear, Jeanswear, Sportswear, Active wear, Leisurewear
              tr
                td(colspan=2) Complementario
                td(colspan=5) Swinwear – Beachwear, Sleepwear, Underwear     
    hr
    .row
      .col-1.d-flex.align-items-center.justify-content-center
        figure
          img(src='@/assets/curso/tema1/img24.svg', alt='Texto que describa la imagen')
      .col-8
        div
          h3 Cliente o consumidor
          p Se entiende por cliente a aquella persona o entidad que compra bienes y servicios que son requeridos a partir de necesidades específicas; es llamado cliente porque el producto generado en un espacio de compra y venta puede ser para él en particular o para otras personas, un cliente puede ser también una empresa. Por consumidor se entiende, entonces, a la persona que compra productos para su consumo personal y, dependiendo del tipo de necesidad que manifieste, este se consumirá siempre en su beneficio. Generalmente suelen utilizarse ambos conceptos en el léxico común, pero en la moda la palabra utilizada para referirse a las personas es consumidor el cual se encuentra determinado por valores, conceptos y experiencias de este con el producto ofrecido, que debe responder a los perfiles y estilos del consumidor que hoy predominan, para construir propuestas a partir de este reconocimiento.
      .col-3.d-flex.align-items-center.justify-content-center
        figure
          img(src='@/assets/curso/tema1/img26.svg', alt='Texto que describa la imagen')
    hr
    .row
      .col-1.d-flex.align-items-center.justify-content-center
        figure
          img(src='@/assets/curso/tema1/img25.svg', alt='Texto que describa la imagen')
      .col-11
        div
          h3 Perfiles de consumidor
          p Un perfil no se determina por la edad ni por el segmento socioeconómico, pues todos los perfiles se encuentran en las diferentes edades y segmentos socioeconómicos, y estos van ligados con los estilos de vida, preferencias, gustos, actitudes, relaciones, experiencias y espacios, entre otros. Dentro de los perfiles de consumidor que se encuentran, como una lectura del conjunto de personas o público objetivo en el sector de la moda, están: 
      
    .row.mb-5
      .col-1
      .col-11
         TabsB.color-acento-contenido
          .py-4.py-md-5(titulo="Consumidor tradicional" :icono="require('@/assets/curso/tema1/img27.svg')")
            .row
              .col-7.ps-4.pt-3
                p Es un consumidor que participa en un ambiente social exigente en el que busca reconocimiento, aceptación y afirmación de los demás. Invierte por lo general grandes cantidades de dinero, tiempo y energía en sobresalir y destacarse, a partir de las siguientes características:
                div.ps-5
                  ul.lista-ul--color
                    li 
                      i.far.fa-dot-circle
                      | Le importan las tradiciones de acuerdo con el evento
                    li 
                      i.far.fa-dot-circle
                      | Conservador de las normas y de la etiqueta en el vestuario.
                    li 
                      i.far.fa-dot-circle
                      | Rígido y formal no es fácil que acepte tendencias de moda actuales, sin embargo, está pendiente en lo que su estilo en novedades se refiere.
                    
              .col-1
              .col-3
                figure
                  img(src='@/assets/curso/tema1/img32.png', alt='Texto que describa la imagen')
              .col-1
          .py-4.py-md-5(titulo="Consumidor neotradicional" :icono="require('@/assets/curso/tema1/img28.svg')")
            .row
              .col-6.ps-4.pt-3
                p Está definido como el nuevo tradicional en cuanto a que acepta algunos cambios en su vestuario, sin embargo, conserva la etiqueta y las normas de acuerdo con los protocolos según los eventos, es formal y tradicionalista. Las cuales conservan las siguientes características:
                div.ps-5
                  ul.lista-ul--color
                    li 
                      i.far.fa-dot-circle
                      | Las tradiciones permanecen, conserva las normas de acuerdo con etiqueta y eventos.
                    li 
                      i.far.fa-dot-circle
                      | Fiel a marcas que le representen su estilo.
                    li 
                      i.far.fa-dot-circle
                      | Aprecia los referentes actuales y los integra en su vestuario sutilmente.
                              
              .col-6
                figure
                  img(src='@/assets/curso/tema1/img33.png', alt='Texto que describa la imagen')
          .py-4.py-md-5(titulo="Consumidor contemporáneo" :icono="require('@/assets/curso/tema1/img29.svg')")
            .row
              .col-6.ps-4.pt-3
                p Surge de avances y cambios a nivel social y cultural, dinámicos, apasionados por conocer cosas nuevas, viajar y estar a la vanguardia de todos los sucesos a nivel nacional y mundial, se considera un explorador y tiene gran tolerancia por diferentes formas de pensamientos y creencias. Las cuales conservan las siguientes características:
                div.ps-5
                  ul.lista-ul--color
                    li 
                      i.far.fa-dot-circle
                      | Evoluciona y modifica sus valoraciones.
                    li 
                      i.far.fa-dot-circle
                      | Tiene su estilo definido y lo evoluciona a medida que surgen nuevas tendencias.
                    li 
                      i.far.fa-dot-circle
                      | Dinámico, intenso y con múltiples actividades profesionales y culturales.    
             
              .col-1
              .col-4.d-flex.align-items-center.justify-content-center
                figure
                  img(src='@/assets/curso/tema1/img34.png', alt='Texto que describa la imagen')
              .col-1
          .py-4.py-md-5(titulo="Consumidor vanguardista" :icono="require('@/assets/curso/tema1/img30.svg')")
            .row
              .col-6.ps-4.pt-3
                p Es un destacado grupo social, inconformista, vanguardista y amante de la originalidad y autenticidad del ser. Genera cambios y origina nuevos conceptos, innovador, rompe esquemas y paradigmas en su entorno influyendo en la creación de nuevas tendencias. Por lo general tiene gran capacidad adquisitiva. Las cuales conservan las siguientes características:
                div.ps-5
                  ul.lista-ul--color
                    li 
                      i.far.fa-dot-circle
                      | Cambia y modifica fácilmente su escala de valoraciones.
                    li 
                      i.far.fa-dot-circle
                      | No tiene apegos ni crea compromisos de ningún formato.
                    li 
                      i.far.fa-dot-circle
                      | Investigador y con gran pensamiento crítico.             
              .col-1
              .col-4.d-flex.align-items-center.justify-content-center
                figure
                  img(src='@/assets/curso/tema1/img35.png', alt='Texto que describa la imagen')
              .col-1
          .py-4.py-md-5(titulo="Consumidor exhibicionista" :icono="require('@/assets/curso/tema1/img31.svg')")
            .row
              .col-6.ps-4.pt-3
                p Una persona con gran necesidad de destacarse y llamar la atención para verse distinto a los demás, con gran sensibilidad hacia nuevos conceptos de moda, posee un estilo ecléctico, es decir no se identifica con uno en particular. Las cuales conservan las siguientes características:
                div.ps-5
                  ul.lista-ul--color
                    li 
                      i.far.fa-dot-circle
                      | Deseo constante de llamar la atención.
                    li 
                      i.far.fa-dot-circle
                      | Estilo ecléctico.
                    li 
                      i.far.fa-dot-circle
                      | En búsqueda de proyectar una imagen nueva siempre, para no parecerse a los demás.            
              .col-1
              .col-4.d-flex.align-items-center.justify-content-center
                figure
                  img(src='@/assets/curso/tema1/img36.png', alt='Texto que describa la imagen')
              .col-1
    hr
    p.mb-4 De otra parte, identificar los tipos clientes mejora la atención que se les brinda, dado que no todos se comportan igual ni tienen la misma velocidad en la decisión de compra y esto, si no logra abordar estratégicamente, puede afectar la venta de un producto, es por ello que se debe iniciar por tener claro cómo entender el cliente. Por ello, a continuación, se relacionan diferentes recursos que ofrecen un recorrido desde su definición y los tipos y el servicio al cliente. 
    
    .row
      .col-2
      .col-8
        a.anexo.mb-1(href="https://www.youtube.com/watch?v=4WIq433jNMA" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            strong Enlace web. 
            | Video – Cliente
            p Conoce la definición del cliente y su importancia en un negocio.
        a.anexo.mb-1(href="https://www.youtube.com/watch?v=FxVNkf957tw&t=26s')" target="_blank")          
          .anexo__texto
            strong Enlace web. 
            | Video – Tipos de clientes
            p Conoce los tipos de clientes basados en su comportamiento al momento de adquirir un producto.

        a.anexo.mb-1(href="https://www.youtube.com/watch?v=dB6FOVF-wWs')" target="_blank")          
          .anexo__texto
            strong Enlace web.  
            | Video – Servicio al cliente
            p Conoce el comportamiento de los clientes que adquieren un producto o servicio de manera frecuente u ocasional.
      .col-2
    
    
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Nota. Tomada de PlayBoy (2020)',
        imagen: require('@/assets/curso/tema1/img01.png'),
        leyendaImagen: 'Figura 1. Moda y arte, inspirada en Mondrian',
      },
      {
        titulo: 'Nota. Tomada de Mujer (2020)',
        imagen: require('@/assets/curso/tema1/img02.png'),
        leyendaImagen: 'Figura 2. La moda y la decoración de espaciosn',
      },
      {
        titulo: 'Nota. Tomada de Frogx3 (2021)',
        imagen: require('@/assets/curso/tema1/img03.png'),
        leyendaImagen: 'Figura 3. Moda y gastronomía',
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Alta costura o haute couture',
        texto:
          'Son prendas exclusivas hechas a la medida del cliente, de manera artesanal y con un estricto proceso de calidad. La alta costura tiene su propio centro llamado Cámara Sindical de Alta Costura, y solo aquel que logra pertenecer a ella y velar por el estricto cumplimiento del paso a paso en la elaboración de prendas puede llamarse como diseñador de alta costura; este gremio fue creado, inicialmente, por Alfred Frederick Worth.',
        imagen: require('@/assets/curso/tema1/img05.png'),
        leyendaImagen: 'Nota. Tomada de Hobeika (2018).',
      },
      {
        titulo: 'Listo para llevar o prêt-à-porter',
        texto:
          'Son prendas producidas en serie con patrones que se repiten, estas siguen las tendencias y elementos que se dan en la alta costura, permitiendo la industrialización en serie de la moda. Las colecciones son presentadas por diferentes casas de moda en espacios conocidos como Semanas de la moda o Fashion Week, esto porque gozan de cierta exclusividad debido a sus precios elevados.',
        imagen: require('@/assets/curso/tema1/img06.png'),
        leyendaImagen: 'Nota. Tomada de Phelps (2021)',
      },
      {
        titulo: 'Marcas diferencias o moda comercial',
        texto:
          'Esta línea se maneja dentro de lo que ahora se llama midi couture, que permite generar prendas no tan costosas empleando textiles con bordados fabricados industrialmente, esto hace que sean menos costosas. Se centra en la industrialización de procesos, además porque manejan una comunicación de moda más cercana a todas las personas.',
        imagen: require('@/assets/curso/tema1/img07.png'),
        leyendaImagen: 'Nota. Tomada de Pinterest (2021)',
      },
      {
        titulo: 'Pronta moda o Fast Fashion',
        texto:
          'Gama que se produce para las masas a precios muy bajos. Utiliza materiales de baja calidad dado que necesitan producir a una escala gigante para circular sus productos, en este modelo se contempla la producción de series cortas basadas en tendencias del momento. Al ser de baja calidad genera que el producto tenga un ciclo de vida corto, por tanto, se desecha por el consumidor muy rápido y esto es lo que produce que el consumidor vuelva a comprar, de ahí que se contemple como Fast Fashion.',
        imagen: require('@/assets/curso/tema1/img08.png'),
        leyendaImagen: 'Nota. Tomada de Pinterest (2021)',
      },
      {
        titulo: 'Moda lenta o Slow Fashion',
        texto:
          'Posee una filosofía de consumo responsable porque permite concienciar sobre el impacto de las vestir en el medioambiente, el agotamiento de recursos y la huella que está dejando la industria textil en la sociedad; está contemplada bajo modelos de sostenibilidad. También dentro de las gamas se pueden encontrar otros fenómenos surgidos dentro de las líneas mencionadas anteriormente como: moda circular, moda ética, moda ecológica y moda vegana.',
        imagen: require('@/assets/curso/tema1/img09.png'),
        leyendaImagen: 'Nota. Tomada de Sayonara (2021)',
      },
    ],
    datosSlyderGalayformal: [
      {
        titulo: 'Gala',
        texto:
          'Ligados a tradiciones culturales y monárquicas para eventos y celebraciones protocolarios en los altos rangos sociales. Esto se debe porque el vestuario y su significado no es lo mismo para todo el mundo, depende el país, la región y ciudad, así como las costumbres y el simbolismo presente en el vestuario, lo que sí debe generar es distinción a partir de estos elementos diferenciadores de lo que se usaría en el diario vivir. Las características de este universo son: jerárquico, distintivo y diferenciador.',
        imagen: require('@/assets/curso/tema1/img12.png'),
      },
      {
        titulo: 'Formal',
        texto:
          'Surge una vez se establecen las gamas de mercado como la alta costura y la necesidad de diferenciar rangos sociales y laborales. Aplica en eventos como ceremonias, actividad laboral y eventos sociales. Actualmente este universo se ha visto transformado en el que no necesariamente, el no portar una prenda característica del universo deje de considerarse formal. Las características de este universo son: autocrático, jerárquico, distintivo y diferenciador. Como se puede observar es muy similar al universo de gala.',
        imagen: require('@/assets/curso/tema1/img13.png'),
      },
    ],
    datosSlyderCasual: [
      {
        titulo: 'Casual',
        texto:
          'En este universo se puede encontrar un concepto mucho más democrático sobre la moda y su categorización de prendas, nace en los 60, como producto de una búsqueda de mayor igualdad y libertad de expresión. Permitió flexibilizar el vestuario en diferentes entornos, a tal punto que el concepto de formalidad puede llegar a incluirse en este universo al ser “democrático”, está presente en el diario vivir de la gran mayoría de personas y se delimita según su ocasión de uso. Las características de este universo son: democrático, versátil, flexible, interactivo y citadino.',
        imagen: require('@/assets/curso/tema1/img14.png'),
      },
    ],
    datosSlyderInformal: [
      {
        titulo: 'Kakiwear',
        texto:
          'Nace en los 80, por el fenómeno YUPI que consistía en asistir al trabajo de manera más informal por lo general se empezó a implementar los viernes, cuando finalizaban en la semana su jornada laboral. Se caracteriza principalmente por los textiles empleados y la gama de color que contempla los tonos tierra y textil en drill y siluetas más holgadas las cuales facilitan mejor el movimiento. Actualmente se emplea en diferentes actividades del diario vivir de una persona. Las características de este universo son: dinámico, versátil, funcional, socio flexible y socio confortable.',
        imagen: require('@/assets/curso/tema1/img15.png'),
      },
      {
        titulo: 'Jeasnwear',
        texto:
          'Nace a partir de la popularización de la base textil en denim, el cual inicialmente se usaba solo para trabajos de minería en overoles y pantalones. Este fenómeno es originario de Estados Unidos en la década de los 50 y en los 80 logró convertirse en una base para pantalones, camisas y otros productos usados tanto por hombres como por mujeres. Las características de este universo al igual que el kakiwear al centrarse en una base textil y gama de color son: dinámico, versátil, funcional, socio flexible y socio confortable.',
        imagen: require('@/assets/curso/tema1/img16.png'),
      },
      {
        titulo: 'Sportswear',
        texto:
          'Universo dedicado a las prendas que se usan en prácticas deportivas, se populariza en los 70 influenciado por los juegos olímpicos y la creciente práctica de los deportes. Las características de este universo son: tecnológico, multi funcional, confortable y apariencia deportiva.',
        imagen: require('@/assets/curso/tema1/img17.png'),
      },
      {
        titulo: 'Active wear',
        texto:
          'Universo enfocado en prendas para realizar ejercicio en el que no necesariamente la persona que lo realiza sea un deportista profesional. Actualmente ha cobrado mucha fuerza dada la necesidad de practicar ejercicio por motivos de salud o porque hace parte del diario vivir de alguien convirtiéndolo en un estilo de vida. Las características de este universo son: tecnológico, confortable y segunda piel (facilitan el movimiento). ',
        imagen: require('@/assets/curso/tema1/img18.png'),
      },
      {
        titulo: 'Leisurewear',
        texto:
          'Surge hacia los 2000 como parte de un estilo informal freelance, incluye ropa para dormir e incluso bajo este mismo concepto, ropa para estar en casa. Las características de este universo son: relajado, confortable, cómodo y descanso.',
        imagen: require('@/assets/curso/tema1/img19.png'),
      },
    ],
    datosSlyderIntima: [
      {
        titulo: 'Swimwear – beachwear',
        texto:
          'Unida a la ocasión de uso para la cual está pensada sus productos, ropa para nadar, actualmente es un universo porque vestuario para la playa o para nadar no necesariamente implica que se desarrolle bajo esta actividad, están también las salidas de baño, faldas, camisas y accesorios. Las características de este universo son: aire libre, playa, deportes y recreación.',
        imagen: require('@/assets/curso/tema1/img20.png'),
      },
      {
        titulo: 'Sleepwear',
        texto:
          'Ropa exclusivamente para las horas de descanso, para dormir. Las características de este universo son: comodidad y descanso.',
        imagen: require('@/assets/curso/tema1/img21.png'),
      },
      {
        titulo: 'Underwear',
        texto:
          'Universo dedicado solo a ropa interior, también puede encontrarse con el nombre lingerie, pero depende más de la intención en su uso. Las características de este universo es la comodidad.',
        imagen: require('@/assets/curso/tema1/img22.png'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
