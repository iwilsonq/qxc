import React from 'react'
import { Link } from 'gatsby'

import { fetchPieces } from '../services/fauna'
import Layout from '../components/Layout'
import LandingPage from '../components/LandingPage'

const IndexPage = () => (
  <Layout>
    <LandingPage />
  </Layout>
)

export default IndexPage
