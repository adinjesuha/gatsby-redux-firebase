import React, { Component } from "react"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import { signUp } from "../../store/actions/authActions"

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
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
    this.props.signUp(this.state)
  }
  render() {
    const { auth, authError } = this.props
    if (auth.uid) {
      navigate("/app/dashboard", { replace: true })
      return null
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>Sign Up</h5>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="lastName" id="lastName" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div>
            <button type="submit">Sign up</button>
            <div>{authError ? <p>{authError}</p> : null}</div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)
