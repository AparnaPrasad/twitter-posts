import React, { Component } from 'react';
import { WelcomePage, TweetsPage } from '../../pages';
import TweetsCounterContainer from '../../containers/TweetsCounter';
import logo from '../../logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

export class App extends Component {
 
  render() {
    //let page = this.renderPage(1);
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <TweetsCounterContainer />
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to the Assessment</h1>
            </header>
            <Route exact path='/' component={WelcomePage} />
            <Route exact path='/tweets' component={TweetsPage} />
          </div>
        </Router>
      </div>
    );
  }
}
