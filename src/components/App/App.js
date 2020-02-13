import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import UserSignup from '../UserSignup/UserSignup';
import LoginForm from '../LoginForm/LoginForm';
import BrowseItems from '../BrowseItems/BrowseItems';
import List from '../List/List';
import ListApiService from '../../services/list-api-service';
import AppContext from '../../contexts/AppContext';
import config from '../../config';
import './app.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Backdrop from '../Backdrop/Backdrop';
import TokenService from '../../services/token-service'
// import PrivateRoute from '../PrivateRoute';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      list: [],
      error: null,
      headerOpen: false,
    }
    this.headerToggleClickHandler = this.headerToggleClickHandler.bind(this)
  }

  // static contextType = AppContext;

  headerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {headerOpen: !prevState.headerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({ headerOpen: false })
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/items`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then(data => {
        this.setState({
          items: data,
          error: null
        })
        console.log(this.state)
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get items at this time.'
        })
      })
    
    fetch(`${config.API_ENDPOINT}/list`, {
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}` 
      },
      })
      .then((listRes) => {
        if (!listRes.ok) {
          throw new Error(listRes.statusText)
        }
        return listRes.json()
      })
      .then(data => {
        this.setState({
          list: data,
          error: null
        })
        console.log(this.state, 'this is my state')
      })
      .catch(err => {
        this.setState({
          error: 'Sorry, could not get items at this time.'
        })
      })
  }
  //move call to list

  handleRemoveItem = (id) => {
    ListApiService.deleteListItem(id)
    this.setState({
      list: this.state.list.filter(listItem => listItem.id !== id),
    })

    this.props.history.push('/items')
  }


  handleAddToList = (id) => {
    ListApiService.postListItem(id)
    let newItem = this.state.items.filter(listItem => listItem.id === id)
    let updatedList = this.state.list.concat(newItem)
    this.setState({
      list: updatedList
    })
    this.setState({
      items: this.state.items.filter(listItem => listItem.id !== id)
    })
    this.props.history.push('/list')
  }

    //   })  
    //     console.log(data)
    //     this.setState({
    //       list: [...this.state.list, data]
    //     })
    //     console.log(this.state)
    //   })
    //   .catch(err => {
    //     console.log('error', err)
    //   })
    // if (this.state.list.includes(id)) {
    //   alert('This is already on your list!')
    // }
    // this.props.history.push('/refresh/list')
  // }

  setError = (error) => {
    this.setState({
      error: error
    })
  }

  render() {
    const contextValue = {
      handleAddToList: this.handleAddToList,
      handleRemoveItem: this.handleRemoveItem,
      setError: this.setError,
      items: this.state.items,
      list: this.state.list
    };
    console.log(this.state.items)
    console.log(this.state.list)

    let { items } = this.state;
    let backdrop;

    if (this.state.headerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    };
    return (
      <AppContext.Provider value={contextValue}>
        <main className="App" style={{height: '100%' }}>
          <Nav headerClickHandler={this.headerToggleClickHandler}/>
          <Header
            show={this.state.headerOpen}
            toggle={this.headerToggleClickHandler}
          />
          {backdrop}
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
                {/* <PrivateRoute */}
                <Route
                  path='/items'
                  render={() => (
                    <BrowseItems
                      items={this.state.items}
                      list={this.state.list}
                    />
                  )}
                />
                {/* <PrivateRoute */}
                <Route
                  path='/list'
                  render={() => (
                    <List
                      items={items}
                      list={this.state.list}
                      handleRemoveItem={this.handleRemoveItem}
                    />
                  )}
                />
              </div>
            </>
          </Switch>
        </main>
      </AppContext.Provider>
    )
  }
}

export default withRouter(App);
