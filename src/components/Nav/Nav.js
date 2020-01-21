import React from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import HeaderToggleButton from '../Header/HeaderToggleButton'
import './Nav.css'

class Nav extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <Link
        onClick={this.handleLogoutClick}
        to='/'
        className='text-link'
      >
        <span className='keep-white'>|</span> Log Out
      </Link>
    )
  }

  renderLoginLink() {
    return (
      <Link
        to='/login'
        className='text-link'
      >
        <span className='keep-white'>|</span> Log In
      </Link>
    )
  }

  toBrowse() {
    return (
      <Link to={'/browseitems'} className='text-link'>
        My-Giftlist<span className='keep-white'>.</span>
      </Link>
    )
  }

  toLandingPage() {
    return (
      <Link to={'/'} className='text-link'>
        My-Giftlist <span className='keep-white'></span>
      </Link>
    )
  }

  componentDidMount() {
    TokenService.onChange(() => {
      this.forceUpdate()
    })
  }

  render() {
    return (
      <header className='navbar'>
        <nav className='navbar-navigation' role='navigation'>
          <div className='navbar-toggle-button'>
            <HeaderToggleButton click={this.props.headerClickHandler}/>
          </div>
          <div className='navbar-logo'>
            {TokenService.hasAuthToken()
              ? this.toBrowse()
              : this.toLandingPage()
            }
          </div>
          <div className='spacer' />
          <div className='navbar-nav-items'>
            <Link to={'/browseitems'} className='text-link'>
              Browse Items <span className='keep-white'>|</span>
            </Link>
            {' '}
            <Link to={'/list'} className='text-link'>
              Giftlist
            </Link>
            {' '}
            {TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()}
          </div>
        </nav>
      </header>
    )
  }
}

export default Nav