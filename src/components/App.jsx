import React, {Component} from "react";
import MovieHeader from './movie/Header'
import MovieFooter from './movie/Footer'
import {BrowserRouter as Router, Route, Link, Switch,withRouter} from "react-router-dom";
import routers from "../router"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeName: ""
    }
  }


  renderRouter = () => {

    return (
      <Switch>
        {
          routers.map((router, key) => {

            console.log("renderRouter",this.props);
            return <Route
              path={router.path}
              key={key}
              exact={router.exact}
              render={() => {
                document.title = router.meta.title;
                return <router.componentName/>
              }
              }
            />
          })
        }
      </Switch>
    )
  };

  render() {
    return (
      <div className={"movie-app"}>
        <div className={"movie-header"}>
          <MovieHeader/>
        </div>
        <Router>
          <div className={"movie-content"}>
            {this.renderRouter()}
          </div>
        </Router>
        <MovieFooter/>
      </div>
    )
  }
}

export default App;