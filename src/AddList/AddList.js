import React, {Component} from 'react';
// import {Route, Link} from 'react-router-dom';

class AddList extends Component {
  

  render () {
    return (
      <div className='AddList'>
      <nav role="navigation">
        <ul className="nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#signin-form">Sign-in</a></li>
          <li><a href="#signup-form">Sign-up</a></li>
        </ul>
      </nav>
      <header role="banner">
          <h1>Create New List</h1>
      </header>

      <section>
        <header>
            <h3>Start Your List Now!</h3>
        </header>
        <form className='signup-form'>
            <div>
              <label htmlFor="list-name">List name</label>
              <input placeholder='Sam&#39;s Christmas List' type="text" name='list-name' id='list-name' />
            </div>
            <div>
              <label htmlFor="item-name">Item name</label>
              <input type="text" name='item-name' id='item-name' placeholder='Legos' />
            </div>
            <div>
              <label htmlFor="item-name">Item name</label>
              <input type="text" name='item-name' id='item-name' placeholder='Fingerlings Untamed T-Rex' />
            </div>
            <div>
              <label htmlFor="item-name">Item name</label>
              <input type="text" name='item-name' id='item-name' placeholder='Mini Basketball Hoop' />
            </div>
            <div>
              <label htmlFor="item-name">Item name</label>
              <input type="text" name='item-name' id='item-name' placeholder='Cozmo the Toy Robot' />
            </div>
            <div>
              <label htmlFor="item-name">Item name</label>
              <input type="text" name='item-name' id='item-name' placeholder='Tabletop Tennis' />
            </div>
            <div>
              <label htmlFor="item-name">Item name</label>
              <input type="text" name='item-name' id='item-name' placeholder='Exploding Kittens Card Game' />
            </div>
            <div>
              <label htmlFor="item-name">Item name</label>
              <input type="text" name='item-name' id='item-name' placeholder='Jenga' />
            </div>
            <button type='submit'>Add New Item</button>                      
            <button type='submit'>Create List</button>
            
            <button type='submit'>Reset</button>
        </form>
      </section>

    <footer className="footer">&copy;2019 Danielle Hutchings</footer>
    </div>
    );
  }

}

export default AddList;
