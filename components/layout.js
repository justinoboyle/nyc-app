import React from 'react'
import Link from 'next/link'
import Nav from './nav'
import Head from './head'

const Layout = props => (
    <div>
    <Head pageMeta={props.pageMeta || {}} title="Home" />
    <div className="app">
        <div className="layout-interface">
            <div className="layout-component layout-main">
                    {props.children}
            </div>
            <Nav {...props} pageMeta={props.pageMeta || {}} />
        </div>
    </div>
  </div>
)

export default Layout
