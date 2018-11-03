<template>
  <div>
    Hello
    <ul class="my-list">
      <li v-for="i of data" :key="i">
        {{i}}
      </li>
    </ul>
    <b-field label="name">
      <b-input v-model="name"></b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'vueDemo',
  data: () => ({
    name: '',
  }),
  props: {
    data: {
      type: Array,
      default: [],
    },
    api: {
      type: Function,
      default: () => {},
    },
  },
  created() {
    this.$emit('Booo', this.data)
  },
  mounted() {
    this.api('This is a message')
    // this.api().then(val => console.log(val))
  },
}
</script>

<style>
.my-list {
  list-style: none;
}
</style>

