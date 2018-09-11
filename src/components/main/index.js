import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../../container/home';
import Providers from '../../container/providers';
import Contact from '../../container/contact';

export default class Main extends Component {
  render() {
    return (
      <div style={{marginTop: '30px'}}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/providers' component={Providers}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </div>
    );
  }
}