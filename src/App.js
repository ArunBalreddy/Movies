import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Login from './Components/Login'
import Home from './Components/Home'
import Popular from './Components/Popular'

import './App.css'

import MoviesContext from './Context/MoviesContext'

class App extends Component {
  state = {userDetails: ''}

  setUserDetails = data => {
    this.setState({userDetails: data})
  }

  render() {
    const {userDetails} = this.state

    return (
      <MoviesContext.Provider
        value={{
          userDetails,
          setUserDetails: this.setUserDetails,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/popular" component={Popular} />
        </Switch>
      </MoviesContext.Provider>
    )
  }
}

export default App
