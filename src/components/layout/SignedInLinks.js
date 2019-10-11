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
  margin: 0 20px;
  &:last-child {
    margin-right: 0;
  }
  .user {
    background: #ec407b;
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

const SignedInLinks = ({ signOut }) => {
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
          AJ
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
