import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';


import Header from './cmps/Header';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ContactDetailsPage from './pages/ContactDetailsPage';
import ContactEditPage from './pages/ContactEditPage';
import StatisticPage from './pages/StatisticPage';

// import UserService from './services/UserService.js'

import './assets/App.css';

const PrivateRoute = props => {
  return props.isLoggedIn ? <Route {...props} /> : <Redirect to="/signup" />;
};

@inject('store')
@observer
class App extends Component {

  render() {
    const { user } =  this.props.store.userStore
    return (
      <Router>
        <div>
          {user && <Header />}
          <Switch>
            <Route path="/signup" render={(props) => <SignupPage {...props}  />} />
            <PrivateRoute isLoggedIn={!!user} path="/" exact component={HomePage} />
            <PrivateRoute isLoggedIn={!!user} path="/contact/edit/:id?" component={ContactEditPage} />
            <PrivateRoute isLoggedIn={!!user} path="/contact/:id" component={ContactDetailsPage} />
            <PrivateRoute isLoggedIn={!!user} path="/contact" component={ContactPage} />
            <PrivateRoute isLoggedIn={!!user} path="/statistics" component={StatisticPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
