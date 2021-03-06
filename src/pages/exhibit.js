import React from 'react'
import { VueInReact } from 'vuera'
import Exhibit from '../components/Exhibit.vue'
import { fetchPieces, submitAnswer } from '../services/fauna'
import { navigate } from 'gatsby'

import Layout from '../components/Layout'
const Comp = VueInReact(Exhibit)

const ExhibitPage = () => (
  <Layout>
    <Comp navigate={navigate} fetchPieces={fetchPieces} submitAnswer={submitAnswer} />
  </Layout>
)

export default ExhibitPage
