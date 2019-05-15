import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

const Search = () => (
  <Layout active="/search">
      <div className="tab-search">
        <div className="layout-header-item">
            <h1>Search</h1>
        </div>
      </div>
  </Layout>
)

export default Search
