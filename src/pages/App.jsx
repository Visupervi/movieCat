import React, {Component} from "react";
import MovieHeader from '../components/Movie/Header'
import MovieFooter from '../components/Movie/Footer'
import {HashRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import routers from "../router"

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderRouter = () => {
    return (
      <Switch>
        {
          routers.map((router, key) => {
            // console.log("renderRouter",this.props);
            return <Route
              path={router.path}
              key={key}
              exact={router.exact}
              render={(props) => {
                document.title = router.meta.title;
                return <router.componentName children={router.children} props={props}/>
              }
              }
            />
          })
        }
        {/*<Redirect to="/" />*/}
      </Switch>
    )
  };

  render() {
    return (
      <Router>
      <div className={"movie-app"}>
        <div className={"movie-header"}>
          <MovieHeader/>
        </div>

          <div className={"movie-content"}>
            {this.renderRouter()}
          </div>

        <MovieFooter/>
      </div>
      </Router>
    )
  }
}

export default App;