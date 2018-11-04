import React from 'react'
import { Link } from './Link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#FF9393',
      marginBottom: '1.45rem',
      padding: 12,
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: 960,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav style={{ display: 'flex' }}>
        <div style={{ marginRight: 12 }}>
          <Link to="/exhibit">Exhibit</Link>
        </div>
        <div>
          <Link to="/">Login</Link>
        </div>
      </nav>
    </div>
  </div>
)

export default Header
