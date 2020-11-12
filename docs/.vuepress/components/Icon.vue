<template>
  <figure>
    <img :src="imagesrc" alt=""/>
    <figcaption><a v-bind:href=href>{{ caption }}</a></figcaption>
  </figure>
</template>
<script>
export default {
  props: ['src', 'caption', 'href'],
  computed: {
    imagesrc () {
      return '/assets/img/' + this.src
    }
  }
}
</script>

<style scoped>
  figcaption {
    text-align: center;
  }
  img {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 40px;
  }
  figure {
    display: table-cell;
  }
</style>