import React from 'react'

import '../sass/main.scss'

const links = [
  { href: '/', label: 'home' },
  { href: '/rondleiding', label: 'Rondleiding' },
  { href: '/spelletjes', label: 'Spelletjes' },
  { href: '/wieIsWie', label: 'Wie is wie?' },
  { href: '/filmpjes', label: 'Filmpjes' }

].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>

      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
