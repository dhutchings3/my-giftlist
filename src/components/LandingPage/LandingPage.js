import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  return (
    <main className="LandingPage">
      <h1>Welcome to My-Giftlist</h1>
      <h2>Your place to store all your holiday wishlists</h2>
      <p>The holidays can be a hectic time of year, but My-GiftList can help
            you stay organized. You can add all of your holiday gift wishes to a
            list stored to your account. Create a new user, or use these demo credentials: 
            GiftlistUser1 / password
      </p>
      <Link to='/signup'>
        Sign Up
      </Link>
      {' | '}
      <Link to='/login'>
        Log In
      </Link>
    </main>
  )
}

export default LandingPage