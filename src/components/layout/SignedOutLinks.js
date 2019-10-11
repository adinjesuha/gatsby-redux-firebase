import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
`

const LiItems = styled.li`
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    background: red;
  }
  > a {
    display: inline-block;
    color: white;
    padding: 20px;
  }
`

const SignedOutLinks = () => {
  return (
    <Wrapper>
      <LiItems>
        <Link to="/app/signup">Signup</Link>
      </LiItems>
      <LiItems>
        <Link to="/app/signin">Login</Link>
      </LiItems>
    </Wrapper>
  )
}

export default SignedOutLinks
