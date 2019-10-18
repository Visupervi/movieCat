import React, {Component} from "react";
import MovieHeader from './movieHeadercomponent'
import MovieFooter from './moviefootercomponent'
class App extends Component {
  render() {
    return(
      <div className={"movieApp"}>
        <div className={"movieHeader"}>
          <MovieHeader/>
        </div>
        <div className={"movieFooter"}>
          <MovieFooter/>
        </div>

      </div>
      )
  }
}
export default App;