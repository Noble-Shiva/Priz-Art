import React from 'react';
import './App.css';
import Header from './layouts/header/header';
import Body from './layouts/body/body';
import Footer from './layouts/footer/footer';
import Home from './components/Home';
import { auth } from './config/firebase';
import Landing from './pages/Landing';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './pages/Login';
import Admin from './pages/Admin';

class App extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = {
      showFooter: false,
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentWillMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  showFooter() {
    this.setState({
      showFooter: true
    })
  }

  render() {
    return (
      <>

        {/* <Body> */}
        {/* {this.state.currentUser */}
          {/* ?  */}
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/gallery" component={Body} exact showFooter={this.showFooter.bind(this)} />
            <Route path="/about" component={Home} />
            <Route path="*"  component={Error} />
          </Switch>
           {/* : <Route path="/" component={LoginPage} /> */}
           {/* } */}
        {/* </Body> */}
        {this.state.showFooter ? <Footer></Footer> : ''}
      </>
    )
  }
}

export default App;
