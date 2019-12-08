import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
//import ListView from '../ListView/ListView';
import './UserSignup.css';

class UserSignup extends Component {
  

  render () {
    return (
      <div className='UserSignup'>
        <header>
            <h3>Start Your List Now!</h3>
        </header>
        <section>
        <form className='signup-form' id='signup-form'>
              <label htmlFor="first-name" required >First name</label>
              <input placeholder='First Name' type="text" name='first-name' id='first-name' />
              <label htmlFor="last-name">Last name</label>
              <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
              <label htmlFor="username">Email</label>
              <input type="text" name='username' id='username' />
              <label htmlFor="password">Password</label>
              <input type="password" name='password' id='password' />
              <NavLink
                className='listView'
                to={`/ListView/ListView`}
              >
                Sign-in
              </NavLink>
        </form>
      </section>
    </div>
    );
  }

}

export default UserSignup;