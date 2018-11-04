import React from 'react'
import { Link } from 'gatsby'

import styled from 'react-emotion'

const Header = ({ siteTitle }) => (
  <Wrap>
    <div className="container">
      <LinkContainer>
        <h1 style={{ margin: 0 }}>
          <MainLink to="/">{siteTitle}</MainLink>
        </h1>
        <MainLink to="/">Login</MainLink>
      </LinkContainer>
    </div>
  </Wrap>
)

export default Header

const Wrap = styled('div')`
  background-color: #ff9393;
`

const LinkContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const MainLink = styled(Link)`
  padding: 16px 0;
  display: block;
  color: #fff;
  font-family: 'BayerUniversal';
  font-size: 35px;
`
