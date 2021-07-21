<template lang="pug">
.slyder-c.px-5.py-3
  ScrollHorizontal(v-if="elements.length" :selectedId="selected" item-full-width)
    .slyder-c__slyde(
      v-for="(elm,index) in elements" 
      :key="'key-'+getId(index)"
      :id="getId(index)"
    )
      .slyder-c__content.mb-3(v-child="elm.elm")
      .row
        .col
        .col-auto
          .slyder__action
            .slyder__pagination {{index+1}}/{{elements.length}}
            a.slyder__btn(v-if="index -1 >= 0" @click="selected = getId(index -1)")
              i.fas.fa-angle-left
            a.slyder__btn(
              v-if="index != elements.length -1"
              @click="selected = getId(index +1)"
              @mouseover="mostrarIndicador = false"
            )
              i.fas.fa-angle-right
              .indicador__container.indicador--left(v-if="mostrarIndicador && index === 0")
                .indicador--click.indicador--sm
      //- .slyder-c__imagen.mb-4
      //-   figure.slyder-c__img
      //-     img(:src='item.imagen', :alt='item.leyendaImagen')
      //-     figcaption(v-if="item.leyendaImagen") {{item.leyendaImagen}}
      //- .slyder-c__content
      //-   .slyder-c__content__header.mb-4
      //-     .row
      //-       .col
      //-       .col-auto
      //-         .slyder__action
      //-           .slyder__pagination {{index+1}}/{{datos.length}}
      //-           a.slyder__btn(v-if="index -1 >= 0" @click="selected = getId(index -1)")
      //-             i.fas.fa-angle-left
      //-           a.slyder__btn(
      //-             v-if="index != datos.length -1"
      //-             @click="selected = getId(index +1)"
      //-             @mouseover="mostrarIndicador = false"
      //-           )
      //-             i.fas.fa-angle-right
      //-             .indicador__container.indicador--left(v-if="mostrarIndicador && index === 0")
      //-               .indicador--click.indicador--sm
        
        //- .slyder-c__content__body
        //-   p.mb-3(v-html="item.texto")
  .hidden-slot
    slot 
</template>

<script>
import ScrollHorizontal from 'ecored-base-pkg/src/components/plantilla/ScrollHorizontal'
export default {
  name: 'SlyderP',
  components: { ScrollHorizontal },
  data: () => ({
    mainId: Math.floor(Math.random() * 10000000),
    selected: 0,
    elements: [],
    stateStr: '',
    rendered: false,
    firstSelection: true,
    mostrarIndicador: false,
  }),
  watch: {
    menuState() {
      this.domUpdated()
    },
  },
  created() {
    window.addEventListener('resize', this.domUpdated)
  },
  mounted() {
    this.$nextTick(() => {
      this.crearElementos()
    })
  },
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.domUpdated)
  },
  updated() {
    this.$nextTick(() => {
      if (this.getStateStr() != this.stateStr) {
        this.crearElementos()
      }
    })
  },
  methods: {
    getId(idx) {
      if (idx < 0) return null
      return this.elements[idx].id
    },
    crearElementos() {
      if (!this.$slots.default) return []
      else if (!this.$slots.default.length) return []
      this.domUpdated()
      this.elements = this.$slots.default.map((elemento, index) => {
        const attributes =
          elemento.data && elemento.data.attrs ? elemento.data.attrs : []
        return {
          id: (this.mainId + index + 1).toString(),
          elm: elemento.elm,
          ...attributes,
        }
      })
      if (this.firstSelection) {
        this.selected = this.selected > 0 ? this.selected : this.elements[0].id
      }
      this.stateStr = this.getStateStr()
    },
    getActiveHeight(id) {
      return this.$refs[id][0].scrollHeight + 'px'
    },
    getStateStr() {
      return this.$slots.default.map(elm => elm.elm.outerHTML).join('')
    },
    domUpdated() {
      this.rendered = false
      setTimeout(() => {
        this.rendered = true
      }, 100)
    },
  },
}
</script>

<style lang="sass"></style>
