<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #fff")
          i.fas.fa-info
      h1 Introducción
    figure.mb-5(data-aos="fade-right")
      img(src="@/assets/curso/introduccion-banner.svg", style="width: 850px").m-auto
    .px-4.py-3.texto-color-offset-top-left(data-aos="fade-left")
      p.mb-0 El auge de las nuevas plataformas y #[i hardware] para videojuegos en los últimos años ha creado una amplia variedad de oportunidades para la creación de este tipo de productos, con una amplia oferta y demanda. El SENA ha desarrollado un programa curricular para fomentar y apoyar este tipo de iniciativas, capacitando, mediante modalidad virtual, 
        strong el desarrollo de videojuegos y entornos interactivos. 
        |  En este programa, encontrará el paso a paso a seguir para desarrollar un videojuego, se instruirá en conocimientos fundamentales de preproducción, como son los conceptos básicos de forma, figura, color e historia, entre otros; así como en procesos de producción, mediante el uso de #[i software] de libre distribución para modelar los elementos 3D del videojuego, en este caso, Blender, y para la integración de los elementos y codificación del juego se usará Unity.
        br
        br
        | Para la elaboración de este componente, se abordaron varios autores conocidos en 
        strong historia y conceptos de diseño de videojuegos
        | , de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del 
        strong desarrollo de videojuegos y entornos interactivos.

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
