import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import LoginForm from '../LoginForm/LoginForm';
import ListApiService from '../../services/list-api-service';
import AppContext from '../../contexts/AppContext';
import UserSignup from '../UserSignup/UserSignup';
import config from '../../config';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: [],
      error: null,
    }
    
  }

  static contextType = AppContext;

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/lists`)
      .then((listsRes) => {
        if (!listsRes.ok) {
          throw new Error(listsRes.statusText)
        }
        return listsRes.json()
      })
      .then(data => {
        this.setState({
          lists: data,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get lists at this time.'
        })
      })

    fetch(`${config.API_ENDPOINT}/:list_id/items`)
      .then((listViewRes) => {
        if (!listViewRes.ok) {
          throw new Error(listViewRes.statusText)
        }
        return listViewRes.json()
      })
      .then(data => {
        this.setState({
          list: data,
          error: null
        })
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get list at this time.'
        })
      })
  }

  handleAddItemToList = (id) => {
    ListApiService.postListItem(id, 'laptop', '3')
      .then((data) =>{
        this.setState({
          list: [...this.state.list, data]
        })
      })
      .catch(err => {
        console.log('error', err)
      })
    if (this.state.list.includes(id)) {
      alert('This is item is already on your list.')
    }
  }

  handleAddList = (id) => {
    ListApiService.postList(id, 'My Birthday Wishlist', '3')
      .then((data) =>{
        this.setState({
          lists: [...this.state.lists, data]
        })
      })
      .catch(err => {
        console.log('error', err)
      })
    if (this.state.list.includes(id)) {
      alert('This is List already exists on your account.')
    }
  }

  handleRemoveItem = (id) => {
    ListApiService.deleteListItem(id)
    let array = [...this.state.list]
    let updatedList = array.filter(listItem => {
      return listItem.id !== id
    })
    this.setState({ list: updatedList })
  }

  handleRemoveList = (id) => {
    ListApiService.deleteList(id)
    let array = [...this.state.lists]
    let updatedLists = array.filter(list => {
      return list.id !== id
    })
    this.setState({ lists: updatedLists })
  }

  render() {
    console.log('lists', this.state.lists)
    const contextValue = {
      handleAddItemToList: this.handleAddItemToList,
      handleAddList: this.handleAddList,
      lists: this.state.lists,
      items: this.state.items
    };

    // let { lists } = this.state;

    return (
      <AppContext.Provider value={contextValue}>
        <main className="App" style={{height: '100%' }}>
          <Switch>
            <>
              <div className='content' aria-live='polite'>
                <Route
                  exact
                  path='/'
                  component={LandingPage}
                />
                <Route
                  exact
                  path='/signup'
                  component={UserSignup}
                />
                <Route
                  exact
                  path='/login'
                  component={LoginForm}
                />
              </div>
            </>
          </Switch>
        </main>
      </AppContext.Provider>
    )
  }
}

export default App;
