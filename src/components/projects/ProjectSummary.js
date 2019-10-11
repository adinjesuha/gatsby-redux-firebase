import React from "react"
import styled from "styled-components"

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
        <p>Posted by Adin Jesuha</p>
        <p>9th October, 03:00 p.m.</p>
      </div>
    </Wrapper>
  )
}

export default ProjectSummary
