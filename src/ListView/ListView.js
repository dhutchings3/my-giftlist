import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import {Route, Link} from 'react-router-dom';

class ListView extends Component {
  

  render () {
    return (
      <div className='ListView'>
      <nav role="navigation">
        <ul className="nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#signin-form">Sign-in</a></li>
          <li><a href="#signup-form">Sign-up</a></li>
        </ul>
      </nav>
      <header role="banner">
          <h1>Your Gift Lists</h1>
      </header>

      <section>
        <header>
            <h3>Sam's Christmas List</h3>
        </header>
        <ul>
          <li>Legos 
            <button>Remove</button>
          </li>
          <li>Fingerlings Untamed T-Rex 
            <button>Remove</button>
          </li>
          <li>Mini Basketball Hoop
            <button>Remove</button>
          </li>
          <li>Cozmo the Toy Robot
            <button>Remove</button>
          </li>
          <li>Tabletop Tennis
            <button>Remove</button>
          </li>
          <li>Exploding Kittens Card Game
            <button>Remove</button>
          </li>
          <li>Jenga
            <button>Remove</button>
          </li>
        </ul>
     
            <button type='submit'>Add New Item</button>
            <button type='submit'>Save</button>          

      </section>

    <footer className="footer">&copy;2019 Danielle Hutchings</footer>
    </div>
    );
  }

}

export default ListView;
