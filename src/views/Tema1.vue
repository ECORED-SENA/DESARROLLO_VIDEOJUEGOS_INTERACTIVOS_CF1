<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Historia del videojuego

    .mb-5.px-4.py-3.texto-color-offset-top-left-2
      p.mb-0 Los videojuegos responden a la acción que realiza un jugador por medio de unos mandos que se encuentran conectados a una máquina. En un principio, se destacaron como principales desarrolladores Estados Unidos, con el Atari, y Japón, con Nintendo. A continuación, se puede observar la historia de los videojuegos:

    .tarjeta.tarjeta--gris.p-4.mb-5
      //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      LineaTiempoC.color-acento-contenido
        .row.px-5(titulo="Años 50")
          p Se puede atribuir a William Higinbotham como el primero en crear un videojuego, quien trabajó en los años 30 activamente en el desarrollo de un radar en la Segunda Guerra Mundial. Por lo tanto, en los años 50, hizo uso de un radar y lo adaptó, gracias a sus conocimientos en electrónica y física, creando el juego 
            strong “Tennis for Two”
            | , el cual funcionaba con una perilla que se podía girar a la izquierda o a la derecha, para ajustar la trayectoria de la pelota de ping pong. 
            br
            br
            | Alexander Douglas, en 1952, creó 
            strong “Oxo”
            | , también conocido como Tres en raya, el típico juego de papel Triqui.
          
          .col-md-6.mb-4.mb-md-0.d-flex
            .p-4.imagen-color-offset-top-left.color-acento-contenido
              figure.mb-4
                img(src='@/assets/curso/tema1-imagen1.jpg')
              p.mb-0.text-center
                strong Tennis for Two
          .col-md-6.d-flex
            .p-4.imagen-color-offset-top-left.color-secundario
              figure.mb-4
                img(src='@/assets/curso/tema1-imagen2.jpg')
              p.mb-0.text-center
                strong Oxo


        div.px-5(titulo="1972")
          p.mb-5 En 1972, nace <strong>Pong</strong>, de Nolan Bushnell, al parecer basado en la misma lógica de <strong>“Tennis for Two”</strong>, aunque en vista superior y una mecánica muy similar, creando a partir de aquí a Atari, una empresa que empezó a distribuir máquinas en Estados Unidos. 
            br
            br
            | Después, aparece Ralph Baer, que muchos años atrás, en 1968, había creado una videoconsola que se llamaba <strong>-Magnavox Odyssey</strong>, y uno de sus principales juegos fue <strong>“Chase Game”</strong>, que también era muy parecido a los ya mencionados, y quien demandó a Atari, cobrando una indemnización por uso de los derechos del juego.
          .row.justify-content-center
            .col-12.col-md-4
              .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen3.jpg')
                p.mb-0.text-center
                  strong Pong

        div.px-5(titulo="1978")
          p.mb-5 A su vez, en Japón, en 1978, por la empresa Taito, surge ¨”Space Invaders”, uno de los grandes referentes de los videojuegos. 
            br
            | Namco crea, en 1980, uno de los juegos más icónicos del mercado: “Pacman”.
          .row
            .col-12.col-lg-3.mb-4.mb-md-0.d-flex
              .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen4.jpg')
                p.mb-0.text-center
                  strong Space Invaders
            .col-12.col-lg-5.offset-lg-1.d-flex
              .p-4.imagen-color-offset-top-left.color-acento-contenido
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen5.jpg')
                p.mb-0.text-center
                  strong Pacman

        div.px-5(titulo="1981")
          p.mb-5 Posterior a ellos, Nintendo, una empresa que se encarga de crear naipes, decide aventurarse en el desarrollo de la tecnología de los videojuegos, contratando a Shigeru Miyamoto, quien en 1981 creó a <strong>“Donkey Kong”</strong>, un gorila que tiene capturada a una princesa que debe ser rescatada por Jumpman, quien posteriormente se convierte en el famoso Mario Bros.
          .row.justify-content-center
            .col-12.col-lg-4
              .p-4.imagen-color-offset-top-left.color-acento-contenido
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen6.jpg')
                p.mb-0.text-center
                  strong Donkey Kong

        div.px-5(titulo="1982")
          p.mb-5 En el año 1982, cuatro trabajadores de la empresa Atari deciden renunciar, porque no se consideraban valorados por la empresa, después de que esta fue vendida a la Warner, y juntos crean la empresa Activision, lanzando el primer videojuego de plataformas, “Pitfall”. 
          .row.justify-content-center
            .col-12.col-lg-4
              .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen7.jpg')
                p.mb-0.text-center
                  strong Pitfall

        div.px-5(titulo="1985")
          p.mb-5 En los años 80, en Estados Unidos, los videojuegos tienen una caída considerable; por ello, llega Japón al rescate y, en 1985, Nintendo  posiciona uno de los juegos más icónicos de la historia, “Super Mario Bros.”,  que viene del juego “Donkey Kong”. El mismo diseñador crea después “Zelda”, la historia de un niño que se mueve en el campo y avanza explorando diversos sitios. 
          .row.justify-content-center
            .col-12.col-lg-10
              .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen8.jpg')
                p.mb-0.text-center
                  strong Pitfall

        div.px-5(titulo="1987")
          p.mb-5 En el año 1982, cuatro trabajadores de la empresa Atari deciden renunciar, porque no se consideraban valorados por la empresa, después de que esta fue vendida a la Warner, y juntos crean la empresa Activision, lanzando el primer videojuego de plataformas, “Pitfall”. 
          .row.justify-content-center
            .col-12.col-lg-4
              .p-4.imagen-color-offset-top-left.color-acento-contenido
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen9.jpg')
                p.mb-0.text-center
                  strong Maniac Mansion

        div.px-5(titulo="1988")
          p.mb-5 En el año 1982, cuatro trabajadores de la empresa Atari deciden renunciar, porque no se consideraban valorados por la empresa, después de que esta fue vendida a la Warner, y juntos crean la empresa Activision, lanzando el primer videojuego de plataformas, “Pitfall”. 
          .row.justify-content-center
            .col-12.col-lg-4
              .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen10.jpg')
                p.mb-0.text-center
                  strong Tetris

        div.px-5(titulo="1991")
          p.mb-5 Sega, después de mucha competencia con Nintendo, crea “Sonic”, en 1991, uno de sus íconos estrella.
            br
            br
            | En un principio, los juegos se destacan por que son representados con luces blancas. Posterior a ello, en los años 80, introducen los 8, 16 y 32 bits. Y en los 90, se da una evolución hacia el 3D, donde los gráficos se encuentran renderizados y pueden ser usados en las diversas consolas. 
          .row.justify-content-center
            .col-12.col-lg-6
              .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen11.jpg')
                p.mb-0.text-center
                  strong Sonic

        div.px-5(titulo="1992")
          p.mb-5 Id Software creó juegos que rápidamente se usaron en computadoras, como “Wolfenstein” 3D y Doom juegos en primera persona tipo shooter que tenían una vista y recorrido en 3D creado en 1992 y 1993 respectivamente. 
          .row.justify-content-center
            .col-12.col-lg-6
              .p-4.imagen-color-offset-top-left.color-acento-contenido
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen12.jpg')
                p.mb-0.text-center
                  strong Wolfenstein

        .row.justify-content-center(titulo="1996")
          .col-12.col-lg-6.mb-5.mb-lg-0
            p.mb-0 En 1994, “Donkey Kong Country” sale al mercado, con un estilo 3D prerrenderizado, igual que “Warcraft Orcs and humans”.
              br
              br
              | En 1996, aparece uno de los primeros juegos de estrategia, el gran reconocido “Diablo”, un RPG,  seguido de “Age of empires”, en 1997. 
              br
              br
              | Sony y Sega son los nuevos competidores del mercado, y salen nuevos juegos, como “Resident Evil”, en 1996. En ese mismo año, el famoso juego  “Super Mario 64” es adaptado por primera vez en 3D.
          .col-12.col-lg-3
            .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen13.jpg')
                p.mb-0.text-center
                  strong Resident Evil

        .row.justify-content-center(titulo="2001")
          .col-12.col-lg-6.mb-5.mb-lg-0
            p.mb-0 Uno de los grandes juegos, “Halo”, se inserta al mercado en el 2001, mejorando enormemente en la jugabilidad. 
              br
              br
              | Finalmente, esta evolución del videojuego muestra que la calidad de imagen es muy superior, logrando juegos fotorealistas.
          .col-12.col-lg-3
            .p-4.imagen-color-offset-top-left.color-acento-contenido
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen14.jpg')
                p.mb-0.text-center
                  strong Resident Evil
        
        div.px-5(titulo="2004")
          p.mb-5 En el año 2004, “World of the Warcraft”, el cual es la cuarta saga de una serie que evoluciona como multijugador masivo de tiempo real.
            br
            br
            | En 2004, llega una nueva forma de videojuegos, al eliminar los controles, con el Kinect de la Xbox 360, creando juegos que cambian la jugabilidad, utilizando el cuerpo de la persona como herramienta de acción. 
          .row.justify-content-center
            .col-12.col-lg-6
              .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen15.jpg')
                p.mb-0.text-center
                  strong World of the Warcraft

        div.px-5(titulo="2009")
          p.mb-5 En adelante a los años 2000, se ve un desarrollo muy alto en la calidad y jugabilidad, mejorando día a día en cada una de las entregas.
            br
            br
            | En el año 2009, nace “Angry Birds”, uno de los juegos más descargados de la Play Store, adentrándose en los celulares inteligentes. 
            br
            br
            | Cabe destacar que los juegos, debido a los altos estándares, son cada vez más pesados y requieren de procesamientos mucho más veloces, pero esto ha permitido que sean mucho más realistas que antes.  Los videojuegos día a día siguen evolucionando. 
          .row.justify-content-center
            .col-12.col-lg-6
              .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen16.jpg')
                p.mb-0.text-center
                  strong Angry Birds

    #t_1_1.titulo-segundo
      h2 1.1  Pipeline del videojuego

    p.mb-5 El pipeline es el proceso productivo que acarrea el videojuego. Por ello es importante definirlo, para tener un flujo de trabajo detallado, lo que permite que se realice en un proceso lógico, evitando retrasos en la realización del producto final.
    
    .row.justify-content-center
      .col-auto
        .titulo-sexto.color-acento-contenido.w-auto
          h5 Figura 1 
          span Pipeline videojuego

    figure.mb-5
      img(src='@/assets/curso/tema1-imagen17.svg')

    .row.justify-content-center
      .col-12.col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1-imagen18.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Ver anexo de Infografía
                  p.text-small  Infografía de Pipeline del videojuego 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    Separador

    #t_1_2.titulo-segundo
      h2 1.2  Antecedentes del videojuego en Colombia

    .mb-5.px-4.py-3.texto-color-offset-top-left-2.color-secundario
      p.mb-0 Aquí se mencionan algunos de los videojuegos más sobresalientes elaborados por empresas colombianas, algunos ganadores de diferentes premios, como también catalogados entre los más descargados. Cabe aclarar que no son todos los videojuegos realizados en el país:

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
