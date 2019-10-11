import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { connect } from "react-redux"
import { signOut } from "../../store/actions/authActions"

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
`

const LiItems = styled.li`
  &:last-child {
    margin-left: 10px;
    margin-right: 0;
  }
  &:hover {
    background: red;
  }
  &:hover:last-child {
    background: none;
  }
  > a {
    color: white;
    display: inline-block;
    padding: 20px 15px;
  }
  .user {
    background: #ec407b;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
`

const SignedInLinks = ({ signOut, profile }) => {
  return (
    <Wrapper>
      <LiItems>
        <Link to="/app/createproject">New Project</Link>
      </LiItems>
      <LiItems>
        <Link to="/" onClick={signOut}>
          Log Out
        </Link>
      </LiItems>
      <LiItems>
        <Link to="/app/dashboard" className="user">
          {profile.initials}
        </Link>
      </LiItems>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks)
