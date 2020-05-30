import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SamplePost from 'config/post';
import SampleReply from 'config/reply';

import Post from 'views/post';
import Home from 'views/home';

// Global Theme
import {ThemeProvider} from "@material-ui/core"
import theme from 'config/theme';

function App() {


  React.useEffect(() => {
    console.log(1);
    if(!localStorage['posts']){
      localStorage['posts'] = JSON.stringify(SamplePost)
    }

    // if(!localStorage['replies']){
    //   localStorage['replies'] = JSON.stringify(SampleReply);
    // }
  }, []);


  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path={['/']} component={Post}  exact />
          </Switch>
        </Router>
    </div>
    </ThemeProvider >
  );
}

export default App;
