import React from "react"
import styled from "styled-components"
import moment from "moment"

const Wrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
  border: 1px solid #eee;
`

const ProjectSummary = ({ project }) => {
  return (
    <Wrapper className="card">
      <div className="card-content">
        <span>{project.title}</span>
        <p>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p>{moment(project.createdAt.toDate().toString()).calendar()}</p>
      </div>
    </Wrapper>
  )
}

export default ProjectSummary
