import React from 'react'
import { Global, css } from '@emotion/core'
import './layout.css'

const globalCss = css`
  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
    min-height: 100vh;
  }
`

export const Layout = ({ children }) => {
  return (
    <div
      css={css`
        padding: 1rem;
        margin: 0 auto;
        max-width: 60rem;
      `}
    >
      <Global styles={globalCss} />
      {children}
    </div>
  )
}

export default Layout
