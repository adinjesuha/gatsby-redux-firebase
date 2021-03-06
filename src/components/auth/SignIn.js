import React, { Component } from "react"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import { signIn } from "../../store/actions/authActions"

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props
    if (auth.uid) {
      navigate("/app/dashboard", { replace: true })
      return null
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>Sign In</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div>{authError ? <p>{authError}</p> : null}</div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
