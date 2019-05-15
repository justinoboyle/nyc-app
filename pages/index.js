import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import CardSet from '../components/cardSet'
import cards from "./data"

const Home = () => (
  <Layout active="/">
      <div className="tab-featured">
        <div className="layout-header-item">
            <h1>Featured</h1>
        </div>
        <CardSet cards={cards} />
      </div>
  </Layout>
)

export default Home
