import React from 'react';
import './App.css';
import Header from './layouts/header/header';
import Body from './layouts/body/body';
import Footer from './layouts/footer/footer';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class App extends React.Component {
  
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    this.state = {
      showFooter : false
    }
  }

  showFooter() {
    this.setState({
      showFooter : true
    })
  }

  render() {
    return (
      <Router>
        <Header></Header>
        {/* <Body> */}
          <Switch>
            <Route path="/" component={Body} exact showFooter={this.showFooter.bind(this)}/>
            <Route path="/about" component={Home} />
            {/* <Route path="/contact" component={Contact} /> */}
            <Route path="*" component={Error} />
          </Switch>
        {/* </Body> */}
        {this.state.showFooter?<Footer></Footer>:''}
      </Router>
    )
  }
}

export default App;
