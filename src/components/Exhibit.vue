<template>
  <div v-if="activeURL">
    <div class="container">
      <div class="image-container">
        <img class="image" :src="activeURL" :alt="activePiece && (activePiece.title || '')">
        <!-- <div :style="{'background-image': `url(${activeURL})`}" class="image"/> -->
      </div>
      <div class="buttons">
        <div @click="clickHandler(false)" class="button--no">
            <font-awesome-icon :icon="['fas','times']" size="4x"/>
        </div>
        <div @click="clickHandler(true)" class="button--yes">
            <font-awesome-icon :icon="['fas','check']" size="4x"/>
        </div>
      </div>
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
    async clickHandler(liked) {
      const answer = {}
      answer[this.activePiece.id] = liked
      await this.submitAnswer(answer)
      this.index = (this.index + 1) % this.pieces.length
      if(!this.index) {
        // this.fetchPieces().then(pieces => this.pieces = pieces)
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
.image {
  background-size: cover;
  margin: 0;
}
.button--no {
  cursor: pointer;
}
.bar {
  background-color: #f00;
  height: 20px;
}
</style>

