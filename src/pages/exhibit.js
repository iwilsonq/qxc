import React from 'react'
import { Link } from 'gatsby'
import { VueInReact } from 'vuera'
import Exhibit from '../components/Exhibit.vue'
import { fetchPieces } from '../services/pieces'

import Layout from '../components/layout'
const Comp = VueInReact(Exhibit)
const data = ['react', 'vue', 'angular']

let counter = 0

const submitAnswer = answer => {
  console.log(JSON.stringify(answer, null, 3))
  return counter++ < 10
}

const ExhibitPage = () => (
  <Layout>
    <Comp fetchPieces={fetchPieces} submitAnswer={submitAnswer} />
  </Layout>
)

export default ExhibitPage
