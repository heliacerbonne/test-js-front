import logo from './logo.svg';
import './App.css';
import Articles from "./articles";
import Article_Content from "./article_content";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Redirect exact from="/" to="/articles" />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/item/:id" component={Article_Content} />
        </Switch>
    </Router>
  );
}

export default App;
