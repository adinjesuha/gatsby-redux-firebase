import React from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import Dashboard from "../components/dashboard/Dashboard"
import ProjectDetails from "../components/projects/ProjectDetails"
import SignIn from "../components/auth/SignIn"
import SignUp from "../components/auth/SignUp"
import CreateProject from "../components/projects/CreateProject"

const AppPage = () => (
  <Layout>
    <SEO title="App" />
    <Router>
      <SignIn path="app/signin" />
      <SignUp path="app/signup" />
      <CreateProject path="/app/createproject" />
      <Dashboard path="/app/dashboard" />
      <ProjectDetails path="/app/project/:id" />
    </Router>
  </Layout>
)

export default AppPage
