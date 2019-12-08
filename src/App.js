import React, { Component } from 'react';
// import Items from './Items';
// import AddItem from './AddItem';
import { Route, Link } from 'react-router-dom';
import './app.css';
import UserSignup from './UserSignup/UserSignup';
import ListView from './ListView/ListView';
import ListContext from './ListContext';

class App extends Component {
  state = {
    items: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
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

  renderRoutes() {
    return (
      <>
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

  render() {
    const contextValue = {
      items: this.state.items,
      deleteItem: this.deleteItem,
      addItem: this.addItem,
    };

    return (
      <ListContext.Provider value={contextValue}>
      <div className='App'>
        <nav className="navigation">
        {this.renderRoutes()}
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><a href="#signin-form">Sign-in</a></li>
            <li><a href="#signup-form">Sign-up</a></li>
          </ul>
        </nav>
        <header className="App_header">
          <h1>
            <Link to="/">My-GiftList</Link>
            {' '}
          </h1>
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
            <h3>Update your list(coming soon)</h3>
        </header>
        <p>[<em>placeholder for screenshot of changing list interface</em>]</p>
        <p>As your creating your list you may add something you later want to remove, or forgot something while creating it. With My-Giftlist you are able to remove any item from the list, as well as add to it. Additionally, your list will be saved to your account for you to revisit and make changes at any time.</p>
      </section>

        <UserSignup />

        {/* <h1 className="center blue-text">Your Christmas List</h1>
        <Items items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} /> */}

        <footer className="footer">&copy;2019 Danielle Hutchings</footer>
      </div>
      </ListContext.Provider>
    );
  }
}


export default App;




// import AddList from './AddList/AddList';
// import ListView from './ListView/ListView';
// import ListContext from './ListContext';
// import ListError from './ListError'
// import AddItem from './AddItem';



//   render () {
//     const contextValue = {
//       items: this.state.items,
//       deleteItem: this.deleteItem,
//       addItem: this.addItem,
//     };

//     return (
//       <ListContext.Provider value={contextValue}>
//       <ListError>

    //   <section>
    //     <header>
    //         <h3>Create your first list</h3>
    //     </header>
    //     <p>[<em>placeholder for screenshot of list creation interface</em>]</p>
    //     <p>The holidays can be a hectic time of year, but My-GiftList can help you stay organized. You can add all of your holiday gift wishes to a list stored to your account. </p>
    //   </section>

    //   <section>
    //     <header>
    //         <h3>Update your list</h3>
    //     </header>
    //     <p>[<em>placeholder for screenshot of changing list interface</em>]</p>
    //     <p>As your creating your list you may add something you later want to remove, or forgot something while creating it. With My-Giftlist you are able to remove any item from the list, as well as add to it. Additionally, your list will be saved to your account for you to revisit and make changes at any time.</p>
    //   </section>
    //     <UserSignup />
    //     <UserSignin />
    // <footer className="footer">&copy;2019 Danielle Hutchings</footer>
    // </div>
    // </ListError>
    // </ListContext.Provider>

