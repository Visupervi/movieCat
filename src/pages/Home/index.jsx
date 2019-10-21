import React,{Component} from "react"
import MovieCarouse from "../../components/movie/Carousel"
class MovieHome extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className={"homeContent"}>
        <div className={"carouse"}>
          <MovieCarouse/>
        </div>
        <div className={"movieList"}>

        </div>
      </div>
    )
  }
}
export default MovieHome