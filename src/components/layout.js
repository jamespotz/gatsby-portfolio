/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../css/default.css"
import { useTheme } from "../context/ThemeContext"
import { Emoji } from "./emoji"
import ToggleBtn from "./toggle"

const Layout = ({ children }) => {
  const themeState = useTheme()
  const _data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex min-h-screen flex-col w-full antialiased p-3 md:p-4 lg:p-6">
      <div className="absolute top-0 right-0 text-gray-600 m-4">
        <ToggleBtn
          checked={themeState.checked}
          onToggle={themeState.changeTheme}
        />
      </div>
      <main className="flex flex-col flex-grow">{children}</main>
      <footer className="mt-auto text-gray-600 font-default leading-normal tracking-wide">
        © {new Date().getFullYear()}, Built with
        <Emoji symbol="❤" label="heart" className="text-red-500 mx-1" />, and{" "}
        <a href="https://www.gatsbyjs.org" className="btn-no-uppercase">
          Gatsby
        </a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
