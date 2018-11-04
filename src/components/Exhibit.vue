<template>
  <div v-if="activePiece" class="container">
    <img :src="activeURL" class="image">
    <div class="buttons">

    </div>
  </div>
</template>

<script>
function getUrl({title}) {
  return `https://via.placeholder.com/925x476?text=${title}`
}
export default {
  name: 'exhibit',
  data: () => ({
    pieces: [],
    activePiece: null
  }),
  props: {
    fetchPieces: {
      type: Function,
      default: () => {},
    },
    submitAnswer: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    activeURL() {
      return getUrl(this.activePiece)
    }
  },
  mounted() {
    this.fetchPieces().then(pieces => this.pieces = pieces)
  },
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.my-list {
  list-style: none;
}
</style>

