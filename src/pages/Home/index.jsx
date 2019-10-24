import React, {Component} from "react"
import MovieCarouse from "../../components/movie/Carousel"
import {getInTheaters} from '../../api'
import './index.less'

class MovieHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgHeight: 176,
      carouselImg: [4, 5, 6]
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.getImage();
  }

  async getImage() {
    let res = await getInTheaters();
    console.log(res);
    let tempArr = [];
    for (let i = 0; i < 5; i++) {
      tempArr[i] = res.subjects[i];
      let _u = tempArr[i].images.medium.substring(8);
      tempArr[i].images = 'https://images.weserv.nl/?url=' + _u;
    }
    this.setState({
      carouselImg: tempArr
    },(preState,props)=>{
      console.log("回调函数",this.state.carouselImg)
    })

  }

  render() {
    return (
      <div className={"homeContent"}>
        <div className={"carouse"}>
          <MovieCarouse carouselImg={this.state.carouselImg}/>
        </div>
        <div className={"movieList"}>

        </div>
      </div>
    )
  }
}

export default MovieHome