<template>
  <div v-if="activeURL">
    <div class="bar" :style="{width: progress}"/>
    <div class="container">
      <div class="captioned-image">
        <div class="framed-image">
          <img class="image" :src="activeURL" :alt="activePiece && (activePiece.title || '')">
        </div>
        <div class="info">
          <span class="title is-3">{{activePiece.title || ''}}</span>
        </div>
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
const urlPrefix = "/assets"
function getUrl({url}) {
  return `${urlPrefix}/${url}`
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
      return this.pieces[this.index] || { title: 'boo', url: '1.jpg' }
    },
    activeURL() {
      return getUrl(this.activePiece)
    },
    progress() {
      return `${(this.index + 1) * 100 / this.pieces.length}%`
    }
  },
  methods: {
    async clickHandler(liked) {
      const answer = {}
      answer[this.activePiece.id] = liked
      await this.submitAnswer(answer)
      this.index++
      if(this.index >= this.pieces.length) {
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

<style scoped>
.container {
  width: 100%;
  max-width: 845px;
  /* max-width: 676;  */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.buttons {
  margin-top: 110px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.captioned-image {
  width: 100%;
}
.framed-image {
  margin-top: 110px;
  width: 100%;
  background-color: black;
  padding: 35px;
}
.image {
  background-size: cover;
  margin: 0;
  width: 100%;
}
.buttons svg {
  color: black;
  cursor: pointer
}
.bar {
  background-color: #f00;
  height: 6px;
}
.info {
  margin-top: 10px;
  width: 100%;
  font-family: 'BodoniStd';
  /* font-size: 2rem !important; */
}
</style>

