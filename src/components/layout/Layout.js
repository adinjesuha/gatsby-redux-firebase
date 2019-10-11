import React from "react"

import NavBar from "./NavBar"
import "../../css/normalize.css"
import "../../css/layout.css"
import "../../css/typography.css"

const Layout = ({ children }) => (
  <div>
    <NavBar />
    <main>{children}</main>
  </div>
)

export default Layout
