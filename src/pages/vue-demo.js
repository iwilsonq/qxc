import React from 'react'
import { VueInReact } from 'vuera'
import VueDemo from '../components/VueDemo.vue'

import Layout from '../components/Layout'
const Comp = VueInReact(VueDemo)
const data = ['react', 'vue', 'angular']

const doesAsyncStuff = message => {
  console.log('Stuff was done: ', message)
}

const VueDemoPage = () => (
  <Layout>
    <h1>Vue demo </h1>
    <Comp data={data} api={doesAsyncStuff} />
  </Layout>
)

export default VueDemoPage
