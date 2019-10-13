import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { connect } from "react-redux"
import { isLoaded } from "react-redux-firebase"

import SignedInLinks from "./SignedInLinks"
import SignedOutLinks from "./SignedOutLinks"

const NavContainer = styled.nav`
  background: #434243;
  width: 100%;
  padding: 0 40px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > a {
    color: white;
  }
`

//  if (!isLoaded(auth)) {
//    return null
//  } else {
//    return (
//      <NavContainer>
//        <Wrapper>
//          <Link to="/app/dashboard">Home</Link>
//          {links}
//        </Wrapper>
//      </NavContainer>
//    )
//  }

const NavBar = ({ auth, profile }) => {
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  )
  return (
    <NavContainer>
      <Wrapper>
        <Link to="/app/dashboard">Home</Link>
        {isLoaded(auth) ? links : null}
      </Wrapper>
    </NavContainer>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(NavBar)
