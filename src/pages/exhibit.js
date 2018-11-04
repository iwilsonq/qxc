import React from 'react'
import { navigate } from 'gatsby'
import { VueInReact } from 'vuera'
import Exhibit from '../components/Exhibit.vue'
import { fetchPieces } from '../services/pieces'

import Layout from '../components/Layout'
const Comp = VueInReact(Exhibit)

let counter = 0

const submitAnswer = answer => {
  console.log(answer)
  const result = counter++ < 10
  return new Promise(resolve => resolve(result))
}

const ExhibitPage = () => (
  <Layout>
    <Comp navigate={navigate} fetchPieces={fetchPieces} submitAnswer={submitAnswer} />
  </Layout>
)

export default ExhibitPage
