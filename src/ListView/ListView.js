import React, {Component} from 'react';
import Items from '../Items';
import AddItem from '../AddItem'
import ListContext from '../ListContext';
// import ReactDOM from 'react-dom';
// import {Route, Link} from 'react-router-dom';

class ListView extends Component {

  static contextType = ListContext;
  

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
      <h1 className="center blue-text">Your Christmas List</h1>
        <Items items={this.context.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} /> 
      
      <footer className="footer">&copy;2019 Danielle Hutchings</footer>
      </div>
    );
  }

}

export default ListView;
