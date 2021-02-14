import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';
import Home from './pages';
import SigninPage from './pages/signin';
import FullMenu from './pages/fullmenu';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Pizza</title>
      </Helmet>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/fullmenu" component={FullMenu} exact />
      </Switch>
     </Router>
  );
}

export default App;
