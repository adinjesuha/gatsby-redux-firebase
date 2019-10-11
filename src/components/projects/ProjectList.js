import React from "react"
import { Link } from "gatsby"

import ProjectSummary from "./ProjectSummary"

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects &&
        projects.map(project => (
          <Link to={`/app/project/${project.id}`} key={project.id}>
            <ProjectSummary project={project} />
          </Link>
        ))}
    </div>
  )
}

export default ProjectList
