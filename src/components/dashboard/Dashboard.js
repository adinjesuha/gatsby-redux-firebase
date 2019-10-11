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
    const { projects } = this.props
    return (
      <Wrapper>
        <FlexContainer>
          <LeftPanel>
            <ProjectList projects={projects} />
          </LeftPanel>
          <div>
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
