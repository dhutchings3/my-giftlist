import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './app.css';
import ListView from './ListView/ListView';
import ListContext from './ListContext';
import LandingPage from './LandingPage'
import ListError from './ListError';

class App extends Component {
  state = {
    items: [
      {id: 1, content: 'Legos'},
      {id: 2, content: 'Mini Basketball Hoop'},
      {id: 3, content: 'Jenga'},
      {id: 4, content: 'Nintendo Switch'},
      {id: 5, content: 'iPad Mini'}
    ]
  }
  deleteItem = (id) => {
    const items = this.state.items.filter(item => {
      return item.id !== id
    });
    this.setState({
      items
    });
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = [...this.state.items, item]
    this.setState({
      items: items
    })
  }

  render() {
    const contextValue = {
      items: this.state.items,
      deleteItem: this.deleteItem,
      addItem: this.addItem,
    };

    return (
      <ListContext.Provider value={contextValue}>
      <ListError>
      <div className='App'>
        <nav className="navigation">
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><a href="#signup-form">Sign-up</a></li>
          </ul>
        </nav>
        <header className="App_header">
          <h1>
            My GiftList
          </h1>
          <h2>It's never to early to get started!</h2>
        </header>
          
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/ListView/ListView' component={ListView} />

        <footer className="footer">&copy;2019 Danielle Hutchings</footer>
      </div>
      </ListError>
      </ListContext.Provider>
    );
  }
}


export default App;
