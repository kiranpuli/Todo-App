import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter,Switch,Route } from 'react-router-dom'

import store from './store'

import Nav  from './components/Nav'
import List  from './components/List'
import Form  from './components/Form'
import Foot  from './components/Foot'

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container-fluid">
            <Nav/>
            <Switch>
              <Route exact path="/" component={List}/>
              <Route  path="/new" component={Form}/>
            </Switch>
            <Foot/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
