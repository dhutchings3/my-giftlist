import React from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import './LoginForm.css';

class LoginForm extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    }
  }

  state = { error: null }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/items'
    history.push(destination)
  };

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    this.setState({ error: null })
    const { username, password } = e.target
    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        console.log(res, 'res')
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        console.log(res.user_id, 'this is user id')
        TokenService.saveUserId(res.user_id)
        this.handleLoginSuccess()
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not login at this time.'
        })
      })
  };

  render() {
    return (
      <div className='login-form'>
        <form
          id='log-in'
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div className='username-login'>
            <div className='test_login'>
              <i>
                Test login: GiftlistUser1 / password
              </i>
            </div>
            <label htmlFor='username-login'>Username</label>
            <input type='username' name='username' id='username-login' required />
          </div>
          <div className='password-login'>
            <label htmlFor='password-login'>Password</label>
            <input type='password' name='password' id='password-login' required />
          </div>
          <div>
            <button type='submit' value='LogIn'>
              Log In
            </button>
          </div>
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

export default LoginForm;