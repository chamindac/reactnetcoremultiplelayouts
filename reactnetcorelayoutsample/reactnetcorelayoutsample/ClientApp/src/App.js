import React, { Component } from 'react';
// orginal stuff from vs react template
//import { Route } from 'react-router';
//import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import AdminLayoutRoute from './components/layouts/adminLayout';
import PublicLayoutRoute from './components/layouts/publicLayout';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
    // this orginal code from vs react template with one layout
    //<Layout>
    //    <Route exact path='/' component={Home} />
    //    <Route path='/counter' component={Counter} />
    //    <Route path='/fetch-data' component={FetchData} />
    //</Layout>

        // below two options work for multi layout

        // this one always have /home as route path
        //<Router>
        //    <Switch>
        //        <Route exact path="/">
        //            <Redirect to="/home" />
        //        </Route>
        //        <PublicLayoutRoute exact path='/home' component={Home} />
        //        <AdminLayoutRoute path="/counter" component={Counter} />
        //        <PublicLayoutRoute path="/fetch-data" component={FetchData} />
        //    </Switch>
        //</Router>

        // below shows home page without having /home as path
        <Router>
            <Switch>
                <PublicLayoutRoute exact path='/' component={Home} />
                <AdminLayoutRoute path="/counter" component={Counter} />
                <PublicLayoutRoute path="/fetch-data" component={FetchData} />
            </Switch>
        </Router> 
    );
  }
}
