import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/app">App page</Link>
  </Layout>
)

export default IndexPage
