import React from "react"
import { Router } from "@reach/router"
import { connect } from "react-redux"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import Dashboard from "../components/dashboard/Dashboard"
import ProjectDetails from "../components/projects/ProjectDetails"
import SignIn from "../components/auth/SignIn"
import SignUp from "../components/auth/SignUp"
import CreateProject from "../components/projects/CreateProject"
import PrivateRoute from "../components/utils/privateRoutes"

const AppPage = ({ auth }) => (
  <Layout>
    <SEO title="App" />
    <Router>
      <SignIn path="app/signin" />
      <SignUp path="app/signup" />
      <PrivateRoute
        user={auth}
        path="/app/createproject"
        component={CreateProject}
      />
      <PrivateRoute user={auth} path="/app/dashboard" component={Dashboard} />
      <PrivateRoute
        user={auth}
        path="/app/project/:id"
        component={ProjectDetails}
      />
    </Router>
  </Layout>
)
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(AppPage)
