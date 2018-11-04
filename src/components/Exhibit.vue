<template>
  <div v-if="activeURL" class="container">
    <div class="image-container">
      <img :src="activeURL" :alt="activePiece && (activePiece.title || '')">
    </div>
    <div class="buttons">
      <button @click="clickHandler(false)" class="button is-dark is-large button--no">
          <font-awesome-icon :icon="['fas','times']" :style="{ color: '#FFBDBD' }"/>
      </button>
      <button @click="clickHandler(true)" class="button is-dark is-large button--yes">
          <font-awesome-icon :icon="['fas','check']" :style="{ color: '#50E3C2' }"/>
      </button>
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
    index: 0
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
    navigate: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    activePiece() {
      return this.pieces[this.index]
    },
    activeURL() {
      return getUrl(this.activePiece || { title: 'boo' })
    }
  },
  methods: {
    clickHandler(liked) {
      const answer = {}
      answer[this.activePiece.id] = liked
      if(this.submitAnswer(answer)) {
        this.index = (this.index + 1) % this.pieces.length
        if(!this.index) {
          // all images displayed and need more
          this.fetchPieces().then(pieces => this.pieces = pieces)
        }
      }
      else {
        this.navigate('/impressions')
      }
    }
  },
  mounted() {
    this.index = 0
    this.fetchPieces().then(pieces => this.pieces = pieces)
  },
}
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.buttons {
  margin-top: 145px;
  width: 925px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image-container {
  margin-top: 110px;
  width: 100%;
  background-color: black;
  padding: 35px;
}
</style>

