import React, {Component} from "react";
import MovieHeader from './movie/Header'
import MovieFooter from './movie/Footer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routers from "../router"
class App extends Component {
  render() {
    return(
      <div className={"movie-app"}>
        <div className={"movie-header"}>
          <MovieHeader/>
        </div>

          <Router>
            <div className={"movie-content"}>
              {
                routers.map((router,key)=>{
                  if(router.exact){
                    return <Route
                    key={key}
                    exact={router.exact}
                    render={()=>{
                    document.title = router.meta.title;
                    return <router.componentName/>
                    }
                    }
                    />
                  }
                })
              }
            </div>
          </Router>
          <MovieFooter/>
      </div>
      )
  }
}
export default App;