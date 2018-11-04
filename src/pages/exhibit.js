import React from 'react'
import { navigate } from 'gatsby'
import { VueInReact } from 'vuera'
import Exhibit from '../components/Exhibit.vue'
import { fetchPieces } from '../services/pieces'

import Layout from '../components/Layout'
const Comp = VueInReact(Exhibit)

let counter = 0

const submitAnswer = answer => {
  console.log(JSON.stringify(answer, null, 3))
  return counter++ < 10
}

const ExhibitPage = () => (
  <Layout>
    <Comp navigate={navigate} fetchPieces={fetchPieces} submitAnswer={submitAnswer} />
  </Layout>
)

export default ExhibitPage
