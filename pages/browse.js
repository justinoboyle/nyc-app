import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

const Browse = () => (
  <Layout active="/browse">
      <div className="tab-browse">
        <div className="layout-header-item">
            <h1>Browse</h1>
        </div>
      </div>
  </Layout>
)

export default Browse
