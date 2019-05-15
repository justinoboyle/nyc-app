import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Featured', icon: 'fas fa-star' },
  { href: '/browse', label: 'Browse', icon: 'fas fa-stream' },
  { href: '/search', label: 'Search', icon: 'fas fa-search' },
  { href: '/info', label: 'Info', icon: 'fas fa-info-circle' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  link.testActive = props => props.active && props.active == link.href ? ' nav-bar-active' : ''
  return link
})

const Nav = props => (
  <nav>
        <div className="layout-component">
            <div className="nav-bar">
              {
                links.map(a => <Link href={a.href} key={a.key}>
                  <div className={`nav-bar-element${a.testActive(props)}`}> {/* TODO add active */}
                    <i className={a.icon}></i>
                    <span>{a.label}</span>
                  </div>
                </Link>)
              }
            </div>
        </div>
  </nav>
)

export default Nav
