<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="zoom-in" data-aos-delay="150" data-aos-offset="200" data-aos-duration="1000")
      img(src="@/assets/curso/introduccion-banner.svg", alt="Texto que describa la imagen")

    .px-4.py-3.texto-color-offset-top-left
      p.mb-0 El auge de las nuevas plataformas y hardware para videojuegos en los últimos años ha creado una amplia variedad de oportunidades para la creación de este tipo de productos, con una amplia oferta y demanda. El SENA ha desarrollado un programa curricular para fomentar y apoyar este tipo de iniciativas, capacitando, mediante modalidad virtual, 
        strong el desarrollo de videojuegos y entornos interactivos. 
        |  En este programa, encontrará el paso a paso a seguir para desarrollar un videojuego, se instruirá en conocimientos fundamentales de preproducción, como son los conceptos básicos de forma, figura, color e historia, entre otros; así como en procesos de producción, mediante el uso de software de libre distribución para modelar los elementos 3D del videojuego, en este caso, <i>Blender</i>, y para la integración de los elementos y codificación del juego se usará <i>Unity</i>.
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
