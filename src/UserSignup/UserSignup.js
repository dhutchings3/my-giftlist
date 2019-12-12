import React from 'react';
import { NavLink } from 'react-router-dom';
import ValidationError from '../ValidationError';
import './UserSignup.css';

export default class UserSignup extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        firstName: '',
        touched: false,

        lastName: '',
        touched: false,

        email: '',
        touched: false,

        password: '',
        touched: false,
      }
  }

  updateFirstName(ifirstName) {
      this.setState({ 
          firstName: ifirstName,
          touched: true, 
      });     
  }

  updateLastName(lastName) {
      this.setState({ 
          lastName: lastName, 
          touched: true, 
      });
  }

  updateEmail(email) {
      this.setState({ 
          email: email, 
          touched: true,
      });
  }
  
  updatePassword(password) {
    this.setState({ 
        password: password, 
        touched: true,
    });
  }
  

  validateFirstName() {
    let firstName = this.state.firstName.toString().trim();
    if (firstName.length === 0) {
        return 'First name is required';
    } else  if (firstName.length < 3) {
        return 'Name must be at least 3 characters long';
    }
  }

  validateLastName() {
    let lastName = this.state.lastName.toString().trim();
    if (lastName.length === 0) {
        return 'Last name is required';
    } else  if (lastName.length < 3) {
        return 'Last name must be at least 3 characters long';
    }
  }

  validateEmail() {
    let email = this.state.email.toString().trim();
    if (email.length === 0) {
        return 'Email is required';
    } else  if (email.length < 3) {
        return 'Email must be at least 3 characters long';
    }
  }

  validatePassword() {
    let password = this.state.password.toString().trim();
    if (password.length === 0) {
        return 'Password is required';
    } else  if (password.length < 3) {
        return 'Password must be at least 3 characters long';
    }
  }

  render () {
    const firstNameError = this.validateFirstName
    const lastNameError = this.validateLastName
    const emailError = this.validateEmail
    const passwordError = this.validatePassword
    return (
      <div className='UserSignup'>
        <header>
            <h3>Start Your List Now!</h3>
        </header>
        <section>
        <form className='signup-form' id='signup-form' >
              <label htmlFor="first-name">First name</label>
              <input 
                defaultValue='First Name' 
                type="text" 
                name='firstName' 
                id='firstName'
                aria-label='First name of user goes here'
                aria-required='true'
                onChange={e => this.updateFirstName(e.target.value)}
              />
              {this.state.touched && <ValidationError message={firstNameError()} /> }
              <label htmlFor="last-name">Last name</label>
              <input
                defaultValue='Last Name' 
                type="text" 
                name='lastName' 
                id='lastName'
                aria-label='Last name of user goes here'
                aria-required='true'
                onChange={e => this.updateLastName(e.target.value)}
              /> 
              {this.state.touched && <ValidationError message={lastNameError()} /> } 
              <label htmlFor="username">Email</label>
              <input
                defaultValue='Email' 
                type="text" 
                name='email' 
                id='email'
                aria-label='Email of user goes here'
                aria-required='true'
                onChange={e => this.updateEmail(e.target.value)}
              /> 
              {this.state.touched && <ValidationError message={emailError()} />}
              <label htmlFor="password">Password</label>
              <input
                defaultValue='Password' 
                type="text" 
                name='password' 
                id='password'
                aria-label='Password of user goes here'
                aria-required='true'
                onChange={e => this.updatePassword(e.target.value)}
              /> 
              {this.state.touched && <ValidationError message={passwordError()} />}
              <NavLink
                className='listView'
                to={`/ListView/ListView`}
              >
                <button
                  type='submit' 
                  className='signup-button'
                  disabled= {
                    this.validateFirstName() ||
                    this.validateLastName() ||
                    this.validateEmail() ||
                    this.validatePassword()
                    }
                >
                Sign-up
                </button>

              </NavLink>
        </form>
      </section>
    </div>
    );
  }

}