import React from 'react';
import AuthApiService from '../../services/auth-api-service';
// import './UserSignup.css';

class UserSignup extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    }
  }

  state = { error: null }

  handleRegistrationSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/login'
    history.push(destination)
  };

  handleSubmit = e => {
    e.preventDefault()
    const { first_name, username, password } = e.target

    this.setState({ error: null })

    AuthApiService.postUser({
      first_name: first_name.value,
      user_username: username.value,
      password: password.value
    })
      .then(res => {
        first_name.value = ''
        username.value = ''
        password.value = ''
        this.handleRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
        // console.log('error', res.error)
      })
  };

  render() {
    return (
      <div className='signup-form'>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div className='signup-field'>
            <label
              htmlFor='first_name'
              className='signup__label'
            >Name</label>
            <input
              className='signup__input'
              type='text'
              name='first_name'
              id='first_name'
              placeholder='Name'
            />
          </div>
          <div className='signup-field'>
            <label
              htmlFor='username'
              className='signup__label'
            > Username </label>
             <input
              className='signup__input'
              type='text'
              name='username'
              id='username'
              placeholder='username'
            />
          </div>
          <div className='signup-field'>
            <label
              htmlFor='password'
              className='signup__label'
            >Password</label><br/>
            <input
              className='signup__input'
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            />
          </div>
          <div className='signup__password-req'>
              <strong>
                Password requirements:<br/>
                Must be between 8 and 72 characters<br/>
                Must not begin or end with a space<br/>
                Must contain an uppercase, lowercase, number and special character
              </strong>
            </div>
          <button type='submit' value='SignUp'>
            Sign Up
          </button>
        </form>
        <div className='error-message'>
          <strong>
            {this.state.error}
          </strong>
        </div>
      </div>
    )
  };
};

export default UserSignup;