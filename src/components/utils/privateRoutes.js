import React from "react"
import { navigate } from "gatsby"

const PrivateRoute = ({ component: Component, location, user, ...rest }) => {
  if (!user.uid) {
    navigate("/app/signin", { replace: true })
    return null
  }
  return <Component user={user} {...rest} />
}

export default PrivateRoute
