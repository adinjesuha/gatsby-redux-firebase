import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"

import Notifications from "./Notifications"
import ProjectList from "../projects/ProjectList"

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`

const FlexContainer = styled.div`
  display: flex;
`

const LeftPanel = styled.div`
  width: 100%;
  max-width: calc(1024px - 300px);
`

class Dashboard extends Component {
  render() {
    // console.log(this.props.projects)
    const { projects } = this.props
    return (
      <Wrapper>
        <FlexContainer>
          <LeftPanel className="col s12 m6">
            <ProjectList projects={projects} />
          </LeftPanel>
          <div className="col s12 m5">
            <Notifications />
          </div>
        </FlexContainer>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard)
