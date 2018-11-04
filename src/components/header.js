import React from 'react'
import { Link } from 'gatsby'

import styled from 'react-emotion'

const Header = ({ siteTitle }) => (
  <Wrap>
    <div className="container">
      <h1 style={{ margin: 0 }}>
        <MainLink
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </MainLink>
      </h1>
    </div>
  </Wrap>
)

export default Header

const Wrap = styled('div')`
  background-color: #ff9393;
`

const MainLink = styled(Link)`
  padding: 30px 0;
  display: block;
`
