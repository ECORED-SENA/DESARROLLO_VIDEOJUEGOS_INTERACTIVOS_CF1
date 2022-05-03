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
            strong <i>“Tennis for Two”</i>
            | , el cual funcionaba con una perilla que se podía girar a la izquierda o a la derecha, para ajustar la trayectoria de la pelota de <i>ping pong</i>. 
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
                strong <i>Tennis for Two</i>
          .col-md-6.d-flex
            .p-4.imagen-color-offset-top-left.color-secundario
              figure.mb-4
                img(src='@/assets/curso/tema1-imagen2.jpg')
              p.mb-0.text-center
                strong Oxo


        div.px-5(titulo="1972")
          p.mb-5 En 1972, nace <strong>Pong</strong>, de Nolan Bushnell, al parecer basado en la misma lógica de <strong><i>“Tennis for Two”</i></strong>, aunque en vista superior y una mecánica muy similar, creando a partir de aquí a Atari, una empresa que empezó a distribuir máquinas en Estados Unidos. 
            br
            br
            | Después, aparece Ralph Baer, que muchos años atrás, en 1968, había creado una videoconsola que se llamaba -<strong><i>Magnavox Odyssey</i></strong>, y uno de sus principales juegos fue <strong><i>“Chase Game”</i></strong>, que también era muy parecido a los ya mencionados, y quien demandó a Atari, cobrando una indemnización por uso de los derechos del juego.
          .row.justify-content-center
            .col-12.col-md-4
              .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen3.jpg')
                p.mb-0.text-center
                  strong <i>Pong</i>

        div.px-5(titulo="1978")
          p.mb-5 A su vez, en Japón, en 1978, por la empresa Taito, surge <i>”Space Invaders”</i>, uno de los grandes referentes de los videojuegos. 
            br
            | Namco crea, en 1980, uno de los juegos más icónicos del mercado: <i>“Pacman”</i>.
          .row
            .col-12.col-lg-3.mb-4.mb-md-0.d-flex
              .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen4.jpg')
                p.mb-0.text-center
                  strong <i>Space Invaders</i>
            .col-12.col-lg-5.offset-lg-1.d-flex
              .p-4.imagen-color-offset-top-left.color-acento-contenido
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen5.jpg')
                p.mb-0.text-center
                  strong <i>Pacman</i>

        div.px-5(titulo="1981")
          p.mb-5 Posterior a ellos, Nintendo, una empresa que se encarga de crear naipes, decide aventurarse en el desarrollo de la tecnología de los videojuegos, contratando a Shigeru Miyamoto, quien en 1981 creó a <strong><i>“Donkey Kong”</i></strong>, un gorila que tiene capturada a una princesa que debe ser rescatada por <i>Jumpman</i>, quien posteriormente se convierte en el famoso <i>Mario Bros</i>.
          .row.justify-content-center
            .col-8.col-lg-4
              .p-4.imagen-color-offset-top-left.color-acento-contenido
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen6.jpg')
                p.mb-0.text-center
                  strong <i>Donkey Kong</i>

        div.px-5(titulo="1982")
          p.mb-5 En el año 1982, cuatro trabajadores de la empresa Atari deciden renunciar, porque no se consideraban valorados por la empresa, después de que esta fue vendida a la Warner, y juntos crean la empresa Activision, lanzando el primer videojuego de plataformas, <i>“Pitfall”</i>. 
          .row.justify-content-center
            .col-8.col-lg-4
              .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen7.jpg')
                p.mb-0.text-center
                  strong <i>Pitfall</i>

        div.px-5(titulo="1985")
          p.mb-5 En los años 80, en Estados Unidos, los videojuegos tienen una caída considerable; por ello, llega Japón al rescate y, en 1985, Nintendo  posiciona uno de los juegos más icónicos de la historia, <i>“Super Mario Bros.”</i>,  que viene del juego <i>“Donkey Kong”</i>. El mismo diseñador crea después “Zelda”, la historia de un niño que se mueve en el campo y avanza explorando diversos sitios. 
          .row.justify-content-center
            .col-12.col-lg-10
              .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen8.jpg')
                p.mb-0.text-center
                  strong <i>Super Mario Bros</i>

        div.px-5(titulo="1987")
          p.mb-5 En 1987, la empresa Capcom crea <i>“Streetfighter”</i> y otros títulos más. Asimismo, otra empresa importante, Konami, crea “Contra”.
            br
            br
            | En este mismo año,  <i>LucasFilm Games</i> saca al mercado un juego de aventuras llamado <i>“Maniac Mansion”</i>, el primero en hacer uso del clic del mouse. Posterior a ello, también se creó <i>“Indiana Jones and the last crusade”</i>, en 1989.
          .row.justify-content-center
            .col-8.col-lg-4
              .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen9.jpg')
                p.mb-0.text-center
                  strong <i>Maniac Mansion</i>

        div.px-5(titulo="1988")
          p.mb-5 En 1988, Nintendo decide crear una consola portátil, llamada <i>Gameboy</i>, cuyo juego estrella es el “Tetris”, que fue creado en Rusia, por Alexey Pajitnov, quien trabajaba para una empresa rusa, que distribuye el juego, y, finalmente, llega a manos de Nintendo.
          .row.justify-content-center
            .col-9.col-lg-4
              .p-4.imagen-color-offset-top-left.color-acento-contenido
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen10.jpg')
                p.mb-0.text-center
                  strong <i>Tetris</i>

        div.px-5(titulo="1991")
          p.mb-5 Sega, después de mucha competencia con Nintendo, crea <i>“Sonic”</i>, en 1991, uno de sus íconos estrella.
            br
            br
            | En un principio, los juegos se destacan porque son representados con luces blancas. Posterior a ello, en los años 80, introducen los 8, 16 y 32 bits. Y en los 90, se da una evolución hacia el 3D, donde los gráficos se encuentran renderizados y pueden ser usados en las diversas consolas. 
          .row.justify-content-center
            .col-12.col-lg-6
              .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen11.jpg')
                p.mb-0.text-center
                  strong <i>Sonic</i>

        div.px-5(titulo="1992")
          p.mb-5 <i>Id Software</i> creó juegos que rápidamente se usaron en computadoras, como <i>“Wolfenstein”</i> 3D y <i>Doom</i> juegos en primera persona tipo <i>shooter</i> que tenían una vista y recorrido en 3D creado en 1992 y 1993 respectivamente. 
          .row.justify-content-center
            .col-12.col-lg-6
              .p-4.imagen-color-offset-top-left.color-acento-contenido
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen12.jpg')
                p.mb-0.text-center
                  strong <i>Wolfenstein</i>

        .row.justify-content-center(titulo="1996")
          .col-12.col-lg-6.mb-5.mb-lg-0
            p.mb-0 En 1994, <i>“Donkey Kong Country”</i> sale al mercado, con un estilo 3D prerrenderizado, igual que <i>“Warcraft Orcs and humans”</i>.
              br
              br
              | En 1996, aparece uno de los primeros juegos de estrategia, el gran reconocido “Diablo”, un <i>RPG</i>,  seguido de <i>“Age of empires”</i>, en 1997. 
              br
              br
              | <i>Sony</i> y <i>Sega</i> son los nuevos competidores del mercado, y salen nuevos juegos, como <i>“Resident Evil”</i>, en 1996. En ese mismo año, el famoso juego  “<i>Super Mario</i> 64” es adaptado por primera vez en 3D.
          .col-6.col-lg-3
            .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen13.jpg')
                p.mb-0.text-center
                  strong <i>Resident Evil</i>

        .row.justify-content-center(titulo="2001")
          .col-12.col-lg-6.mb-5.mb-lg-0
            p.mb-0 Uno de los grandes juegos, <i>“Halo”</i>, se inserta al mercado en el 2001, mejorando enormemente en la jugabilidad. 
              br
              br
              | Finalmente, esta evolución del videojuego muestra que la calidad de imagen es muy superior, logrando juegos fotorealistas.
          .col-6.col-lg-3
            .p-4.imagen-color-offset-top-left.color-acento-contenido
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen14.jpg')
                p.mb-0.text-center
                  strong <i>Halo</i>
        
        div.px-5(titulo="2004")
          p.mb-5 En el año 2004, <i>“World of the Warcraft”</i>, el cual es la cuarta saga de una serie que evoluciona como multijugador masivo de tiempo real.
            br
            br
            | En 2004, llega una nueva forma de videojuegos, al eliminar los controles, con el <i>Kinect</i> de la <i>Xbox</i> 360, creando juegos que cambian la jugabilidad, utilizando el cuerpo de la persona como herramienta de acción. 
          .row.justify-content-center
            .col-12.col-lg-6
              .p-4.imagen-color-offset-top-left.color-secundario
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen15.jpg')
                p.mb-0.text-center
                  strong <i>World of the Warcraft</i>

        div.px-5(titulo="2009")
          p.mb-5 En adelante a los años 2000, se ve un desarrollo muy alto en la calidad y jugabilidad, mejorando día a día en cada una de las entregas.
            br
            br
            | En el año 2009, nace <i>“Angry Birds”</i>, uno de los juegos más descargados de la <i>Play Store</i>, adentrándose en los celulares inteligentes. 
            br
            br
            | Cabe destacar que los juegos, debido a los altos estándares, son cada vez más pesados y requieren de procesamientos mucho más veloces, pero esto ha permitido que sean mucho más realistas que antes.  Los videojuegos día a día siguen evolucionando. 
          .row.justify-content-center
            .col-12.col-lg-6
              .p-4.imagen-color-offset-top-left.color-acento-contenido
                figure.mb-4
                  img(src='@/assets/curso/tema1-imagen16.jpg')
                p.mb-0.text-center
                  strong <i>Angry Birds</i>

    #t_1_1.titulo-segundo
      h2 1.1  <i>Pipeline</i> del videojuego

    p.mb-5 El <i>pipeline</i> es el proceso productivo que acarrea el videojuego. Por ello es importante definirlo, para tener un flujo de trabajo detallado, lo que permite que se realice en un proceso lógico, evitando retrasos en la realización del producto final.
    
    .row.justify-content-center
      .col-auto
        .titulo-sexto.color-acento-contenido.w-auto
          h5 Figura 1 
          span <i>Pipeline</i> videojuego

    figure.mb-5
      img(src='@/assets/curso/tema1-imagen17.svg')

    .row.justify-content-center(data-aos="fade-in" data-aos-delay="100" data-aos-duration="600")
      .col-12.col-lg-10
        .tarjeta.color-primario.container-maquinas.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1-imagen18.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Ver anexo de Infografía
                  p.text-small Infografía de <i>Pipeline</i> del videojuego 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/infografia 1.1_l.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    
    Separador

    #t_1_2.titulo-segundo
      h2 1.2  Antecedentes del videojuego en Colombia

    .mb-4.px-4.py-3.texto-color-offset-top-left-2.color-secundario
      p.mb-0 Aquí se mencionan algunos de los videojuegos más sobresalientes elaborados por empresas colombianas, algunos ganadores de diferentes premios, como también catalogados entre los más descargados. Cabe aclarar que no son todos los videojuegos realizados en el país:

    .p-5
      .tarjeta.tarjeta--games.p-4.mb-5
        SlyderA
          .row.p-5
            .col-12.col-lg-7.mb-5.mb-lg-0
              .h5 Audio Ninja 
              p.mb-0 Es un juego con estética 2D, cuyo fin es derrotar enemigos presionando botones en la pantalla para ir atacándolos al ritmo de la música. Fue diseñado para la plataforma Apple Store en el 2013, por la compañía Cocodrilo <i>Dog</i>, quedando como subcampeón en la categoría <i>‘Game runner up’</i> en el mismo año.
            .col-12.col-lg-5
              .row.justify-content-center
                .col-auto
                  .pt-2.pb-1.ps-4.pe-4.container-title
                    .titulo-sexto.color-acento-contenido.mb-0
                      h5 Figura 2
                      span Videojuego Audio Ninja
              figure.especial(style="max-height: 235px")
                img(src="@/assets/curso/tema1-imagen20.jpg")
                figcaption Tomada de <a href="https://www.cocodrilodog.com/web/#audioninja" target="_blank">https://www.cocodrilodog.com/web/#audioninja</a>
          .row.p-5
            .col-12.col-lg-7.mb-5.mb-lg-0
              .h5 <i>Grabbity</i>
              p.mb-0 En 2013, Efectos Studio lanzó este juego, el cual cuenta con una estética en 2D bien contrastada, donde el personaje resalta, pues este es de color negro y se mueve a través de un mundo de laberintos totalmente coloridos, esquivando los obstáculos que se le presentan en el camino; haciendo uso del acelerómetro incorporado en el celular o tablet.
            .col-12.col-lg-5
              .row.justify-content-center
                .col-auto
                  .pt-2.pb-1.ps-4.pe-4.container-title
                    .titulo-sexto.color-acento-contenido.mb-0
                      h5 Figura 3
                      span Videojuego <i>Grabbity</i>
              figure.especial(style="max-height: 235px")
                img(src="@/assets/curso/tema1-imagen21.jpg")
                figcaption Nota. Tomada de <a href="https://www.xataka.com.co/videojuegos/grabbity-un-divertido-juego-que-hara-girar-sin-control" target="_blank">https://www.xataka.com.co/videojuegos/grabbity-un-divertido-juego-que-hara-girar-sin-control</a>
          .row.p-5
            .col-12.col-lg-7.mb-5.mb-lg-0
              .h5 <i>Poltergeist: a Pixelated horror </i>
              p.mb-0 En este juego tipo puzzle en 2D, creado bajo la técnica pixel art, en vista isométrica, el jugador debe asumir el papel de Henry B. Knight, un fantasma que tiene por objetivo hacer huir a la familia que vive en su antigua mansión. Fue creado por el estudio <i>Glitchy Pixel</i> y se lanzó al mercado en el año 2014.
            .col-12.col-lg-3.offset-lg-2
              .row.justify-content-center
                .col-auto
                  .pt-2.pb-1.ps-4.pe-4.container-title
                    .titulo-sexto.color-acento-contenido.mb-0
                      h5 Figura 4
                      span Videojuego <i>Poltergeist</i>
              figure
                img(src="@/assets/curso/tema1-imagen22.jpg")
                figcaption Nota. Tomada de Poltergeist : <i>A Pixelated Horror</i> sur PS Vita @JVL <a href="https://www.jeuxvideo-live.com" target="_blank">(jeuxvideo-live.com)</a>
          .row.p-5
            .col-12.col-lg-7.mb-5.mb-lg-0
              .h5 <i>Story Warriors: Fairy Tales</i> (2015) 
              p.mb-0 Creado en el año 2015, por la empresa colombiana <i>Below The Games</i> (BTG), fundada por Carlos Rocha, trata de una aventura interactiva tipo puzzle, que narra interesantes cuentos de hadas, lo cual lo convierte en una atractiva forma de leer para los niños, ya que mezcla el entretenimiento con lo educativo.
            .col-12.col-lg-5
              .row.justify-content-center
                .col-auto
                  .pt-2.pb-1.ps-4.pe-4.container-title
                    .titulo-sexto.color-acento-contenido.mb-0
                      h5 Figura 5
                      span Videojuego <i>Story Warriors</i>
              figure.especial(style="max-height: 235px")
                img(src="@/assets/curso/tema1-imagen23.jpg")
                figcaption Nota. Tomada de <a href="https://twitter.com/SWFairyTales/status/577462629402353664/photo/2" target="_blank">SW: Fairy Tales (@SWFairyTales) / Twitter</a>
          .row.p-5
            .col-12.col-lg-7.mb-5.mb-lg-0
              .h5 <i>Neon Fury. Neón Fury</i> (2017) 
              p.mb-0 Es un juego de defensa de torres, creado para la realidad virtual, en el que se destacan sus gráficos en 3D y que se desarrolla en un escenario retro futurista. Fue diseñado por Teravision Games, compañía que ha venido creando contenido para reconocidas empresas, como Namco, Atari, Disney, Nickelodeon, Unicef, Natgeo y Discovery.
            .col-12.col-lg-5
              .row.justify-content-center
                .col-auto
                  .pt-2.pb-1.ps-4.pe-4.container-title
                    .titulo-sexto.color-acento-contenido.mb-0
                      h5 Figura 6
                      span Videojuego Neón Fury
              figure.especial(style="max-height: 235px")
                img(src="@/assets/curso/tema1-imagen24.jpg")
                figcaption Nota. Tomada de  Colombia apuesta a pleno por los videojuegos – <i>Gaming And Media</i>.
          .row.p-5
            .col-12.col-lg-7.mb-5.mb-lg-0
              .h5 <i>World War Doh</i> 
              p.mb-0 Es un juego cuyos personajes parecen elaborados en un <i>software</i> 3D, pero realmente usaron la técnica de la plastilina y el <i>Stop Motion</i> para generar las animaciones. Este es un juego que pertenece a la empresa <i>Jam City</i>, que compró la empresa <i>Brainz</i>. Su primera versión salió en el año 2017, para celulares.
            .col-12.col-lg-5
              .row.justify-content-center
                .col-auto
                  .pt-2.pb-1.ps-4.pe-4.container-title
                    .titulo-sexto.color-acento-contenido.mb-0
                      h5 Figura 7
                      span Videojuego <i>World War Doh </i>
              figure.especial(style="max-height: 235px")
                img(src="@/assets/curso/tema1-imagen25.jpg")
                figcaption Nota. Tomada de <a href="https://worldwardoh.com" target="_blank">https://worldwardoh.com</a>
          .row.p-5
            .col-12.col-lg-7.mb-5.mb-lg-0
              .h5 <i>Ark: Survival Evolved</i>
              p.mb-0 Es un juego que se ambienta en una isla en la que deambulan animales prehistóricos, los cuales deben ser domados o cazados. Ahí se debe sobrevivir a como dé lugar. Desarrollado por gráficos en 3D, lanzado en el año 2017. Se puede jugar en cualquier plataforma, <i>IOS, Android</i>, consola, PC. Además, es un juego multijugador, que funciona en línea. 
            .col-12.col-lg-5
              .row.justify-content-center
                .col-auto
                  .pt-2.pb-1.ps-4.pe-4.container-title
                    .titulo-sexto.color-acento-contenido.mb-0
                      h5 Figura 8
                      span Videojuego <i>Ark: Survival Evolved </i>
              figure.especial(style="max-height: 235px")
                img(src="@/assets/curso/tema1-imagen26.jpg")
                figcaption Nota. Tomada de Studio Wildcard.


          .row.p-5
            .col-12.col-lg-7.mb-5.mb-lg-0
              .h5 <i>Haimrik</i> (2018)  
              p.mb-0 <i>“Haimrik”</i> fue creado por la compañía <i>Below The Game</i> (BTG) y una empresa rusa en el año 2018, alcanzando un importante avance en cuanto a propiedad intelectual para Colombia, ya que se logró lanzar para plataformas como <i>Xbox One, Playstation</i> 4 y PC en <i>Steam</i>.  Se trata de un videojuego en 2D de acción y aventuras, ubicado en escenarios del Medioevo, mezcla el entretenimiento con lo educativo, ya que el objetivo del jugador es derrotar a los enemigos usando las palabras correctas para resolver los rompecabezas presentes en cada nivel. 
            .col-12.col-lg-5
              .row.justify-content-center
                .col-auto
                  .pt-2.pb-1.ps-4.pe-4.container-title
                    .titulo-sexto.color-acento-contenido.mb-0
                      h5 Figura 9
                      span Videojuego <i>Haimrik</i>
              figure.especial(style="max-height: 235px")
                img(src="@/assets/curso/tema1-imagen27.jpg")
                figcaption Nota. Tomada de <a href="https://www.3djuegos.com/26211/haimrik/#-img-3452317-26211-0-0" target="_blank"><i>Haimrik</i> para PC - 3DJuegos</a>
          .row.p-5
            .col-12.col-lg-7.mb-5.mb-lg-0
              .h5 Un cabrón en Transmilenio 
              p.mb-0 Desarrollado por <i>Black Mamba Studio</i> en el 2019, es un sencillo videojuego de acción, en el que el jugador, representado por un cabrito, debe bajarse  en su parada de destino abriéndose paso a través de vacas y cerdos que representan a los demás pasajeros, antes de que las puertas del Transmilenio se cierren. 
                br
                | Este videojuego fue ganador del premio Bogotá <i>Game Challenge</i>, gracias a los bien implementados gráficos 2D, la paleta de colores usada, una entretenida mecánica de juego, una experiencia de usuario intuitiva y al propósito de este juego, pues, a través de él, sus desarrolladores pretenden crear mayor conciencia y mejorar la cultura ciudadana en el sistema de transporte masivo. 
            .col-12.col-lg-5
              .row.justify-content-center
                .col-auto
                  .pt-2.pb-1.ps-4.pe-4.container-title
                    .titulo-sexto.color-acento-contenido.mb-0
                      h5 Figura 10
                      span Videojuego Un cabrón en Transmilenio 
              figure.especial(style="max-height: 235px")
                img(src="@/assets/curso/tema1-imagen28.jpg")
                figcaption Tomada de <a href="https://black-mamba-studio.itch.io/un-cabron-en-transmilenio" target="_blank">Un Cabrón en Transmilenio by <i>Black Mamba Studio</i>, <i>QuietGecko</i>, <i>prinfrexita</i>, <i>Carenalga</i> (itch.io)</a>
          .row.p-5
            .col-12.col-lg-7.mb-5.mb-lg-0
              .h5 <i>Captain Toonhead </i>
              p.mb-0 <i>“Captain Toonhead”</i> es una mejora al juego <i>Neon Fury</i> (2013), creada por <i>Teravision Games</i>, que se lanzará en 2021. Se trata de un juego de realidad virtual, con excelentes gráficos en <i>3D</i>, desarrollado para dispositivos <i>VR</i> de alta gama (<i>PSVR, Vive, Quest y Rift</i>), en el que el jugador debe usar su armamento y su habilidad en la construcción de torres para defender su base de enemigos cibernéticos.
            .col-12.col-lg-5
              .row.justify-content-center
                .col-auto
                  .pt-2.pb-1.ps-4.pe-4.container-title
                    .titulo-sexto.color-acento-contenido.mb-0
                      h5 Figura 11
                      span Videojuego <i>Captain Toonhead</i>
              figure.especial(style="max-height: 235px")
                img(src="@/assets/curso/tema1-imagen29.jpg")
                figcaption Nota. Tomada de <a href="https://teravisiongames.com/site/captain-toonhead/" target="_blank">https://teravisiongames.com/site/captain-toonhead/</a>
          .row.p-5
            .col-12.col-lg-7.mb-5.mb-lg-0
              .h5 Cristales 
              p.mb-0 Es un juego tipo <i>JRPG</i> clásico, que se estrena este verano de 2021. Este es un juego de tipo exploración, en el que se mezclan los tiempos pasado, presente y futuro. Realizado con una estética <i>2D</i>, elaborado cuadro por cuadro. Desarrollado por <i>Dreams Uncorporated</i>, juego que se puede jugar en diversas consolas y en computadora.
            .col-12.col-lg-5
              .row.justify-content-center
                .col-auto
                  .pt-2.pb-1.ps-4.pe-4.container-title
                    .titulo-sexto.color-acento-contenido.mb-0
                      h5 Figura 12
                      span Videojuego Cristales
              figure.especial(style="max-height: 235px")
                img(src="@/assets/curso/tema1-imagen30.jpg")
                figcaption Nota. Tomada de <a href="https://modusgames.com/cris-tales/" target="_blank">https://modusgames.com/cris-tales/</a>


    #t_1_3.titulo-segundo
      h2 1.3  Tipos de videojuegos y plataformas

    figure.container-image-box-color.mb-5
      img(src="@/assets/curso/tema1-imagen31.jpg")
      .color-text.px-4.py-4
        p.mb-0 El ocio y tiempo de esparcimiento de la cultura y la sociedad actual, a partir de los años 80, ha tenido una gran transformación. Cada vez más personas dedican tiempo y dinero hacia medios de entretenimientos tecnológicos, uno de ellos, los videojuegos. Esta industria desarrolló una curva de éxito exponencial al ser cada vez más asequible, convirtiéndose en una de las de mayor consumo en la actualidad.

    h3.titulo-tercero Tipos de juegos
    
    p.mb-5 Los videojuegos evolucionaron tomando nuevas mecánicas y características que los fueron transformando y a su vez desarrollando estilos diferenciados unos de otros, partiendo de la premisa de acción y recompensa. Debido a sus variaciones, los videojuegos se pueden clasificar en diferentes géneros y subgéneros, tomando en cuenta su tipo de jugabilidad, de los cuales podemos destacar los siguientes: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.px-3(titulo="Juegos de lucha")
        .col-md-7.mb-4.mb-md-0
          p Son juegos en los cuales se recrean combates entre mínimo 2 contrincantes sobre una arena de batalla, en perspectiva lateral en tercera persona.  
            br
            | En este tipo de juegos, como el famoso “Yo contra el barrio”, los jugadores se enfrentan a una cantidad amplia de enemigos, mientras van recorriendo escenarios conectados, que sirven como niveles. Puede jugar más de 1 jugador, de manera cooperativa. Otros ejemplos de este tipo de juegos son <i>“Double Dragon”</i>  y <i>“Final Fight”</i>.
      
        .col-md-5
          .row.justify-content-center
            .col-auto
              .titulo-sexto.color-acento-contenido
                h5 Figura 13
                span Videojuego <i>Final Fight</i>
          figure
            img(src='@/assets/curso/tema1-imagen32.jpg')
            figcaption Nota. Tomada de <a href="https://www.hobbyconsolas.com/reportajes/mejores-juegos-beat-em-retro-historia-83324" target="_blank">https://www.hobbyconsolas.com/reportajes/mejores-juegos-beat-em-retro-historia-83324</a>

      .row.p-3(titulo="Juegos FPS ")
        .col-md-7.mb-4.mb-md-0
          p En este género, la cámara se sitúa en la cabeza del personaje, en plano subjetivo, lo que da la sensación de que la vista del personaje es la vista del usuario. Como característica principal está el hecho de que, en su mayoría, este tipo de juegos optan por una acción frenética, donde se acentúan los reflejos y la precisión, como también, en algunos casos, aumenta la inmersión, al verse los objetos a gran detalle. Algunos ejemplos son <i>“Doom”, “Halo”</i> y <i>“Quake”</i>.

        .col-md-5
          .row.justify-content-center
            .col-auto
              .titulo-sexto.color-acento-contenido
                h5 Figura 14
                span Videojuego <i>Doom</i>
          figure
            img(src='@/assets/curso/tema1-imagen33.jpg')
            figcaption Nota. Tomada de <a href="https://bethesda.net/es/game/doom" target="blank">https://bethesda.net/es/game/doom</a>
      
      .row.px-3(titulo="Juegos de plataforma")
        .col-md-7.mb-4.mb-md-0
          p Es un género muy popular, gracias a juegos como <i>“Super Mario Bros.”</i> o <i>“Sonic”</i>, en el que, en vista de tercera persona, el personaje avanza sobre diferentes escenarios que sirven de niveles, sorteando obstáculos por medio de saltos o el uso de habilidades, para llegar al final de cada escenario.
          
        .col-md-5
          .row.justify-content-center
            .col-auto
              .titulo-sexto.color-acento-contenido
                h5 Figura 15
                span Videojuego <i>Super Mario Bros</i>.
          figure
            img(src='@/assets/curso/tema1-imagen34.jpg')
            figcaption Nota. Tomada de <a target="_blank" href="https://www.nintendo.es/Juegos/NES/Super-Mario-Bros--803853.html">https://www.nintendo.es/Juegos/NES/Super-Mario-Bros--803853.html</a>

      .row.px-3(titulo="Juegos simuladores")
        .col-md-7.mb-4.mb-md-0
          p Como su nombre lo indica, este género de juegos busca simular la realidad y transmitir sensaciones que realmente no están sucediendo, como en juegos de conducción de vehículos o simuladores de vuelo, entre ellos <i>“Flight Simulator”</i> y <i>“Bus Simulator”</i>.
          
        .col-md-5
          .row.justify-content-center
            .col-auto
              .titulo-sexto.color-acento-contenido
                h5 Figura 16
                span Videojuego <i>Flight Simulator</i>
          figure
            img(src='@/assets/curso/tema1-imagen35.jpg')
            figcaption Nota. Tomada de <a href="https://www.xbox.com/es-CO/games/microsoft-flight-simulator" target="_blank">https://www.xbox.com/es-CO/games/microsoft-flight-simulator</a>

      .row.px-3(titulo="Juegos de deportes")
        .col-md-7.mb-4.mb-md-0
          p Son aquellos videojuegos que toman como función principal las mecánicas físicas, para representar deportes, en algunas ocasiones, no como simulación, puesto que los tiempos, espacios y velocidades no corresponden a un acercamiento con la realidad, pero sí conservando las bases del deporte en el que se basan. Algunos de estos juegos son <i>“Fifa”, “Pes”, “Nba2k”</i>.
          
        .col-md-5
          .row.justify-content-center
            .col-auto
              .titulo-sexto.color-acento-contenido
                h5 Figura 17
                span Videojuego <i>FIFA</i> 21
          figure
            img(src='@/assets/curso/tema1-imagen36.jpg')
            figcaption Nota. Tomada de <a href="https://www.ea.com/es-es/games/fifa/fifa-21/media-hub/media/fifa-21-next-level-scenes-row" target="_blank">https://www.ea.com/es-es/games/fifa/fifa-21/media-hub/media/fifa-21-next-level-scenes-row</a>

      .row.px-3(titulo="Juegos de estrategia")
        .col-md-7.mb-4.mb-md-0
          p En este género de juego, generalmente en tercera persona con vista cenital, el usuario empieza con pocos recursos y conociendo su objetivo final, y, para lograrlo, emplea procesos de construcciones, exploraciones y recolección de recursos para mejorar sus asentamientos, indicando y dando órdenes que sirven como acciones para que sus aliados realicen. Este tipo de juegos no avanza con tanta rapidez y se le da alto énfasis al argumento, como es el caso de <i>“Age Of Empires”</i>, <i>“Warcraft”</i>, entre otros.
          
        .col-md-5
          .row.justify-content-center
            .col-auto
              .titulo-sexto.color-acento-contenido
                h5 Figura 18
                span Videojuego <i>Age of Empires</i>
          figure
            img(src='@/assets/curso/tema1-imagen37.jpg')
            figcaption Nota. Tomada de  <a href="https://www.ageofempires.com/games/age-of-empires-iv/" target="_blank">https://www.ageofempires.com/games/age-of-empires-iv/</a>


      .row.px-3(titulo="Juegos de aventura")
        .col-md-7.mb-4.mb-md-0
          p Son juegos en los cuales la premisa principal es la exploración del mundo en el que habita el personaje principal, donde se investiga y se resuelven acertijos para continuar avanzando. Se hace énfasis en las historias y el desarrollo del personaje; por ello, generalmente, son para 1 solo jugador, como el caso de <i>“Zelda” y “Alundra”</i>.
          
        .col-md-5
          .row.justify-content-center
            .col-auto
              .titulo-sexto.color-acento-contenido
                h5 Figura 19
                span Videojuego <i>The Legend of Zelda: Breath of the Wild</i>
          figure
            img(src='@/assets/curso/tema1-imagen38.jpg')
            figcaption Nota. Tomada de  <a href="https://www.zelda.com/breath-of-the-wild/es/media" target="_blank">https://www.zelda.com/breath-of-the-wild/es/media</a>

      .row.px-3(titulo="Juegos de rol")
        .col-md-7.mb-4.mb-md-0
          p En este tipo de videojuegos, como <i>“Final Fantasy”</i>, <i>“The Witcher”</i>, <i>“The Elder Scrolls”</i>, el usuario diseña el personaje desde el inicio e interpreta el rol del mismo. A medida que va avanzando, lo va desarrollando, aumentando parámetros como fuerza, resistencia, salud, entre otros. Pueden ser de 1 o varios personajes al mismo tiempo; generalmente se desarrollan en mundos abiertos, es decir, mundos completos, no seccionados en niveles.
          
        .col-md-5
          .row.justify-content-center
            .col-auto
              .titulo-sexto.color-acento-contenido
                h5 Figura 20
                span Videojuego <i>The Witcher 3: Wild Hunt</i>
          figure
            img(src='@/assets/curso/tema1-imagen39.jpg')
            figcaption Nota. Tomada de  <a href="https://thewitcher.com/en/witcher3" target="_blank">https://thewitcher.com/en/witcher3</a>
      
      .row.px-3(titulo="Juegos casuales")
        .col-md-7.mb-4.mb-md-0
          p Videojuegos basados en temáticas de entretenimiento o educación, que están destinados a jugadores no habituales que buscan una distracción diferente. Están basados en reglas simples y no requieren de una gran dedicación ni compromiso. Entre ellos están <i>“Angry Birds”, “Plants vs. Zombies”</i>.
          
        .col-md-5
          .row.justify-content-center
            .col-auto
              .titulo-sexto.color-acento-contenido
                h5 Figura 21
                span Videojuego <i>Angry Birds 2</i>
          figure
            img(src='@/assets/curso/tema1-imagen40.jpg')
            figcaption Nota. Tomada de <a href="https://www.rovio.com/games/angry-birds-2/" target="_blank">https://www.rovio.com/games/angry-birds-2/</a>
    
    h3.titulo-tercero Sistemas de clasificación en los videojuegos

    p.mb-5 Para el desarrollo de videojuegos existen sistemas de clasificación para poder ser vendidos o alquilados. Entre ellos, es posible destacar el sistema europeo y el americano.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10
        .row.container-uno-color.p-5.mb-5(data-aos="slide-right" data-aos-delay="100" data-aos-duration="600")
          .col-12.col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema1-imagen41.svg")
          .col-12.col-lg-9.mb-5.mb-lg-0
            h4 Sistema Europeo <i>PEGI</i> (<i>Pan European Game Information</i>) 
            p.mb-5 Fue creado el 9 de abril de 2003. El sistema <i>PEGI</i> se aplica en 32 países europeos y únicamente es obligatorio en dos de ellos, en Finlandia y Noruega.
            .row
              .col-12.col-lg-10
                .row.justify-content-center
                  .col-auto
                    .titulo-sexto.color-acento-contenido
                      h5 Figura 22
                      span Gráfica de clasificaciones en los videojuegos <i>PEGI</i>
                figure
                  img(src="@/assets/curso/tema1-imagen42.svg")
                  figcaption Nota. Tomada de <a class="text-wrap" target="_blank" href="https://www.divulgaciondinamica.es/blog/que-es-pegi-videojuegos/">https://www.divulgaciondinamica.es/blog/que-es-pegi-videojuegos/</a>

        .row.container-uno-color.claro.p-5(data-aos="slide-left" data-aos-delay="100" data-aos-duration="600")
          .col-12.col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema1-imagen43.svg")
          .col-12.col-lg-9.mb-5.mb-lg-0
            h4 Sistema estadounidense <i>Entertainment Software Rating Board</i> (ESRB)
            p.mb-5 Creado en 1994, tras la aparición del videojuego <i>“Mortal Kombat”</i> y toda la polémica que desató al contener violencia explícita. Utiliza letras alfabéticas, para clasificar así su contenido.
            .row
              .col-12.col-lg-10
                .row.justify-content-center
                  .col-auto
                    .titulo-sexto.color-acento-contenido
                      h5 Figura 23
                      span Gráfica de clasificaciones en los videojuegos <i>ESRB</i>
                figure
                  img(src="@/assets/curso/tema1-imagen44.svg")
                  figcaption Nota. Tomada de <a target="_blank" href="https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/senalradionica/articulo-noticia/galeriaimagen/fotorcreatedn.jpg">https://rtvc-assets-radionica3.s3.amazonaws.com/s3fs-public/senalradionica/articulo-noticia/galeriaimagen/fotorcreatedn.jpg</a> 


    h3.titulo-tercero  Plataformas actuales de videojuegos

    p.mb-5 Son los sistemas base donde funcionan los juegos, en dichos dispositivos se emplean lenguajes de programación. 

    h3.titulo-tercero Consolas de videojuegos 

    p.mb-5 Las consolas de videojuegos siguen siendo el sistema más popular de la actualidad. Entre ellas, se puede encontrar un cruce generacional, lo que se conoce como consolas de anterior generación y de nueva generación.

    .row.mb-5
      .col-12.col-lg-3.mb-0.d-flex(data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="600")
        figure.container-elements
          img(src="@/assets/curso/tema1-imagen45.png")
      .col-12.col-lg-3.mb-5.mb-lg-0.d-flex.container-elements-text.p-5.p-lg-0(data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600")
        table
          tbody
            tr
              td.align-middle Es la cuarta consola de la marca <i>Sony</i>, salió al mercado en 2013. Modo de gráficos mejorados: el juego se ejecuta a 1080p y 30 fps, pero con mejoras gráficas. 
      .col-12.col-lg-3.mb-0.d-flex(data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600")
        figure.container-elements
          img(src="@/assets/curso/tema1-imagen46.png")
      .col-12.col-lg-3.mb-5.mb-lg-0.d-flex.container-elements-text.p-5.p-lg-0(data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="600")
        table
          tbody
            tr
              td.align-middle  Tercera consola de videojuegos lanzada por <i>Microsoft</i> con polémica, puesto que se pretendía que fuese obligatorio que siempre estuviese conectada a Internet para poder usarse. Lanzada en 2013, se considera de anterior generación, precedida por la actual <i>Xbox Series X</i>.
    .row.mb-5
      .col-12.col-lg-3.mb-0.d-flex(data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="600")
        figure.container-elements
          img(src="@/assets/curso/tema1-imagen47.png")
      .col-12.col-lg-3.mb-5.mb-lg-0.d-flex.container-elements-text.p-5.p-lg-0(data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600")
        table
          tbody
            tr
              td.align-middle Consola de videojuegos de la marca <i>Sony</i>, la quinta en ser lanzada por esta marca, en 2020.  Con dos modelos, uno con unidad lectora de disco y otro sin esta. Desarrollada para mostrar juegos con resoluciones 4K.
      .col-12.col-lg-3.mb-0.d-flex(data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600")
        figure.container-elements
          img(src="@/assets/curso/tema1-imagen48.png")
      .col-12.col-lg-3.mb-5.mb-lg-0.d-flex.container-elements-text.p-5.p-lg-0(data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="600")
        table
          tbody
            tr
              td.align-middle Cuarta consola de generación lanzada por <i>Microsoft</i> para competir con la <i>PS5</i>. Destaca por su capacidad de dar soporte a resoluciones <i>8K</i>.
    .row.mb-5(data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600")
      .col-12.col-lg-3.mb-0.d-flex
        figure.container-elements.p-5
          img(src="@/assets/curso/tema1-imagen49.png")
      .col-12.col-lg-9.mb-5.mb-lg-0.d-flex.container-elements-text.p-5.p-lg-0
        table
          tbody
            tr
              td.align-middle La consola de menor potencia de la actualidad, pero se ve compensada por su versatilidad y portabilidad. Tiene una resolución de 1280 x 720px, aunque el sistema puede llegar a 1080p cuando está conectada al televisor. 

    h3.titulo-tercero PC

    p.mb-5 En los últimos años se ha vuelto muy popular el PC como sistema de videojuegos, esto en parte porque las desarrolladoras están lanzando por este medio los juegos que salen en videoconsolas. Se perfila a futuro como el sistema por excelencia. En el PC, es posible encontrar plataformas dedicadas a videojuegos basados en la nube, en un sistema similar a como trabaja <i>Netflix</i>, de las cuales podemos destacar las siguientes:

    .row.mb-5
      .col-12.col-lg-3.mb-0.d-flex(data-aos="zoom-in-left" data-aos-delay="100" data-aos-duration="600")
        figure.container-elements
          img(src="@/assets/curso/tema1-imagen50.png")
      .col-12.col-lg-3.mb-5.mb-lg-0.d-flex.container-elements-text.p-5.p-lg-0(data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600")
        table
          tbody
            tr
              td.align-middle Perteneciente a Valve, es la más grande plataforma de videojuegos para <i>PC y MAC</i>, con más de 7300 juegos, en la cual se pueden encontrar juegos de todo tipo, incluso los llamados <i>Free to Play</i>.
      .col-12.col-lg-3.mb-0.d-flex(data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600")
        figure.container-elements
          img(src="@/assets/curso/tema1-imagen51.png")
      .col-12.col-lg-3.mb-5.mb-lg-0.d-flex.container-elements-text.p-5.p-lg-0(data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="600")
        table
          tbody
            tr
              td.align-middle Es la plataforma de videojuegos de Google, ofrece videojuegos vía streaming, es decir, se ejecutan en los servidores de Google y se juegan a través de la app o el navegador.
    .row.mb-5
      .col-12.col-lg-3.mb-0.d-flex(data-aos="zoom-in-left" data-aos-delay="100" data-aos-duration="600")
        figure.container-elements
          img(src="@/assets/curso/tema1-imagen52.png")
      .col-12.col-lg-3.mb-5.mb-lg-0.d-flex.container-elements-text.p-5.p-lg-0(data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600")
        table
          tbody
            tr
              td.align-middle Es la plataforma de Ubisoft, desarrolladora destacada de videojuegos, en la cual podemos encontrar la saga <i>“Assassins Creed”</i>.
      .col-12.col-lg-3.mb-0.d-flex(data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600")
        figure.container-elements
          img(src="@/assets/curso/tema1-imagen53.png")
      .col-12.col-lg-3.mb-5.mb-lg-0.d-flex.container-elements-text.p-5.p-lg-0(data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="600")
        table
          tbody
            tr
              td.align-middle Plataforma perteneciente a la desarrolladora Electronics Arts, que se destaca por poseer juegos como <i>FIFA</i>.
    .row.mb-5
      .col-12.col-lg-3.mb-0.d-flex(data-aos="zoom-in-left" data-aos-delay="100" data-aos-duration="600")
        figure.container-elements
          img(src="@/assets/curso/tema1-imagen54.png")
      .col-12.col-lg-3.mb-5.mb-lg-0.d-flex.container-elements-text.p-5.p-lg-0(data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600")
        table
          tbody
            tr
              td.align-middle Plataforma que ha tomado mucha popularidad por ser la desarrolladora del juego free to play <i>“Fornite”</i> y el motor de videojuegos <i>Unreal Engine</i>; además de que semanalmente obsequian juegos.
      .col-12.col-lg-3.mb-0.d-flex(data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600")
        figure.container-elements
          img(src="@/assets/curso/tema1-imagen55.png")
      .col-12.col-lg-3.mb-5.mb-lg-0.d-flex.container-elements-text.p-5.p-lg-0(data-aos="zoom-in-right" data-aos-delay="100" data-aos-duration="600")
        table
          tbody
            tr
              td.align-middle Son plataformas que toman como base los navegadores web; generalmente alojan juegos casuales. Un sistema en el cual la mayoría son juegos gratis. Tuvo sus inicios en la ya difunta Adobe Flash Player. Entre ellas, se destacan: <a href='https://armorgames.com/' target='_blank'>https://armorgames.com/</a>, <a href='https://www.minijuegos.com/' target='_blank'>https://www.minijuegos.com/</a>, <a href='https://www.juegosdiarios.com/' target='_blank'></a>
    
    .row.justify-content-center.mb-5
      .col-10
        .container-maquinas.p-5
          .row
            .col-12.col-lg-6.mb-5.mb-lg-0
              h3.text-white Máquinas recreativas o <i>arcades</i>
              p.mb-0.text-white Populares en los 80 y 90, en los centros comerciales o salones recreativos. Han visto disminuida su popularidad al entrar en juego los sistemas domésticos y el Internet. Algunos Arcades populares son el <i>Pong, Rush'nAttack, Astro Fighter y Frogger</i>.
            .col-12.col-lg-6
              .row.justify-content-center
                .col-auto
                  .titulo-sexto.color-acento-contenido.mb-0
                    h5.text-white Figura 24
                    span.text-white <i>Arcades</i> populares
              figure
                img(src="@/assets/curso/tema1-imagen56.svg")
    .row
      .col-12.col-lg-6.mb-5.mb-lg-0
        h3 Celulares
        p.mb-0 Los celulares, en la última década, se han posicionado como el hardware con mayor catálogo de juegos. Sea de paso dicho, su mayor concentración se basa en videojuegos casuales, popularizándose con el lanzamiento de <i>“Angry Birds”, “Candy Crush”, “Plants vs. Zombies”</i>, entre otros. Aunque con la tecnología avanzando de manera exponencial, los videojuegos que antes se lanzaban en consolas están llegando a estos dispositivos; juegos tipo<i> battle royale</i> (todos contra todos), como <i>“Free Fire”</i> o <i>“Fortnite”</i>, siendo así que las consolas portátiles prácticamente han desaparecido del panorama actual y los teléfonos móviles han tomado el lugar que estas han dejado.
      .col-12.col-lg-6
        figure
          img(src="@/assets/curso/tema1-imagen57.svg")
  
</template>

<script>
export default {
  name: 'Tema1',
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
