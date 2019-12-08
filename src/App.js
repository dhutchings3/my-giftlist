import React, {Component} from 'react';
import {Route } from 'react-router-dom';
import './app.css';
import AddList from './AddList/AddList';
import ListView from './ListView/ListView';
import UserSignup from './UserSignup/UserSignup';
import UserSignin from './UserSignin/UserSignin';

class App extends Component {

  renderRoutes() {
    return (
        <>
          {['/AddList/AddList'].map(path => (
            <Route
              exact
              key={path}
              path={path}
              component={AddList}
            />
          ))}
            <Route
              exact path='/ListView/ListView' 
              component={ListView} 
            />
            <Route
              exact path='/' 
              component={App} 
            />
        </>
    );
  }
  

  render () {
    return (
      <div className='App'>
        {this.renderRoutes()}
      <nav role="navigation">
        <ul className="nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#signin-form">Sign-in</a></li>
          <li><a href="#signup-form">Sign-up</a></li>
        </ul>
      </nav>
      <header role="banner">
          <h1>My-GiftList</h1>
          <h2>It's never to early to get started!</h2>
      </header>

      <section>
        <header>
            <h3>Create your first list</h3>
        </header>
        <p>[<em>placeholder for screenshot of list creation interface</em>]</p>
        <p>The holidays can be a hectic time of year, but My-GiftList can help you stay organized. You can add all of your holiday gift wishes to a list stored to your account. </p>
      </section>

      <section>
        <header>
            <h3>Update your list</h3>
        </header>
        <p>[<em>placeholder for screenshot of changing list interface</em>]</p>
        <p>As your creating your list you may add something you later want to remove, or forgot something while creating it. With My-Giftlist you are able to remove any item from the list, as well as add to it. Additionally, your list will be saved to your account for you to revisit and make changes at any time.</p>
      </section>
        <UserSignup />
        <UserSignin />
    <footer className="footer">&copy;2019 Danielle Hutchings</footer>
    </div>
    );
  }

}

export default App;
