import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { firestoreConnect } from "react-redux-firebase"
import { compose } from "redux"

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`

const ProjectDetails = props => {
  const { project } = props
  if (project) {
    return (
      <Wrapper className="project-details">
        <div className="card">
          <div className="card-content">
            <h1>{project.title}</h1>
            <p>{project.content}</p>
          </div>
          <br />
          <div className="card-actions">
            <div>
              Poster by {project.authorFirstName} {project.authorLastName}
            </div>
            <p> th October, 03:00 p.m.</p>
          </div>
        </div>
      </Wrapper>
    )
  } else {
    return (
      <div>
        <p>Loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails)
