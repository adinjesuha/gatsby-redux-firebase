import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
`

const LiItems = styled.li`
  margin: 0 20px;
  &:last-child {
    margin-right: 0;
  }
  .user {
    background: red;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 10px 0;
  }
  > a {
    color: white;
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
