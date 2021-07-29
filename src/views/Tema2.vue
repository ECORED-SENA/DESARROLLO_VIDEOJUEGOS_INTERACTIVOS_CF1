<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Idea general del videojuego

    .mb-5.px-4.py-3.texto-color-offset-top-left-2
      p.mb-0 Cuando se está pensando en diseñar un videojuego, es importante comenzar con la idea general del juego. Algunos pasos que pueden ayudar a crear esa idea del juego son: 

    .row.justify-content-center
      .col-12.col-lg-10
        .row.container-uno-color.p-5.mb-5(data-aos="fade-left" data-aos-delay="100" data-aos-duration="600")
          .col-12.col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen1.svg")
          .col-12.col-lg-9.mb-5.mb-lg-0
            h4 a. Hacer una lluvia de ideas
            p.mb-5 Comenzar con muchas ideas, pensando en una historia básica.  
              br
              | Ejemplo lluvia de ideas: niño aventurero, explora, animales, extraterrestre, niño desjuiciado, desaparecido, escape, lucha, monstruos, mamá, busca comida, perdida en bosque, medallones para regresar y avanzar, alimentar el niño, duende, explora ambientes uno frío y uno cálido, busca de medallones, monedas de oro, pasa niveles recolectando, árboles, bosque, noche, día, puente, muerte, mundo, dios, flores, frutas, mago.

        .row.container-uno-color.claro.p-5.mb-5(data-aos="fade-right" data-aos-delay="200" data-aos-duration="600")
          .col-12.col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen2.svg")
          .col-12.col-lg-9.mb-5.mb-lg-0
            h4 b. Escoger la temática  
            p.mb-5 Se recomienda crear la temática a partir de las ideas más relevantes que surjan de la lluvia de ideas para armar su propia temática. Ejemplo temático: <i>Flynn</i>: niño perdido en un bosque, busca frutos para ayudar a su madre a curarse de una enfermedad terminal.

        .row.container-uno-color.p-5.mb-5(data-aos="fade-left" data-aos-delay="200" data-aos-duration="600")
          .col-12.col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen3.svg")
          .col-12.col-lg-9.mb-5.mb-lg-0
            h4 c. Buscar referentes de videojuegos
            p.mb-5 Ya sean internacionales o nacionales, parecidos a la temática elegida. Esto ayudará a ampliar las ideas y a tener una idea más completa del videojuego que se quiere diseñar. 

    h3.titulo-tercero Ejemplo de referentes de videojuegos:

    .row.p-4.div-background-games
      .col-12.col-lg-4.mb-5.mb-lg-0
        .container-juegos-blanco.px-5.py-4
          .row.justify-content-center
            .col-auto
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 25
                span Videojuego Limbo
          figure
            img(src="@/assets/curso/tema2-imagen4.jpg")
            figcaption Nota. Tomada de <a href="https://playdead.com/games/limbo/#&gid=1&pid=7" target="_blank">https://playdead.com/games/limbo/#&gid=1&pid=7</a>
      .col-12.col-lg-4.mb-5.mb-lg-0
        .container-juegos-blanco.px-5.py-4
          .row.justify-content-center
            .col-auto
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 26
                span Videojuego <i>Do animals dream?</i>
          figure
            img(src="@/assets/curso/tema2-imagen5.jpg")
            figcaption Nota. Tomada de <a href="https://playdead.com/games/limbo/#&gid=1&pid=7" target="_blank">https://playdead.com/games/limbo/#&gid=1&pid=7</a>

      .col-12.col-lg-4
        .container-juegos-blanco.px-5.py-4
          .row.justify-content-center
            .col-auto
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 27
                span <i>Little nightmares</i>
          figure
            img(src="@/assets/curso/tema2-imagen6.jpg")
            figcaption Nota. Tomada de <a href="https://store.steampowered.com/app/424840/Little_Nightmares/?l=spanish" target="_blank">https://store.steampowered.com/app/424840/Little_Nightmares/?l=spanish</a>

    Separador

    #t_2_1.titulo-segundo
      h2 2.1  Personajes

    .mb-4.px-4.py-3.texto-color-offset-top-left-2.color-secundario
      p.mb-0 Los personajes en los videojuegos están generalmente definidos por los arquetipos de personalidades que entran en juego a la hora de narrar la historia que se va a desarrollar. En ellos, es posible encontrar diversidad de elementos, con unas características marcadas en cuanto a su forma de ser. Cabe destacar ciertos elementos que van a contribuir a la construcción de un personaje:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      div.px-4(titulo="Personalidad")
        p.mb-2 Definir, según el arquetipo, qué tipo de personaje va a ser el protagonista o antagonista, cómo es su carácter, qué lo motiva, qué lo hiere, qué le gusta y disgusta, todo ello para formar su personalidad, que es la que finalmente determina cómo se comporta el personaje, cómo camina, cómo se mueve, cómo se expresa, si es efusivo o si es introvertido.

      div.px-4(titulo="Aspecto")
        p.mb-2 Basados en su personalidad, se va construyendo su aspecto. En este punto, se define cómo lucirá el personaje, su género, sus características físicas, si es alto o bajo, ancho o delgado, si es joven o viejo, si es morfológicamente humanoide o animal.

      .row.px-4(titulo="Estilo visual")
        .col-12.col-lg-6.mb-5.mb-lg-0
          p.mb-0 En este apartado es donde se decide la dirección artística del personaje y demás elementos, si se busca que se vea realista, para darle un enfoque más dramático, cercano a la realidad, con texturas y modelados detallados, o si se busca transmitir una sensación de fantasía y cuento de hadas, en cuyo caso, se optaría por un estilo tipo cell shading, que transmita esa ambientación. Estilos minimalistas, tipo cartoon o anime entre otros.
        .col-12.col-lg-6
          .row.justify-content-center
            .col-auto
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 28
                span Aspecto visual juego <i>Agent Intercept</i>
          figure
            img(src="@/assets/curso/tema2-imagen7.jpg")
            figcaption Nota. Tomada de <a href="https://store.steampowered.com/app/1502710/Agent_Intercept/" target="_blank">https://store.steampowered.com/app/1502710/Agent_Intercept/</a>

      .row.px-4(titulo="Thumbnails")
        .col-12.col-lg-6.mb-5.mb-lg-0
          p.mb-0 En este paso, es donde comienza la exploración del proceso de diseño, se empiezan a hacer bocetos pequeños para explorar ideas que puedan funcionar o descartarse. Un punto a tener en cuenta es la creación de la silueta del personaje, para ver cómo se reconoce en la visualización; para ello, por ejemplo para un juego <i>2D</i> lateral de plataformas, se crean thumbnails de la silueta en varias posiciones, teniendo en cuenta la vista lateral de la cámara. En igual caso, si el juego se viera en vista cenital, las siluetas deberían hacerse teniendo en cuenta esta vista.
        .col-12.col-lg-6
          .row.justify-content-center
            .col-auto
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 29
                span <i>Thumbnails</i>
          figure
            img(src="@/assets/curso/tema2-imagen8.jpg")
            figcaption Nota. Tomada de <a href="https://www.notodoanimacion.es/diseno-y-creacion-de-personajes-para-videojuegos/" target="_blank">https://www.notodoanimacion.es/diseno-y-creacion-de-personajes-para-videojuegos/</a>

      div.px-4(titulo="Paleta de colores")
        p.mb-5 La selección de la paleta de colores es fundamental, puesto que dota de carácter y personalidad. Esta paleta de colores debe ser coherente e ir en sintonía con el juego y el personaje. Un ejemplo de ello es la paleta de colores de <i>Super Mario Bros</i>., que viene fuertemente marcada por rojos y ocres, para el personaje, y amarillos, verdes y azules, para escenarios.
        .row.justify-content-center
          .col-12.col-lg-10
            .row.justify-content-center.mb-4
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 30
                  span Paleta de colores ejemplo de <i>Super Mario Bros</i>.
            figure
              img(src="@/assets/curso/tema2-imagen9.jpg")
              figcaption Nota. Tomada de <a href="https://mario.fandom.com/es/wiki/Super_Mario_Wiki:Paleta_de_Colores" target="_blank">https://mario.fandom.com/es/wiki/Super_Mario_Wiki:Paleta_de_Colores</a>

      div.px-4(titulo="Identidad")
        p.mb-5 En este punto debemos tener elementos que ayuden a definir ciertas características del personaje, para que a primera vista sean fácilmente identificables, como brazos largos o piernas desproporcionadas, para resaltar ciertas cualidades físicas; todo ello de la mano con los modeladores de personajes, pues, en trabajo conjunto, finalmente se desarrolla todo el personaje, donde queda listo su lenguaje corporal, sus elementos característicos y objetos que lo acompañarán.
        .row.justify-content-center
          .col-12.col-md-9
            .row.justify-content-center.mb-4
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 31
                  span Doce arquetipos de personalidad de <i>Carl Gustav Jung</i>
            figure
              img(src="@/assets/curso/tema2-imagen10.svg")
              figcaption Nota. Tomada de <a href="https://www.ondho.com/que-es-arquetipo-marca/" target="_blank">https://www.ondho.com/que-es-arquetipo-marca/</a>

    .row.justify-content-center
      .col-12.col-lg-9
        .cajon.color-acento-contenido.p-4.mb-4
          .h5 Ficha técnica de un personaje
          p Observe el ejemplo de la ficha técnica de identidad para un personaje principal.
          .row
            .col-12.col-lg-7.offset-lg-5
              a.anexo.mb-4(:href="obtenerLink('/downloads/CF001_2.1_Ficha Tecnica de personaje.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p
                    strong Anexo
                    |  descargar <i>PDF</i> del ejemplo de la ficha técnica de un personaje.

    Separador

    #t_2_2.titulo-segundo
      h2 2.2  Narración

    p.mb-5 Es la forma como se cuentan los sucesos o acciones llevados a cabo por uno o más personajes que se encuentran en un contexto espacio-temporal y que van dando forma a la historia. Los personajes son el corazón del videojuego, ya que la historia no puede existir sin ellos, pues son quienes llevan a cabo las acciones y la sucesión de eventos que dan vida al relato, cuento o novela. 

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-primario.p-4(titulo="A. Tipos de narrador")
        h4 Tipos de narrador
        p Hay varios tipos de narradores, entre ellos está el que todo lo ve (omnisciente) y todo lo sabe, es decir, es quien describe todo lo que sucede incluso lo que están pensando los personajes: 
        ul.lista-ul--color
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong El narrador testigo. 
              |  Cuenta las cosas como si las hubiese visto, tal cual sucedieron, lo hace en tercera persona y lo puede hacer en presente o pasado. Es importante saber qué tipo de testigo es, por ejemplo, un niño, un profesor, un bombero, un mago.
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong El narrador protagonista. 
              |  Relata la historia desde su punto de vista, como si le hubiese pasado a él. Hay que tener en cuenta que es el personaje quien relata, por ello se debe usar su personalidad.
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong Trama o argumento. 
              |  Hay otros tipos de narradores que van describiendo o contando desde diferentes puntos de vista lo que va sucediendo.

      .tarjeta.color-primario.p-4(titulo="B. Características de la historia")
        h4 Características de la historia
        p En la poética de Aristóteles, se definen las características esenciales que conforman una historia:
        ul.lista-ul--color
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong Fábula.
              |  Trama o argumento que corresponde a la sucesión de eventos que se van a ir narrando y describiendo en la historia que se quiere contar. 
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong Personajes.
              |  El segundo gran elemento de las historias son sus protagonistas y antagonistas, sin ellos no tendrían ningún sentido. De ellos depende el buen desarrollo de la historia, pues a su alrededor gira todo. El éxito de un videojuego siempre va a estar ligado a la profundidad de los personajes.
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong Pensamiento.
              |  Es el tema, es decir,  en qué se va a enfocar la historia dentro de los diferentes géneros: terror, comedia, policial, drama, entre otros. Se debe destacar una idea principal, como la venganza, el amor, la ecología, los zombis, los virus, la destrucción de la humanidad, etc. El tema de la historia, en cierta medida, establece la mecánica del juego, el contenido y su expresión artística; elementos que definen qué tan interesante será el videojuego.
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong Elocución o diálogo. 
              |  Le da importancia a lo que dicen los protagonistas, es decir, al tono de su voz, la forma como se expresan y el uso de las palabras; esto ayuda a crear una identidad única y singular a cada uno de ellos. Por ejemplo, un personaje científico se expresa de manera muy distinta a un personaje guerrero, demostrando diferentes capacidades intelectuales o culturales.
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong Melopeya.
              |  La melodía o música tiene un enorme grado de importancia en la narrativa, ya que acompaña la creación y desarrollo de la historia y le da vida a través de la ambientación de los diferentes escenarios o niveles del videojuego, transmitiendo diferentes sensaciones o emociones al jugador.

      .tarjeta.color-primario.p-4(titulo="C. Estructura narrativa en 3 actos")
        h4 Estructura narrativa en 3 actos
        p El formato estándar de cualquier historia, incluida la de los videojuegos, empieza con: 
        ul.lista-ul--color
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong Primer acto (planteamiento). 
              |  Se inicia con el planteamiento, donde se presenta el personaje realizando algún tipo de acción en un mundo o escenario. Después de eso, ocurre un <strong>primer giro</strong> (detonante o conflicto), evento que cambia completamente la historia. Por ejemplo, el protagonista se da cuenta de que el antagonista está destruyendo el bosque, por ello debate sobre qué hacer y es aquí donde decide cruzar el umbral del cual no tendrá regreso. 
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong Segundo acto (nudo). 
              |  En el camino se encuentra con diversos obstáculos, durante su trayecto decide entrenar para enfrentarlos, pero tiene dificultades, se siente en conflicto consigo mismo y se siente debilitado o inseguro de continuar, hay una crisis; es aquí donde se presenta un <strong>segundo giro</strong>, el héroe encuentra lo que puede hacer para fortalecerse.
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong Tercer acto. 
              |  Luego de esto, se produce un incremento de la acción hasta alcanzar un punto máximo en la historia, llamado <strong>clímax</strong>, enfrentamiento entre el protagonista y el antagonista mayor. Aquí puede ser que el protagonista gane la batalla, por lo tanto, la acción decae hasta que se produce una resolución, donde se da solución al conflicto; y, posteriormente, el desenlace o cierre de la historia, el cual puede ser parcial, si se trata de atraer jugadores hacia una segunda parte del videojuego.
        
        .row.justify-content-center.mb-4
          .col-auto
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 32
              span Estructura narrativa
        figure.mb-4
          img(src="@/assets/curso/tema2-imagen11.png")

        p.mb-5 Generalmente, las historias tienen un inicio o planteamiento, nudo y desenlace, clímax, resolución y cierre; aunque existen ciertos tipos de historias que no necesariamente tienen un final, sino que quedan abiertas.

      .tarjeta.color-primario.p-4(titulo="D. Progresión")
        h4 Progresión
        p Los cinco elementos de la estructura lúdica del juego, según <i>Durgan Nallar</i> (2015), son: deseos, objetivos, desafíos, progresión y recompensas.
        ul.lista-ul--color
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong Deseos. 
              | A través de situaciones que el jugador debe resolver, se provoca una sensación de agrado al alcanzar un logro, lo cual es fundamental para el mecanismo de retención.
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong Objetivos. 
              | Son de tres tipos: de corto plazo, que básicamente es lo que se hace al jugar; mediano plazo, que hacen referencia a la acumulación de experiencia, ítems y demás elementos necesarios para alcanzar el último nivel, que sería el objetivo principal de largo plazo. Los objetivos de mediano plazo son de suma importancia, tanto para alcanzar el objetivo de largo plazo como para mantener el mecanismo de retención, pues son los que permiten la progresión.
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong Desafíos. 
              | Son retos o pruebas que deben ir siempre un paso adelante de la habilidad actual del jugador, ya que este va mejorando con el tiempo y la práctica; por lo tanto, los desafíos también deben mantener el interés a medida que el jugador progresa.
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong Progresión. 
              | Se trata de brindar al jugador la sensación de avance, permitiéndole trasladar su experiencia, ítems y demás recompensas a lo largo del juego, gracias a su naturaleza, el formato, o el dispositivo electrónico que permite guardar el progreso de la partida. El sistema de progresión permite acumular puntos de experiencia, lo que le posibilita al jugador subir de nivel y acceder a nuevos desafíos y mejores recompensas; por ello, es necesario ir intensificando el juego de manera fluida, equilibrada y progresiva, de forma tal que no se vuelva tan difícil para que el jugador no se frustre, ni tan fácil para que no se aburra.
          li 
            i.fas.fa-gamepad
            p.mb-3
              strong Recompensas (el score, títulos, logros y demás). 
              | Provocan que el jugador disfrute y explore más y se sienta mejor a medida que progresa, aunque no son la principal razón por la que las personas juegan, a excepción de algunos videojuegos de tipo abstracto que carecen de una historia que desarrollar.

      .tarjeta.color-primario.p-4(titulo="E. Narrativa formal y narrativa participativa o interactiva ")
        h4 Narrativa formal y narrativa participativa o interactiva 
        p Para diferenciar un poco mejor la <strong>narrativa formal</strong> de la <strong>narrativa interactiva</strong>, es posible realizar una comparación entre las películas y los videojuegos. 
          br
          br
          | <strong>Las películas</strong> generalmente se desarrollan lineal y secuencialmente, donde existe un planteamiento, incidente inicial, clímax, resolución y desenlace, que ya tienen un orden específico preestablecido, de escena en escena, hasta llegar al final, sin que se pueda alterar dicho orden. Es decir, no se puede intervenir y el espectador tiene un rol pasivo (aunque existen algunas excepciones). 
          br
          br
          | Por otro lado, <strong>los videojuegos</strong> presentan los mismos elementos, pero con un desarrollo ramificado que brinda al jugador la posibilidad de interactuar y elegir lo que pasa en la historia, gracias a las decisiones que toma. Es decir, un jugador que se encuentra en el primer nivel se encuentra en tres puertas, A, B y C, y debe decidir cruzar una de ellas. En cada una de esas habitaciones, encontrará un desafío diferente, que lo conduce a un segundo nivel. De la misma forma, puede avanzar hacia tres puertas más, que lo pueden llevar al tercer nivel o, incluso, devolverlo al inicio. Todo esto está controlado por el guionista o escritor, pero le da una sensación de control al jugador. Realmente, es un engaño y un gancho para tener atrapado al jugador y darle versatilidad al videojuego.

    .row
      .col-12.col-lg-7.offset-lg-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/CF001_2.2_Creacion de la historia.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p
              strong Anexo. Ejemplo de guion narrativo del videojuego.
              br
              | Observe el ejemplo para la creación de la historia y el guion narrativo del juego

    Separador

    #t_2_3.titulo-segundo
      h2 2.3  Teoría básica luces y sombras

    p.mb-5 ¿Cómo se afecta la percepción de los objetos según la clase de luz que los ilumina? Estos van a mostrar ciertas características gracias al tipo de iluminación que se utiliza.  Es posible distinguir ciertos aspectos de los elementos, tales como su color, textura, volumen, forma, ubicación en el espacio, entre otros, los cuales pueden variar debido al uso de un tipo de iluminación en particular. Gracias a las luces y sombras, es posible percibir la forma tridimensional de un objeto, por eso es preciso mencionar que hay que tener en cuenta qué tipo de iluminación está afectando nuestra escena; para ello, a continuación, se mencionan los tipos de luces que se implementan:

    .row.mb-5
      .col-12.col-lg-6.mb-5.mb-lg-0.d-flex(data-aos="slide-right" data-aos-delay="250" data-aos-duration="600" data-aos-offset="200")
        .caja-texto.color-primario.p-5
          .row.mb-5
            .col-3
              .line-selector-text.color-acento-contenido
          p.mb-0
            strong Luz natural.
            |  La luz natural es la que emite el sol y se proyecta sobre los cuerpos, pero varía según la hora del día. Por ello, es posible notar el momento del día según la posición del sol. Asimismo, las sombras variarán y será posible ver que, según se mueva el sol, las sombras serán más largas o más cortas sobre el piso, las sombras de los objetos serán marcadas de forma dura y densa. Esto puede variar solo cuando se encuentra un cielo nublado, el cual sirve de filtro, lo que hará que la luz sea menos densa y las sombras sean más tenues, menos marcadas. La hora del día también influirá en cómo se ve cualquier objeto, si se ve más frío o más cálido.
      .col-12.col-lg-6.d-flex(data-aos="slide-left" data-aos-delay="250" data-aos-duration="600" data-aos-offset="200")
        .caja-texto.color-acento-contenido.p-5
          .row.mb-5
            .col-3
              .line-selector-text.color-primario
          p.mb-0
            strong Luz artificial.
            |  La luz artificial sería toda aquella producida por linternas, lámparas, bombillos, fogatas, velas, antorchas, entre otras. Puede propagarse de forma recta o radial, puede tener diferentes posiciones y orientaciones, así como también variedad de colores, intensidades y texturas.
    
    TabsC.color-acento-contenido.mb-5(data-aos="slide-up" data-aos-delay="300" data-aos-duration="600" data-aos-offset="200")
      .py-3.py-md-4(titulo="Aspectos importantes de la luz")
        p.mb-5 La luz puede influir en los objetos, de acuerdo con ciertos aspectos que conllevan a visualizar de una u otra manera los objetos que se encuentran en el escenario. Se puede decir, entonces, que hay que tener en cuenta lo siguiente:
        SlyderP
          .row
            .col-md-6.mb-4.mb-md-0
              .cajon.color-acento-contenido.p-4.mb-4
                ul.lista-ul--color.change
                  li 
                    i.fas.fa-gamepad
                    p.mb-3
                      strong Luz directa. 
                      |  Es la luz que se emite desde una fuente propia, por ejemplo, el sol, bombillos, antorchas.
                  li 
                    i.fas.fa-gamepad
                    p.mb-3
                      strong Luz reflejada. 
                      |  Es la luz que se recibe de un cuerpo u objeto que la refleja, pero no es propia de él; un ejemplo de ello serían las luces que llegan a los objetos luego de rebotar en superficies metálicas.
                  li 
                    i.fas.fa-gamepad
                    p.mb-3
                      strong Dirección de la luz. 
                      |  Es la posición del foco de luz con respecto al elemento que vamos a iluminar.
                  li 
                    i.fas.fa-gamepad
                    p.mb-3
                      strong Luz frontal. 
                      |  Situada frente al objeto.
            .col-md-6
              .row.justify-content-center.mb-4
                .col-auto
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 33
                    span Ejemplo de luz frontal en <i>software Blender</i>
              figure
                img(src="@/assets/curso/tema2-imagen12.png")
          .row
            .col-md-6.mb-4.mb-md-0
              .cajon.color-acento-contenido.p-4.mb-4
                ul.lista-ul--color.change
                  li 
                    i.fas.fa-gamepad
                    p.mb-3
                      strong Luz lateral. 
                      |  Situada a alguno de los lados del objeto.
            .col-md-6
              .row.justify-content-center.mb-4
                .col-auto
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 34
                    span Ejemplo de luz lateral en <i>software Blender</i>
              figure
                img(src="@/assets/curso/tema2-imagen13.png")
          .row
            .col-md-6.mb-4.mb-md-0
              .cajon.color-acento-contenido.p-4.mb-4
                ul.lista-ul--color.change
                  li 
                    i.fas.fa-gamepad
                    p.mb-3
                      strong Luz cenital. 
                      |  Situada arriba del objeto.
            .col-md-6
              .row.justify-content-center.mb-4
                .col-auto
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 35
                    span Ejemplo de luz cenital en <i>software Blender</i>
              figure
                img(src="@/assets/curso/tema2-imagen14.png")
          .row
            .col-md-6.mb-4.mb-md-0
              .cajon.color-acento-contenido.p-4.mb-4
                ul.lista-ul--color.change
                  li 
                    i.fas.fa-gamepad
                    p.mb-3
                      strong Contraluz. 
                      |  Esta luz se sitúa detrás del objeto.
            .col-md-6
              .row.justify-content-center.mb-4
                .col-auto
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 36
                    span Ejemplo de contraluz en <i>software Blender</i>
              figure
                img(src="@/assets/curso/tema2-imagen15.png")
          
          
      .py-3.py-md-4(titulo="Intensidad de la luz")
        SlyderP
          .row
            p.mb-4 Las propiedades de la luz cuando golpean al objeto se pueden clasificar de dos maneras principales, que son:
            .col-md-6.mb-4.mb-md-0
              .cajon.color-acento-contenido.p-4.mb-4
                ul.lista-ul--color.change
                  li 
                    i.fas.fa-gamepad
                    p.mb-3
                      strong Luz dura. 
                      |  Se genera por una fuente con foco intenso, esta va a generar sombras más marcadas y más oscuras.
            .col-md-6
              .row.justify-content-center.mb-4
                .col-auto
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 37
                    span Ejemplo de luz dura en <i>software Blender</i>
              figure
                img(src="@/assets/curso/tema2-imagen16.png")
          .row
            .col-md-6.mb-4.mb-md-0
              .cajon.color-acento-contenido.p-4.mb-4
                ul.lista-ul--color.change
                  li 
                    i.fas.fa-gamepad
                    p.mb-3
                      strong Luz suave. 
                      |  Se genera cuando la fuente de luz se extiende y se dispersa, como sería el caso de los rayos del sol filtrados por nubes, o una bombilla con un pedazo de tela, o una lámpara, lo cual hace que la luz se difumine y produzca sombras transparentes no tan <strong>perceptibles</strong> como con la luz dura.
            .col-md-6
              .row.justify-content-center.mb-4
                .col-auto
                  .titulo-sexto.color-acento-contenido.mb-2
                    h5 Figura 38
                    span Ejemplo de luz suave en <i>software Blender</i>
              figure
                img(src="@/assets/curso/tema2-imagen17.png")


      .py-3.py-md-4(titulo="Aspectos importantes de las sombras")
        .row.px-5.py-3
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Las sombras cumplen un papel fundamental en cualquier composición, pues ayudan a generar volumen a los objetos. Se pueden clasificar de tres maneras:
            .cajon.color-acento-contenido.p-4.mb-4
              ul.lista-ul--color.change
                li 
                  i.fas.fa-gamepad
                  p.mb-3
                    strong Sombras propias. 
                    |  Son las sombras que se encuentran en los objetos, en las partes del mismo donde la luz no alcanza a llegar.
                li 
                  i.fas.fa-gamepad
                  p.mb-3
                    strong Sombras proyectadas. 
                    |  Son las sombras que un objeto proyecta sobre la superficie donde se encuentra estacionado.
                li 
                  i.fas.fa-gamepad
                  p.mb-3
                    strong Sombras reflejada. 
                    |  Son las sombras que el objeto genera en otro objeto cercano a este.

          .col-md-6
            .row.justify-content-center.mb-4
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 39
                  span Ejemplo de luces y sombras afectando a un grupo de objetos
            figure
              img(src="@/assets/curso/tema2-imagen18.png")
              figcaption Nota. Basada en el esquema de <a href="https://ludi-arte.webnode.es/blog/sexto/luz-y-sombra/" target="_blank">https://ludi-arte.webnode.es/blog/sexto/luz-y-sombra/</a>

      .py-3.py-md-4(titulo="Triángulo básico de iluminación")
        .row.px-5.py-3
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Es el set adecuado para iluminar una escena y así conseguir resultados efectivos. Este esquema situaría la luz principal, una luz de relleno y la contraluz, que se complementan entre sí. La luz principal se sitúa hacia el objeto, la luz de relleno va al lado opuesto, con una intensidad más baja, y la contraluz se sitúa por detrás, para darle profundidad a la escena.
          
          .col-md-6
            .row.justify-content-center.mb-4
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-2
                  h5 Figura 40
                  span Triángulo de iluminación
            figure
              img(src="@/assets/curso/tema2-imagen19.png")
              figcaption Nota. Tomada de <a href="https://www.chamanexperience.com/fotografia/triangulo-de-iluminacion/" target="_blank">https://www.chamanexperience.com/fotografia/triangulo-de-iluminacion/</a>

    #t_2_4.titulo-segundo
      h2 2.4  Guion técnico

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p En el guion técnico también se describen las indicaciones técnicas precisas, como la división en planos, el encuadre que delimita el espacio, estableciendo dónde empieza y termina el cuadro. También se elige el ángulo de la cámara, dependiendo de la altura o punto de vista en que se graben los movimientos de la cámara, que pueden ser físicos u ópticos (de las lentes); los detalles de iluminación, los sonidos concretos y la música que acompaña cada escena. 
        .col-lg-4
          h2.mb-0 Es importante escribir la hora de la escena, si es de día, en la tarde o en la noche. Asimismo, si es una escena en el espacio exterior, o en un espacio interno. Esto permite saber el tipo de iluminación que ambientará dicha escena.

    p.mb-5 

    p.mb-5 El guion técnico permite describir cada una de las escenas y qué elementos tendrá. Todo depende del tipo de videojuego que se desea realizar. Por ejemplo, la posición de la cámara, si es un juego de posición lateral, se puede usar una cámara frontal, pero si se desea ver todo el espacio del juego, se puede usar una cámara cenital. 
      br
      br
      | Por último, se debe numerar cada una de las escenas, como 1, 2, 3, etc., con la finalidad de mantener una secuencia lineal, de acuerdo con el guion narrativo, y permitirá realizar un <i>storyboard</i> detallado, en orden. También es importante mencionar si es una escena en un espacio exterior o interior y la hora en la que está sucediendo la escena.

    .row
      .col-12.col-lg-4.offset-lg-8
        a.anexo.mb-4(:href="obtenerLink('/downloads/CF001_2.4_Guion tecnico.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p
              strong Anexo.
              |  Observe un ejemplo de guion técnico <strong>aquí.</strong>
    
    Separador

    #t_2_5.titulo-segundo
      h2 2.5  <i>Storyboard</i>

    .row.mb-5
      .col-12.col-lg-6.mb-5.mb-lg-0
        p.mb-5 El <i>storyboard</i> fundamentalmente es la base donde se ilustran los elementos y narrativa sobre una plantilla en que se detalla cada parte o escena del videojuego. En él se relata, de manera breve pero concisa, el desarrollo de la trama o historia del videojuego, para poder explicar el funcionamiento, las mecánicas y la distribución de elementos. 
          br
          br
          | En el <i>storyboard</i> se explica cómo debe ser vista la pantalla, según la cámara, y también se describen acciones de la toma, como sonidos o efectos que deben realizarse. Gracias a esto, el equipo de producción del videojuego tiene claro lo que debe realizar, como elementos <i>background</i>, perspectiva de la cámara, iluminación, así como describir las mecánicas que lo conforman y elementos que aparecen en determinados momentos, como interfaces e interacciones. 
          br
          br
          | En el diseño de videojuegos, se toma una maqueta o plantilla principal como molde, allí se describe la estructura base del videojuego y se describen los niveles del mismo, creando una plantilla para cada nivel, con el fin de tener claridad en las características y diferencias que existen entre nivel y nivel, y para detallar las interacciones del personaje con el entorno y los objetos activos.
        a.anexo.mb-4(:href="obtenerLink('/downloads/CF001_2.5_Plantilla Storyboard.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo.</strong> Descargue aquí una <strong>plantilla</strong> de guion gráfico y conozca un  <strong>ejemplo de <i>storyboard</i>.</strong>

      .col-12.col-lg-6
        .caja-texto.color-primario.p-5
          .row.mb-1
            .col-3
              .line-selector-text.color-acento-contenido
          p.mb-1
            strong Son ilustraciones que representan de manera secuencial una historia, para que sea entendida por los diseñadores del videojuego.
          .row.justify-content-center.mb-3
            .col-auto
              .titulo-sexto.color-acento-contenido.mb-0
                h5 Figura 41
                span <i>Storyboard Flynn</i> en el bosque <i>Gaokerena</i>
          figure
            img(src="@/assets/curso/tema2-imagen20.png")
    
    .row.justify-content-center.mb-5
      .col-12.col-lg-10
        .caja-texto.color-acento-contenido.p-5
          .row.mb-4
            .col-3
              .line-selector-text.color-primario
          div.px-5
            p.mb-4 Con plantillas bien elaboradas, no quedan dudas a la hora de desarrollar los elementos para el videojuego, porque permiten reflejar cómo se verá la escena al final, las acciones, objetivos y aspectos de importancia, esquematizando así las situaciones que se crearán para la historia.
              br
              br
              | Existe también una gran variedad de herramientas digitales para crear <i>storyboards</i> que son de uso gratuito, como Storyboardthat y Storyboarder. Estos programas también permiten desarrollar el guion gráfico.
            .row.justify-content-center.mb-3
              .col-auto
                .titulo-sexto.color-acento-contenido.mb-0
                  h5 Figura 42
                  span Ejemplo de <i>storyboard </i> digital
            figure
              img(src="@/assets/curso/tema2-imagen21.png")

    #t_2_6.titulo-segundo
      h2 2.6   Objetivos del videojuego

    .row.justify-content-center
      .col-12.col-lg-9
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2-imagen22.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Por lo general, los videojuegos buscan que se cumpla con diversos objetivos, como derrotar al enemigo mayor, o completar todos los niveles. Para ello, es importante que se motive al jugador para que alcance dichos objetivos, siendo necesario establecer algunas reglas que permiten al jugador participar y tomar decisiones que le faciliten cumplir con dichas metas. 

    h3.titulo-tercero Mecánicas en los videojuegos

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/s-uKIJ5Cbuw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.mb-5
      .col-12.col-lg-6.md-5.md-lg-0.d-flex
        p.mb-0 Las mecánicas en los videojuegos podemos definirlas como las acciones que el jugador realiza, mediante la interacción con mandos, para modificar la posición, características, traslación, entre otras, en un punto concreto. Es decir, las posibilidades que el usuario le puede dar al personaje en cuanto a lo que puede hacer, cómo hacerlo, los límites que tiene y las reglas que indican lo que se puede y no se puede realizar. Estas reglas generales son las que definen la finalidad del juego, así como el cómo, cuándo y por qué realizar las acciones para lograr las metas, implementadas de manera creativa.
          br
          br
          | Es este aspecto el que hace que los jugadores se interesen por cumplir y avanzar en la conquista de las metas planteadas en el videojuego, basados en qué acciones realizaron y cuáles son las recompensas que pueden adquirir, con la finalidad de generar una sensación de realización y victoria al dotarse de progresión en la superación de retos que van creciendo exponencialmente, cada uno de ellos caracterizado por diversidad y sentido de novedad.
      .col-12.col-lg-6.d-flex
        .caja-texto.color-primario.p-5
          .row.mb-3
            .col-3
              .line-selector-text.color-acento-contenido
          p.mb-0
            strong Elliott Avedon (2005), en su libro <i>The Study of the Games</i>, menciona diez tips para tener más claridad acerca de las mecánicas. 
            br
            br
            | Estos son: el propósito del juego, el procedimiento para efectuar la acción, las reglas que gobiernan la acción, el número de jugadores, el rol de los jugadores, el resultado o recompensa, las habilidades requeridas, los patrones de interacción, la actividad física necesaria para jugar y el equipamiento preciso.
    
    p.mb-5 Algunos ejemplos de mecánicas destacadas en los videojuegos son: cuando un personaje brinca encima de un enemigo y lo elimina, o si el personaje salta hacia un muro y queda deslizándose en este; si un objeto es lanzado al jugador, este presiona el botón de acción de su arma y golpea el objeto, el cual rebota como si fuese bateado, generando una acción, cambia el estado del elemento al que se le aplica esa acción.
    
    h3.titulo-tercero Dinámicas en los videojuegos

    .row.justify-content-center
      .col-12.col-lg-10
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/jZP5oiToQTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
        p.mb-5 Son los resultados de haber puesto en acción las mecánicas. Estas hacen parte fundamental del juego y definen de alguna manera el estilo de ellos. Algunos ejemplos de estas son:

        .row.align-items-center.container-uno-color.p-5.mb-5(data-aos="slide-left" data-aos-delay="100" data-aos-duration="600" data-aos-offset="200")
          .col-12.col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen23.svg")
          .col-12.col-lg-9.mb-5.mb-lg-0
            h4 Supervivencia.
            p.mb-5 Son las mecánicas que, como su nombre indica, son necesarias para que el personaje se mantenga en el juego o muera, pudiendo ser, pero no limitándose a ellas, las vidas, barra de energía, nivel de sangre, nivel de hambre o sed, entre otras.

        .row.align-items-center.container-uno-color.claro.p-5.mb-5(data-aos="slide-right" data-aos-delay="100" data-aos-duration="600" data-aos-offset="200") 
          .col-12.col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen24.svg")
          .col-12.col-lg-9.mb-5.mb-lg-0
            h4 Puntaje y/o experiencia. 
            p.mb-5 Representa el porcentaje de avance en estadísticas del personaje, en el cual está el usuario en el juego.

        .row.align-items-center.container-uno-color.p-5.mb-5(data-aos="slide-left" data-aos-delay="100" data-aos-duration="600" data-aos-offset="200")
          .col-12.col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen25.svg")
          .col-12.col-lg-9.mb-5.mb-lg-0
            h4 Niveles. 
            p.mb-5 Hacen parte de los puntos a alcanzar para avanzar en la evolución o mejora del personaje en el juego.

        .row.align-items-center.container-uno-color.claro.p-5.mb-5(data-aos="slide-right" data-aos-delay="100" data-aos-duration="600" data-aos-offset="200")
          .col-12.col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen26.svg")
          .col-12.col-lg-9.mb-5.mb-lg-0
            h4 Conquista de territorios.
            p.mb-5 Son las dinámicas principales en los juegos FPS, donde se busca conquistar un mapa o territorio.

        .row.align-items-center.container-uno-color.p-5.mb-5(data-aos="slide-left" data-aos-delay="100" data-aos-duration="600" data-aos-offset="200")
          .col-12.col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen27.svg")
          .col-12.col-lg-9.mb-5.mb-lg-0
            h4 Entendimiento espacial.  
            p.mb-5 Los juegos de <i>puzzles</i> incluyen esta dinámica, en la que se busca, mediante habilidades, poder solucionar rompecabezas o acertijos.

        .row.align-items-center.container-uno-color.claro.p-5.mb-5(data-aos="slide-right" data-aos-delay="100" data-aos-duration="600" data-aos-offset="200")
          .col-12.col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen28.svg")
          .col-12.col-lg-9.mb-5.mb-lg-0
            h4 Destrucción.
            p.mb-5 Son dinámicas en las que el objetivo principal es acabar con todo. Los <i>“Battle Royal”</i> son ejemplo de este tipo de dinámicas.

        .row.align-items-center.container-uno-color.p-5.mb-5(data-aos="slide-left" data-aos-delay="100" data-aos-duration="600" data-aos-offset="200")
          .col-12.col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen29.svg")
          .col-12.col-lg-9.mb-5.mb-lg-0
            h4 Construcción. 
            p.mb-5 Dinámicas en que la acción principal es que, para avanzar, se necesita crear elementos que influyen en el entorno. Ejemplo de estos juegos son <i>“Dragon quest builders”, “Minecraft”</i>.

        .row.align-items-center.container-uno-color.claro.p-5.mb-5(data-aos="slide-right" data-aos-delay="100" data-aos-duration="600" data-aos-offset="200")
          .col-12.col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen30.svg")
          .col-12.col-lg-9.mb-5.mb-lg-0
            h4 Colección.
            p.mb-5 En esta dinámica, la finalidad es recolectar ciertos elementos para poder avanzar o ganar la partida. Se usa frecuentemente en juegos de plataforma, donde, para avanzar de nivel, se tiene que recolectar elementos como monedas o estrellas. Ejemplo de ello son juegos como <i>“Little Big Planet”</i>.

        .row.align-items-center.container-uno-color.p-5.mb-5(data-aos="slide-left" data-aos-delay="100" data-aos-duration="600" data-aos-offset="200")
          .col-12.col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen31.svg")
          .col-12.col-lg-9.mb-5.mb-lg-0
            h4 Persecución o evasión. 
            p.mb-5 Juegos en los que la finalidad es capturar o escapar de otros elementos o personajes. Se puede resaltar un juego como <i>“Pacman”</i>, u otros más recientes que usan esta dinámica, como <i>“Grand Theft Auto”</i> o <i>“Saints Row”</i>.

        .row.align-items-center.container-uno-color.claro.p-5.mb-5(data-aos="slide-right" data-aos-delay="100" data-aos-duration="600" data-aos-offset="200")
          .col-12.col-lg-3.mb-5.mb-lg-0
            figure
              img(src="@/assets/curso/tema2-imagen32.svg")
          .col-12.col-lg-9.mb-5.mb-lg-0
            h4 Carreras.
            p.mb-5 Son juegos que, como su nombre lo indica, su dinámica principal es llegar a la meta en primera posición. Entre este tipo de juegos, se pueden mencionar ejemplos como <i>“Mario Kart”</i> o <i>“Drift”</i>.

    h3.titulo-tercero Niveles de juego

    p.mb-2 Los niveles son una secuencia de escenarios, de principio a fin, de la historia, por donde el jugador se desplazará, dependiendo del tipo de mecánica de juego que se desea realizar.  Es decir, el espacio en el que se va a generar toda la acción, es ahí donde se van a localizar los diversos elementos que componen ese espacio. Se deben tener varios elementos en cuenta:

    ul.lista-ul--color
      li 
        i.fas.fa-gamepad
        p.mb-0 De forma principal, la plataforma o el piso sobre el que se puede caminar, nadar, volar, etc.
      li 
        i.fas.fa-gamepad
        p.mb-0 Luego, se deben crear los límites espaciales, como paredes o muros. Estos no pueden ser atravesados, a menos que el personaje tenga el poder de traspasarlas.  
      li 
        i.fas.fa-gamepad
        p.mb-0 Tener los elementos que le dan vida al ambiente y que son fijos: un árbol, una piedra, etc. Estos no se pueden atravesar, pero se puede pasar frente a ellos. 
      li 
        i.fas.fa-gamepad
        p.mb-0 Y, también, tener los elementos que se pueden destruir, mover, tirar. Elementos que pueden esconder algún secreto, no tener nada, o facilitar el acceso a otro espacio. 

    .p-5
      .tarjeta.tarjeta--games.p-4.mb-5
        SlyderA
          .p-5
            .row.justify-content-center
              .col-11
                .pt-2.pb-1.ps-4.pe-4.container-title
                  .row
                    .col
                      p.mb-0 En la figura 43, de <i>“Megaman</i> 10”, se puede observar el recorrido de principio a fin.
                    .col-auto
                      .titulo-sexto.color-acento-contenido.mb-0
                        h5 Figura 43
                        span <i>Ejemplo uno, escenario “<i>Megaman</i> 10”</i>
            figure                        
              img(src="@/assets/curso/tema2-imagen33.png")
              figcaption Nota. Tomada de <a href="https://www.vgmaps.com/Atlas/Wii/MegaMan10-BladeMan.png" target="_blank">https://www.vgmaps.com/Atlas/Wii/MegaMan10-BladeMan.png</a>

          .p-5
            .row.justify-content-center
              .col-11
                .pt-2.pb-1.ps-4.pe-4.container-title
                  .row
                    .col
                      p.mb-0 En el siguiente fragmento de la figura 44, de “<i>Megaman</i> 10”, se puede observar uno de los espacios por donde debe pasar “Megaman”, aquí inicia la historia y el personaje realiza saltos para poder avanzar al siguiente nivel.
                    .col-auto
                      .titulo-sexto.color-acento-contenido.mb-0
                        h5 Figura 44
                        span <i>Ejemplo dos, escenario “<i>Megaman</i> 10”</i>
            figure
              img(src="@/assets/curso/tema2-imagen34.png")
              figcaption Fragmento tomado de <a href="https://www.vgmaps.com/Atlas/Wii/MegaMan10-BladeMan.png" target="_blank">https://www.vgmaps.com/Atlas/Wii/MegaMan10-BladeMan.png</a>
          .p-5
            .row.justify-content-center
              .col-12.col-md-10
                .row.justify-content-center
                  .col-11
                    .pt-2.pb-1.ps-4.pe-4.container-title
                      p.mb-0 En la figura 45, se puede ver que en el piso hay unos pinchos, si el personaje cae en esas zonas, automáticamente muere; también, al final del nivel, se pueden observar unas escaleras para pasar al siguiente nivel.
                figure
                  img(src="@/assets/curso/tema2-imagen35.png")
                  figcaption Fragmento tomado de <a href="https://www.vgmaps.com/Atlas/Wii/MegaMan10-BladeMan.png" target="_blank">https://www.vgmaps.com/Atlas/Wii/MegaMan10-BladeMan.png</a>
                .row.justify-content-center
                  .col-11
                    .pt-2.pb-1.ps-4.pe-4.container-title.bottom
                      .row.justify-content-center
                        .col-auto
                          .titulo-sexto.color-acento-contenido.mb-0
                            h5 Figura 45
                            span <i>Ejemplo tres, escenario “<i>Megaman</i> 10”</i>
          .p-5
            .row.justify-content-center
              .col-12.col-lg-6
                .row.justify-content-center
                  .col-11
                    .pt-2.pb-1.ps-4.pe-4.container-title
                      p.mb-0 En la figura 46, se observa el enemigo mayor ante el que se debe pelear, y es el último nivel por el que se atraviesa.
                figure      
                  img(src="@/assets/curso/tema2-imagen36.png")
                  figcaption Fragmento tomado de <a href="https://www.vgmaps.com/Atlas/Wii/MegaMan10-BladeMan.png" target="_blank">https://www.vgmaps.com/Atlas/Wii/MegaMan10-BladeMan.png</a>
                .row.justify-content-center
                  .col-11
                    .pt-2.pb-1.ps-4.pe-4.container-title.bottom
                      .row.justify-content-center
                        .col-auto
                          .titulo-sexto.color-acento-contenido.mb-0
                            h5 Figura 46
                            span <i>Ejemplo cuatro, nivel final “<i>Megaman</i> 10”</i>
          .p-5
            .row.justify-content-center
              .col-12.col-md-10
                .row.justify-content-center
                  .col-11
                    .pt-2.pb-1.ps-4.pe-4.container-title
                      p.mb-0 En todos estos niveles, finalmente, se le agregan los NPC enemigos y el resto de obstáculos que complementan la dificultad de los recorridos, lo que aumenta el ritmo de juego.
                img(src="@/assets/curso/tema2-imagen37.png")
                .row.justify-content-center
                  .col-11
                    .pt-2.pb-1.ps-4.pe-4.container-title.bottom
                      .row.justify-content-center
                        .col-auto
                          .titulo-sexto.color-acento-contenido.mb-0
                            h5 Figura 47
                            span <i>Niveles de un videojuego</i>
  
</template>

<script>
import SlyderP from '../components/Slyder-P.vue'
export default {
  name: 'Tema2',
  components: {
    SlyderP,
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
