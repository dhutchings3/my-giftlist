import React, {Component} from 'react';
import './UserSignin.css';
import { NavLink } from 'react-router-dom'
// import AddList from '../AddList/AddList';
// import {Route, Link} from 'react-router-dom';

class UserSignup extends Component {
  

  render () {
    return (
      <div className='UserSignup'>
        <header>
            <h3>Already have a list? Sign in:</h3>
        </header>
        <form className='signin-form' id='signin-form'>
              <label htmlFor="username">Email</label>
              <input type="text" name='username' id='username' />
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />
              <NavLink
                className='addList'
                to={`/AddList/AddList`}
              >
                Sign-up
              </NavLink>
        </form>
    </div>
    );
  }

}

export default UserSignup;