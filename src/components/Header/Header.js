import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import './Header.css'

class Header extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className='header__logged-in'>
        <Link
          onClick={ 
            () => {this.handleLogoutClick();
                  this.props.toggle()}
          }
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div className='header__not-logged-in'>
        <Link
          to='/signup'>
          Create an account
        </Link>
      </div>
    )
  }

  render() {
    let headerClasses;
    this.props.show ? headerClasses = 'header open' : headerClasses = 'header'

    return (
      <nav className={headerClasses}>
        <div className='header__navbar-nav-items'>
          <Link to={'/browseitems'} className='header__text-link' onClick={this.props.toggle}>
            Browse items
          </Link>
          <Link to={'/list'} className='header_text-link' onClick={this.props.toggle}>
            My Giftlist
          </Link>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </nav>
    )
  };
};

export default Header;